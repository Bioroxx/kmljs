import {AtomLink} from '../../atom/atom-link';
import {AnyURI} from '../../xsd/anyURI';
import {AbstractObjectType} from './abstract-object-type';
import {AbstractViewType} from './abstract-view-type';
import {AbstractTimePrimitiveType} from './abstract-time-primitive-type';
import {AbstractStyleSelectorType} from './abstract-style-selector-type';
import {RegionType} from './region-type';
import {ExtendedDataType} from './extended-data-type';
import {AtomPersonConstruct} from '../../atom/atom-person-construct';

export interface AbstractFeatureType extends AbstractObjectType {

  // Child elements
  name?: string;
  visibility?: boolean;
  open?: boolean;
  atomAuthor?: AtomPersonConstruct;
  atomLink?: AtomLink;
  address?: string;
  //TODO: xal:AddressDetails
  phoneNumber?: string;
  snippet?: string;
  description?: string;
  view?: AbstractViewType;
  timePrimitive?: AbstractTimePrimitiveType;
  styleUrl?: AnyURI;
  styleSelector?: AbstractStyleSelectorType[];
  region?: RegionType;
  extendedData?: ExtendedDataType;

}