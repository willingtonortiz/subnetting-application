import { Component, OnInit } from "@angular/core";
import { NetworkInfo } from "../logic/NetworkInfo";
import { SubnettingService } from "../services/subnetting.service";
import { Observer } from "rxjs";

@Component({
	selector: "app-add-network",
	templateUrl: "./add-network.component.html",
	styleUrls: ["./add-network.component.scss"]
})
export class AddNetworkComponent implements OnInit {
	public name: string = "";
	public hosts: string = "";
	public showButton: boolean = false;

	// Observers
	public showComponent: boolean;

	constructor(private subnettingService: SubnettingService) {
		this.subnettingService.addNetworkObservable.subscribe({
			next: (value: boolean) => {
				this.showComponent = value;
			}
		});
	}

	ngOnInit() {}

	public validateInputs(): void {
		if (this.checkInputs()) {
			const hosts = Number.parseInt(this.hosts);

			if (!Number.isNaN(hosts)) {
				this.showButton = true;
			} else {
				this.showButton = false;
			}
		} else {
			this.showButton = false;
		}
	}

	public checkInputs(): boolean {
		return this.name !== "" && this.hosts !== "";
	}

	public addNetwork(): void {
		this.subnettingService.addNetwork(
			new NetworkInfo(this.name, Number.parseInt(this.hosts))
		);

		this.subnettingService.executeSubnet();
	}
}
