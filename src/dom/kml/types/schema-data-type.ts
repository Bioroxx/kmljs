import {AbstractObjectType} from './abstract-object-type';
import {AnyURI} from '../../xsd/anyURI';
import {SimpleDataType} from './simple-data-type';

export interface SchemaDataType extends AbstractObjectType {

    // Attributes
    schemaUrl?: AnyURI;

    // Child elements
    simpleData: SimpleDataType[];

}