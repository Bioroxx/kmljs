import {AbstractFeatureGroup} from './abstract-feature-group';
import {Icon} from './icon';
import {ColorType} from './types/color-type';
import {AbstractOverlayType} from './types/abstract-overlay-type';

export abstract class AbstractOverlayGroup extends AbstractFeatureGroup implements AbstractOverlayType {

  color?: ColorType;
  drawOrder?: number;
  icon?: Icon;

  protected constructor(abstractOverlayType: AbstractOverlayType) {
    super(abstractOverlayType);

    this.color = abstractOverlayType.color;
    this.drawOrder = abstractOverlayType.drawOrder;
    this.icon = abstractOverlayType.icon;
  }
}
