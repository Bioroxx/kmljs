import {AbstractObjectType} from './abstract-object-type';
import {AnyURI} from '../../xs/anyURI';

export interface AliasType extends AbstractObjectType {

  // Child elements
  targetHref?: AnyURI;
  sourceHref?: AnyURI;

}