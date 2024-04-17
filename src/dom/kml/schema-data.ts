import {AbstractObjectGroup} from './abstract-object-group';
import {SchemaDataType} from './types/schema-data-type';
import {AnyURI} from '../xs/anyURI';
import {SimpleDataType} from './types/simple-data-type';

export class SchemaData extends AbstractObjectGroup implements SchemaDataType {

  schemaUrl?: AnyURI;
  simpleData: SimpleDataType[];

  constructor(schemaDataType: SchemaDataType) {
    super(schemaDataType);

    this.schemaUrl = schemaDataType.schemaUrl;
    this.simpleData = schemaDataType.simpleData;
  }
}
