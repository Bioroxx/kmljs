import {AbstractGeometryType} from './abstract-geometry-type';
import {AltitudeModeGroup} from '../altitude-mode-group';
import {CoordinatesType} from './coordinates-type';

export interface PointType extends AbstractGeometryType {

  // Child elements
  extrude?: boolean;
  altitudeMode?: AltitudeModeGroup;
  coordinates?: CoordinatesType;

}