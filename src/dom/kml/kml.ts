import {NetworkLinkControl} from './network-link-control';
import {AbstractFeatureGroup} from './abstract-feature-group';
import {KmlType} from './types/kml-type';


export class Kml implements KmlType {

  hint?: string;
  networkLinkControl?: NetworkLinkControl;
  feature?: AbstractFeatureGroup;

  constructor(kml: KmlType) {
    this.hint = kml.hint;
    this.networkLinkControl = kml.networkLinkControl;
    this.feature = kml.feature;
  }
}
