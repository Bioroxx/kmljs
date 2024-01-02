import {Delete} from './delete';
import {Create} from './create';
import {Change} from './change';
import {UpdateType} from './types/update-type';
import {AnyURI} from '../xsd/anyURI';

export class Update implements UpdateType {

    targetHref: AnyURI;
    createDeleteChange?: Create | Delete | Change;

    constructor(updateType: UpdateType) {
        this.targetHref = updateType.targetHref;
        this.createDeleteChange = updateType.createDeleteChange;
    }
}
