import {AbstractGeometryGroup} from './abstract-geometry-group';
import {AltitudeModeGroup} from './altitude-mode-group';
import {PolygonType} from './types/polygon-type';
import {BoundaryType} from './types/boundary-type';

export class Polygon extends AbstractGeometryGroup implements PolygonType {

  extrude: boolean;
  tessellate: boolean;
  altitudeMode: AltitudeModeGroup;
  outerBoundaryIs: BoundaryType;
  innerBoundaryIs: BoundaryType[];

  constructor(polygonType: PolygonType) {
    super(polygonType);

    this.extrude = polygonType.extrude;
    this.tessellate = polygonType.tessellate;
    this.altitudeMode = polygonType.altitudeMode;
    this.outerBoundaryIs = polygonType.outerBoundaryIs;
    this.innerBoundaryIs = polygonType.innerBoundaryIs;
  }
}
