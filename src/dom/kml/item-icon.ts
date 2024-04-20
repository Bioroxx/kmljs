import {AbstractObjectGroup} from './abstract-object-group';
import {ItemIconType} from './types/item-icon-type';
import {ItemIconStateType} from './types/item-icon-state.type';

export class ItemIcon extends AbstractObjectGroup implements ItemIconType {

  state?: ItemIconStateType;
  href: string;

  constructor(itemIconType: ItemIconType) {
    super(itemIconType);

    this.state = itemIconType.state;
    this.href = itemIconType.href;
  }
}
