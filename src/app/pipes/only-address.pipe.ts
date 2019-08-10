import { Pipe, PipeTransform } from "@angular/core";
import { IPV4 } from "../logic/IPV4";

@Pipe({
	name: "onlyAddress"
})
export class OnlyAddressPipe implements PipeTransform {
	transform(value: IPV4): string {
		return value.Address.toString().replace(/,/g, ".");
	}
}
