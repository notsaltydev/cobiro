import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Image } from '../models';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
    @Input() image: Image;
}
