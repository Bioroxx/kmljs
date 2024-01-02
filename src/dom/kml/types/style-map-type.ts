import {AbstractStyleSelectorType} from './abstract-style-selector-type';
import {PairType} from './pair-type';

export interface StyleMapType extends AbstractStyleSelectorType {

    pair: PairType[];

}