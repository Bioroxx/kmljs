import {AbstractObjectGroup} from './abstract-object-group';
import {AbstractStyleSelectorType} from './types/abstract-style-selector-type';

export abstract class AbstractStyleSelectorGroup extends AbstractObjectGroup implements AbstractStyleSelectorType {

  protected constructor(abstractStyleSelectorType: AbstractStyleSelectorType) {
    super(abstractStyleSelectorType);
  }
}
