import {AbstractObjectGroup} from './abstract-object-group';
import {AliasType} from './types/alias-type';
import {AnyURI} from '../xsd/anyURI';

export class Alias extends AbstractObjectGroup implements AliasType {

  targetHref?: AnyURI;
  sourceHref?: AnyURI;

  constructor(aliasType: AliasType) {
    super(aliasType);

    this.targetHref = aliasType.targetHref;
    this.sourceHref = aliasType.sourceHref;
  }
}
