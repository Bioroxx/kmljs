import {SimpleField} from './simple-field';
import {SchemaType} from './types/schema-type';
import {ID} from '../xsd/id';

export class Schema implements SchemaType {

    id?: ID;
    name?: string;
    simpleField: SimpleField[];

    constructor(schemaType: SchemaType) {

        this.id = schemaType.id;
        this.name = schemaType.name;
        this.simpleField = schemaType.simpleField;
    }
}
