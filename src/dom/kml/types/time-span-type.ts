import {AbstractTimePrimitiveType} from './abstract-time-primitive-type';
import {DateTimeType} from './date-time-type';

export interface TimeSpanType extends AbstractTimePrimitiveType {

  // Child elements
  begin?: DateTimeType;
  end?: DateTimeType;

}