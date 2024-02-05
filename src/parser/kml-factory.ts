import {KmlType} from '../dom/kml/types/kml-type';
import {PlacemarkType} from '../dom/kml/types/placemark-type';
import {FolderType} from '../dom/kml/types/folder-type';
import {DocumentType} from '../dom/kml/types/document-type';
import {SchemaType} from '../dom/kml/types/schema-type';
import {SimpleFieldType} from '../dom/kml/types/simple-field-type';
import {MultiGeometryType} from '../dom/kml/types/multi-geometry-type';
import {LineStringType} from '../dom/kml/types/line-string-type';
import {LinearRingType} from '../dom/kml/types/linear-ring-type';
import {ModelType} from '../dom/kml/types/model-type';
import {LocationType} from '../dom/kml/types/location-type';
import {OrientationType} from '../dom/kml/types/orientation-type';
import {ScaleType} from '../dom/kml/types/scale-type';
import {ResourceMapType} from '../dom/kml/types/resource-map-type';
import {AliasType} from '../dom/kml/types/alias-type';
import {PointType} from '../dom/kml/types/point-type';
import {PolygonType} from '../dom/kml/types/polygon-type';
import {LinkType} from '../dom/kml/types/link-type';
import {LatLonBoxType} from '../dom/kml/types/lat-lon-box-type';
import {LatLonAltBoxType} from '../dom/kml/types/lat-lon-alt-box-type';
import {RegionType} from '../dom/kml/types/region-type';
import {LodType} from '../dom/kml/types/lod-type';
import {GroundOverlayType} from '../dom/kml/types/ground-overlay-type';
import {PhotoOverlayType} from '../dom/kml/types/photo-overlay-type';
import {ScreenOverlayType} from '../dom/kml/types/screen-overlay-type';
import {ViewVolumeType} from '../dom/kml/types/view-volume-type';
import {NetworkLinkType} from '../dom/kml/types/network-link-type';
import {CameraType} from '../dom/kml/types/camera-type';
import {LookAtType} from '../dom/kml/types/look-at-type';
import {TimeSpanType} from '../dom/kml/types/time-span-type';
import {TimeStampType} from '../dom/kml/types/time-stamp-type';
import {StyleType} from '../dom/kml/types/style-type';
import {StyleMapType} from '../dom/kml/types/style-map-type';
import {PairType} from '../dom/kml/types/pair-type';
import {BalloonStyleType} from '../dom/kml/types/balloon-style-type';
import {IconStyleType} from '../dom/kml/types/icon-style-type';
import {LabelStyleType} from '../dom/kml/types/label-style-type';
import {LineStyleType} from '../dom/kml/types/line-style-type';
import {ListStyleType} from '../dom/kml/types/list-style-type';
import {PolyStyleType} from '../dom/kml/types/poly-style-type';
import {ItemIconType} from '../dom/kml/types/item-icon-type';
import {DataType} from '../dom/kml/types/data-type';
import {ExtendedDataType} from '../dom/kml/types/extended-data-type';
import {SchemaDataType} from '../dom/kml/types/schema-data-type';
import {SimpleDataType} from '../dom/kml/types/simple-data-type';
import {ChangeType} from '../dom/kml/types/change-type';
import {CreateType} from '../dom/kml/types/create-type';
import {DeleteType} from '../dom/kml/types/delete-type';
import {NetworkLinkControlType} from '../dom/kml/types/network-link-control.type';
import {UpdateType} from '../dom/kml/types/update-type';
import {Kml} from '../dom/kml/kml';
import {Placemark} from '../dom/kml/placemark';
import {Folder} from '../dom/kml/folder';
import {Document} from '../dom/kml/document';
import {Schema} from '../dom/kml/schema';
import {SimpleField} from '../dom/kml/simple-field';
import {MultiGeometry} from '../dom/kml/multi-geometry';
import {LineString} from '../dom/kml/line-string';
import {LinearRing} from '../dom/kml/linear-ring';
import {Model} from '../dom/kml/model';
import {Location} from '../dom/kml/location';
import {Orientation} from '../dom/kml/orientation';
import {Scale} from '../dom/kml/scale';
import {ResourceMap} from '../dom/kml/resource-map';
import {Alias} from '../dom/kml/alias';
import {Point} from '../dom/kml/point';
import {Polygon} from '../dom/kml/polygon';
import {Link} from '../dom/kml/link';
import {Icon} from '../dom/kml/icon';
import {LatLonBox} from '../dom/kml/lat-lon-box';
import {LatLonAltBox} from '../dom/kml/lat-lon-alt-box';
import {Region} from '../dom/kml/region';
import {Lod} from '../dom/kml/lod';
import {GroundOverlay} from '../dom/kml/ground-overlay';
import {PhotoOverlay} from '../dom/kml/photo-overlay';
import {ScreenOverlay} from '../dom/kml/screen-overlay';
import {ViewVolume} from '../dom/kml/view-volume';
import {NetworkLink} from '../dom/kml/network-link';
import {Camera} from '../dom/kml/camera';
import {LookAt} from '../dom/kml/look-at';
import {TimeSpan} from '../dom/kml/time-span';
import {TimeStamp} from '../dom/kml/time-stamp';
import {Style} from '../dom/kml/style';
import {StyleMap} from '../dom/kml/style-map';
import {Pair} from '../dom/kml/pair';
import {BalloonStyle} from '../dom/kml/balloon-style';
import {IconStyle} from '../dom/kml/icon-style';
import {LabelStyle} from '../dom/kml/label-style';
import {LineStyle} from '../dom/kml/line-style';
import {ListStyle} from '../dom/kml/list-style';
import {PolyStyle} from '../dom/kml/poly-style';
import {ItemIcon} from '../dom/kml/item-icon';
import {Data} from '../dom/kml/data';
import {ExtendedData} from '../dom/kml/extended-data';
import {SchemaData} from '../dom/kml/schema-data';
import {SimpleData} from '../dom/kml/simple-data';
import {NetworkLinkControl} from '../dom/kml/network-link-control';
import {Update} from '../dom/kml/update';
import {Change} from '../dom/kml/change';
import {Create} from '../dom/kml/create';
import {Delete} from '../dom/kml/delete';
import {AbstractStyleSelectorType} from '../dom/kml/types/abstract-style-selector-type';

export class KMLFactory {

  private sharedStyle: AbstractStyleSelectorType[] = [];
  
  createKml(obj: KmlType): KmlType {
    return new Kml(obj);
  }

  createPlacemark(obj: PlacemarkType): PlacemarkType {
    return new Placemark(obj);
  }

  createFolder(obj: FolderType): FolderType {
    return new Folder(obj);
  }

  createDocument(obj: DocumentType): DocumentType {
    return new Document(obj);
  }

  createSchema(obj: SchemaType): SchemaType {
    return new Schema(obj);
  }

  createSimpleField(obj: SimpleFieldType): SimpleFieldType {
    return new SimpleField(obj);
  }

  createMultiGeometry(obj: MultiGeometryType): MultiGeometryType {
    return new MultiGeometry(obj);
  }

  createLineString(obj: LineStringType): LineStringType {
    return new LineString(obj);
  }

  createLinearRing(obj: LinearRingType): LinearRingType {
    return new LinearRing(obj);
  }

  createModel(obj: ModelType): ModelType {
    return new Model(obj);
  }

  createLocation(obj: LocationType): LocationType {
    return new Location(obj);
  }

  createOrientation(obj: OrientationType): OrientationType {
    return new Orientation(obj);
  }

  createScale(obj: ScaleType): ScaleType {
    return new Scale(obj);
  }

  createResourceMap(obj: ResourceMapType): ResourceMapType {
    return new ResourceMap(obj);
  }

  createAlias(obj: AliasType): AliasType {
    return new Alias(obj);
  }

  createPoint(obj: PointType): PointType {
    return new Point(obj);
  }

  createPolygon(obj: PolygonType): PolygonType {
    return new Polygon(obj);
  }

  createLink(obj: LinkType): LinkType {
    return new Link(obj);
  }

  createIcon(obj: LinkType): LinkType {
    return new Icon(obj);
  }

  createLatLonBox(obj: LatLonBoxType): LatLonBoxType {
    return new LatLonBox(obj);
  }

  createLatLonAltBox(obj: LatLonAltBoxType): LatLonAltBoxType {
    return new LatLonAltBox(obj);
  }

  createRegion(obj: RegionType): RegionType {
    return new Region(obj);
  }

  createLod(obj: LodType): LodType {
    return new Lod(obj);
  }

  createGroundOverlay(obj: GroundOverlayType): GroundOverlayType {
    return new GroundOverlay(obj);
  }

  createPhotoOverlay(obj: PhotoOverlayType): PhotoOverlayType {
    return new PhotoOverlay(obj);
  }

  createScreenOverlay(obj: ScreenOverlayType): ScreenOverlayType {
    return new ScreenOverlay(obj);
  }

  createViewVolume(obj: ViewVolumeType): ViewVolumeType {
    return new ViewVolume(obj);
  }

  createImagePyramid(obj: ViewVolumeType): ViewVolumeType {
    return new ViewVolume(obj);
  }

  createNetworkLink(obj: NetworkLinkType): NetworkLinkType {
    return new NetworkLink(obj);
  }

  createCamera(obj: CameraType): CameraType {
    return new Camera(obj);
  }

  createLookAt(obj: LookAtType): LookAtType {
    return new LookAt(obj);
  }

  createTimeSpan(obj: TimeSpanType): TimeSpanType {
    return new TimeSpan(obj);
  }

  createTimeStamp(obj: TimeStampType): TimeStampType {
    return new TimeStamp(obj);
  }

  createStyle(obj: StyleType): StyleType {
    return new Style(obj);
  }

  createStyleMap(obj: StyleMapType): StyleMapType {
    return new StyleMap(obj);
  }

  createPair(obj: PairType): PairType {
    return new Pair(obj);
  }

  createBalloonStyle(obj: BalloonStyleType): BalloonStyleType {
    return new BalloonStyle(obj);
  }

  createIconStyle(obj: IconStyleType): IconStyleType {
    return new IconStyle(obj);
  }

  createLabelStyle(obj: LabelStyleType): LabelStyleType {
    return new LabelStyle(obj);
  }

  createLineStyle(obj: LineStyleType): LineStyleType {
    return new LineStyle(obj);
  }

  createListStyle(obj: ListStyleType): ListStyleType {
    return new ListStyle(obj);
  }

  createPolyStyle(obj: PolyStyleType): PolyStyleType {
    return new PolyStyle(obj);
  }

  createItemIcon(obj: ItemIconType): ItemIconType {
    return new ItemIcon(obj);
  }

  createData(obj: DataType): DataType {
    return new Data(obj);
  }

  createExtendedData(obj: ExtendedDataType): ExtendedDataType {
    return new ExtendedData(obj);
  }

  createSchemaData(obj: SchemaDataType): SchemaDataType {
    return new SchemaData(obj);
  }

  createSimpleData(obj: SimpleDataType): SimpleDataType {
    return new SimpleData(obj);
  }

  createNetworkLinkControl(obj: NetworkLinkControlType): NetworkLinkControlType {
    return new NetworkLinkControl(obj);
  }

  createUpdate(obj: UpdateType): UpdateType {
    return new Update(obj);
  }

  createChange(obj: ChangeType): ChangeType {
    return new Change(obj);
  }

  createCreate(obj: CreateType): CreateType {
    return new Create(obj);
  }

  createDelete(obj: DeleteType): DeleteType {
    return new Delete(obj);
  }

  setSharedStyle(sharedStyle: AbstractStyleSelectorType[]): void {
    // Shared styles shall have an id attribute
    this.sharedStyle = sharedStyle.filter(s => s.id !== undefined);
  }

  getSharedStyle(): AbstractStyleSelectorType[] {
    return this.sharedStyle;
  }

  resetSharedStyle(): void {
    this.sharedStyle = [];
  }
}