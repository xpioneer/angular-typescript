import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';

import { Dashboard } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { DashBoardService } from './dashboard.service';

@NgModule({
    imports: [
        CommonModule,
        DashboardRouting,
    ],
    declarations: [
        Dashboard,
    ],
    providers: [
        DashBoardService,
    ],
})
export class DashboardModule {}
