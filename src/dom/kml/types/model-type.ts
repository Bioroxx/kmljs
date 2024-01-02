import {AbstractGeometryType} from './abstract-geometry-type';
import {AltitudeModeGroup} from '../altitude-mode-group';
import {LocationType} from './location-type';
import {OrientationType} from './orientation-type';
import {ScaleType} from './scale-type';
import {LinkType} from './link-type';
import {ResourceMapType} from './resource-map-type';

export interface ModelType extends AbstractGeometryType {

    // Child elements
    altitudeMode?: AltitudeModeGroup;
    location?: LocationType;
    orientation?: OrientationType;
    scale?: ScaleType;
    link?: LinkType;
    resourceMap?: ResourceMapType;

}