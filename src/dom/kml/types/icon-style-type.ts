import {AbstractColorStyleType} from './abstract-color-style-type';
import {Angle360Type} from './angle-360-type';
import {BasicLinkType} from './basic-link-type';
import {Vec2Type} from './vec2-type';

export interface IconStyleType extends AbstractColorStyleType {

  // Child elements
  scale: number;
  heading: Angle360Type;
  icon: BasicLinkType;
  hotSpot: Vec2Type;

}