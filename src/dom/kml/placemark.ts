import {AbstractFeatureGroup} from './abstract-feature-group';
import {PlacemarkType} from './types/placemark-type';
import {AbstractGeometryType} from './types/abstract-geometry-type';

export class Placemark extends AbstractFeatureGroup implements PlacemarkType {

  geometry?: AbstractGeometryType;

  constructor(placemarkType: PlacemarkType) {
    super(placemarkType);

    this.geometry = placemarkType.geometry;
  }
}
