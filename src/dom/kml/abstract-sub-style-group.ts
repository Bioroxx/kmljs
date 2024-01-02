import {AbstractObjectGroup} from './abstract-object-group';
import {AbstractSubStyleType} from './types/abstract-sub-style-type';

export abstract class AbstractSubStyleGroup extends AbstractObjectGroup implements AbstractSubStyleType {

    constructor(abstractSubStyleType: AbstractSubStyleType) {
        super(abstractSubStyleType);
    }
}
