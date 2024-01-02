import {AbstractObjectGroup} from './abstract-object-group';
import {LocationType} from './types/location-type';
import {Angle180Type} from './types/angle-180-type';
import {Angle90Type} from './types/angle-90-type';

export class Location extends AbstractObjectGroup implements LocationType {

    longitude?: Angle180Type;
    latitude?: Angle90Type;
    altitude?: number;

    constructor(locationType: LocationType) {
        super(locationType);

        this.longitude = locationType.longitude;
        this.latitude = locationType.latitude;
        this.altitude = locationType.altitude;
    }
}
