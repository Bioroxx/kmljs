import {CreateType} from './types/create-type';
import {AbstractContainerType} from './types/abstract-container-type';

export class Create implements CreateType {

  container: AbstractContainerType[];

  constructor(createType: CreateType) {
    this.container = createType.container;
  }
}
