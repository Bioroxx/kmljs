import {AbstractColorStyleGroup} from './abstract-color-style-group';
import {LineStyleType} from './types/line-style-type';

export class LineStyle extends AbstractColorStyleGroup implements LineStyleType {

  width?: number;

  constructor(lineStyleType: LineStyleType) {
    super(lineStyleType);

    this.width = lineStyleType.width;
  }
}
