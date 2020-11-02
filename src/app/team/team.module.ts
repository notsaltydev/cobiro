import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './components/team/team.component';
import { TeamRoutingModule } from './team-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamService } from './services/team.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        TeamRoutingModule,
        HttpClientModule,
        SharedModule
    ],
    declarations: [
        TeamComponent
    ],
    providers: [
        TeamService
    ]
})
export class TeamModule {
}
