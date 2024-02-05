import {AbstractObjectGroup} from './abstract-object-group';
import {LinkType} from './types/link-type';
import {RefreshModeEnumType} from './types/refresh-mode-enum-type';
import {ViewRefreshModeEnumType} from './types/view-refresh-mode-enum-type';

export class Link extends AbstractObjectGroup implements LinkType {

  refreshMode?: RefreshModeEnumType;
  refreshInterval?: number;
  viewRefreshMode?: ViewRefreshModeEnumType;
  viewRefreshTime?: number;
  viewBoundScale?: number;
  viewFormat?: string;
  httpQuery?: string;

  constructor(linkType: LinkType) {
    super(linkType);

    this.refreshMode = linkType.refreshMode;
    this.refreshInterval = linkType.refreshInterval;
    this.viewRefreshMode = linkType.viewRefreshMode;
    this.viewRefreshTime = linkType.viewRefreshTime;
    this.viewBoundScale = linkType.viewBoundScale;
    this.viewFormat = linkType.viewFormat;
    this.httpQuery = linkType.httpQuery;
  }
}
