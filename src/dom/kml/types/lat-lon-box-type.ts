import {AbstractLatLonBoxType} from './abstract-lat-lon-box-type';
import {Angle180Type} from './angle-180-type';

export interface LatLonBoxType extends AbstractLatLonBoxType {

    // Child elements
    rotation?: Angle180Type;

}