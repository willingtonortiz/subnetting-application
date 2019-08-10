import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TitleComponent } from "./title/title.component";
import { NetworkSegmentComponent } from "./network-segment/network-segment.component";
import { VlsmComponent } from './vlsm/vlsm.component';
import { AddNetworkComponent } from './add-network/add-network.component';
import { VlsmNetworkComponent } from './vlsm-network/vlsm-network.component';
import { VlsmNetworkContainerComponent } from './vlsm-network-container/vlsm-network-container.component';

@NgModule({
	declarations: [AppComponent, TitleComponent, NetworkSegmentComponent, VlsmComponent, AddNetworkComponent, VlsmNetworkComponent, VlsmNetworkContainerComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
