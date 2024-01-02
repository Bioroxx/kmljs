import {AbstractObjectGroup} from './abstract-object-group';
import {AbstractTimePrimitiveType} from './types/abstract-time-primitive-type';

export abstract class AbstractTimePrimitiveGroup extends AbstractObjectGroup implements AbstractTimePrimitiveType {

    constructor(abstractTimePrimitiveType: AbstractTimePrimitiveType) {
        super(abstractTimePrimitiveType);
    }
}
