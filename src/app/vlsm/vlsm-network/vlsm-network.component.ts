import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-vlsm-network",
	templateUrl: "./vlsm-network.component.html",
	styleUrls: ["./vlsm-network.component.scss"]
})
export class VlsmNetworkComponent implements OnInit {
	@Input() public networkName: string = "";
	@Input() public hosts: string = "";
	@Input() public networkAddress: string = "";
	@Input() public broadcastAddress: string = "";
	@Input() public firstUsableIp: string = "";
	@Input() public lastUsableIp: string = "";

	// public networkName: string = "generico";
	// public hosts: string = "generico";
	// public networkAddress: string = "generico";
	// public broadcastAddress: string = "generico";
	// public firstUsableIp: string = "generico";
	// public lastUsableIp: string = "generico";

	constructor() {}

	ngOnInit() {}
}
