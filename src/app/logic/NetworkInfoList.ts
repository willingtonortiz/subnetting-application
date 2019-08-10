import { NetworkInfo } from "./NetworkInfo";

export class NetworkInfoList {
	private uid: number;
	public networks: Array<NetworkInfo>;

	public constructor() {
		this.uid = 0;
		this.networks = new Array<NetworkInfo>();
	}

	public addNetwork(networkInfo: NetworkInfo): void {
		networkInfo.uid = ++this.uid;
		this.networks.push(networkInfo);
	}

	public removeNetwork(networkId: number) {
		this.networks = this.networks.filter((network: NetworkInfo) => {
			return network.uid !== networkId;
		});
	}
}
