import {Data} from './data';
import {SchemaData} from './schema-data';
import {ExtendedDataType} from './types/extended-data-type';

export class ExtendedData implements ExtendedDataType {

  data: Data[];
  schemaData: SchemaData[];
  any: any[]; // Arbitrary XML elements

  constructor(extendedDataType: ExtendedDataType) {

    this.data = extendedDataType.data;
    this.schemaData = extendedDataType.schemaData;
    this.any = extendedDataType.any;
  }
}
