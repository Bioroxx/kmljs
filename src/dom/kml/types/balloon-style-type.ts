import {AbstractSubStyleType} from './abstract-sub-style-type';
import {ColorType} from './color-type';
import {DisplayModeEnumType} from './display-mode-enum-type';

export interface BalloonStyleType extends AbstractSubStyleType {

    // Child elements
    bgColor?: ColorType;
    textColor?: ColorType;
    text?: string;
    displayMode?: DisplayModeEnumType;

}