import {AbstractTimePrimitiveGroup} from './abstract-time-primitive-group';
import {TimeStampType} from './types/time-stamp-type';
import {DateTimeType} from './types/date-time-type';

export class TimeStamp extends AbstractTimePrimitiveGroup implements TimeStampType {

  when?: DateTimeType;

  constructor(timeStampType: TimeStampType) {
    super(timeStampType);

    this.when = timeStampType.when;
  }
}
