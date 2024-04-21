import {AbstractColorStyleGroup} from './abstract-color-style-group';
import {PolyStyleType} from './types/poly-style-type';

export class PolyStyle extends AbstractColorStyleGroup implements PolyStyleType {

  fill: boolean;
  outline: boolean;

  constructor(polyStyleType: PolyStyleType) {
    super(polyStyleType);

    this.fill = polyStyleType.fill;
    this.outline = polyStyleType.outline;
  }
}
