import {AbstractFeatureGroup} from './abstract-feature-group';
import {AbstractContainerType} from './types/abstract-container-type';

export abstract class AbstractContainerGroup extends AbstractFeatureGroup implements AbstractContainerType {

  protected constructor(abstractContainerType: AbstractContainerType) {
    super(abstractContainerType);
  }
}
