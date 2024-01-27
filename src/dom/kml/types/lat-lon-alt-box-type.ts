import {AltitudeModeGroup} from '../altitude-mode-group';
import {AbstractLatLonBoxType} from './abstract-lat-lon-box-type';

export interface LatLonAltBoxType extends AbstractLatLonBoxType {

  // Child elements
  minAltitude?: number;
  maxAltitude?: number;
  altitudeMode?: AltitudeModeGroup;

}