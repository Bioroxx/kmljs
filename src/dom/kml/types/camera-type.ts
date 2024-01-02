import {AbstractViewType} from './abstract-view-type';
import {Angle180Type} from './angle-180-type';
import {Angle90Type} from './angle-90-type';
import {Angle360Type} from './angle-360-type';
import {AltitudeModeGroup} from '../altitude-mode-group';

export interface CameraType extends AbstractViewType {

    // Child elements
    longitude?: Angle180Type;
    latitude?: Angle90Type;
    altitude?: number;
    heading?: Angle360Type;
    tilt?: Angle180Type;
    roll?: Angle180Type;
    altitudeMode?: AltitudeModeGroup;

}