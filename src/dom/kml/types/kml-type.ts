import {NetworkLinkControlType} from './network-link-control.type';
import {AbstractFeatureType} from './abstract-feature-type';

export interface KmlType {

  // Attributes
  hint?: string;

  // Child elements
  networkLinkControl?: NetworkLinkControlType
  feature?: AbstractFeatureType;

}