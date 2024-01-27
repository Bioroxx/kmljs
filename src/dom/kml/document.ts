import {AbstractContainerGroup} from './abstract-container-group';
import {Schema} from './schema';
import {AbstractFeatureGroup} from './abstract-feature-group';
import {DocumentType} from './types/document-type';


export class Document extends AbstractContainerGroup implements DocumentType {

  schema: Schema[];
  feature: AbstractFeatureGroup[];

  constructor(documentType: DocumentType) {
    super(documentType);

    this.schema = documentType.schema;
    this.feature = documentType.feature;
  }
}
