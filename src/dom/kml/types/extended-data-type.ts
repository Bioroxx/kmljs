import {DataType} from './data-type';
import {SchemaDataType} from './schema-data-type';

export interface ExtendedDataType {

    // Child elements
    data: DataType[];
    schemaData: SchemaDataType[];
    any: any[]; // Arbitrary XML elements

}