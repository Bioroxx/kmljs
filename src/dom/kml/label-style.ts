import {AbstractColorStyleGroup} from './abstract-color-style-group';
import {LabelStyleType} from './types/label-style-type';

export class LabelStyle extends AbstractColorStyleGroup implements LabelStyleType {

  scale: number;

  constructor(labelStyleType: LabelStyleType) {
    super(labelStyleType);

    this.scale = labelStyleType.scale;
  }
}
