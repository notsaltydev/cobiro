import { Image } from '../../shared/image/models';

export interface MemberCardsAttributes {
    imageUrl: Image;
    block: Block;
}

export interface AbstractCards<T> {
    [key: string]: T;
}

export interface CardsAttributes {
    title: string;
    memberCards: AbstractCards<MemberCardsAttributes>;
}

export interface Block {
    title: string;
    description: string;
    link: string;
    text: string;
}
