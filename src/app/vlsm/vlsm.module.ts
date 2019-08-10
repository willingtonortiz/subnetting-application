import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// Modules
import { GeneralComponentsModule } from "../general-components/general-components.module";

// Components
import { VlsmContainerComponent } from "./vlsm-container/vlsm-container.component";
import { AddNetworkComponent } from "./add-network/add-network.component";
import { NetworkSegmentComponent } from "./network-segment/network-segment.component";
import { VlsmNetworkComponent } from "./vlsm-network/vlsm-network.component";
import { VlsmNetworkContainerComponent } from "./vlsm-network-container/vlsm-network-container.component";

// Services
import { SubnettingService } from "./services/subnetting.service";

@NgModule({
	declarations: [
		VlsmContainerComponent,
		AddNetworkComponent,
		NetworkSegmentComponent,
		VlsmNetworkComponent,
		VlsmNetworkContainerComponent
	],
	imports: [CommonModule, GeneralComponentsModule, FormsModule],
	providers: [SubnettingService],
	exports: [VlsmContainerComponent]
})
export class VlsmModule {}
