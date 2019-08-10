import { Injectable } from "@angular/core";
import { NetworkInfo } from "../../logic/NetworkInfo";
import { Subject } from "rxjs";
import { Subnetter } from "../../logic/Subnetter";
import { Network } from "../../logic/Network";
import { IPV4 } from "../../logic/IPV4";

@Injectable({
	providedIn: "root"
})
export class SubnettingService {
	// Subjects
	public addNetworkObservable: Subject<boolean>;
	public networksObservable: Subject<Array<Network>>;

	// Variables
	private subnetter: Subnetter;

	constructor() {
		//Subjects
		this.addNetworkObservable = new Subject<boolean>();
		this.networksObservable = new Subject<Array<Network>>();

		// Variables
		this.subnetter = new Subnetter();
	}

	public set Ipv4(value: IPV4) {
		this.subnetter.Ipv4 = value;
	}

	public addNetwork(networkInfo: NetworkInfo): void {
		this.subnetter.AddNetwork(networkInfo);
	}

	public executeSubnet(): void {
		const networks: Array<Network> = this.subnetter.Execute();

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
