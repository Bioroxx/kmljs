import {ItemIcon} from './item-icon';
import {AbstractSubStyleGroup} from './abstract-sub-style-group';
import {ListStyleType} from './types/list-style-type';
import {ListItemTypeEnumType} from './types/list-item-type-enum-type';
import {ColorType} from './types/color-type';

export class ListStyle extends AbstractSubStyleGroup implements ListStyleType {

    listItemType?: ListItemTypeEnumType;
    bgColor?: ColorType;
    itemIcon?: ItemIcon;
    maxSnippetLines?: number;

    constructor(listStyleType: ListStyleType) {
        super(listStyleType);

        this.listItemType = listStyleType.listItemType;
        this.bgColor = listStyleType.bgColor;
        this.itemIcon = listStyleType.itemIcon;
        this.maxSnippetLines = listStyleType.maxSnippetLines;
    }
}
