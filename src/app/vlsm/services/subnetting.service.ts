import { Injectable } from "@angular/core";
import { NetworkInfo } from "../../logic/NetworkInfo";
import { Subject } from "rxjs";
import { Subnetter } from "../../logic/Subnetter";
import { Network } from "../../logic/Network";
import { IPV4 } from "../../logic/IPV4";
import { NetworkInfoList } from "src/app/logic/NetworkInfoList";

@Injectable({
	providedIn: "root"
})
export class SubnettingService {
	// Subjects
	public addNetworkObservable: Subject<boolean>;
	public networksObservable: Subject<Array<Network>>;

	// Variables
	private ipv4: IPV4;
	private networkInfoList: NetworkInfoList;

	public constructor() {
		//Subjects
		this.addNetworkObservable = new Subject<boolean>();
		this.networksObservable = new Subject<Array<Network>>();

		// Variables
		this.networkInfoList = new NetworkInfoList();
	}

	public set Ipv4(value: IPV4) {
		this.ipv4 = value;
	}

	public addNetwork(networkInfo: NetworkInfo): void {
		this.networkInfoList.addNetwork(networkInfo);
	}

	public removeNetwork(network: Network): void {
		this.networkInfoList.removeNetwork(network.NetworkInfo.uid);
		this.executeSubnet();
	}

	public executeSubnet(): void {
		const networks: Array<Network> = Subnetter.Execute(
			this.ipv4,
			this.networkInfoList.networks
		);

		this.networksObservable.next(networks);
	}

	// Observable
	public showAddNetwork(): void {
		this.addNetworkObservable.next(true);
	}

	public hideAddNetwork(): void {
		this.addNetworkObservable.next(false);
	}
}
