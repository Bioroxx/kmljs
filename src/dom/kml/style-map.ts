import {AbstractStyleSelectorGroup} from './abstract-style-selector-group';
import {Pair} from './pair';
import {StyleMapType} from './types/style-map-type';

export class StyleMap extends AbstractStyleSelectorGroup implements StyleMapType {

  pair: Pair[];

  constructor(styleMapType: StyleMapType) {
    super(styleMapType);

    this.pair = styleMapType.pair;
  }
}
