import {AbstractObjectType} from './abstract-object-type';
import {LatLonAltBoxType} from './lat-lon-alt-box-type';
import {LodType} from './lod-type';

export interface RegionType extends AbstractObjectType {

    // Child elements
    latLonAltBox?: LatLonAltBoxType;
    lod?: LodType;

}