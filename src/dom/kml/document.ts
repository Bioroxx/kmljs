import {AbstractContainerGroup} from './abstract-container-group';
import {DocumentType} from './types/document-type';
import {SchemaType} from './types/schema-type';
import {AbstractFeatureType} from './types/abstract-feature-type';


export class Document extends AbstractContainerGroup implements DocumentType {

  schema: SchemaType[];
  feature: AbstractFeatureType[];

  constructor(documentType: DocumentType) {
    super(documentType);

    this.schema = documentType.schema;
    this.feature = documentType.feature;
  }
}
