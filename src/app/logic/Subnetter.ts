import { IPV4 } from "./IPV4";
import { NetworkInfo } from "./NetworkInfo";
import { Network } from "./Network";
import { NetworkUtil } from "./NetworkUtil";

export class Subnetter {
	private _ipv4: IPV4;
	private Networks: Array<NetworkInfo>;

	public set Ipv4(value: IPV4) {
		this._ipv4 = value;
	}

	public constructor(ipv4?: IPV4) {
		this._ipv4 = ipv4 || null;
		this.Networks = new Array<NetworkInfo>();
	}

	public AddNetwork(network: NetworkInfo): void {
		this.Networks.push(network);
	}

	public Execute(): Array<Network> {
		let segment: IPV4 = this._ipv4.GetNetworkAddress();

		let results: Array<Network> = new Array<Network>();

		this.Networks.sort(NetworkInfo.CompareTo);

		let totalHosts = NetworkUtil.GetTotalHosts(segment.Mask);

		for (let network of this.Networks) {
			let required = network.GetRequiredHosts();

			if (totalHosts >= required) {
				let newNetwork: IPV4 = new IPV4(
					segment.Address.slice(),
					NetworkUtil.GetProperMask(required)
				);

				results.push(new Network(network, newNetwork));

				segment.AddHosts(required);
				totalHosts -= required;
			} else {
				console.log(`No se tienen suficientes hosts`);
				break;
			}
		}
		return results;
	}
}
