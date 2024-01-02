import {AbstractObjectGroup} from './abstract-object-group';
import {Lod} from './lod';
import {LatLonAltBox} from './lat-lon-alt-box';
import {RegionType} from './types/region-type';

export class Region extends AbstractObjectGroup implements RegionType {

    latLonAltBox?: LatLonAltBox;
    lod?: Lod;

    constructor(regionType: RegionType) {
        super(regionType);

        this.latLonAltBox = regionType.latLonAltBox;
        this.lod = regionType.lod;
    }
}
