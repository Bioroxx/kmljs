import {SchemaType} from './types/schema-type';
import {ID} from '../xs/id';
import {SimpleFieldType} from './types/simple-field-type';

export class Schema implements SchemaType {

  id: ID;
  name: string;
  simpleField: SimpleFieldType[];

  constructor(schemaType: SchemaType) {

    this.id = schemaType.id;
    this.name = schemaType.name;
    this.simpleField = schemaType.simpleField;
  }
}
