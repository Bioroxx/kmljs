import {BasicLinkType} from './basic-link-type';
import {RefreshModeEnumType} from './refresh-mode-enum-type';
import {ViewRefreshModeEnumType} from './view-refresh-mode-enum-type';

export interface LinkType extends BasicLinkType {

  // Child elements
  refreshMode?: RefreshModeEnumType;
  refreshInterval?: number;
  viewRefreshMode?: ViewRefreshModeEnumType;
  viewRefreshTime?: number;
  viewBoundScale?: number;
  viewFormat?: string;
  httpQuery?: string;

}