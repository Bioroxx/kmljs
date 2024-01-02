import {DateTimeType} from './date-time-type';
import {UpdateType} from './update-type';
import {AbstractViewType} from './abstract-view-type';

export interface NetworkLinkControlType {

    // Child elements
    minRefreshPeriod?: number;
    maxSessionLength?: number;
    cookie?: string;
    message?: string;
    linkName?: string;
    linkDescription?: string;
    linkSnippet?: string;
    expires?: DateTimeType;
    update?: UpdateType;
    view?: AbstractViewType;

}