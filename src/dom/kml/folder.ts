import {AbstractContainerGroup} from './abstract-container-group';
import {FolderType} from './types/folder-type';
import {AbstractFeatureType} from './types/abstract-feature-type';

export class Folder extends AbstractContainerGroup implements FolderType {

  feature: AbstractFeatureType[];

  constructor(folderType: FolderType) {
    super(folderType);
    this.feature = folderType.feature;
  }
}
