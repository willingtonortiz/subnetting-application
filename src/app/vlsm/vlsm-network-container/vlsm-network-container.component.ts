import { Component, OnInit } from "@angular/core";
import { Network } from "../../logic/Network";
import { SubnettingService } from "../services/subnetting.service";

@Component({
	selector: "app-vlsm-network-container",
	templateUrl: "./vlsm-network-container.component.html",
	styleUrls: ["./vlsm-network-container.component.scss"]
})
export class VlsmNetworkContainerComponent implements OnInit {
	public networks: Array<Network>;

	constructor(private subnettingService: SubnettingService) {
		this.networks = null;

		this.subnettingService.networksObservable.subscribe(
			(data: Array<Network>) => {
				this.networks = data;
				// this.networks[0].NetworkInfo.
			}
		);
	}
	ngOnInit() {}
}
