import { NetworkInfo } from "./NetworkInfo";
import { IPV4 } from "./IPV4";

export class Network {
	public NetworkInfo: NetworkInfo;
	public Ipv4: IPV4;

	public constructor(networkInfo: NetworkInfo, ipv4: IPV4) {
		this.NetworkInfo = networkInfo || null;
		this.Ipv4 = ipv4 || null;
	}

	public toString(): string {
		return `Network {{ \n\t${this.NetworkInfo}\n\t${this.Ipv4}\n }}`;
	}
}
