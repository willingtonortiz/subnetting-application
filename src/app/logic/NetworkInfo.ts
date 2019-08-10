export class NetworkInfo {
	public Name: string;
	private _hosts: number;

	public get Hosts(): number {
		return this._hosts;
	}

	public set Hosts(hosts: number) {
		if (hosts < 4) {
			hosts = 4;
		}
		this._hosts = hosts;
	}

	public constructor(name: string, hosts: number) {
		this.Name = name;
		this.Hosts = hosts;
	}

	public static CompareTo(netA: NetworkInfo, netB: NetworkInfo): number {
		if (netA.Hosts < netB.Hosts) return 1;
		else if (netA.Hosts === netB.Hosts) return 0;
		else return -1;
	}

	public toString(): string {
		return `NetworkInfo {{ Name: ${this.Name}, Hosts: ${this.Hosts} }}`;
	}

	public GetRequiredHosts(): number {
		let required: number = Math.log2(this._hosts);

		required = Math.ceil(required);

		let power: number = Math.pow(2, required);

		return power;
	}
}
