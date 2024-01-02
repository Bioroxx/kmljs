import {AbstractGeometryType} from './abstract-geometry-type';

export interface MultiGeometryType extends AbstractGeometryType {

    // Child elements
    geometry: AbstractGeometryType[];

}