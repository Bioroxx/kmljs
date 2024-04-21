import {AbstractSubStyleType} from './abstract-sub-style-type';
import {ListItemTypeEnumType} from './list-item-type-enum-type';
import {ColorType} from './color-type';
import {ItemIconType} from './item-icon-type';

export interface ListStyleType extends AbstractSubStyleType {

  // Child elements
  listItemType: ListItemTypeEnumType;
  bgColor: ColorType;
  itemIcon: ItemIconType[];
  maxSnippetLines: number;

}