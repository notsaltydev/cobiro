import { CardsAttributes, MemberCardsAttributes } from './member-cards-attributes.model';
import { LayoutGroup, LayoutType } from '../../shared/common/models';

export class MemberCardsLayoutGroup implements LayoutGroup<CardsAttributes> {
    attributes: CardsAttributes;
    id: number;
    type: LayoutType;

    constructor(attributes: CardsAttributes, id: number, type: LayoutType) {
        this.attributes = attributes;
        this.id = id;
        this.type = type;
    }

    getTitleGroup(): string {
        return this.attributes.title;
    }

    getItems(): MemberCardsAttributes[] {
        return Object.values(this.attributes.memberCards);
    }
}
