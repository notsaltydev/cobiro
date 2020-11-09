import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.model';
import { CounterState } from './counter.state';

export const counterFeatureKey = 'counter';

export const selectCounterFeature = createFeatureSelector<AppState, CounterState>(counterFeatureKey);

export const selectCounterFeatureCount = createSelector(
    selectCounterFeature,
    (state: CounterState) => state.value
);
