import {AbstractColorStyleGroup} from './abstract-color-style-group';
import {IconStyleType} from './types/icon-style-type';
import {Angle360Type} from './types/angle-360-type';
import {BasicLinkType} from './types/basic-link-type';
import {Vec2Type} from './types/vec2-type';

export class IconStyle extends AbstractColorStyleGroup implements IconStyleType {

  scale: number;
  heading: Angle360Type;
  icon?: BasicLinkType;
  hotSpot: Vec2Type;

  constructor(iconStyleType: IconStyleType) {
    super(iconStyleType);

    this.scale = iconStyleType.scale;
    this.heading = iconStyleType.heading;
    this.icon = iconStyleType.icon;
    this.hotSpot = iconStyleType.hotSpot;
  }
}
