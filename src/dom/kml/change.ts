import {AbstractObjectGroup} from './abstract-object-group';
import {ChangeType} from './types/change-type';

export class Change implements ChangeType {

    object: AbstractObjectGroup[];

    constructor(changeType: ChangeType) {
        this.object = changeType.object;
    }
}
