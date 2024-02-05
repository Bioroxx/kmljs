import {AbstractObjectType} from './abstract-object-type';
import {Angle180Type} from './angle-180-type';

export interface AbstractLatLonBoxType extends AbstractObjectType {

  // Child elements
  north?: Angle180Type;
  south?: Angle180Type;
  east?: Angle180Type;
  west?: Angle180Type;

}