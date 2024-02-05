import {AbstractObjectGroup} from './abstract-object-group';
import {SimpleData} from './simple-data';
import {SchemaDataType} from './types/schema-data-type';
import {AnyURI} from '../xsd/anyURI';

export class SchemaData extends AbstractObjectGroup implements SchemaDataType {

  schemaUrl?: AnyURI;
  simpleData: SimpleData[];

  constructor(schemaDataType: SchemaDataType) {
    super(schemaDataType);

    this.schemaUrl = schemaDataType.schemaUrl;
    this.simpleData = schemaDataType.simpleData;
  }
}
