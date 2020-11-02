import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { MemberCardsLayoutGroup } from '../../models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent implements OnInit {
    membersCards$: Observable<MemberCardsLayoutGroup[]>;

    constructor(private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.membersCards$ = this.teamService.getMembersCardsGroup();
    }
}
