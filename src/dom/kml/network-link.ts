import {AbstractFeatureGroup} from './abstract-feature-group';
import {Link} from './link';
import {NetworkLinkType} from './types/network-link-type';

export class NetworkLink extends AbstractFeatureGroup implements NetworkLinkType {

  refreshVisibility?: boolean;
  flyToView?: boolean;
  link?: Link;

  constructor(networkLinkType: NetworkLinkType) {
    super(networkLinkType);

    this.refreshVisibility = networkLinkType.refreshVisibility;
    this.flyToView = networkLinkType.flyToView;
    this.link = networkLinkType.link;
  }
}
