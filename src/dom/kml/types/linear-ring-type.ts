import {AbstractGeometryType} from './abstract-geometry-type';
import {AltitudeModeGroup} from '../altitude-mode-group';
import {CoordinatesType} from './coordinates-type';

export interface LinearRingType extends AbstractGeometryType {

    // Child elements
    extrude?: boolean;
    tessellate?: boolean;
    altitudeMode?: AltitudeModeGroup;
    coordinates?: CoordinatesType;

}