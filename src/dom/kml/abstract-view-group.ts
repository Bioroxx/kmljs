import {AbstractObjectGroup} from './abstract-object-group';
import {AbstractViewType} from './types/abstract-view-type';

export abstract class AbstractViewGroup extends AbstractObjectGroup implements AbstractViewType {

    constructor(abstractViewType: AbstractViewType) {
        super(abstractViewType);
    }
}
