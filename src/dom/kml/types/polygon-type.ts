import {AbstractGeometryType} from './abstract-geometry-type';
import {AltitudeModeGroup} from '../altitude-mode-group';
import {BoundaryType} from './boundary-type';

export interface PolygonType extends AbstractGeometryType {

  // Child elements
  extrude?: boolean;
  tessellate?: boolean;
  altitudeMode?: AltitudeModeGroup;
  outerBoundaryIs?: BoundaryType;
  innerBoundaryIs?: BoundaryType[];

}