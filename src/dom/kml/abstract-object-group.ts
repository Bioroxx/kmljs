import {AbstractObjectType} from './types/abstract-object-type';
import {ID} from '../xs/id';
import {NCName} from '../xs/ncname';

export abstract class AbstractObjectGroup implements AbstractObjectType {

  id: ID;
  targetId: NCName;

  protected constructor(abstractObjectTypeValues: AbstractObjectType) {
    this.id = abstractObjectTypeValues.id;
    this.targetId = abstractObjectTypeValues.targetId;
  }
}
