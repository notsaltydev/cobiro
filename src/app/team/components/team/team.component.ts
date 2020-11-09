import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { MemberCardsLayoutGroup } from '../../models';
import { Observable } from 'rxjs';
import { CounterIncrementAction } from '../../../counter/store/counter.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.model';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent implements OnInit {
    membersCards$: Observable<MemberCardsLayoutGroup[]>;

    constructor(
        private teamService: TeamService,
        private store: Store<AppState>
    ) {
    }

    ngOnInit(): void {
        this.membersCards$ = this.teamService.getMembersCardsGroup();
    }

    increment(): void {
        this.store.dispatch(CounterIncrementAction());
    }
}
