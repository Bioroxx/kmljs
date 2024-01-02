import {AbstractSubStyleType} from './abstract-sub-style-type';
import {ColorType} from './color-type';
import {ColorModeEnumType} from './color-mode-enum.type';

export interface AbstractColorStyleType extends AbstractSubStyleType {

    // Child elements
    color?: ColorType;
    colorMode?: ColorModeEnumType;

}