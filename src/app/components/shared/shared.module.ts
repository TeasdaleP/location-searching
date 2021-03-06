import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { DropdownComponent } from "./dropdown/dropdown.component";
import { TableComponent } from "./table/table.component";

const SHARED_COMPONENTS = [
    DropdownComponent,
    TableComponent
]

@NgModule({
    declarations: SHARED_COMPONENTS,
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: SHARED_COMPONENTS
})
export class SharedModule { }