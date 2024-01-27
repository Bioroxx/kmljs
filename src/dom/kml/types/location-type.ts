import {AbstractObjectType} from './abstract-object-type';
import {Angle180Type} from './angle-180-type';
import {Angle90Type} from './angle-90-type';

export interface LocationType extends AbstractObjectType {

  // Child elements
  longitude?: Angle180Type;
  latitude?: Angle90Type;
  altitude?: number;

}