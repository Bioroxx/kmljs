import {AbstractContainerGroup} from './abstract-container-group';
import {CreateType} from './types/create-type';

export class Create implements CreateType {

  container: AbstractContainerGroup[];

  constructor(createType: CreateType) {
    this.container = createType.container;
  }
}
