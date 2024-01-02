import {AbstractFeatureType} from './abstract-feature-type';
import {LinkType} from './link-type';

export interface NetworkLinkType extends AbstractFeatureType {

    // Child elements
    refreshVisibility?: boolean;
    flyToView?: boolean;
    link?: LinkType;

}