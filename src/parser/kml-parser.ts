import {XMLParser} from 'fast-xml-parser';
import {AbstractObjectType} from '../dom/kml/types/abstract-object-type';
import {AbstractFeatureType} from '../dom/kml/types/abstract-feature-type';
import {AbstractGeometryType} from '../dom/kml/types/abstract-geometry-type';
import {AbstractContainerType} from '../dom/kml/types/abstract-container-type';
import {AbstractOverlayType} from '../dom/kml/types/abstract-overlay-type';
import {BasicLinkType} from '../dom/kml/types/basic-link-type';
import {LinkType} from '../dom/kml/types/link-type';
import {AbstractLatLonBoxType} from '../dom/kml/types/abstract-lat-lon-box-type';
import {AbstractViewType} from '../dom/kml/types/abstract-view-type';
import {AbstractTimePrimitiveType} from '../dom/kml/types/abstract-time-primitive-type';
import {AbstractStyleSelectorType} from '../dom/kml/types/abstract-style-selector-type';
import {AbstractSubStyleType} from '../dom/kml/types/abstract-sub-style-type';
import {AbstractColorStyleType} from '../dom/kml/types/abstract-color-style-type';
import {AltitudeModeEnumType} from '../dom/kml/types/altitude-mode-enum-type';
import {Angle90Type} from '../dom/kml/types/angle-90-type';
import {Angle180Type} from '../dom/kml/types/angle-180-type';
import {Angle360Type} from '../dom/kml/types/angle-360-type';
import {ColorType} from '../dom/kml/types/color-type';
import {ColorModeEnumType} from '../dom/kml/types/color-mode-enum.type';
import {DateTimeType} from '../dom/kml/types/date-time-type';
import {DisplayModeEnumType} from '../dom/kml/types/display-mode-enum-type';
import {GridOriginEnumType} from '../dom/kml/types/grid-origin-enum-type';
import {RefreshModeEnumType} from '../dom/kml/types/refresh-mode-enum-type';
import {ShapeEnumType} from '../dom/kml/types/shape-enum-type';
import {StyleStateEnumType} from '../dom/kml/types/style-state-enum-type';
import {UnitsEnumType} from '../dom/kml/types/units-enum-type';
import {Vec2Type} from '../dom/kml/types/vec2-type';
import {ViewRefreshModeEnumType} from '../dom/kml/types/view-refresh-mode-enum-type';
import {KmlTagName} from './kml-tag-name';
import {ID} from '../dom/xs/id';
import {NCName} from '../dom/xs/ncname';
import {CoordinatesType} from '../dom/kml/types/coordinates-type';
import {AltitudeModeGroup} from '../dom/kml/altitude-mode-group';
import {AnyURI} from '../dom/xs/anyURI';
import {ListItemTypeEnumType} from '../dom/kml/types/list-item-type-enum-type';
import {ItemIconStateType} from '../dom/kml/types/item-icon-state.type';
import {KMLFactory} from './kml-factory';
import {ItemIconStateEnumType} from '../dom/kml/types/item-icon-state-enum.type';
import {BoundaryType} from '../dom/kml/types/boundary-type';
import {KmlType} from '../dom/kml/types/kml-type';
import {PlacemarkType} from '../dom/kml/types/placemark-type';
import {FolderType} from '../dom/kml/types/folder-type';
import {DocumentType} from '../dom/kml/types/document-type';
import {SchemaType} from '../dom/kml/types/schema-type';
import {SimpleFieldType} from '../dom/kml/types/simple-field-type';
import {LineStringType} from '../dom/kml/types/line-string-type';
import {PolygonType} from '../dom/kml/types/polygon-type';
import {PointType} from '../dom/kml/types/point-type';
import {LinearRingType} from '../dom/kml/types/linear-ring-type';
import {ModelType} from '../dom/kml/types/model-type';
import {LocationType} from '../dom/kml/types/location-type';
import {OrientationType} from '../dom/kml/types/orientation-type';
import {ScaleType} from '../dom/kml/types/scale-type';
import {ResourceMapType} from '../dom/kml/types/resource-map-type';
import {AliasType} from '../dom/kml/types/alias-type';
import {MultiGeometryType} from '../dom/kml/types/multi-geometry-type';
import {NetworkLinkType} from '../dom/kml/types/network-link-type';
import {GroundOverlayType} from '../dom/kml/types/ground-overlay-type';
import {PhotoOverlayType} from '../dom/kml/types/photo-overlay-type';
import {ScreenOverlayType} from '../dom/kml/types/screen-overlay-type';
import {LatLonBoxType} from '../dom/kml/types/lat-lon-box-type';
import {ViewVolumeType} from '../dom/kml/types/view-volume-type';
import {ImagePyramidType} from '../dom/kml/types/image-pyramid-type';
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
import {PolyStyleType} from '../dom/kml/types/poly-style-type';
import {ListStyleType} from '../dom/kml/types/list-style-type';
import {ItemIconType} from '../dom/kml/types/item-icon-type';
import {RegionType} from '../dom/kml/types/region-type';
import {LatLonAltBoxType} from '../dom/kml/types/lat-lon-alt-box-type';
import {LodType} from '../dom/kml/types/lod-type';
import {ExtendedDataType} from '../dom/kml/types/extended-data-type';
import {DataType} from '../dom/kml/types/data-type';
import {SchemaDataType} from '../dom/kml/types/schema-data-type';
import {SimpleDataType} from '../dom/kml/types/simple-data-type';
import {NetworkLinkControlType} from '../dom/kml/types/network-link-control.type';
import {UpdateType} from '../dom/kml/types/update-type';
import {CreateType} from '../dom/kml/types/create-type';
import {DeleteType} from '../dom/kml/types/delete-type';
import {ChangeType} from '../dom/kml/types/change-type';
import {AtomPersonConstruct} from '../dom/atom/atom-person-construct';
import {AtomLink} from '../dom/atom/atom-link';
import {AtomAttributeName} from './atom-attribute-name';
import {AtomTagName} from './atom-tag-name';
import {KmlAttributeName} from './kml-attribute-name';

export class KMLParser {

  private parseOptions = {
    attributeNamePrefix: '@_',
    ignoreAttributes: false,
    ignoreNameSpace: false
  }

  private xmlParser: XMLParser = new XMLParser(this.parseOptions);
  private kmlFactory: KMLFactory;

  constructor(kmlFactory?: KMLFactory) {
    if (kmlFactory) {
      this.kmlFactory = kmlFactory;
    } else {
      this.kmlFactory = new KMLFactory();
    }
  }

  public parse(kml: string): KmlType | undefined {
    const obj = this.xmlParser.parse(kml);
    return this.readChildElement(KmlTagName.kml, obj, this.readKml);
  }

  protected readTextContent(node: any): string | undefined {

    if (node === undefined) {
      return undefined;
    }

    return node['#text'];
  }

  protected readChildElement<T>(
      tagName: string,
      parent: any,
      readMethod: ((el: any, parser: KMLParser) => T)): T | undefined {

    if (parent === undefined || parent === null) {
      return undefined;
    }

    const obj = parent[tagName];

    if (obj === undefined || obj === null) {
      return undefined;
    }

    return readMethod(obj, this);
  }

  protected readChildElementArray<T>(
      tagName: string,
      parent: any,
      readMethod: ((el: any, parser: KMLParser) => T)): T[] {

    if (parent === undefined || parent === null) {
      return [];
    }

    const obj = parent[tagName];

    if (obj === undefined || obj === null) {
      return [];
    }

    if (obj instanceof Array) {
      return obj.map(v => readMethod(v, this));
    }

    return [readMethod(obj, this)];
  }

  protected readAttribute<T>(
      attributeName: string,
      node: any,
      readMethod: ((el: any, parser: KMLParser) => T)): T | undefined {

    if (node === undefined || node === null) {
      return undefined;
    }

    const obj = node['@_' + attributeName];

    if (obj === undefined || obj === null) {
      return undefined;
    }

    return readMethod(obj, this);
  }

  protected readAbstractType<T>(
      parent: any,
      readMethod: ((el: any, parser: KMLParser) => T)): T {

    /*
    if (parent === undefined || parent === null) {
      return undefined;
    }*/

    return readMethod(parent, this);
  }

  protected readAbstractTypeArray<T extends any[] | []>(
      parent: any,
      readMethod: ((el: any, parser: KMLParser) => T)): T | [] {

    if (parent === undefined || parent === null) {
      return [];
    }

    return readMethod(parent, this);
  }

  private readAbstractObjectType(node: any, parser: KMLParser): AbstractObjectType {
    return {
      id: parser.readAttribute(KmlAttributeName.id, node, parser.readXsID) ?? '',
      targetId: parser.readAttribute(KmlAttributeName.targetId, node, parser.readXsNCName) ?? ''
    }
  }

  private readAbstractFeatureType(node: any, parser: KMLParser): AbstractFeatureType {

    return {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      name: parser.readChildElement(KmlTagName.name, node, parser.readXsString) ?? '',
      visibility: parser.readChildElement(KmlTagName.visibility, node, parser.readXsBoolean) ?? true,
      open: parser.readChildElement(KmlTagName.open, node, parser.readXsBoolean) ?? false,
      atomAuthor: parser.readChildElement(KmlTagName.author, node, parser.readAtomAuthor),
      atomLink: parser.readChildElement(KmlTagName.link, node, parser.readAtomLink),
      address: parser.readChildElement(KmlTagName.address, node, parser.readXsString) ?? '',
      phoneNumber: parser.readChildElement(KmlTagName.phoneNumber, node, parser.readXsString) ?? '',
      snippet: parser.readChildElement(KmlTagName.snippet, node, parser.readXsString) ?? '',
      description: parser.readChildElement(KmlTagName.description, node, parser.readXsString) ?? '',
      styleUrl: parser.readChildElement(KmlTagName.styleUrl, node, parser.readXsAnyUri),
      view: parser.readAbstractType(node, parser.readAbstractViewGroup),
      timePrimitive: parser.readAbstractType(node, parser.readAbstractTimePrimitiveGroup),
      styleSelector: parser.readAbstractTypeArray(node, parser.readAbstractStyleSelectorGroupArray),
      region: parser.readChildElement(KmlTagName.Region, node, parser.readRegion),
      extendedData: parser.readChildElement(KmlTagName.ExtendedData, node, parser.readExtendedData)
    };
  }

  private readAbstractContainerType(node: any, parser: KMLParser): AbstractContainerType {
    return parser.readAbstractType(node, parser.readAbstractFeatureType);
  }

  private readAbstractGeometryType(node: any, parser: KMLParser): AbstractGeometryType {
    return parser.readAbstractType(node, parser.readAbstractObjectType);
  }

  private readAbstractOverlayType(node: any, parser: KMLParser): AbstractOverlayType {
    return {
      ...parser.readAbstractType(node, parser.readAbstractFeatureType),
      color: parser.readChildElement(KmlTagName.color, node, parser.readColorType) ?? 'ffffffff',
      drawOrder: parser.readChildElement(KmlTagName.drawOrder, node, parser.readXsInt) ?? 0,
      icon: parser.readChildElement(KmlTagName.Icon, node, parser.readIcon)
    }
  }

  private readAbstractStyleSelectorType(node: any, parser: KMLParser): AbstractStyleSelectorType {
    return parser.readAbstractType(node, parser.readAbstractObjectType);
  }

  private readAbstractSubStyleType(node: any, parser: KMLParser): AbstractSubStyleType {
    return parser.readAbstractType(node, parser.readAbstractObjectType);
  }

  private readAbstractColorStyleType(node: any, parser: KMLParser): AbstractColorStyleType {
    return {
      ...parser.readAbstractType(node, parser.readAbstractSubStyleType),
      color: parser.readChildElement(KmlTagName.color, node, parser.readColorType) ?? 'ffffffff',
      colorMode: parser.readChildElement(KmlTagName.colorMode, node, parser.readColorModeEnumType) ?? ColorModeEnumType.normal
    }
  }

  private readAbstractViewType(node: any, parser: KMLParser): AbstractViewType {
    return parser.readAbstractType(node, parser.readAbstractObjectType);
  }

  private readAbstractLatLonBoxType(node: any, parser: KMLParser): AbstractLatLonBoxType {
    return {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      north: parser.readChildElement(KmlTagName.north, node, parser.readAngle180Type) ?? 180.0,
      south: parser.readChildElement(KmlTagName.south, node, parser.readAngle180Type) ?? -180.0,
      east: parser.readChildElement(KmlTagName.east, node, parser.readAngle180Type) ?? 180.0,
      west: parser.readChildElement(KmlTagName.west, node, parser.readAngle180Type) ?? -180.0
    }
  }

  private readBasicLinkType(node: any, parser: KMLParser): BasicLinkType {
    return {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      href: parser.readChildElement(KmlTagName.href, node, parser.readXsString)
    }
  }

  private readLinkType(node: any, parser: KMLParser): LinkType {
    return {
      ...parser.readAbstractType(node, parser.readBasicLinkType),
      refreshMode: parser.readChildElement(KmlTagName.refreshMode, node, parser.readRefreshModeEnumType) ?? RefreshModeEnumType.onChange,
      refreshInterval: parser.readChildElement(KmlTagName.refreshInterval, node, parser.readXsDouble) ?? 4.0,
      viewRefreshMode: parser.readChildElement(KmlTagName.viewRefreshMode, node, parser.readViewRefreshModeEnumType) ?? ViewRefreshModeEnumType.never,
      viewRefreshTime: parser.readChildElement(KmlTagName.viewRefreshTime, node, parser.readXsDouble) ?? 4.0,
      viewBoundScale: parser.readChildElement(KmlTagName.viewBoundScale, node, parser.readXsDouble) ?? 1.0,
      viewFormat: parser.readChildElement(KmlTagName.viewFormat, node, parser.readXsString) ?? '',
      httpQuery: parser.readChildElement(KmlTagName.httpQuery, node, parser.readXsString) ?? ''
    }
  }

  private readAbstractTimePrimitiveType(node: any, parser: KMLParser): AbstractTimePrimitiveType {
    return parser.readAbstractType(node, parser.readAbstractObjectType);
  }

  private readAbstractObjectGroupArray(node: any, parser: KMLParser): AbstractObjectType[] {

    const abstractFeatureGroupArray = parser.readAbstractTypeArray(node, parser.readAbstractFeatureGroupArray); // Includes AbstractContainerGroup, AbstractOverlayGroup
    const abstractGeometryGroupArray = parser.readAbstractTypeArray(node, parser.readAbstractGeometryGroupArray);
    const abstractStyleSelectorGroupArray = parser.readAbstractTypeArray(node, parser.readAbstractStyleSelectorGroupArray);
    const abstractTimePrimitiveGroupArray = parser.readAbstractTypeArray(node, parser.readAbstractTimePrimitiveGroupArray);
    const abstractViewGroupArray = parser.readAbstractTypeArray(node, parser.readAbstractViewGroupArray);
    const abstractSubStyleGroupArray = parser.readAbstractTypeArray(node, parser.readAbstractSubStyleGroupArray); // Includes AbstractColorStyleGroup
    const link = parser.readChildElementArray(KmlTagName.Link, node, parser.readLink);
    const icon = parser.readChildElementArray(KmlTagName.Icon, node, parser.readIcon);
    const orientation = parser.readChildElementArray(KmlTagName.Orientation, node, parser.readOrientation);
    const location = parser.readChildElementArray(KmlTagName.Location, node, parser.readLocation);
    const scale = parser.readChildElementArray(KmlTagName.Scale, node, parser.readScale);
    const region = parser.readChildElementArray(KmlTagName.Region, node, parser.readRegion);
    const lod = parser.readChildElementArray(KmlTagName.Lod, node, parser.readLod);
    const latLonBox = parser.readChildElementArray(KmlTagName.LatLonBox, node, parser.readLatLonBox);
    const latLonAltBox = parser.readChildElementArray(KmlTagName.LatLonAltBox, node, parser.readLatLonAltBox);
    const data = parser.readChildElementArray(KmlTagName.Data, node, parser.readData);
    const schemaD = parser.readChildElementArray(KmlTagName.SchemaData, node, parser.readSchemaData);
    const resourceMap = parser.readChildElementArray(KmlTagName.ResourceMap, node, parser.readResourceMap);
    const alias = parser.readChildElementArray(KmlTagName.Alias, node, parser.readAlias);
    const viewVolume = parser.readChildElementArray(KmlTagName.ViewVolume, node, parser.readViewVolume);
    const imagePyramid = parser.readChildElementArray(KmlTagName.ImagePyramid, node, parser.readImagePyramid);
    const itemIcon = parser.readChildElementArray(KmlTagName.ItemIcon, node, parser.readItemIcon);
    const pair = parser.readChildElementArray(KmlTagName.Pair, node, parser.readPair);

    let abstractObjectGroupArray: AbstractObjectType[] = [];

    abstractObjectGroupArray = abstractObjectGroupArray.concat(
        abstractFeatureGroupArray,
        abstractGeometryGroupArray,
        abstractStyleSelectorGroupArray,
        abstractTimePrimitiveGroupArray,
        abstractViewGroupArray,
        abstractSubStyleGroupArray,
        link,
        icon,
        orientation,
        location,
        scale,
        region,
        lod,
        latLonBox,
        latLonAltBox,
        data,
        schemaD,
        resourceMap,
        alias,
        viewVolume,
        imagePyramid,
        itemIcon,
        pair
    );

    return abstractObjectGroupArray;
  }

  private readAbstractFeatureGroup(node: any, parser: KMLParser): AbstractFeatureType | undefined {

    const placemark = parser.readChildElement(KmlTagName.Placemark, node, parser.readPlacemark);
    const networkLink = parser.readChildElement(KmlTagName.NetworkLink, node, parser.readNetworkLink);
    const abstractContainerGroup = parser.readAbstractType(node, parser.readAbstractContainerGroup);
    const abstractOverlayGroup = parser.readAbstractType(node, parser.readAbstractOverlayGroup);

    return placemark || networkLink || abstractContainerGroup || abstractOverlayGroup;
  }

  private readAbstractFeatureGroupArray(node: any, parser: KMLParser): AbstractFeatureType[] {

    const placemark = parser.readChildElementArray(KmlTagName.Placemark, node, parser.readPlacemark);
    const networkLink = parser.readChildElementArray(KmlTagName.NetworkLink, node, parser.readNetworkLink);
    const abstractContainerGroupArray = parser.readAbstractTypeArray(node, parser.readAbstractContainerGroupArray);
    const abstractOverlayGroupArray = parser.readAbstractTypeArray(node, parser.readAbstractOverlayGroupArray);

    let abstractFeatureGroupArray: AbstractFeatureType[] = [];

    abstractFeatureGroupArray = abstractFeatureGroupArray.concat(
        placemark,
        networkLink,
        abstractContainerGroupArray,
        abstractOverlayGroupArray
    )

    return abstractFeatureGroupArray;
  }

  private readAbstractContainerGroup(node: any, parser: KMLParser): AbstractContainerType | undefined {

    const document = parser.readChildElement(KmlTagName.Document, node, parser.readDocument);
    const folder = parser.readChildElement(KmlTagName.Folder, node, parser.readFolder);

    return document || folder;
  }

  private readAbstractContainerGroupArray(node: any, parser: KMLParser): AbstractContainerType[] {

    const document = parser.readChildElementArray(KmlTagName.Document, node, parser.readDocument);
    const folder = parser.readChildElementArray(KmlTagName.Folder, node, parser.readFolder);

    let abstractContainerGroupArray: AbstractContainerType[] = [];

    abstractContainerGroupArray = abstractContainerGroupArray.concat(
        document,
        folder
    );

    return abstractContainerGroupArray;
  }

  private readAbstractOverlayGroup(node: any, parser: KMLParser): AbstractOverlayType | undefined {

    const groundOverlay = parser.readChildElement(KmlTagName.GroundOverlay, node, parser.readGroundOverlay);
    const photoOverlay = parser.readChildElement(KmlTagName.PhotoOverlay, node, parser.readPhotoOverlay);
    const screenOverlay = parser.readChildElement(KmlTagName.ScreenOverlay, node, parser.readScreenOverlay);

    return groundOverlay || photoOverlay || screenOverlay;
  }

  private readAbstractOverlayGroupArray(node: any, parser: KMLParser): AbstractOverlayType[] {

    const groundOverlay = parser.readChildElementArray(KmlTagName.GroundOverlay, node, parser.readGroundOverlay);
    const photoOverlay = parser.readChildElementArray(KmlTagName.PhotoOverlay, node, parser.readPhotoOverlay);
    const screenOverlay = parser.readChildElementArray(KmlTagName.ScreenOverlay, node, parser.readScreenOverlay);

    let abstractOverlayGroupArray: AbstractOverlayType[] = [];

    abstractOverlayGroupArray = abstractOverlayGroupArray.concat(
        groundOverlay,
        photoOverlay,
        screenOverlay
    );

    return abstractOverlayGroupArray
  }

  private readAbstractStyleSelectorGroup(node: any, parser: KMLParser): AbstractStyleSelectorType | undefined {

    const style = parser.readChildElement(KmlTagName.Style, node, parser.readStyle);
    const styleMap = parser.readChildElement(KmlTagName.StyleMap, node, parser.readStyleMap);

    return style || styleMap;
  }

  private readAbstractStyleSelectorGroupArray(node: any, parser: KMLParser): AbstractStyleSelectorType[] {

    const style = parser.readChildElementArray(KmlTagName.Style, node, parser.readStyle);
    const styleMap = parser.readChildElementArray(KmlTagName.StyleMap, node, parser.readStyleMap);

    let abstractStyleSelectorGroupArray: AbstractStyleSelectorType[] = [];

    abstractStyleSelectorGroupArray = abstractStyleSelectorGroupArray.concat(
        style,
        styleMap
    );

    return abstractStyleSelectorGroupArray;
  }

  private readAbstractGeometryGroup(node: any, parser: KMLParser): AbstractGeometryType | undefined {

    const multiGeometry = parser.readChildElement(KmlTagName.MultiGeometry, node, parser.readMultiGeometry);
    const lineString = parser.readChildElement(KmlTagName.LineString, node, parser.readLineString);
    const polygon = parser.readChildElement(KmlTagName.Polygon, node, parser.readPolygon);
    const point = parser.readChildElement(KmlTagName.Point, node, parser.readPoint);
    const linearRing = parser.readChildElement(KmlTagName.LinearRing, node, parser.readLinearRing);
    const model = parser.readChildElement(KmlTagName.Model, node, parser.readModel);

    return multiGeometry || lineString || polygon || point || linearRing || model;
  }

  private readAbstractGeometryGroupArray(node: any, parser: KMLParser): AbstractGeometryType[] {

    const multiGeometry = parser.readChildElementArray(KmlTagName.MultiGeometry, node, parser.readMultiGeometry);
    const lineString = parser.readChildElementArray(KmlTagName.LineString, node, parser.readLineString);
    const polygon = parser.readChildElementArray(KmlTagName.Polygon, node, parser.readPolygon);
    const point = parser.readChildElementArray(KmlTagName.Point, node, parser.readPoint);
    const linearRing = parser.readChildElementArray(KmlTagName.LinearRing, node, parser.readLinearRing);
    const model = parser.readChildElementArray(KmlTagName.Model, node, parser.readModel);

    let abstractGeometryGroupArray: AbstractGeometryType[] = [];

    abstractGeometryGroupArray = abstractGeometryGroupArray.concat(
        multiGeometry,
        lineString,
        polygon,
        point,
        linearRing,
        model
    );

    return abstractGeometryGroupArray;
  }

  private readAbstractViewGroup(node: any, parser: KMLParser): AbstractViewType | undefined {

    const camera = parser.readChildElement(KmlTagName.Camera, node, parser.readCamera);
    const lookAt = parser.readChildElement(KmlTagName.LookAt, node, parser.readLookAt);

    return camera || lookAt;
  }

  private readAbstractViewGroupArray(node: any, parser: KMLParser): AbstractViewType[] {

    const camera = parser.readChildElementArray(KmlTagName.Camera, node, parser.readCamera);
    const lookAt = parser.readChildElementArray(KmlTagName.LookAt, node, parser.readLookAt);

    let abstractViewGroupArray: AbstractViewType[] = [];

    abstractViewGroupArray.concat(
        camera,
        lookAt
    )

    return abstractViewGroupArray;
  }

  private readAbstractSubStyleGroupArray(node: any, parser: KMLParser): AbstractSubStyleType[] {

    const balloonStyle = parser.readChildElementArray(KmlTagName.BalloonStyle, node, parser.readBalloonStyle);
    const listStyle = parser.readChildElementArray(KmlTagName.ListStyle, node, parser.readListStyle);
    const colorStyleGroupArray = parser.readAbstractTypeArray(node, parser.readAbstractColorStyleGroupArray);

    let abstractSubStyleGroupArray: AbstractSubStyleType[] = [];

    abstractSubStyleGroupArray = abstractSubStyleGroupArray.concat(
        balloonStyle,
        listStyle,
        colorStyleGroupArray
    );

    return abstractSubStyleGroupArray;
  }

  private readAbstractColorStyleGroupArray(node: any, parser: KMLParser): AbstractColorStyleType[] {

    const iconStyle = parser.readChildElementArray(KmlTagName.IconStyle, node, parser.readIconStyle);
    const labelStyle = parser.readChildElementArray(KmlTagName.LabelStyle, node, parser.readLabelStyle);
    const lineStyle = parser.readChildElementArray(KmlTagName.LineStyle, node, parser.readLineStyle);
    const polyStyle = parser.readChildElementArray(KmlTagName.PolyStyle, node, parser.readPolyStyle);

    let abstractColorStyleGroupArray: AbstractColorStyleType[] = [];

    abstractColorStyleGroupArray = abstractColorStyleGroupArray.concat(
        iconStyle,
        labelStyle,
        lineStyle,
        polyStyle
    );

    return abstractColorStyleGroupArray;
  }

  private readAbstractTimePrimitiveGroup(node: any, parser: KMLParser): AbstractTimePrimitiveType | undefined {

    const timeSpan = parser.readChildElement(KmlTagName.TimeSpan, node, parser.readTimeSpan);
    const timeStamp = parser.readChildElement(KmlTagName.TimeStamp, node, parser.readTimeStamp);

    return timeSpan || timeStamp;
  }

  private readAbstractTimePrimitiveGroupArray(node: any, parser: KMLParser): AbstractTimePrimitiveType[] {

    const timeSpan = parser.readChildElementArray(KmlTagName.TimeSpan, node, parser.readTimeSpan);
    const timeStamp = parser.readChildElementArray(KmlTagName.TimeStamp, node, parser.readTimeStamp);

    let abstractTimePrimitiveGroupArray: AbstractTimePrimitiveType[] = [];

    abstractTimePrimitiveGroupArray = abstractTimePrimitiveGroupArray.concat(
        timeSpan,
        timeStamp
    );

    return abstractTimePrimitiveGroupArray;
  }

  private readKml(node: any, parser: KMLParser): KmlType {

    const kml: KmlType = {
      hint: parser.readAttribute(KmlAttributeName.hint, node, parser.readXsString) ?? '',
      networkLinkControl: parser.readChildElement(KmlTagName.NetworkLinkControl, node, parser.readNetworkLinkControl),
      feature: parser.readAbstractType(node, parser.readAbstractFeatureGroup)
    }

    return parser.kmlFactory.createKml(kml);
  }

  private readPlacemark(node: any, parser: KMLParser): PlacemarkType {

    const placemarkType: PlacemarkType = {
      ...parser.readAbstractType(node, parser.readAbstractFeatureType),
      geometry: parser.readAbstractType(node, parser.readAbstractGeometryGroup)
    };

    return parser.kmlFactory.createPlacemark(placemarkType);
  }

  private readFolder(node: any, parser: KMLParser): FolderType {

    const folderType: FolderType = {
      ...parser.readAbstractType(node, parser.readAbstractContainerType),
      feature: parser.readAbstractTypeArray(node, parser.readAbstractFeatureGroupArray)
    }

    return parser.kmlFactory.createFolder(folderType);
  }

  private readDocument(node: any, parser: KMLParser): DocumentType {

    const abstractContainerType = parser.readAbstractType(node, parser.readAbstractContainerType);

    parser.kmlFactory.setSharedStyle(abstractContainerType?.styleSelector ?? []);

    const documentType: DocumentType = {
      ...abstractContainerType,
      schema: parser.readChildElementArray(KmlTagName.Schema, node, parser.readSchema),
      feature: parser.readAbstractTypeArray(node, parser.readAbstractFeatureGroupArray)
    }

    parser.kmlFactory.resetSharedStyle();
    return parser.kmlFactory.createDocument(documentType);
  }

  private readSchema(node: any, parser: KMLParser): SchemaType {

    const schemaType: SchemaType = {
      id: parser.readAttribute(KmlAttributeName.id, node, parser.readXsID) ?? '',
      name: parser.readAttribute(KmlAttributeName.name, node, parser.readXsString) ?? '',
      simpleField: parser.readChildElementArray(KmlTagName.SimpleField, node, parser.readSimpleField)
    }

    return parser.kmlFactory.createSchema(schemaType);
  }

  private readSimpleField(node: any, parser: KMLParser): SimpleFieldType {

    const simpleFieldType: SimpleFieldType = {
      type: parser.readAttribute(KmlAttributeName.type, node, parser.readXsString) ?? '',
      name: parser.readAttribute(KmlAttributeName.name, node, parser.readXsString) ?? '',
      displayName: parser.readChildElement(KmlTagName.displayName, node, parser.readXsString) ?? ''
    }

    return parser.kmlFactory.createSimpleField(simpleFieldType);
  }

  private readLineString(node: any, parser: KMLParser): LineStringType {

    const lineStringType: LineStringType = {
      ...parser.readAbstractType(node, parser.readAbstractGeometryType),
      extrude: parser.readChildElement(KmlTagName.extrude, node, parser.readXsBoolean) ?? false,
      tessellate: parser.readChildElement(KmlTagName.tessellate, node, parser.readXsBoolean) ?? false,
      altitudeMode: parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup) ?? AltitudeModeEnumType.clampToGround,
      coordinates: parser.readChildElement(KmlTagName.coordinates, node, parser.readCoordinates) ?? []
    }

    return parser.kmlFactory.createLineString(lineStringType);
  }

  private readPolygon(node: any, parser: KMLParser): PolygonType {

    const polygonType: PolygonType = {
      ...parser.readAbstractType(node, parser.readAbstractGeometryType),
      extrude: parser.readChildElement(KmlTagName.extrude, node, parser.readXsBoolean) ?? false,
      tessellate: parser.readChildElement(KmlTagName.tessellate, node, parser.readXsBoolean) ?? false,
      altitudeMode: parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup) ?? AltitudeModeEnumType.clampToGround,
      outerBoundaryIs: parser.readChildElement(KmlTagName.outerBoundaryIs, node, parser.readBoundaryType),
      innerBoundaryIs: parser.readChildElement(KmlTagName.innerBoundaryIs, node, parser.readBoundaryTypeArray) ?? []
    }

    return parser.kmlFactory.createPolygon(polygonType);
  }

  private readPoint(node: any, parser: KMLParser): PointType {

    const pointType: PointType = {
      ...parser.readAbstractType(node, parser.readAbstractGeometryType),
      extrude: parser.readChildElement(KmlTagName.extrude, node, parser.readXsBoolean) ?? false,
      altitudeMode: parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup) ?? AltitudeModeEnumType.clampToGround,
      coordinates: parser.readChildElement(KmlTagName.coordinates, node, parser.readCoordinates) ?? []
    }

    return parser.kmlFactory.createPoint(pointType);
  }

  private readLinearRing(node: any, parser: KMLParser): LinearRingType {

    const linearRingType: LinearRingType = {
      ...parser.readAbstractType(node, parser.readAbstractGeometryType),
      extrude: parser.readChildElement(KmlTagName.extrude, node, parser.readXsBoolean) ?? false,
      tessellate: parser.readChildElement(KmlTagName.tessellate, node, parser.readXsBoolean) ?? false,
      altitudeMode: parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup) ?? AltitudeModeEnumType.clampToGround,
      coordinates: parser.readChildElement(KmlTagName.coordinates, node, parser.readCoordinates) ?? []
    }

    return parser.kmlFactory.createLinearRing(linearRingType);
  }

  private readModel(node: any, parser: KMLParser): ModelType {

    const modelType: ModelType = {
      ...parser.readAbstractType(node, parser.readAbstractGeometryType),
      altitudeMode: parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup) ?? AltitudeModeEnumType.clampToGround,
      location: parser.readChildElement(KmlTagName.Location, node, parser.readLocation),
      orientation: parser.readChildElement(KmlTagName.Orientation, node, parser.readOrientation),
      scale: parser.readChildElement(KmlTagName.Scale, node, parser.readScale),
      link: parser.readChildElement(KmlTagName.Link, node, parser.readLink),
      resourceMap: parser.readChildElement(KmlTagName.ResourceMap, node, parser.readResourceMap)
    }

    return parser.kmlFactory.createModel(modelType);
  }

  private readLocation(node: any, parser: KMLParser): LocationType {

    const locationType: LocationType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      longitude: parser.readChildElement(KmlTagName.longitude, node, parser.readAngle180Type) ?? 0.0,
      latitude: parser.readChildElement(KmlTagName.latitude, node, parser.readAngle90Type) ?? 0.0,
      altitude: parser.readChildElement(KmlTagName.altitude, node, parser.readXsDouble) ?? 0.0
    }

    return parser.kmlFactory.createLocation(locationType);
  }

  private readOrientation(node: any, parser: KMLParser): OrientationType {

    const orientationType: OrientationType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      heading: parser.readChildElement(KmlTagName.heading, node, parser.readAngle360Type) ?? 0.0,
      tilt: parser.readChildElement(KmlTagName.tilt, node, parser.readAngle180Type) ?? 0.0,
      roll: parser.readChildElement(KmlTagName.roll, node, parser.readAngle360Type) ?? 0.0
    }

    return parser.kmlFactory.createOrientation(orientationType);
  }

  private readScale(node: any, parser: KMLParser): ScaleType {

    const scaleType: ScaleType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      x: parser.readChildElement(KmlTagName.x, node, parser.readXsDouble) ?? 1.0,
      y: parser.readChildElement(KmlTagName.y, node, parser.readXsDouble) ?? 1.0,
      z: parser.readChildElement(KmlTagName.z, node, parser.readXsDouble) ?? 1.0
    }

    return parser.kmlFactory.createScale(scaleType);
  }

  private readResourceMap(node: any, parser: KMLParser): ResourceMapType {

    const resourceMapType: ResourceMapType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      alias: parser.readChildElementArray(KmlTagName.Alias, node, parser.readAlias)
    }

    return parser.kmlFactory.createResourceMap(resourceMapType);
  }

  private readAlias(node: any, parser: KMLParser): AliasType {

    const aliasType: AliasType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      targetHref: parser.readChildElement(KmlTagName.targetHref, node, parser.readXsString),
      sourceHref: parser.readChildElement(KmlTagName.sourceHref, node, parser.readXsString)
    }

    return parser.kmlFactory.createAlias(aliasType);
  }

  private readMultiGeometry(node: any, parser: KMLParser): MultiGeometryType {

    const multiGeometryType: MultiGeometryType = {
      ...parser.readAbstractType(node, parser.readAbstractGeometryType),
      geometry: parser.readAbstractTypeArray(node, parser.readAbstractGeometryGroupArray)
    }

    return parser.kmlFactory.createMultiGeometry(multiGeometryType);
  }

  private readNetworkLink(node: any, parser: KMLParser): NetworkLinkType {

    const networkLinkType: NetworkLinkType = {
      ...parser.readAbstractType(node, parser.readAbstractFeatureType),
      refreshVisibility: parser.readChildElement(KmlTagName.refreshVisibility, node, parser.readXsBoolean) ?? false,
      flyToView: parser.readChildElement(KmlTagName.flyToView, node, parser.readXsBoolean) ?? false,
      link: parser.readChildElement(KmlTagName.Link, node, parser.readLink)
    }

    return parser.kmlFactory.createNetworkLink(networkLinkType);
  }

  private readGroundOverlay(node: any, parser: KMLParser): GroundOverlayType {

    const groundOverlayType: GroundOverlayType = {
      ...parser.readAbstractType(node, parser.readAbstractOverlayType),
      altitude: parser.readChildElement(KmlTagName.altitude, node, parser.readXsDouble) ?? 0.0,
      altitudeMode: parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup) ?? AltitudeModeEnumType.clampToGround,
      latLonBox: parser.readChildElement(KmlTagName.latLonBox, node, parser.readLatLonBox)
    }

    return parser.kmlFactory.createGroundOverlay(groundOverlayType);
  }

  private readPhotoOverlay(node: any, parser: KMLParser): PhotoOverlayType {

    const photoOverlayType: PhotoOverlayType = {
      ...parser.readAbstractType(node, parser.readAbstractOverlayType),
      rotation: parser.readChildElement(KmlTagName.rotation, node, parser.readAngle180Type) ?? 0.0,
      viewVolume: parser.readChildElement(KmlTagName.viewVolume, node, parser.readViewVolume),
      imagePyramid: parser.readChildElement(KmlTagName.imagePyramid, node, parser.readImagePyramid),
      point: parser.readChildElement(KmlTagName.Point, node, parser.readPoint),
      shape: parser.readChildElement(KmlTagName.shape, node, parser.readShapeEnumType) ?? ShapeEnumType.rectangle
    }

    return parser.kmlFactory.createPhotoOverlay(photoOverlayType);
  }

  private readScreenOverlay(node: any, parser: KMLParser): ScreenOverlayType {

    const screenOverlayType: ScreenOverlayType = {
      ...parser.readAbstractType(node, parser.readAbstractOverlayType),
      overlayXY: parser.readChildElement(KmlTagName.overlayXY, node, parser.readVec2Type) ??
          {x: 1.0, y: 1.0, xunits: UnitsEnumType.fraction, yunits: UnitsEnumType.fraction},
      screenXY: parser.readChildElement(KmlTagName.screenXY, node, parser.readVec2Type) ??
          {x: 1.0, y: 1.0, xunits: UnitsEnumType.fraction, yunits: UnitsEnumType.fraction},
      rotationXY: parser.readChildElement(KmlTagName.rotationXY, node, parser.readVec2Type) ??
          {x: 1.0, y: 1.0, xunits: UnitsEnumType.fraction, yunits: UnitsEnumType.fraction},
      size: parser.readChildElement(KmlTagName.size, node, parser.readVec2Type) ??
          {x: 1.0, y: 1.0, xunits: UnitsEnumType.fraction, yunits: UnitsEnumType.fraction},
      rotation: parser.readChildElement(KmlTagName.rotation, node, parser.readAngle180Type) ?? 0.0
    };

    return parser.kmlFactory.createScreenOverlay(screenOverlayType);
  }

  private readLink(node: any, parser: KMLParser): LinkType {

    const linkType: LinkType = parser.readAbstractType(node, parser.readLinkType)
    return parser.kmlFactory.createLink(linkType);
  }

  private readIcon(node: any, parser: KMLParser): LinkType {

    const linkType: LinkType = parser.readAbstractType(node, parser.readLinkType);
    return parser.kmlFactory.createIcon(linkType);
  }

  private readLatLonBox(node: any, parser: KMLParser): LatLonBoxType {

    const latLonBoxType: LatLonBoxType = {
      ...parser.readAbstractType(node, parser.readAbstractLatLonBoxType),
      rotation: parser.readChildElement(KmlTagName.rotation, node, parser.readAngle180Type) ?? 0.0
    }

    return parser.kmlFactory.createLatLonBox(latLonBoxType);
  }

  private readViewVolume(node: any, parser: KMLParser): ViewVolumeType {

    const viewVolumeType: ViewVolumeType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      leftFov: parser.readChildElement(KmlTagName.leftFov, node, parser.readAngle180Type) ?? 0.0,
      rightFov: parser.readChildElement(KmlTagName.rightFov, node, parser.readAngle180Type) ?? 0.0,
      bottomFov: parser.readChildElement(KmlTagName.bottomFov, node, parser.readAngle90Type) ?? 0.0,
      topFov: parser.readChildElement(KmlTagName.topFov, node, parser.readAngle90Type) ?? 0.0,
      near: parser.readChildElement(KmlTagName.near, node, parser.readXsDouble) ?? 0.0
    }

    return parser.kmlFactory.createViewVolume(viewVolumeType);
  }

  private readImagePyramid(node: any, parser: KMLParser): ImagePyramidType {

    const imagePyramidType: ImagePyramidType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      tileSize: parser.readChildElement(KmlTagName.tileSize, node, parser.readXsInt) ?? 256,
      maxWidth: parser.readChildElement(KmlTagName.maxWidth, node, parser.readXsInt) ?? 0,
      maxHeight: parser.readChildElement(KmlTagName.maxHeight, node, parser.readXsInt) ?? 0,
      gridOrigin: parser.readChildElement(KmlTagName.gridOrigin, node, parser.readGridOriginEnumType) ?? GridOriginEnumType.lowerLeft
    }

    return parser.kmlFactory.createImagePyramid(imagePyramidType);
  }

  private readCamera(node: any, parser: KMLParser): CameraType {

    const cameraType: CameraType = {
      ...parser.readAbstractType(node, parser.readAbstractViewType),
      longitude: parser.readChildElement(KmlTagName.longitude, node, parser.readAngle180Type) ?? 0.0,
      latitude: parser.readChildElement(KmlTagName.latitude, node, parser.readAngle90Type) ?? 0.0,
      altitude: parser.readChildElement(KmlTagName.altitude, node, parser.readXsDouble) ?? 0.0,
      heading: parser.readChildElement(KmlTagName.heading, node, parser.readAngle360Type) ?? 0.0,
      tilt: parser.readChildElement(KmlTagName.tilt, node, parser.readAngle180Type) ?? 0.0,
      roll: parser.readChildElement(KmlTagName.roll, node, parser.readAngle180Type) ?? 0.0,
      altitudeMode: parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup) ?? AltitudeModeEnumType.clampToGround
    }

    return parser.kmlFactory.createCamera(cameraType);
  }

  private readLookAt(node: any, parser: KMLParser): LookAtType {

    const lookAtType: LookAtType = {
      ...parser.readAbstractType(node, parser.readAbstractViewType),
      longitude: parser.readChildElement(KmlTagName.longitude, node, parser.readAngle180Type) ?? 0.0,
      latitude: parser.readChildElement(KmlTagName.latitude, node, parser.readAngle90Type) ?? 0.0,
      altitude: parser.readChildElement(KmlTagName.altitude, node, parser.readXsDouble) ?? 0.0,
      heading: parser.readChildElement(KmlTagName.heading, node, parser.readAngle360Type) ?? 0.0,
      tilt: parser.readChildElement(KmlTagName.tilt, node, parser.readAngle180Type) ?? 0.0,
      range: parser.readChildElement(KmlTagName.range, node, parser.readXsDouble) ?? 0.0,
      altitudeMode: parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup) ?? AltitudeModeEnumType.clampToGround
    }

    return parser.kmlFactory.createLookAt(lookAtType);
  }

  private readTimeSpan(node: any, parser: KMLParser): TimeSpanType {

    const timeSpanType: TimeSpanType = {
      ...parser.readAbstractType(node, parser.readAbstractTimePrimitiveType),
      begin: parser.readChildElement(KmlTagName.begin, node, parser.readDateTimeType),
      end: parser.readChildElement(KmlTagName.end, node, parser.readDateTimeType)
    }

    return parser.kmlFactory.createTimeSpan(timeSpanType);
  }

  private readTimeStamp(node: any, parser: KMLParser): TimeStampType {

    const timeStampType: TimeStampType = {
      ...parser.readAbstractType(node, parser.readAbstractTimePrimitiveType),
      when: parser.readChildElement(KmlTagName.when, node, parser.readDateTimeType)
    }

    return parser.kmlFactory.createTimeStamp(timeStampType);
  }

  private readStyle(node: any, parser: KMLParser): StyleType {

    const styleType: StyleType = {
      ...parser.readAbstractType(node, parser.readAbstractStyleSelectorType),
      iconStyle: parser.readChildElement(KmlTagName.IconStyle, node, parser.readIconStyle),
      labelStyle: parser.readChildElement(KmlTagName.LabelStyle, node, parser.readLabelStyle),
      lineStyle: parser.readChildElement(KmlTagName.LineStyle, node, parser.readLineStyle),
      polyStyle: parser.readChildElement(KmlTagName.PolyStyle, node, parser.readPolyStyle),
      balloonStyle: parser.readChildElement(KmlTagName.BalloonStyle, node, parser.readBalloonStyle),
      listStyle: parser.readChildElement(KmlTagName.ListStyle, node, parser.readListStyle)
    }

    return parser.kmlFactory.createStyle(styleType);
  }

  private readStyleMap(node: any, parser: KMLParser): StyleMapType {

    const styleMapType: StyleMapType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      pair: parser.readChildElementArray(KmlTagName.Pair, node, parser.readPair)
    }

    return parser.kmlFactory.createStyleMap(styleMapType);
  }

  private readPair(node: any, parser: KMLParser): PairType {

    const pairType: PairType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      key: parser.readChildElement(KmlTagName.key, node, parser.readStyleStateEnumType) ?? StyleStateEnumType.normal,
      styleUrl: parser.readChildElement(KmlTagName.styleUrl, node, parser.readXsAnyUri),
      styleSelector: parser.readAbstractType(node, parser.readAbstractStyleSelectorGroup)
    }

    return parser.kmlFactory.createPair(pairType);
  }

  private readBalloonStyle(node: any, parser: KMLParser): BalloonStyleType {

    const balloonStyleType: BalloonStyleType = {
      ...parser.readAbstractType(node, parser.readAbstractSubStyleType),
      bgColor: parser.readChildElement(KmlTagName.bgColor, node, parser.readColorType) ?? 'ffffffff',
      textColor: parser.readChildElement(KmlTagName.textColor, node, parser.readColorType) ?? 'ffffffff',
      text: parser.readChildElement(KmlTagName.text, node, parser.readXsString) ?? '',
      displayMode: parser.readChildElement(KmlTagName.displayMode, node, parser.readDisplayModeEnumType) ?? DisplayModeEnumType.default
    }

    return parser.kmlFactory.createBalloonStyle(balloonStyleType);
  }

  private readIconStyle(node: any, parser: KMLParser): IconStyleType {

    const iconStyleType: IconStyleType = {
      ...parser.readAbstractType(node, parser.readAbstractColorStyleType),
      scale: parser.readChildElement(KmlTagName.scale, node, parser.readXsDouble) ?? 1.0,
      heading: parser.readChildElement(KmlTagName.heading, node, parser.readAngle360Type) ?? 0.0,
      icon: parser.readChildElement(KmlTagName.Icon, node, parser.readBasicLinkType),
      hotSpot: parser.readChildElement(KmlTagName.hotSpot, node, parser.readVec2Type) ??
          {x: 1.0, y: 1.0, xunits: UnitsEnumType.fraction, yunits: UnitsEnumType.fraction}
    }

    return parser.kmlFactory.createIconStyle(iconStyleType);
  }

  private readLabelStyle(node: any, parser: KMLParser): LabelStyleType {

    const labelStyleType: LabelStyleType = {
      ...parser.readAbstractType(node, parser.readAbstractColorStyleType),
      scale: parser.readChildElement(KmlTagName.scale, node, parser.readXsDouble) ?? 1.0
    }

    return parser.kmlFactory.createLabelStyle(labelStyleType);
  }

  private readLineStyle(node: any, parser: KMLParser): LineStyleType {

    const lineStyleType: LineStyleType = {
      ...parser.readAbstractType(node, parser.readAbstractColorStyleType),
      width: parser.readChildElement(KmlTagName.width, node, parser.readXsDouble) ?? 1.0
    }

    return parser.kmlFactory.createLineStyle(lineStyleType);
  }

  private readPolyStyle(node: any, parser: KMLParser): PolyStyleType {

    const polyStyleType: PolyStyleType = {
      ...parser.readAbstractType(node, parser.readAbstractColorStyleType),
      fill: parser.readChildElement(KmlTagName.fill, node, parser.readXsBoolean) ?? true,
      outline: parser.readChildElement(KmlTagName.outline, node, parser.readXsBoolean) ?? true
    }

    return parser.kmlFactory.createPolyStyle(polyStyleType);
  }

  private readListStyle(node: any, parser: KMLParser): ListStyleType {

    const listStyleType: ListStyleType = {
      ...parser.readAbstractType(node, parser.readAbstractColorStyleType),
      listItemType: parser.readChildElement(KmlTagName.listItemType, node, parser.readListItemTypeEnumType) ?? ListItemTypeEnumType.check,
      bgColor: parser.readChildElement(KmlTagName.bgColor, node, parser.readColorType) ?? 'ffffffff',
      itemIcon: parser.readChildElementArray(KmlTagName.ItemIcon, node, parser.readItemIcon),
      maxSnippetLines: parser.readChildElement(KmlTagName.maxSnippetLines, node, parser.readXsInt) ?? 2
    }

    return parser.kmlFactory.createListStyle(listStyleType);
  }

  private readItemIcon(node: any, parser: KMLParser): ItemIconType {

    const itemIconType: ItemIconType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      state: parser.readChildElement(KmlTagName.state, node, parser.readItemIconStateType),
      href: parser.readChildElement(KmlTagName.href, node, parser.readXsString) ?? ''
    }

    return parser.kmlFactory.createItemIcon(itemIconType);
  }

  private readRegion(node: any, parser: KMLParser): RegionType {

    const regionType: RegionType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      latLonAltBox: parser.readChildElement(KmlTagName.LatLonAltBox, node, parser.readLatLonAltBox),
      lod: parser.readChildElement(KmlTagName.Lod, node, parser.readLod)
    }

    return parser.kmlFactory.createRegion(regionType);
  }

  private readLatLonAltBox(node: any, parser: KMLParser): LatLonAltBoxType {

    const latLonAltBoxType: LatLonAltBoxType = {
      ...parser.readAbstractType(node, parser.readAbstractLatLonBoxType),
      minAltitude: parser.readChildElement(KmlTagName.minAltitude, node, parser.readXsDouble) ?? 0.0,
      maxAltitude: parser.readChildElement(KmlTagName.maxAltitude, node, parser.readXsDouble) ?? 0.0,
      altitudeMode: parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup) ?? AltitudeModeEnumType.clampToGround
    }

    return parser.kmlFactory.createLatLonAltBox(latLonAltBoxType);
  }

  private readLod(node: any, parser: KMLParser): LodType {

    const lodType: LodType = {
      ...parser.readAbstractType(node, parser.readAbstractLatLonBoxType),
      minLodPixels: parser.readChildElement(KmlTagName.minLodPixels, node, parser.readXsDouble) ?? 0.0,
      maxLodPixels: parser.readChildElement(KmlTagName.maxLodPixels, node, parser.readXsDouble) ?? -1.0,
      minFadeExtent: parser.readChildElement(KmlTagName.minFadeExtent, node, parser.readXsDouble) ?? 0.0,
      maxFadeExtent: parser.readChildElement(KmlTagName.maxFadeExtent, node, parser.readXsDouble) ?? 0.0
    }

    return parser.kmlFactory.createLod(lodType);
  }


  private readExtendedData(node: any, parser: KMLParser): ExtendedDataType {

    const extendedDataType: ExtendedDataType = {
      data: parser.readChildElementArray(KmlTagName.Data, node, parser.readData),
      schemaData: parser.readChildElementArray(KmlTagName.SchemaData, node, parser.readSchemaData),
      any: [] // TODO: parse any
    }

    return parser.kmlFactory.createExtendedData(extendedDataType);
  }

  private readData(node: any, parser: KMLParser): DataType {

    const dataType: DataType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      name: parser.readAttribute(KmlAttributeName.name, node, parser.readXsString) ?? '',
      displayName: parser.readChildElement(KmlTagName.displayName, node, parser.readXsString) ?? '',
      value: parser.readChildElement(KmlTagName.value, node, parser.readXsString) ?? ''
    }

    return parser.kmlFactory.createData(dataType);
  }

  private readSchemaData(node: any, parser: KMLParser): SchemaDataType {

    const schemaDataType: SchemaDataType = {
      ...parser.readAbstractType(node, parser.readAbstractObjectType),
      schemaUrl: parser.readAttribute(KmlAttributeName.schemaUrl, node, parser.readXsAnyUri),
      simpleData: parser.readChildElementArray(KmlTagName.SimpleData, node, parser.readSimpleData)
    }

    return parser.kmlFactory.createSchemaData(schemaDataType);
  }

  private readSimpleData(node: any, parser: KMLParser): SimpleDataType {

    const simpleDataType: SimpleDataType = {
      name: parser.readAttribute(KmlAttributeName.name, node, parser.readXsString) ?? '',
      textContent: parser.readTextContent(node) ?? ''
    };

    return parser.kmlFactory.createSimpleData(simpleDataType);
  }

  private readNetworkLinkControl(node: any, parser: KMLParser): NetworkLinkControlType {

    const networkLinkControlType: NetworkLinkControlType = {
      minRefreshPeriod: parser.readChildElement(KmlTagName.minRefreshPeriod, node, parser.readXsDouble) ?? 0.0,
      maxSessionLength: parser.readChildElement(KmlTagName.maxSessionLength, node, parser.readXsDouble) ?? -1.0,
      cookie: parser.readChildElement(KmlTagName.cookie, node, parser.readXsString) ?? '',
      message: parser.readChildElement(KmlTagName.message, node, parser.readXsString) ?? '',
      linkName: parser.readChildElement(KmlTagName.linkName, node, parser.readXsString) ?? '',
      linkDescription: parser.readChildElement(KmlTagName.linkDescription, node, parser.readXsString) ?? '',
      linkSnippet: parser.readChildElement(KmlTagName.linkSnippet, node, parser.readXsString) ?? '',
      expires: parser.readChildElement(KmlTagName.expires, node, parser.readDateTimeType),
      update: parser.readChildElement(KmlTagName.Update, node, parser.readUpdate),
      view: parser.readAbstractType(node, parser.readAbstractViewGroup)
    }

    return parser.kmlFactory.createNetworkLinkControl(networkLinkControlType);
  }

  private readUpdate(node: any, parser: KMLParser): UpdateType {

    const targetHref = parser.readChildElement(KmlTagName.targetHref, node, parser.readXsAnyUri);
    const create = parser.readChildElement(KmlTagName.Create, node, parser.readCreate);
    const deleteElement = parser.readChildElement(KmlTagName.Delete, node, parser.readDelete);
    const change = parser.readChildElement(KmlTagName.Change, node, parser.readChange);

    const createDeleteChange = create || deleteElement || change; // xs:choice

    if (!targetHref) {
      throw new Error('Child element \'targetHref\' is required on element \'Update\'');
    }

    const updateType: UpdateType = {
      targetHref,
      createDeleteChange
    }

    return parser.kmlFactory.createUpdate(updateType);
  }

  private readCreate(node: any, parser: KMLParser): CreateType {

    const createType: CreateType = {
      container: parser.readAbstractTypeArray(node, parser.readAbstractContainerGroupArray)
    }

    return parser.kmlFactory.createCreate(createType);
  }

  private readDelete(node: any, parser: KMLParser): DeleteType {

    const deleteType: DeleteType = {
      feature: parser.readAbstractTypeArray(node, parser.readAbstractFeatureGroupArray)
    }

    return parser.kmlFactory.createDelete(deleteType);
  }

  private readChange(node: any, parser: KMLParser): ChangeType {

    const changeType: ChangeType = {
      object: parser.readAbstractTypeArray(node, parser.readAbstractObjectGroupArray)
    }

    return parser.kmlFactory.createChange(changeType);
  }

  private readAtomAuthor(node: any, parser: KMLParser): AtomPersonConstruct {

    const atomPersonConstruct: AtomPersonConstruct = {
      name: parser.readChildElementArray(AtomTagName.name, node, parser.readXsString),
      uri: parser.readChildElementArray(AtomTagName.uri, node, parser.readXsString),
      email: parser.readChildElementArray(AtomTagName.email, node, parser.readXsString)
    };

    return parser.kmlFactory.createAtomAuthor(atomPersonConstruct);
  }

  private readAtomLink(node: any, parser: KMLParser): AtomLink {

    const href = parser.readAttribute(AtomAttributeName.href, node, parser.readXsString);

    if (href === undefined) {
      throw new Error('href attribute on atom:link is required');
    }

    const atomLink: AtomLink = {
      href,
      rel: parser.readAttribute(AtomAttributeName.rel, node, parser.readXsString),
      type: parser.readAttribute(AtomAttributeName.type, node, parser.readXsString),
      hreflang: parser.readAttribute(AtomAttributeName.hreflang, node, parser.readXsString),
      title: parser.readAttribute(AtomAttributeName.title, node, parser.readXsString),
      length: parser.readAttribute(AtomAttributeName.length, node, parser.readXsString)
    };

    return parser.kmlFactory.createAtomLink(atomLink);
  }

  private readXsBoolean(value: any): boolean {

    if (value === true) {
      return true;
    } else if (value === false) {
      return false;
    } else if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (value === 1) {
      return true;
    } else if (value === 0) {
      return false;
    }

    throw new Error('Could not parse as boolean: ' + value);
  }

  private readXsString(value: any): string {
    return '' + value;
  }

  private readXsInt(value: any, parser: KMLParser): number {

    const intString = parser.readXsString(value);
    const int = parseInt(intString);

    if (isNaN(int)) {
      throw new Error('Could not parse as int: ' + int);
    }

    return int;
  }

  private readXsDouble(value: any, parser: KMLParser): number {

    const doubleString = parser.readXsString(value);
    const double = parseFloat(doubleString);

    if (isNaN(double)) {
      throw new Error('Could not parse as double: ' + value);
    }

    return double;
  }

  private readXsID(value: any, parser: KMLParser): ID {
    return parser.readXsString(value);
  }

  private readXsNCName(value: any, parser: KMLParser): NCName {
    return parser.readXsString(value);
  }

  private readXsAnyUri(value: any, parser: KMLParser): AnyURI {
    return parser.readXsString(value);
  }

  private readAltitudeModeGroup(value: any, parser: KMLParser): AltitudeModeGroup {

    const altitudeModeEnumTypeString = parser.readXsString(value);

    if (altitudeModeEnumTypeString === AltitudeModeEnumType.absolute) {
      return AltitudeModeEnumType.absolute;
    } else if (altitudeModeEnumTypeString === AltitudeModeEnumType.clampToGround) {
      return AltitudeModeEnumType.clampToGround;
    } else if (altitudeModeEnumTypeString === AltitudeModeEnumType.relativeToGround) {
      return AltitudeModeEnumType.relativeToGround;
    }

    throw new Error('Could not parse as altitudeModeGroup: ' + value);
  }

  private readAngle90Type(value: any, parser: KMLParser): Angle90Type {

    const double = parser.readXsDouble(value, parser);

    if (double < -90.0 || double > 90.0) {
      throw new Error('angle90Type out of bounds: ' + double);
    }

    return double;
  }

  private readAngle180Type(value: any, parser: KMLParser): Angle180Type {

    const double = parser.readXsDouble(value, parser);

    if (double < -180.0 || double > 180.0) {
      throw new Error('angle180Type out of bounds: ' + double);
    }

    return double;
  }

  private readAngle360Type(value: any, parser: KMLParser): Angle360Type {

    const double = parser.readXsDouble(value, parser);

    if (double < -360.0 || double > 360.0) {
      throw new Error('angle360Type out of bounds: ' + double);
    }

    return double;
  }

  private readColorType(value: any, parser: KMLParser): ColorType {

    const colorTypeString = parser.readXsString(value);

    if (colorTypeString.length !== 8) {
      throw new Error('Could not parse as colorType: ' + value);
    }

    return value;
  }

  private readColorModeEnumType(value: any, parser: KMLParser): ColorModeEnumType {

    const colorModeEnumTypeString = parser.readXsString(value);

    if (colorModeEnumTypeString === ColorModeEnumType.normal) {
      return ColorModeEnumType.normal;
    } else if (colorModeEnumTypeString === ColorModeEnumType.random) {
      return ColorModeEnumType.random;
    }

    throw new Error('Could not parse as colorModeEnumType: ' + value);
  }

  private readDateTimeType(value: any, parser: KMLParser): DateTimeType {
    const dateTimeTypeString = parser.readXsString(value);
    return new Date(dateTimeTypeString);
  }

  private readDisplayModeEnumType(value: any, parser: KMLParser): DisplayModeEnumType {

    const displayModeEnumTypeString = parser.readXsString(value);

    if (displayModeEnumTypeString === DisplayModeEnumType.default) {
      return DisplayModeEnumType.default;
    } else if (displayModeEnumTypeString === DisplayModeEnumType.hide) {
      return DisplayModeEnumType.hide;
    }

    throw new Error('Could not parse as displayModeEnumType: ' + value);
  }

  private readGridOriginEnumType(value: any, parser: KMLParser): GridOriginEnumType {

    const gridOriginEnumTypeString = parser.readXsString(value);

    if (gridOriginEnumTypeString === GridOriginEnumType.lowerLeft) {
      return GridOriginEnumType.lowerLeft;
    } else if (gridOriginEnumTypeString === GridOriginEnumType.upperLeft) {
      return GridOriginEnumType.upperLeft;
    }

    throw new Error('Could not parse as gridOriginEnumType: ' + value);
  }

  private readRefreshModeEnumType(value: any, parser: KMLParser): RefreshModeEnumType {

    const refreshModeEnumTypeString = parser.readXsString(value);

    if (refreshModeEnumTypeString === RefreshModeEnumType.onChange) {
      return RefreshModeEnumType.onChange;
    } else if (refreshModeEnumTypeString === RefreshModeEnumType.onExpire) {
      return RefreshModeEnumType.onExpire;
    } else if (refreshModeEnumTypeString === RefreshModeEnumType.onInterval) {
      return RefreshModeEnumType.onInterval;
    }

    throw new Error('Could not parse as refreshModeEnumType: ' + value);
  }

  private readShapeEnumType(value: any, parser: KMLParser): ShapeEnumType {

    const readShapeEnumTypeString = parser.readXsString(value);

    if (readShapeEnumTypeString === ShapeEnumType.rectangle) {
      return ShapeEnumType.rectangle;
    } else if (readShapeEnumTypeString === ShapeEnumType.cylinder) {
      return ShapeEnumType.cylinder;
    } else if (readShapeEnumTypeString === ShapeEnumType.sphere) {
      return ShapeEnumType.sphere;
    }

    throw new Error('Could not parse as shapeEnumType: ' + value);
  }

  private readStyleStateEnumType(value: any, parser: KMLParser): StyleStateEnumType {

    const styleStateEnumTypeString = parser.readXsString(value);

    if (styleStateEnumTypeString === StyleStateEnumType.normal) {
      return StyleStateEnumType.normal;
    } else if (styleStateEnumTypeString === StyleStateEnumType.highlight) {
      return StyleStateEnumType.highlight;
    }

    throw new Error('Could not parse as styleStateEnumType: ' + value);
  }

  private readUnitsEnumType(value: any, parser: KMLParser): UnitsEnumType {

    const unitsEnumTypeString = parser.readXsString(value);

    if (unitsEnumTypeString === UnitsEnumType.pixels) {
      return UnitsEnumType.pixels;
    } else if (unitsEnumTypeString === UnitsEnumType.fraction) {
      return UnitsEnumType.fraction;
    } else if (unitsEnumTypeString === UnitsEnumType.insetPixels) {
      return UnitsEnumType.insetPixels;
    }

    throw new Error('Could not parse as unitsEnumType: ' + value);
  }

  private readVec2Type(value: any, parser: KMLParser): Vec2Type {
    return {
      x: parser.readAttribute(KmlAttributeName.x, value, parser.readXsDouble) ?? 1.0,
      y: parser.readAttribute(KmlAttributeName.y, value, parser.readXsDouble) ?? 1.0,
      xunits: parser.readAttribute(KmlAttributeName.xunits, value, parser.readUnitsEnumType) ?? UnitsEnumType.fraction,
      yunits: parser.readAttribute(KmlAttributeName.yunits, value, parser.readUnitsEnumType) ?? UnitsEnumType.fraction
    };
  }

  private readViewRefreshModeEnumType(value: any, parser: KMLParser): ViewRefreshModeEnumType {

    const viewRefreshModeEnumTypeString = parser.readXsString(value);

    if (viewRefreshModeEnumTypeString === ViewRefreshModeEnumType.never) {
      return ViewRefreshModeEnumType.never;
    } else if (viewRefreshModeEnumTypeString === ViewRefreshModeEnumType.onRegion) {
      return ViewRefreshModeEnumType.onRegion;
    } else if (viewRefreshModeEnumTypeString === ViewRefreshModeEnumType.onStop) {
      return ViewRefreshModeEnumType.onStop;
    } else if (viewRefreshModeEnumTypeString === ViewRefreshModeEnumType.onRequest) {
      return ViewRefreshModeEnumType.onRequest;
    }

    throw new Error('Could not parse as viewRefreshModeEnumType: ' + value);
  }

  private readListItemTypeEnumType(value: any, parser: KMLParser): ListItemTypeEnumType {

    const listItemTypeEnumTypeString = parser.readXsString(value);

    if (listItemTypeEnumTypeString === ListItemTypeEnumType.check) {
      return ListItemTypeEnumType.check;
    } else if (listItemTypeEnumTypeString === ListItemTypeEnumType.checkHideChildren) {
      return ListItemTypeEnumType.checkHideChildren;
    } else if (listItemTypeEnumTypeString === ListItemTypeEnumType.checkOffOnly) {
      return ListItemTypeEnumType.checkOffOnly;
    } else if (listItemTypeEnumTypeString === ListItemTypeEnumType.radioFolder) {
      return ListItemTypeEnumType.radioFolder;
    }

    throw new Error('Could not parse as listItemTypeEnumType: ' + value);
  }

  private readItemIconStateType(value: any, parser: KMLParser): ItemIconStateType {

    let itemIconStateTypeString = parser.readXsString(value);

    // replace newlines and whitespaces with a single whitespace
    itemIconStateTypeString = itemIconStateTypeString.replace(/\n*\s+/g, ' ');

    const itemIconStateTypeStringArray = itemIconStateTypeString.split(' ');

    return itemIconStateTypeStringArray.map(v => {

      switch (v) {
        case ItemIconStateEnumType.open: {
          return ItemIconStateEnumType.open;
        }
        case ItemIconStateEnumType.closed: {
          return ItemIconStateEnumType.closed;
        }
        case ItemIconStateEnumType.error: {
          return ItemIconStateEnumType.error;
        }
        case ItemIconStateEnumType.fetching0: {
          return ItemIconStateEnumType.fetching0;
        }
        case ItemIconStateEnumType.fetching1: {
          return ItemIconStateEnumType.fetching1;
        }
        case ItemIconStateEnumType.fetching2: {
          return ItemIconStateEnumType.fetching2;
        }
        default: {
          throw new Error('Could not parse itemIconStateEnumType: ' + v);
        }
      }
    });
  }

  private readBoundaryType(node: any, parser: KMLParser): BoundaryType | undefined {
    return parser.readChildElement(KmlTagName.LinearRing, node, parser.readLinearRing);
  }

  private readBoundaryTypeArray(node: any, parser: KMLParser): BoundaryType[] {
    return parser.readChildElementArray(KmlTagName.LinearRing, node, parser.readLinearRing);
  }

  private readCoordinates(value: any, parser: KMLParser): CoordinatesType {

    let coordinatesString = parser.readXsString(value);

    // replace newlines and whitespaces with a single whitespace
    coordinatesString = coordinatesString.replace(/\n*\s+/g, ' ');

    return coordinatesString.split(' ');
  }
}