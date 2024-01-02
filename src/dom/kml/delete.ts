import {AbstractFeatureGroup} from './abstract-feature-group';
import {DeleteType} from './types/delete-type';

export class Delete implements DeleteType {

    feature: AbstractFeatureGroup[];

    constructor(deleteType: DeleteType) {
        this.feature = deleteType.feature;
    }
}
