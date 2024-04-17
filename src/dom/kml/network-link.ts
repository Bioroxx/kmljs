import {AbstractFeatureGroup} from './abstract-feature-group';
import {NetworkLinkType} from './types/network-link-type';
import {LinkType} from './types/link-type';

export class NetworkLink extends AbstractFeatureGroup implements NetworkLinkType {

  refreshVisibility: boolean;
  flyToView: boolean;
  link?: LinkType;

  constructor(networkLinkType: NetworkLinkType) {
    super(networkLinkType);

    this.refreshVisibility = networkLinkType.refreshVisibility;
    this.flyToView = networkLinkType.flyToView;
    this.link = networkLinkType.link;
  }
}
