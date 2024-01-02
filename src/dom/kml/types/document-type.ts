import {AbstractContainerType} from './abstract-container-type';
import {AbstractFeatureType} from './abstract-feature-type';
import {SchemaType} from './schema-type';

export interface DocumentType extends AbstractContainerType {

    // Child elements
    schema: SchemaType[];
    feature: AbstractFeatureType[]

}