import {
	Component,
	OnInit,
	Input,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import { Network } from "src/app/logic/Network";
import { NetworkUtil } from "src/app/logic/NetworkUtil";
import { SubnettingService } from "../services/subnetting.service";

@Component({
	selector: "app-vlsm-network",
	templateUrl: "./vlsm-network.component.html",
	styleUrls: ["./vlsm-network.component.scss"]
})
export class VlsmNetworkComponent implements OnChanges {
	@Input() public network: Network;

	public usableHosts: number;

	constructor(private subnettingService: SubnettingService) {}

	// Detecta cuando el input cambia
	public ngOnChanges(changes: SimpleChanges) {
		this.usableHosts =
			NetworkUtil.GetMinimunHosts(
				changes.network.currentValue.NetworkInfo.Hosts
			) - 2;
	}

	public deleteNetwork() {
		this.subnettingService.removeNetwork(this.network);
	}
}
