import {AbstractFeatureGroup} from './abstract-feature-group';
import {AbstractGeometryGroup} from './abstract-geometry-group';
import {PlacemarkType} from './types/placemark-type';

export class Placemark extends AbstractFeatureGroup implements PlacemarkType {

    geometry?: AbstractGeometryGroup;

    constructor(placemarkType: PlacemarkType) {
        super(placemarkType);

        this.geometry = placemarkType.geometry;
    }
}
