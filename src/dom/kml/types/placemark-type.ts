import {AbstractFeatureType} from './abstract-feature-type';
import {AbstractGeometryType} from './abstract-geometry-type';

export interface PlacemarkType extends AbstractFeatureType {

  geometry?: AbstractGeometryType;

}