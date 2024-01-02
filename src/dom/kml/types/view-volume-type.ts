import {AbstractObjectType} from './abstract-object-type';
import {Angle180Type} from './angle-180-type';
import {Angle90Type} from './angle-90-type';

export interface ViewVolumeType extends AbstractObjectType {

    // Child elements
    leftFov?: Angle180Type;
    rightFov?: Angle180Type;
    bottomFov?: Angle90Type;
    topFov?: Angle90Type;
    near?: number;
    
}