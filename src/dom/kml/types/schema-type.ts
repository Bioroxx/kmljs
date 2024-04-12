import {ID} from '../../xs/id';
import {SimpleFieldType} from './simple-field-type';

export interface SchemaType {

  // Attributes
  id?: ID;
  name?: string;

  // Child elements
  simpleField: SimpleFieldType[];

}