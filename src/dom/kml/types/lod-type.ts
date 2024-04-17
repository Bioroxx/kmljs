import {AbstractObjectType} from './abstract-object-type';

export interface LodType extends AbstractObjectType {

  // Child elements
  minLodPixels: number;
  maxLodPixels: number;
  minFadeExtent: number;
  maxFadeExtent: number;

}