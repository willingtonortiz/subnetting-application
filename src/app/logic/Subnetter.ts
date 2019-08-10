import { IPV4 } from "./IPV4";
import { NetworkInfo } from "./NetworkInfo";
import { Network } from "./Network";
import { NetworkUtil } from "./NetworkUtil";

/**
 * Permite realizar operaciones de subnetting
 */
export class Subnetter {
	public constructor() {}

	public static Execute(
		ipv4: IPV4,
		networkInfoList: Array<NetworkInfo>
	): Array<Network> {
		const segment: IPV4 = ipv4.GetNetworkAddress();

		const results: Array<Network> = new Array<Network>();

		// Ordena una copia del arreglo
		const networks: Array<NetworkInfo> = networkInfoList
			.slice()
			.sort(NetworkInfo.CompareTo);

		let totalHosts = NetworkUtil.GetTotalHosts(segment.Mask);

		for (let network of networks) {
			let required = network.GetRequiredHosts();

			if (totalHosts >= required) {
				let newNetwork: IPV4 = new IPV4({
					address: segment.Address.slice(),
					mask: NetworkUtil.GetProperMask(required)
				});

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
