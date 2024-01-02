import {AltitudeModeGroup} from './altitude-mode-group';
import {AbstractGeometryGroup} from './abstract-geometry-group';
import {LinearRingType} from './types/linear-ring-type';
import {CoordinatesType} from './types/coordinates-type';

export class LinearRing extends AbstractGeometryGroup implements LinearRingType {

    extrude?: boolean;
    tessellate?: boolean;
    altitudeMode?: AltitudeModeGroup;
    coordinates?: CoordinatesType;

    constructor(linearRingType: LinearRingType) {
        super(linearRingType);

        this.extrude = linearRingType.extrude;
        this.tessellate = linearRingType.tessellate;
        this.altitudeMode = linearRingType.altitudeMode;
        this.coordinates = linearRingType.coordinates;
    }
}
