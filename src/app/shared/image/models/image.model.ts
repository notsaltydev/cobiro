import { ImageSize } from './image-size.model';

export type Image = {
    [size in ImageSize]: string;
};
