export class IPV4 {
	public Address: number[];
	public Mask: number[];

	public constructor(data: { address: Array<number>; mask: Array<number> }) {
		// public constructor(address: number[], mask: number[]) {
		this.Address = data.address || null;
		this.Mask = data.mask || null;
	}

	public static GetEmpty(): IPV4 {
		// return new IPV4([0, 0, 0, 0], [0, 0, 0, 0]);
		return new IPV4({
			address: [0, 0, 0, 0],
			mask: [0, 0, 0, 0]
		});
	}

	public AddHosts(hosts: number): void {
		let reminder: number = hosts;
		let maxSize: number;
		let total: number;

		for (let i = 3; i >= 0; --i) {
			maxSize = 256;
			total = this.Address[i] + reminder;

			if (total >= maxSize) {
				this.Address[i] = total % maxSize;
				reminder = Math.trunc(total / maxSize);
			} else {
				this.Address[i] += reminder;
				break;
			}
		}
	}

	public GetNetworkAddress(): IPV4 {
		let result: IPV4 = IPV4.GetEmpty();

		// Crear método que haga esto
		for (let i = 0; i < 4; ++i) {
			result.Address[i] = this.Address[i] & this.Mask[i];
		}

		// Copia de la máscara
		result.Mask = this.Mask.slice();

		return result;
	}

	public GetBroadcastAddress(): IPV4 {
		let result: IPV4 = this.GetNetworkAddress();

		// Se recorre al revés
		for (let i = 3; i >= 0; --i) {
			for (let j = 0; j < 8; ++j) {
				// Si la máscara es un cero
				if ((result.Mask[i] & (1 << j)) === 0) {
					// Prender el bit de la dirección
					result.Address[i] |= 1 << j;
				} else {
					return result;
				}
			}
		}

		return result;
	}

	public GetFirstUsable(): IPV4 {
		let result: IPV4 = this.GetNetworkAddress();

		result.Address[3]++;

		return result;
	}

	public GetLastUsable(): IPV4 {
		let result: IPV4 = this.GetBroadcastAddress();

		result.Address[3]--;

		return result;
	}

	public IsValid(): boolean {
		if (
			this.Address === null ||
			this.Mask === null ||
			this.Address.length !== 4 ||
			this.Mask.length !== 4
		) {
			return false;
		}

		// Todo -> Implementar una validación más robusta
		// La función debe estár en útiles

		return true;
	}

	public toString(): string {
		let addressStr: string = "";
		let maskStr: string = "";

		for (let i = 0; i < 4; ++i) {
			if (i === 0) {
				addressStr += this.Address[i].toString();
				maskStr += this.Mask[i].toString();
			} else {
				addressStr += "." + this.Address[i].toString();
				maskStr += "." + this.Mask[i].toString();
			}
		}

		return `IPV4 {{ Address: ${addressStr}, Mask: ${maskStr} }}`;
	}
}
