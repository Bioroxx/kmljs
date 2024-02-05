import {AbstractObjectType} from './abstract-object-type';
import {AnyURI} from '../../xsd/anyURI';

export interface AliasType extends AbstractObjectType {

  // Child elements
  targetHref?: AnyURI;
  sourceHref?: AnyURI;

}