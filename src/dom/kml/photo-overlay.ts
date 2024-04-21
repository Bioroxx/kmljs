import {AbstractOverlayGroup} from './abstract-overlay-group';
import {PhotoOverlayType} from './types/photo-overlay-type';
import {Angle180Type} from './types/angle-180-type';
import {ShapeEnumType} from './types/shape-enum-type';
import {ViewVolumeType} from './types/view-volume-type';
import {ImagePyramidType} from './types/image-pyramid-type';
import {PointType} from './types/point-type';

export class PhotoOverlay extends AbstractOverlayGroup implements PhotoOverlayType {

  rotation: Angle180Type;
  viewVolume?: ViewVolumeType;
  imagePyramid?: ImagePyramidType;
  point?: PointType;
  shape: ShapeEnumType;

  constructor(photoOverlayType: PhotoOverlayType) {
    super(photoOverlayType);

    this.rotation = photoOverlayType.rotation;
    this.viewVolume = photoOverlayType.viewVolume;
    this.imagePyramid = photoOverlayType.imagePyramid;
    this.point = photoOverlayType.point;
    this.shape = photoOverlayType.shape;
  }
}
