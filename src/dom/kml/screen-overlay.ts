import {AbstractOverlayGroup} from './abstract-overlay-group';
import {ScreenOverlayType} from './types/screen-overlay-type';
import {Vec2Type} from './types/vec2-type';
import {Angle180Type} from './types/angle-180-type';

export class ScreenOverlay extends AbstractOverlayGroup implements ScreenOverlayType {

  overlayXY: Vec2Type;
  screenXY: Vec2Type;
  rotationXY: Vec2Type;
  size: Vec2Type;
  rotation: Angle180Type;

  constructor(screenOverlayType: ScreenOverlayType) {
    super(screenOverlayType);

    this.overlayXY = screenOverlayType.overlayXY;
    this.screenXY = screenOverlayType.screenXY;
    this.rotationXY = screenOverlayType.rotationXY;
    this.size = screenOverlayType.size;
    this.rotation = screenOverlayType.rotation;
  }
}
