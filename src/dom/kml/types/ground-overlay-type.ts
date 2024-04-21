import {AbstractOverlayType} from './abstract-overlay-type';
import {AltitudeModeGroup} from '../altitude-mode-group';
import {LatLonBoxType} from './lat-lon-box-type';

export interface GroundOverlayType extends AbstractOverlayType {

  // Child elements
  altitude: number;
  altitudeMode: AltitudeModeGroup;
  latLonBox?: LatLonBoxType;

}