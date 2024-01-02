import {AbstractLatLonBox} from './abstract-lat-lon-box';
import {Angle180Type} from './types/angle-180-type';
import {LatLonBoxType} from './types/lat-lon-box-type';

export class LatLonBox extends AbstractLatLonBox implements LatLonBoxType {

    rotation?: Angle180Type;

    constructor(latLonBoxType: LatLonBoxType) {
        super(latLonBoxType);

        this.rotation = latLonBoxType.rotation;
    }
}
