import {AbstractObjectType} from './abstract-object-type';
import {GridOriginEnumType} from './grid-origin-enum-type';

export interface ImagePyramidType extends AbstractObjectType {

  // Child elements
  tileSize?: number;
  maxWidth?: number;
  maxHeight?: number;
  gridOrigin?: GridOriginEnumType;

}