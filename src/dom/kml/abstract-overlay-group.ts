import {AbstractFeatureGroup} from './abstract-feature-group';
import {ColorType} from './types/color-type';
import {AbstractOverlayType} from './types/abstract-overlay-type';
import {LinkType} from './types/link-type';

export abstract class AbstractOverlayGroup extends AbstractFeatureGroup implements AbstractOverlayType {

  color: ColorType;
  drawOrder: number;
  icon?: LinkType;

  protected constructor(abstractOverlayType: AbstractOverlayType) {
    super(abstractOverlayType);

    this.color = abstractOverlayType.color;
    this.drawOrder = abstractOverlayType.drawOrder;
    this.icon = abstractOverlayType.icon;
  }
}
