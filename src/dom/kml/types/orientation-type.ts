import {AbstractObjectType} from './abstract-object-type';
import {Angle360Type} from './angle-360-type';
import {Angle180Type} from './angle-180-type';

export interface OrientationType extends AbstractObjectType {

    // Child elements
    heading?: Angle360Type;
    tilt?: Angle180Type;
    roll?: Angle360Type;

}