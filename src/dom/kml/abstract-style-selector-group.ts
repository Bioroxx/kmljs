import {AbstractObjectGroup} from './abstract-object-group';
import {AbstractStyleSelectorType} from './types/abstract-style-selector-type';

export abstract class AbstractStyleSelectorGroup extends AbstractObjectGroup implements AbstractStyleSelectorType {

    constructor(abstractStyleSelectorType: AbstractStyleSelectorType) {
        super(abstractStyleSelectorType);
    }
}
