import {AbstractViewGroup} from './abstract-view-group';
import {LookAtType} from './types/look-at-type';
import {Angle180Type} from './types/angle-180-type';
import {Angle90Type} from './types/angle-90-type';
import {Angle360Type} from './types/angle-360-type';
import {AltitudeModeGroup} from './altitude-mode-group';

export class LookAt extends AbstractViewGroup implements LookAtType {

  longitude: Angle180Type;
  latitude: Angle90Type;
  altitude: number;
  heading: Angle360Type;
  tilt: Angle180Type;
  range: number;
  altitudeMode: AltitudeModeGroup;

  constructor(lookAtType: LookAtType) {
    super(lookAtType);

    this.longitude = lookAtType.longitude;
    this.latitude = lookAtType.latitude;
    this.altitude = lookAtType.altitude;
    this.heading = lookAtType.heading;
    this.tilt = lookAtType.tilt;
    this.range = lookAtType.range;
    this.altitudeMode = lookAtType.altitudeMode;
  }
}
