import {AbstractOverlayType} from './abstract-overlay-type';
import {Vec2Type} from './vec2-type';
import {Angle180Type} from './angle-180-type';

export interface ScreenOverlayType extends AbstractOverlayType {

    // Child elements
    overlayXY?: Vec2Type;
    screenXY?: Vec2Type;
    rotationXY?: Vec2Type;
    size?: Vec2Type;
    rotation?: Angle180Type;

}