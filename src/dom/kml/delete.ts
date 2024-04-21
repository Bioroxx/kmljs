import {DeleteType} from './types/delete-type';
import {AbstractFeatureType} from './types/abstract-feature-type';

export class Delete implements DeleteType {

  feature: AbstractFeatureType[];

  constructor(deleteType: DeleteType) {
    this.feature = deleteType.feature;
  }
}
