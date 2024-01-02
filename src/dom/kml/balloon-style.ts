import {AbstractSubStyleGroup} from './abstract-sub-style-group';
import {BalloonStyleType} from './types/balloon-style-type';
import {ColorType} from './types/color-type';
import {DisplayModeEnumType} from './types/display-mode-enum-type';

export class BalloonStyle extends AbstractSubStyleGroup implements BalloonStyleType {

    bgColor?: ColorType;
    textColor?: ColorType;
    text?: string;
    displayMode?: DisplayModeEnumType;

    constructor(balloonStyleType: BalloonStyleType) {
        super(balloonStyleType);

        this.bgColor = balloonStyleType.bgColor;
        this.textColor = balloonStyleType.textColor;
        this.text = balloonStyleType.text;
        this.displayMode = balloonStyleType.displayMode;
    }
}
