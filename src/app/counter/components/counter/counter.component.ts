import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { selectCounterFeatureCount } from '../../store/counter.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
    count$: Observable<number>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.count$ = this.store.select(selectCounterFeatureCount);
    }

}
