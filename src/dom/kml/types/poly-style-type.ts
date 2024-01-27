import {AbstractColorStyleType} from './abstract-color-style-type';

export interface PolyStyleType extends AbstractColorStyleType {

  // Child elements
  fill?: boolean;
  outline?: boolean;

}