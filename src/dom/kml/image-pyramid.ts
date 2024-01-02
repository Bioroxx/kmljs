import {AbstractObjectGroup} from './abstract-object-group';
import {ImagePyramidType} from './types/image-pyramid-type';
import {GridOriginEnumType} from './types/grid-origin-enum-type';

export class ImagePyramid extends AbstractObjectGroup implements ImagePyramidType {

    tileSize?: number;
    maxWidth?: number;
    maxHeight?: number;
    gridOrigin?: GridOriginEnumType;

    constructor(imagePyramidType: ImagePyramidType) {
        super(imagePyramidType);

        this.tileSize = imagePyramidType.tileSize;
        this.maxWidth = imagePyramidType.maxWidth;
        this.maxHeight = imagePyramidType.maxHeight;
        this.gridOrigin = imagePyramidType.gridOrigin;
    }
}
