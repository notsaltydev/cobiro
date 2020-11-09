import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { CounterIncrementAction } from './counter.action';
import { CounterState, initializeState } from './counter.state';

const initialState = initializeState();

const reducer: ActionReducer<CounterState> = createReducer<CounterState>(
    initialState,
    on(CounterIncrementAction, (state: CounterState) => ({
        value: state.value + 1
    }))
);

export function CounterReducer(state: CounterState | undefined, action: Action): CounterState {
    return reducer(state, action);
}


