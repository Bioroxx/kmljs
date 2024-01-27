import {AbstractTimePrimitiveType} from './abstract-time-primitive-type';
import {DateTimeType} from './date-time-type';

export interface TimeStampType extends AbstractTimePrimitiveType {

  // Child elements
  when?: DateTimeType;

}