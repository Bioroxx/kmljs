import {AbstractObjectType} from './abstract-object-type';

export interface DataType extends AbstractObjectType {

    // Attributes
    name?: string;

    // Child elements
    displayName?: string;
    value?: string;

}