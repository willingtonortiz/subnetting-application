import { IPV4 } from "./IPV4";

export class NetworkUtil {
	public constructor() {}

	public static PrintBinary(ipv4: IPV4): void {
		let address: string, mask: string;

		address = mask = "";

		for (let i = 0; i < 4; i++) {
			if (i === 0) {
				address += ipv4.Address[i].toString(2).padStart(8, "0");
				mask += ipv4.Mask[i].toString(2).padStart(8, "0");
			} else {
				address += "." + ipv4.Address[i].toString(2).padStart(8, "0");
				mask += "." + ipv4.Mask[i].toString(2).padStart(8, "0");
			}
		}

		console.log(`IPV4 {{ \n\tAddress: ${address}, \n\tMask: ${mask} }}`);
	}

	public static StringToArray(stringArray: string): Array<number> {
		return stringArray.split(".").map((item: string) => {
			return Number(item);
		});
	}

	public static GetTotalHosts(mask: Array<number>): number {
		if (mask.length !== 4) {
			// Todo -> Validar que sea una máscara correcta

			throw new Error("Incorrect mask lenght");
		}

		let newMask: Array<number> = mask.slice().reverse();
		let total: number = 1;

		for (let i = 0; i < 4; ++i) {
			for (let j = 0; j < 8; ++j) {
				if ((newMask[i] & (1 << j)) === 0) {
					total += 1 << (i * 8 + j);
				} else {
					return total;
				}
			}
		}

		return 0;
	}

	public static GetProperMask(hosts: number): Array<number> {
		let result: Array<number> = new Array<number>();

		let required: number = Math.log2(hosts);
		required = Math.ceil(required);

		let group1: number = Math.trunc((32 - Math.trunc(required)) / 8);
		let ceros: number = Math.trunc(required) % 8;
		let middle: number = 255;
		let group0 = Math.trunc(Math.trunc(required) / 8);

		for (let i = 0; i < group1; ++i) result.push(255);

		for (let i = 0; i < ceros; ++i) {
			middle ^= 1 << i;
		}

		if (middle !== 255) result.push(middle);

		for (let i = 0; i < group0; ++i) result.push(0);

		return result;
	}
}
