import {AbstractLatLonBox} from './abstract-lat-lon-box';
import {AltitudeModeGroup} from './altitude-mode-group';
import {LatLonAltBoxType} from './types/lat-lon-alt-box-type';

export class LatLonAltBox extends AbstractLatLonBox implements LatLonAltBoxType {

  minAltitude: number;
  maxAltitude: number;
  altitudeMode: AltitudeModeGroup;

  constructor(latLonAltBoxType: LatLonAltBoxType) {
    super(latLonAltBoxType);

    this.minAltitude = latLonAltBoxType.minAltitude;
    this.maxAltitude = latLonAltBoxType.maxAltitude;
    this.altitudeMode = latLonAltBoxType.altitudeMode;
  }
}
