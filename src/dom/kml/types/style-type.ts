import {AbstractStyleSelectorType} from './abstract-style-selector-type';
import {IconStyleType} from './icon-style-type';
import {LabelStyleType} from './label-style-type';
import {LineStyleType} from './line-style-type';
import {PolyStyleType} from './poly-style-type';
import {BalloonStyleType} from './balloon-style-type';
import {ListStyleType} from './list-style-type';

export interface StyleType extends AbstractStyleSelectorType {

  // Child elements
  iconStyle?: IconStyleType;
  labelStyle?: LabelStyleType;
  lineStyle?: LineStyleType;
  polyStyle?: PolyStyleType;
  balloonStyle?: BalloonStyleType;
  listStyle?: ListStyleType;

}