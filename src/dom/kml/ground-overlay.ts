import {AbstractOverlayGroup} from './abstract-overlay-group';
import {AltitudeModeGroup} from './altitude-mode-group';
import {GroundOverlayType} from './types/ground-overlay-type';
import {LatLonBoxType} from './types/lat-lon-box-type';

export class GroundOverlay extends AbstractOverlayGroup implements GroundOverlayType {

  altitude: number;
  altitudeMode: AltitudeModeGroup;
  latLonBox?: LatLonBoxType;

  constructor(groundOverlayType: GroundOverlayType) {
    super(groundOverlayType);

    this.altitude = groundOverlayType.altitude;
    this.altitudeMode = groundOverlayType.altitudeMode;
    this.latLonBox = groundOverlayType.latLonBox;
  }
}
