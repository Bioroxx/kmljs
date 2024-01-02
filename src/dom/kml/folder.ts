import {AbstractContainerGroup} from './abstract-container-group';
import {FolderType} from './types/folder-type';
import {AbstractFeatureGroup} from './abstract-feature-group';

export class Folder extends AbstractContainerGroup implements FolderType {

    feature: AbstractFeatureGroup[];

    constructor(folderType: FolderType) {
        super(folderType);
        this.feature = folderType.feature;
    }
}
