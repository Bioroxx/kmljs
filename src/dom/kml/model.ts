import {AbstractGeometryGroup} from './abstract-geometry-group';
import {AltitudeModeGroup} from './altitude-mode-group';
import {ModelType} from './types/model-type';
import {LocationType} from './types/location-type';
import {OrientationType} from './types/orientation-type';
import {ScaleType} from './types/scale-type';
import {LinkType} from './types/link-type';
import {ResourceMapType} from './types/resource-map-type';

export class Model extends AbstractGeometryGroup implements ModelType {

  altitudeMode: AltitudeModeGroup;
  location?: LocationType;
  orientation?: OrientationType;
  scale?: ScaleType;
  link?: LinkType;
  resourceMap?: ResourceMapType;

  constructor(modelType: ModelType) {
    super(modelType);

    this.altitudeMode = modelType.altitudeMode;
    this.location = modelType.location;
    this.orientation = modelType.orientation;
    this.scale = modelType.scale;
    this.link = modelType.link;
    this.resourceMap = modelType.resourceMap;
  }
}
