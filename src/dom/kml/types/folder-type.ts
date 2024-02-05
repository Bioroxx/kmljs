import {AbstractContainerType} from './abstract-container-type';
import {AbstractFeatureType} from './abstract-feature-type';

export interface FolderType extends AbstractContainerType {

  // Child elements
  feature: AbstractFeatureType[];
}