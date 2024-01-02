import {AbstractObjectType} from './abstract-object-type';
import {AliasType} from './alias-type';

export interface ResourceMapType extends AbstractObjectType {

    // Child elements
    alias: AliasType[];

}