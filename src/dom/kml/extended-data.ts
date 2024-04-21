import {ExtendedDataType} from './types/extended-data-type';
import {DataType} from './types/data-type';
import {SchemaDataType} from './types/schema-data-type';

export class ExtendedData implements ExtendedDataType {

  data: DataType[];
  schemaData: SchemaDataType[];
  any: any[]; // Arbitrary XML elements

  constructor(extendedDataType: ExtendedDataType) {

    this.data = extendedDataType.data;
    this.schemaData = extendedDataType.schemaData;
    this.any = extendedDataType.any;
  }
}
