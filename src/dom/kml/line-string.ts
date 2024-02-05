import {AbstractGeometryGroup} from './abstract-geometry-group';
import {AltitudeModeGroup} from './altitude-mode-group';
import {LineStringType} from './types/line-string-type';
import {CoordinatesType} from './types/coordinates-type';

export class LineString extends AbstractGeometryGroup implements LineStringType {

  extrude?: boolean;
  tessellate?: boolean;
  altitudeMode?: AltitudeModeGroup;
  coordinates?: CoordinatesType;

  constructor(lineStringType: LineStringType) {
    super(lineStringType);

    this.extrude = lineStringType.extrude;
    this.tessellate = lineStringType.tessellate;
    this.altitudeMode = lineStringType.altitudeMode;
    this.coordinates = lineStringType.coordinates;
  }
}
