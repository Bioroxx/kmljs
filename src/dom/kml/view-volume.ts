import {ViewVolumeType} from './types/view-volume-type';
import {Angle180Type} from './types/angle-180-type';
import {Angle90Type} from './types/angle-90-type';
import {AbstractObjectGroup} from './abstract-object-group';

export class ViewVolume extends AbstractObjectGroup implements ViewVolumeType {

    leftFov?: Angle180Type;
    rightFov?: Angle180Type;
    bottomFov?: Angle90Type;
    topFov?: Angle90Type;
    near?: number;

    constructor(viewVolumeType: ViewVolumeType) {
        super(viewVolumeType);

        this.leftFov = viewVolumeType.leftFov;
        this.rightFov = viewVolumeType.rightFov;
        this.bottomFov = viewVolumeType.bottomFov;
        this.topFov = viewVolumeType.topFov;
        this.near = viewVolumeType.near;
    }
}
