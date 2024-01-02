import {AbstractObjectGroup} from './abstract-object-group';
import {Alias} from './alias';
import {ResourceMapType} from './types/resource-map-type';

export class ResourceMap extends AbstractObjectGroup implements ResourceMapType {

    alias: Alias[];

    constructor(resourceMapType: ResourceMapType) {
        super(resourceMapType);

        this.alias = resourceMapType.alias;
    }
}
