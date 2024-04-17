import {AbstractObjectGroup} from './abstract-object-group';
import {AbstractFeatureType} from './types/abstract-feature-type';
import {AtomLink} from '../atom/atom-link';
import {AnyURI} from '../xs/anyURI';
import {AtomPersonConstruct} from '../atom/atom-person-construct';
import {AbstractViewType} from './types/abstract-view-type';
import {AbstractTimePrimitiveType} from './types/abstract-time-primitive-type';
import {AbstractStyleSelectorType} from './types/abstract-style-selector-type';
import {RegionType} from './types/region-type';
import {ExtendedDataType} from './types/extended-data-type';

export abstract class AbstractFeatureGroup extends AbstractObjectGroup implements AbstractFeatureType {

  name: string;
  visibility: boolean;
  open: boolean;
  atomAuthor?: AtomPersonConstruct;
  atomLink?: AtomLink;
  address: string;
  //TODO: xal:AddressDetails
  phoneNumber: string;
  snippet: string;
  description: string;
  view?: AbstractViewType;
  timePrimitive?: AbstractTimePrimitiveType;
  styleUrl?: AnyURI;
  styleSelector: AbstractStyleSelectorType[];
  region?: RegionType;
  extendedData?: ExtendedDataType;

  protected constructor(abstractFeatureType: AbstractFeatureType) {
    super(abstractFeatureType);

    this.name = abstractFeatureType.name;
    this.visibility = abstractFeatureType.visibility;
    this.open = abstractFeatureType.open;
    this.atomAuthor = abstractFeatureType.atomAuthor;
    this.atomLink = abstractFeatureType.atomLink;
    this.address = abstractFeatureType.address;
    this.phoneNumber = abstractFeatureType.phoneNumber;
    this.snippet = abstractFeatureType.snippet;
    this.description = abstractFeatureType.description;
    this.view = abstractFeatureType.view;
    this.timePrimitive = abstractFeatureType.timePrimitive;
    this.styleUrl = abstractFeatureType.styleUrl;
    this.styleSelector = abstractFeatureType.styleSelector;
    this.region = abstractFeatureType.region;
    this.extendedData = abstractFeatureType.extendedData;
  }
}
