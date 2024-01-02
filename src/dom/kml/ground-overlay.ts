import {AbstractOverlayGroup} from './abstract-overlay-group';
import {AltitudeModeGroup} from './altitude-mode-group';
import {LatLonBox} from './lat-lon-box';
import {GroundOverlayType} from './types/ground-overlay-type';

export class GroundOverlay extends AbstractOverlayGroup implements GroundOverlayType {

    altitude?: number;
    altitudeMode?: AltitudeModeGroup;
    latLonBox?: LatLonBox;

    constructor(groundOverlayType: GroundOverlayType) {
        super(groundOverlayType);

        this.altitude = groundOverlayType.altitude;
        this.altitudeMode = groundOverlayType.altitudeMode;
        this.latLonBox = groundOverlayType.latLonBox;
    }
}
