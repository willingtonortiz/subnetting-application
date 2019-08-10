import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Modulos
import { VlsmModule } from "./vlsm/vlsm.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		// GeneralComponentsModule,
		VlsmModule
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: []
})
export class AppModule {}
