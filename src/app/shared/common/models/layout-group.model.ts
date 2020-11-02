export interface LayoutGroup<T> {
    type: LayoutType;
    id: number;
    attributes: T;
}

export type LayoutType = 'blocks';
