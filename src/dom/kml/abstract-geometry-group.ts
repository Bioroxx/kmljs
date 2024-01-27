import {AbstractObjectGroup} from './abstract-object-group';
import {AbstractGeometryType} from './types/abstract-geometry-type';

export abstract class AbstractGeometryGroup extends AbstractObjectGroup implements AbstractGeometryType {

  constructor(abstractGeometryType: AbstractGeometryType) {
    super(abstractGeometryType);
  }
}
