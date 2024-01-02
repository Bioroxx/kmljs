import {AbstractObjectType} from './abstract-object-type';
import {StyleStateEnumType} from './style-state-enum-type';
import {AnyURI} from '../../xsd/anyURI';
import {AbstractStyleSelectorType} from './abstract-style-selector-type';

export interface PairType extends AbstractObjectType {

    // Child elements
    key?: StyleStateEnumType;
    styleUrl?: AnyURI;
    styleSelector?: AbstractStyleSelectorType;

}