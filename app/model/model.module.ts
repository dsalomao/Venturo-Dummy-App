import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Biker } from "./biker.model";
import { BikerRepository } from "./biker.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [HttpModule],
    providers: [BikerRepository, Biker, {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule { }