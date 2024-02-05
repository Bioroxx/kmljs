import {AbstractObjectGroup} from './abstract-object-group';
import {DataType} from './types/data-type';

export class Data extends AbstractObjectGroup implements DataType {

  name?: string;
  displayName?: string;
  value?: string;

  constructor(dataType: DataType) {
    super(dataType);

    this.name = dataType.name;
    this.displayName = dataType.displayName;
    this.value = dataType.value;
  }
}
