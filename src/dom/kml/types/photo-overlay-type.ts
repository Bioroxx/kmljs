import {Angle180Type} from './angle-180-type';
import {ShapeEnumType} from './shape-enum-type';
import {AbstractOverlayType} from './abstract-overlay-type';
import {ViewVolumeType} from './view-volume-type';
import {ImagePyramidType} from './image-pyramid-type';
import {PointType} from './point-type';

export interface PhotoOverlayType extends AbstractOverlayType {

    // Child elements
    rotation?: Angle180Type;
    viewVolume?: ViewVolumeType;
    imagePyramid?: ImagePyramidType;
    point?: PointType;
    shape?: ShapeEnumType;

}