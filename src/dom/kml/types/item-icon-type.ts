import {AbstractObjectType} from './abstract-object-type';
import {ItemIconStateType} from './item-icon-state.type';

export interface ItemIconType extends AbstractObjectType {

  // Child elements
  state?: ItemIconStateType;
  href?: string;

}