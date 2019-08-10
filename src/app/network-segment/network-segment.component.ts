import { Component, OnInit } from "@angular/core";
import { Subnetter } from "../logic/Subnetter";
import { IPV4 } from "../logic/IPV4";
import { NetworkUtil } from "../logic/NetworkUtil";
import { SubnettingService } from "../services/subnetting.service";

@Component({
	selector: "app-network-segment",
	templateUrl: "./network-segment.component.html",
	styleUrls: ["./network-segment.component.scss"]
})
export class NetworkSegmentComponent implements OnInit {
	// 192.168.0.0
	public ipv1: string = null;
	public ipv2: string = null;
	public ipv3: string = null;
	public ipv4: string = null;
	public mask: string = "255.255.255.0";
	public showHosts: boolean = false;
	public numberOfHosts: number = 0;

	constructor(private subnettingService: SubnettingService) {}

	public validateIp(): void {
		if (this.checkInputs()) {
			const ipv1: number = Number.parseInt(this.ipv1);
			const ipv2: number = Number.parseInt(this.ipv2);
			const ipv3: number = Number.parseInt(this.ipv3);
			const ipv4: number = Number.parseInt(this.ipv4);

			// Todos los números tienen que estar en el rango
			if (
				!Number.isNaN(ipv1) &&
				(ipv1 >= 0 && ipv1 <= 255) &&
				!Number.isNaN(ipv2) &&
				(ipv2 >= 0 && ipv2 <= 255) &&
				!Number.isNaN(ipv3) &&
				(ipv3 >= 0 && ipv3 <= 255) &&
				!Number.isNaN(ipv4) &&
				(ipv4 >= 0 && ipv4 <= 255)
			) {
				// Siempre se un nuevo segmento de red
				const ip: IPV4 = new IPV4(
					[ipv1, ipv2, ipv3, ipv4],
					NetworkUtil.StringToArray(this.mask)
				);
				// Y se asigna a red
				this.subnettingService.Ipv4 = ip;

				// Muestra la cantidad de hosts
				this.numberOfHosts = NetworkUtil.GetTotalHosts(ip.Mask);

				// Permite ver la cantidad de hosts
				this.showHosts = true;

				// Permite agregar redes
				this.subnettingService.showAddNetwork();
			} else {
				this.showHosts = false;
				this.subnettingService.hideAddNetwork();
			}
		} else {
			this.showHosts = false;
			this.subnettingService.hideAddNetwork();
		}
	}

	/**
	 * Verifica que los inputs no estén vacíos
	 *
	 */
	public checkInputs(): boolean {
		return (
			this.ipv1 !== "" &&
			this.ipv2 !== "" &&
			this.ipv3 !== "" &&
			this.ipv4 !== ""
		);
	}

	ngOnInit() {}
}
