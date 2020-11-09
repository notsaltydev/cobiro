export interface CounterState {
    value: number;
}

export const initializeState = (): CounterState => {
    return {value: 0};
};
