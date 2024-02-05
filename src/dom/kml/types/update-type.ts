import {AnyURI} from '../../xsd/anyURI';
import {CreateType} from './create-type';
import {DeleteType} from './delete-type';
import {ChangeType} from './change-type';

export interface UpdateType {

  // Child elements
  targetHref: AnyURI;
  createDeleteChange?: CreateType | DeleteType | ChangeType;

}