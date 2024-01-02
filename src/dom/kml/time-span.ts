import {AbstractTimePrimitiveGroup} from './abstract-time-primitive-group';
import {TimeSpanType} from './types/time-span-type';
import {DateTimeType} from './types/date-time-type';

export class TimeSpan extends AbstractTimePrimitiveGroup implements TimeSpanType {

    begin?: DateTimeType;
    end?: DateTimeType;

    constructor(timeSpanType: TimeSpanType) {
        super(timeSpanType);

        this.begin = timeSpanType.begin;
        this.end = timeSpanType.end;
    }
}
