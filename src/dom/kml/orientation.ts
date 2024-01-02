import {AbstractObjectGroup} from './abstract-object-group';
import {OrientationType} from './types/orientation-type';
import {Angle360Type} from './types/angle-360-type';
import {Angle180Type} from './types/angle-180-type';

export class Orientation extends AbstractObjectGroup implements OrientationType {

    heading?: Angle360Type;
    tilt?: Angle180Type;
    roll?: Angle360Type;

    constructor(orientationType: OrientationType) {
        super(orientationType);

        this.heading = orientationType.heading;
        this.tilt = orientationType.tilt;
        this.roll = orientationType.roll;
    }
}
