import {AltitudeModeGroup} from './altitude-mode-group';
import {AbstractGeometryGroup} from './abstract-geometry-group';
import {PointType} from './types/point-type';
import {CoordinatesType} from './types/coordinates-type';

export class Point extends AbstractGeometryGroup implements PointType {

    extrude?: boolean;
    altitudeMode?: AltitudeModeGroup;
    coordinates?: CoordinatesType;

    constructor(pointType: PointType) {
        super(pointType);

        this.extrude = pointType.extrude;
        this.altitudeMode = pointType.altitudeMode;
        this.coordinates = pointType.coordinates;
    }
}
