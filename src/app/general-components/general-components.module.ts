import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitleComponent } from "./title/title.component";
import { OnlyAddressPipe } from "../pipes/only-address.pipe";

@NgModule({
	declarations: [TitleComponent, OnlyAddressPipe],
	imports: [CommonModule],
	exports: [TitleComponent, OnlyAddressPipe]
})
export class GeneralComponentsModule {}
