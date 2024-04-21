import {AbstractSubStyleGroup} from './abstract-sub-style-group';
import {ColorType} from './types/color-type';
import {ColorModeEnumType} from './types/color-mode-enum.type';
import {AbstractColorStyleType} from './types/abstract-color-style-type';

export abstract class AbstractColorStyleGroup extends AbstractSubStyleGroup implements AbstractColorStyleType {

  color: ColorType;
  colorMode: ColorModeEnumType;

  protected constructor(abstractColorStyleType: AbstractColorStyleType) {
    super(abstractColorStyleType);

    this.color = abstractColorStyleType.color;
    this.colorMode = abstractColorStyleType.colorMode;
  }
}
