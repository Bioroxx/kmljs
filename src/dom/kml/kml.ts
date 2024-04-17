import {KmlType} from './types/kml-type';
import {NetworkLinkControlType} from './types/network-link-control.type';
import {AbstractFeatureType} from './types/abstract-feature-type';


export class Kml implements KmlType {

  hint: string;
  networkLinkControl?: NetworkLinkControlType;
  feature?: AbstractFeatureType;

  constructor(kml: KmlType) {
    this.hint = kml.hint;
    this.networkLinkControl = kml.networkLinkControl;
    this.feature = kml.feature;
  }
}
