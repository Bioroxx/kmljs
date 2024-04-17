import {AbstractFeatureType} from './abstract-feature-type';
import {ColorType} from './color-type';
import {LinkType} from './link-type';

export interface AbstractOverlayType extends AbstractFeatureType {

  // Child elements
  color: ColorType;
  drawOrder: number;
  icon?: LinkType;

}