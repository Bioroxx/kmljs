import {NetworkLinkControlType} from './types/network-link-control.type';
import {DateTimeType} from './types/date-time-type';
import {AbstractViewType} from './types/abstract-view-type';
import {UpdateType} from './types/update-type';

export class NetworkLinkControl implements NetworkLinkControlType {

  minRefreshPeriod: number;
  maxSessionLength: number;
  cookie: string;
  message: string;
  linkName: string;
  linkDescription: string;
  linkSnippet: string;
  expires?: DateTimeType;
  update?: UpdateType;
  view?: AbstractViewType;

  constructor(networkLinkControlType: NetworkLinkControlType) {

    this.minRefreshPeriod = networkLinkControlType.minRefreshPeriod;
    this.maxSessionLength = networkLinkControlType.maxSessionLength;
    this.cookie = networkLinkControlType.cookie;
    this.message = networkLinkControlType.message;
    this.linkName = networkLinkControlType.linkName;
    this.linkDescription = networkLinkControlType.linkDescription;
    this.linkSnippet = networkLinkControlType.linkSnippet;
    this.expires = networkLinkControlType.expires;
    this.update = networkLinkControlType.update;
    this.view = networkLinkControlType.view;
  }
}
