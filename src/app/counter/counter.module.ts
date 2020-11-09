import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterFeatureKey } from './store/counter.selector';
import { CounterReducer } from './store/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(counterFeatureKey, CounterReducer)
    ],
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule {
}
