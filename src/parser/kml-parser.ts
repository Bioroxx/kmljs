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
import {ID} from '../dom/xsd/id';
import {NCName} from '../dom/xsd/ncname';
import {CoordinatesType} from '../dom/kml/types/coordinates-type';
import {AltitudeModeGroup} from '../dom/kml/altitude-mode-group';
import {AnyURI} from '../dom/xsd/anyURI';
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
    return this.readChildElement(KmlTagName.kml, obj, this.readKmlType);
  }

  protected readTextContent(obj: any): string {
    return '' + obj;
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
      element: any,
      readMethod: ((el: any, parser: KMLParser) => T)): T | undefined {

    if (element === undefined || element === null) {
      return undefined;
    }

    const obj = element['@_' + attributeName];

    if (obj === undefined || obj === null) {
      return undefined;
    }

    return readMethod(obj, this);
  }

  protected readAbstractGroupOrType<T>(
      parent: any,
      readMethod: ((el: any, parser: KMLParser) => T)): T | undefined {

    if (parent === undefined || parent === null) {
      return undefined;
    }

    return readMethod(parent, this);
  }

  protected readAbstractGroupOrTypeArray<T extends any[] | []>(
      parent: any,
      readMethod: ((el: any, parser: KMLParser) => T)): T | [] {

    if (parent === undefined || parent === null) {
      return [];
    }

    return readMethod(parent, this);
  }

  private readKmlType(obj: any, parser: KMLParser): KmlType {

    const hint = parser.readAttribute('hint', obj, parser.readTextContent);
    const networkLinkControl = parser.readChildElement(KmlTagName.NetworkLinkControl, obj, parser.readNetworkLinkControl);
    const feature = parser.readAbstractGroupOrType(obj, parser.readAbstractFeatureGroup);

    const kml: KmlType = {
      hint,
      networkLinkControl,
      feature
    }

    return parser.kmlFactory.createKml(kml);
  }

  private readAbstractObjectType(obj: any, parser: KMLParser): AbstractObjectType {

    const id = parser.readAttribute('id', obj, parser.readXsdID);
    const targetId = parser.readAttribute('targetId', obj, parser.readXsdNCName);

    return {
      id,
      targetId
    }
  }

  private readAbstractFeatureType(obj: any, parser: KMLParser): AbstractFeatureType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);

    const name = parser.readChildElement('name', obj, parser.readTextContent);
    const visibility = parser.readChildElement('visibility', obj, parser.readXsdBoolean);
    const open = parser.readChildElement('open', obj, parser.readXsdBoolean);
    // TODO: atom:author
    // TODO: atom:link
    const address = parser.readChildElement('address', obj, parser.readTextContent);
    // TODO: xal:AddressDetails
    const phoneNumber = parser.readChildElement('phoneNumber', obj, parser.readTextContent);
    const snippet = parser.readChildElement('snippet', obj, parser.readTextContent);
    const description = parser.readChildElement('description', obj, parser.readTextContent);
    const view = parser.readAbstractGroupOrType(obj, parser.readAbstractViewGroup);
    const timePrimitive = parser.readAbstractGroupOrType(obj, parser.readAbstractTimePrimitiveGroup);
    const styleUrl = parser.readChildElement('styleUrl', obj, parser.readXsdAnyUri);
    const styleSelector = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractStyleSelectorGroupArray);
    const region = parser.readChildElement(KmlTagName.Region, obj, parser.readRegion);
    const extendedData = parser.readChildElement(KmlTagName.ExtendedData, obj, parser.readExtendedData);

    return {
      ...abstractObjectTypeValues,
      name,
      visibility,
      open,
      address,
      phoneNumber,
      snippet,
      description,
      styleUrl,
      view,
      timePrimitive,
      styleSelector,
      region,
      extendedData
    };
  }

  private readAbstractContainerType(obj: any, parser: KMLParser): AbstractContainerType {
    return {
      ...parser.readAbstractGroupOrType(obj, parser.readAbstractFeatureType)
    };
  }

  private readAbstractGeometryType(obj: any, parser: KMLParser): AbstractGeometryType {
    return {
      ...parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType)
    };
  }

  private readAbstractOverlayType(obj: any, parser: KMLParser): AbstractOverlayType {

    const abstractFeatureTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractFeatureType);
    const color = parser.readChildElement('color', obj, parser.readColorType);
    const drawOrder = parser.readChildElement('drawOrder', obj, parser.readXsdInt);
    const icon = parser.readChildElement(KmlTagName.Icon, obj, parser.readIcon);

    return {
      ...abstractFeatureTypeValues,
      color,
      drawOrder,
      icon
    }
  }

  private readAbstractStyleSelectorType(obj: any, parser: KMLParser): AbstractStyleSelectorType {
    return {
      ...parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType)
    };
  }

  private readAbstractSubStyleType(obj: any, parser: KMLParser): AbstractSubStyleType {
    return {
      ...parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType)
    };
  }

  private readAbstractColorStyleType(obj: any, parser: KMLParser): AbstractColorStyleType {

    const abstractSubStyleTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractSubStyleType);

    const color = parser.readChildElement('color', obj, parser.readColorType);
    const colorMode = parser.readChildElement('colorMode', obj, parser.readColorModeEnumType);

    return {
      ...abstractSubStyleTypeValues,
      color,
      colorMode
    }
  }

  private readAbstractViewType(obj: any, parser: KMLParser): AbstractViewType {
    return {
      ...parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType)
    }
  }

  private readAbstractLatLonBoxType(obj: any, parser: KMLParser): AbstractLatLonBoxType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const north = parser.readChildElement('north', obj, parser.readAngle180Type);
    const south = parser.readChildElement('south', obj, parser.readAngle180Type);
    const east = parser.readChildElement('east', obj, parser.readAngle180Type);
    const west = parser.readChildElement('west', obj, parser.readAngle180Type);

    return {
      ...abstractObjectTypeValues,
      north,
      south,
      east,
      west
    }
  }

  private readBasicLinkType(obj: any, parser: KMLParser): BasicLinkType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const href = parser.readChildElement('href', obj, parser.readTextContent);

    return {
      ...abstractObjectTypeValues,
      href
    }
  }

  private readLinkType(obj: any, parser: KMLParser): LinkType {

    const basicLinkTypeValues = parser.readAbstractGroupOrType(obj, parser.readBasicLinkType);
    const refreshMode = parser.readChildElement('refreshMode', obj, parser.readRefreshModeEnumType);
    const refreshInterval = parser.readChildElement('refreshInterval', obj, parser.readXsdDouble);
    const viewRefreshMode = parser.readChildElement('viewRefreshMode', obj, parser.readViewRefreshModeEnumType);
    const viewRefreshTime = parser.readChildElement('viewRefreshTime', obj, parser.readXsdDouble);
    const viewBoundScale = parser.readChildElement('viewBoundScale', obj, parser.readXsdDouble);
    const viewFormat = parser.readChildElement('viewFormat', obj, parser.readTextContent);
    const httpQuery = parser.readChildElement('httpQuery', obj, parser.readTextContent);

    return {
      ...basicLinkTypeValues,
      refreshMode,
      refreshInterval,
      viewRefreshMode,
      viewRefreshTime,
      viewBoundScale,
      viewFormat,
      httpQuery
    }
  }

  private readAbstractTimePrimitiveType(obj: any, parser: KMLParser): AbstractTimePrimitiveType {
    return {
      ...parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType)
    };
  }

  private readAbstractObjectGroupArray(obj: any, parser: KMLParser): AbstractObjectType[] {

    const abstractFeatureGroupArray = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractFeatureGroupArray); // Includes AbstractContainerGroup, AbstractOverlayGroup
    const abstractGeometryGroupArray = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractGeometryGroupArray);
    const abstractStyleSelectorGroupArray = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractStyleSelectorGroupArray);
    const abstractTimePrimitiveGroupArray = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractTimePrimitiveGroupArray);
    const abstractViewGroupArray = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractViewGroupArray);
    const abstractSubStyleGroupArray = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractSubStyleGroupArray); // Includes AbstractColorStyleGroup
    const link = parser.readChildElementArray(KmlTagName.Link, obj, parser.readLink);
    const icon = parser.readChildElementArray(KmlTagName.Icon, obj, parser.readIcon);
    const orientation = parser.readChildElementArray(KmlTagName.Orientation, obj, parser.readOrientation);
    const location = parser.readChildElementArray(KmlTagName.Location, obj, parser.readLocation);
    const scale = parser.readChildElementArray(KmlTagName.Scale, obj, parser.readScale);
    const region = parser.readChildElementArray(KmlTagName.Region, obj, parser.readRegion);
    const lod = parser.readChildElementArray(KmlTagName.Lod, obj, parser.readLod);
    const latLonBox = parser.readChildElementArray(KmlTagName.LatLonBox, obj, parser.readLatLonBox);
    const latLonAltBox = parser.readChildElementArray(KmlTagName.LatLonAltBox, obj, parser.readLatLonAltBox);
    const data = parser.readChildElementArray(KmlTagName.Data, obj, parser.readData);
    const schemaD = parser.readChildElementArray(KmlTagName.SchemaData, obj, parser.readSchemaData);
    const resourceMap = parser.readChildElementArray(KmlTagName.ResourceMap, obj, parser.readResourceMap);
    const alias = parser.readChildElementArray(KmlTagName.Alias, obj, parser.readAlias);
    const viewVolume = parser.readChildElementArray(KmlTagName.ViewVolume, obj, parser.readViewVolume);
    const imagePyramid = parser.readChildElementArray(KmlTagName.ImagePyramid, obj, parser.readImagePyramid);
    const itemIcon = parser.readChildElementArray(KmlTagName.ItemIcon, obj, parser.readItemIcon);
    const pair = parser.readChildElementArray(KmlTagName.Pair, obj, parser.readPair);

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

  private readAbstractFeatureGroup(obj: any, parser: KMLParser): AbstractFeatureType | undefined {

    const placemark = parser.readChildElement(KmlTagName.Placemark, obj, parser.readPlacemark);
    const networkLink = parser.readChildElement(KmlTagName.NetworkLink, obj, parser.readNetworkLink);
    const abstractContainerGroup = parser.readAbstractGroupOrType(obj, parser.readAbstractContainerGroup);
    const abstractOverlayGroup = parser.readAbstractGroupOrType(obj, parser.readAbstractOverlayGroup);

    return placemark || networkLink || abstractContainerGroup || abstractOverlayGroup;
  }

  private readAbstractFeatureGroupArray(obj: any, parser: KMLParser): AbstractFeatureType[] {

    const placemark = parser.readChildElementArray(KmlTagName.Placemark, obj, parser.readPlacemark);
    const networkLink = parser.readChildElementArray(KmlTagName.NetworkLink, obj, parser.readNetworkLink);
    const abstractContainerGroupArray = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractContainerGroupArray);
    const abstractOverlayGroupArray = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractOverlayGroupArray);

    let abstractFeatureGroupArray: AbstractFeatureType[] = [];

    abstractFeatureGroupArray = abstractFeatureGroupArray.concat(
        placemark,
        networkLink,
        abstractContainerGroupArray,
        abstractOverlayGroupArray
    )

    return abstractFeatureGroupArray;
  }

  private readAbstractContainerGroup(obj: any, parser: KMLParser): AbstractContainerType | undefined {

    const document = parser.readChildElement(KmlTagName.Document, obj, parser.readDocument);
    const folder = parser.readChildElement(KmlTagName.Folder, obj, parser.readFolder);

    return document || folder;
  }

  private readAbstractContainerGroupArray(obj: any, parser: KMLParser): AbstractContainerType[] {

    const document = parser.readChildElementArray(KmlTagName.Document, obj, parser.readDocument);
    const folder = parser.readChildElementArray(KmlTagName.Folder, obj, parser.readFolder);

    let abstractContainerGroupArray: AbstractContainerType[] = [];

    abstractContainerGroupArray = abstractContainerGroupArray.concat(
        document,
        folder
    );

    return abstractContainerGroupArray;
  }

  private readAbstractOverlayGroup(obj: any, parser: KMLParser): AbstractOverlayType | undefined {

    const groundOverlay = parser.readChildElement(KmlTagName.GroundOverlay, obj, parser.readGroundOverlay);
    const photoOverlay = parser.readChildElement(KmlTagName.PhotoOverlay, obj, parser.readPhotoOverlay);
    const screenOverlay = parser.readChildElement(KmlTagName.ScreenOverlay, obj, parser.readScreenOverlay);

    return groundOverlay || photoOverlay || screenOverlay;
  }

  private readAbstractOverlayGroupArray(obj: any, parser: KMLParser): AbstractOverlayType[] {

    const groundOverlay = parser.readChildElementArray(KmlTagName.GroundOverlay, obj, parser.readGroundOverlay);
    const photoOverlay = parser.readChildElementArray(KmlTagName.PhotoOverlay, obj, parser.readPhotoOverlay);
    const screenOverlay = parser.readChildElementArray(KmlTagName.ScreenOverlay, obj, parser.readScreenOverlay);

    let abstractOverlayGroupArray: AbstractOverlayType[] = [];

    abstractOverlayGroupArray = abstractOverlayGroupArray.concat(
        groundOverlay,
        photoOverlay,
        screenOverlay
    );

    return abstractOverlayGroupArray
  }

  private readAbstractStyleSelectorGroup(obj: any, parser: KMLParser): AbstractStyleSelectorType | undefined {

    const style = parser.readChildElement(KmlTagName.Style, obj, parser.readStyle);
    const styleMap = parser.readChildElement(KmlTagName.StyleMap, obj, parser.readStyleMap);

    return style || styleMap;
  }

  private readAbstractStyleSelectorGroupArray(obj: any, parser: KMLParser): AbstractStyleSelectorType[] {

    const style = parser.readChildElementArray(KmlTagName.Style, obj, parser.readStyle);
    const styleMap = parser.readChildElementArray(KmlTagName.StyleMap, obj, parser.readStyleMap);

    let abstractStyleSelectorGroupArray: AbstractStyleSelectorType[] = [];

    abstractStyleSelectorGroupArray = abstractStyleSelectorGroupArray.concat(
        style,
        styleMap
    );

    return abstractStyleSelectorGroupArray;
  }

  private readAbstractGeometryGroup(obj: any, parser: KMLParser): AbstractGeometryType | undefined {

    const multiGeometry = parser.readChildElement(KmlTagName.MultiGeometry, obj, parser.readMultiGeometry);
    const lineString = parser.readChildElement(KmlTagName.LineString, obj, parser.readLineString);
    const polygon = parser.readChildElement(KmlTagName.Polygon, obj, parser.readPolygon);
    const point = parser.readChildElement(KmlTagName.Point, obj, parser.readPoint);
    const linearRing = parser.readChildElement(KmlTagName.LinearRing, obj, parser.readLinearRing);
    const model = parser.readChildElement(KmlTagName.Model, obj, parser.readModel);

    return multiGeometry || lineString || polygon || point || linearRing || model;
  }

  private readAbstractGeometryGroupArray(obj: any, parser: KMLParser): AbstractGeometryType[] {

    const multiGeometry = parser.readChildElementArray(KmlTagName.MultiGeometry, obj, parser.readMultiGeometry);
    const lineString = parser.readChildElementArray(KmlTagName.LineString, obj, parser.readLineString);
    const polygon = parser.readChildElementArray(KmlTagName.Polygon, obj, parser.readPolygon);
    const point = parser.readChildElementArray(KmlTagName.Point, obj, parser.readPoint);
    const linearRing = parser.readChildElementArray(KmlTagName.LinearRing, obj, parser.readLinearRing);
    const model = parser.readChildElementArray(KmlTagName.Model, obj, parser.readModel);

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

  private readAbstractViewGroup(obj: any, parser: KMLParser): AbstractViewType | undefined {

    const camera = parser.readChildElement(KmlTagName.Camera, obj, parser.readCamera);
    const lookAt = parser.readChildElement(KmlTagName.LookAt, obj, parser.readLookAt);

    return camera || lookAt;
  }

  private readAbstractViewGroupArray(obj: any, parser: KMLParser): AbstractViewType[] {

    const camera = parser.readChildElementArray(KmlTagName.Camera, obj, parser.readCamera);
    const lookAt = parser.readChildElementArray(KmlTagName.LookAt, obj, parser.readLookAt);

    let abstractViewGroupArray: AbstractViewType[] = [];

    abstractViewGroupArray.concat(
        camera,
        lookAt
    )

    return abstractViewGroupArray;
  }

  private readAbstractSubStyleGroupArray(obj: any, parser: KMLParser): AbstractSubStyleType[] {

    const balloonStyle = parser.readChildElementArray(KmlTagName.BalloonStyle, obj, parser.readBalloonStyle);
    const listStyle = parser.readChildElementArray(KmlTagName.ListStyle, obj, parser.readListStyle);
    const colorStyleGroupArray = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractColorStyleGroupArray);

    let abstractSubStyleGroupArray: AbstractSubStyleType[] = [];

    abstractSubStyleGroupArray = abstractSubStyleGroupArray.concat(
        balloonStyle,
        listStyle,
        colorStyleGroupArray
    );

    return abstractSubStyleGroupArray;
  }

  private readAbstractColorStyleGroupArray(obj: any, parser: KMLParser): AbstractColorStyleType[] {

    const iconStyle = parser.readChildElementArray(KmlTagName.IconStyle, obj, parser.readIconStyle);
    const labelStyle = parser.readChildElementArray(KmlTagName.LabelStyle, obj, parser.readLabelStyle);
    const lineStyle = parser.readChildElementArray(KmlTagName.LineStyle, obj, parser.readLineStyle);
    const polyStyle = parser.readChildElementArray(KmlTagName.PolyStyle, obj, parser.readPolyStyle);

    let abstractColorStyleGroupArray: AbstractColorStyleType[] = [];

    abstractColorStyleGroupArray = abstractColorStyleGroupArray.concat(
        iconStyle,
        labelStyle,
        lineStyle,
        polyStyle
    );

    return abstractColorStyleGroupArray;
  }

  private readAbstractTimePrimitiveGroup(obj: any, parser: KMLParser): AbstractTimePrimitiveType | undefined {

    const timeSpan = parser.readChildElement(KmlTagName.TimeSpan, obj, parser.readTimeSpan);
    const timeStamp = parser.readChildElement(KmlTagName.TimeStamp, obj, parser.readTimeStamp);

    return timeSpan || timeStamp;
  }

  private readAbstractTimePrimitiveGroupArray(obj: any, parser: KMLParser): AbstractTimePrimitiveType[] {

    const timeSpan = parser.readChildElementArray(KmlTagName.TimeSpan, obj, parser.readTimeSpan);
    const timeStamp = parser.readChildElementArray(KmlTagName.TimeStamp, obj, parser.readTimeStamp);

    let abstractTimePrimitiveGroupArray: AbstractTimePrimitiveType[] = [];

    abstractTimePrimitiveGroupArray = abstractTimePrimitiveGroupArray.concat(
        timeSpan,
        timeStamp
    );

    return abstractTimePrimitiveGroupArray;
  }

  private readPlacemark(obj: any, parser: KMLParser): PlacemarkType {

    const abstractFeatureTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractFeatureType);
    const geometry = parser.readAbstractGroupOrType(obj, parser.readAbstractGeometryGroup);

    const placemarkType: PlacemarkType = {
      ...abstractFeatureTypeValues,
      geometry
    };

    return parser.kmlFactory.createPlacemark(placemarkType);
  }

  private readFolder(obj: any, parser: KMLParser): FolderType {

    const abstractContainerTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractContainerType);
    const feature = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractFeatureGroupArray);

    const folderType: FolderType = {
      ...abstractContainerTypeValues,
      feature
    }

    return parser.kmlFactory.createFolder(folderType);
  }

  private readDocument(obj: any, parser: KMLParser): DocumentType {

    const abstractContainerTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractContainerType);

    parser.kmlFactory.setSharedStyle(abstractContainerTypeValues?.styleSelector ?? []);

    const schema = parser.readChildElementArray(KmlTagName.Schema, obj, parser.readSchema);
    const feature = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractFeatureGroupArray);

    const documentType: DocumentType = {
      ...abstractContainerTypeValues,
      schema,
      feature
    }

    parser.kmlFactory.resetSharedStyle();
    return parser.kmlFactory.createDocument(documentType);
  }

  private readSchema(obj: any, parser: KMLParser): SchemaType {

    const id = parser.readAttribute('id', obj, parser.readXsdID);
    const name = parser.readChildElement('name', obj, parser.readTextContent);
    const simpleField = parser.readChildElementArray(KmlTagName.SimpleField, obj, parser.readSimpleField);

    const schemaType: SchemaType = {
      id,
      name,
      simpleField
    }

    return parser.kmlFactory.createSchema(schemaType);
  }

  private readSimpleField(obj: any, parser: KMLParser): SimpleFieldType {

    const type = parser.readAttribute('type', obj, parser.readTextContent);
    const name = parser.readAttribute('name', obj, parser.readTextContent);
    const displayName = parser.readChildElement('displayName', obj, parser.readTextContent);

    const simpleFieldType: SimpleFieldType = {
      type,
      name,
      displayName
    }

    return parser.kmlFactory.createSimpleField(simpleFieldType);
  }

  private readLineString(obj: any, parser: KMLParser): LineStringType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractGeometryType);
    const extrude = parser.readChildElement('extrude', obj, parser.readXsdBoolean);
    const tessellate = parser.readChildElement('tessallate', obj, parser.readXsdBoolean);
    const altitudeMode = parser.readChildElement('altitudeMode', obj, parser.readAltitudeModeGroup);
    const coordinates = parser.readChildElement('coordinates', obj, parser.readCoordinates);

    const lineStringType: LineStringType = {
      ...abstractGeometryTypeValues,
      extrude,
      tessellate,
      altitudeMode,
      coordinates
    }

    return parser.kmlFactory.createLineString(lineStringType);
  }

  private readPolygon(obj: any, parser: KMLParser): PolygonType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractGeometryType);
    const extrude = parser.readChildElement('extrude', obj, parser.readXsdBoolean);
    const tessellate = parser.readChildElement('tessellate', obj, parser.readXsdBoolean);
    const altitudeMode = parser.readChildElement('altitudeMode', obj, parser.readAltitudeModeGroup);
    const outerBoundaryIs = parser.readChildElement('outerBoundaryIs', obj, parser.readBoundaryType);
    const innerBoundaryIs = parser.readChildElement('innerBoundaryIs', obj, parser.readBoundaryTypeArray);

    const polygonType: PolygonType = {
      ...abstractGeometryTypeValues,
      extrude,
      tessellate,
      altitudeMode,
      outerBoundaryIs,
      innerBoundaryIs
    }

    return parser.kmlFactory.createPolygon(polygonType);
  }

  private readPoint(obj: any, parser: KMLParser): PointType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractGeometryType);
    const extrude = parser.readChildElement('extrude', obj, parser.readXsdBoolean);
    const altitudeMode = parser.readChildElement('altitudeMode', obj, parser.readAltitudeModeGroup);
    const coordinates = parser.readChildElement('coordinates', obj, parser.readCoordinates);

    const pointType: PointType = {
      ...abstractGeometryTypeValues,
      extrude,
      altitudeMode,
      coordinates
    }

    return parser.kmlFactory.createPoint(pointType);
  }

  private readLinearRing(obj: any, parser: KMLParser): LinearRingType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractGeometryType);

    const extrude = parser.readChildElement('extrude', obj, parser.readXsdBoolean);
    const tessellate = parser.readChildElement('tessellate', obj, parser.readXsdBoolean);
    const altitudeMode = parser.readChildElement('altitudeMode', obj, parser.readAltitudeModeGroup);
    const coordinates = parser.readChildElement('coordinates', obj, parser.readCoordinates);

    const linearRingType: LinearRingType = {
      ...abstractGeometryTypeValues,
      extrude,
      tessellate,
      altitudeMode,
      coordinates
    }

    return parser.kmlFactory.createLinearRing(linearRingType);
  }

  private readModel(obj: any, parser: KMLParser): ModelType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractGeometryType);
    const altitudeMode = parser.readChildElement('altitudeMode', obj, parser.readAltitudeModeGroup);
    const location = parser.readChildElement(KmlTagName.Location, obj, parser.readLocation);
    const orientation = parser.readChildElement(KmlTagName.Orientation, obj, parser.readOrientation);
    const scale = parser.readChildElement(KmlTagName.Scale, obj, parser.readScale);
    const link = parser.readChildElement(KmlTagName.Link, obj, parser.readLink);
    const resourceMap = parser.readChildElement(KmlTagName.ResourceMap, obj, parser.readResourceMap);

    const modelType: ModelType = {
      ...abstractGeometryTypeValues,
      altitudeMode,
      location,
      orientation,
      scale,
      link,
      resourceMap
    }

    return parser.kmlFactory.createModel(modelType);
  }

  private readLocation(obj: any, parser: KMLParser): LocationType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);

    const longitude = parser.readChildElement('longitude', obj, parser.readAngle180Type);
    const latitude = parser.readChildElement('latitude', obj, parser.readAngle90Type);
    const altitude = parser.readChildElement('altitude', obj, parser.readXsdDouble);

    const locationType: LocationType = {
      ...abstractObjectTypeValues,
      longitude,
      latitude,
      altitude
    }

    return parser.kmlFactory.createLocation(locationType);
  }

  private readOrientation(obj: any, parser: KMLParser): OrientationType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const heading = parser.readChildElement('heading', obj, parser.readAngle360Type);
    const tilt = parser.readChildElement('tilt', obj, parser.readAngle180Type);
    const roll = parser.readChildElement('roll', obj, parser.readAngle360Type);

    const orientationType: OrientationType = {
      ...abstractObjectTypeValues,
      heading,
      tilt,
      roll
    }

    return parser.kmlFactory.createOrientation(orientationType);
  }

  private readScale(obj: any, parser: KMLParser): ScaleType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const x = parser.readChildElement('x', obj, parser.readXsdDouble);
    const y = parser.readChildElement('y', obj, parser.readXsdDouble);
    const z = parser.readChildElement('z', obj, parser.readXsdDouble);

    const scaleType: ScaleType = {
      ...abstractObjectTypeValues,
      x,
      y,
      z
    }

    return parser.kmlFactory.createScale(scaleType);
  }

  private readResourceMap(obj: any, parser: KMLParser): ResourceMapType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const alias = parser.readChildElementArray(KmlTagName.Alias, obj, parser.readAlias);

    const resourceMapType: ResourceMapType = {
      ...abstractObjectTypeValues,
      alias
    }

    return parser.kmlFactory.createResourceMap(resourceMapType);
  }

  private readAlias(obj: any, parser: KMLParser): AliasType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);

    const targetHref = parser.readChildElement('targetHref', obj, parser.readTextContent);
    const sourceHref = parser.readChildElement('sourceHref', obj, parser.readTextContent);

    const aliasType: AliasType = {
      ...abstractObjectTypeValues,
      targetHref,
      sourceHref
    }

    return parser.kmlFactory.createAlias(aliasType);
  }

  private readMultiGeometry(obj: any, parser: KMLParser): MultiGeometryType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractGeometryType);
    const geometry = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractGeometryGroupArray);

    const multiGeometryType: MultiGeometryType = {
      ...abstractGeometryTypeValues,
      geometry
    }

    return parser.kmlFactory.createMultiGeometry(multiGeometryType);
  }

  private readNetworkLink(obj: any, parser: KMLParser): NetworkLinkType {

    const abstractFeatureGroupTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractFeatureType);
    const refreshVisibility = parser.readChildElement('refreshVisibility', obj, parser.readXsdBoolean);
    const flyToView = parser.readChildElement('flyToView', obj, parser.readXsdBoolean);
    const link = parser.readChildElement(KmlTagName.Link, obj, parser.readLink);

    const networkLinkType: NetworkLinkType = {
      ...abstractFeatureGroupTypeValues,
      refreshVisibility,
      flyToView,
      link
    }

    return parser.kmlFactory.createNetworkLink(networkLinkType);
  }

  private readGroundOverlay(obj: any, parser: KMLParser): GroundOverlayType {

    const abstractOverlayTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractOverlayType);
    const altitude = parser.readChildElement('altitude', obj, parser.readXsdDouble);
    const altitudeMode = parser.readChildElement('altitudeMode', obj, parser.readAltitudeModeGroup);
    const latLonBox = parser.readChildElement('latLonBox', obj, parser.readLatLonBox);

    const groundOverlayType: GroundOverlayType = {
      ...abstractOverlayTypeValues,
      altitude,
      altitudeMode,
      latLonBox
    }

    return parser.kmlFactory.createGroundOverlay(groundOverlayType);
  }

  private readPhotoOverlay(obj: any, parser: KMLParser): PhotoOverlayType {

    const abstractOverlayTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractOverlayType);
    const rotation = parser.readChildElement('rotation', obj, parser.readAngle180Type);
    const viewVolume = parser.readChildElement('viewVolume', obj, parser.readViewVolume);
    const imagePyramid = parser.readChildElement('imagePyramid', obj, parser.readImagePyramid);
    const point = parser.readChildElement(KmlTagName.Point, obj, parser.readPoint);
    const shape = parser.readChildElement('shape', obj, parser.readShapeEnumType);

    const photoOverlayType: PhotoOverlayType = {
      ...abstractOverlayTypeValues,
      rotation,
      viewVolume,
      imagePyramid,
      point,
      shape
    }

    return parser.kmlFactory.createPhotoOverlay(photoOverlayType);
  }

  private readScreenOverlay(obj: any, parser: KMLParser): ScreenOverlayType {

    const abstractOverlayTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractOverlayType);
    const overlayXY = parser.readChildElement('overlayXY', obj, parser.readVec2Type);
    const screenXY = parser.readChildElement('screenXY', obj, parser.readVec2Type);
    const rotationXY = parser.readChildElement('rotationXY', obj, parser.readVec2Type);
    const size = parser.readChildElement('size', obj, parser.readVec2Type);
    const rotation = parser.readChildElement('rotation', obj, parser.readAngle180Type);

    const screenOverlayType: ScreenOverlayType = {
      ...abstractOverlayTypeValues,
      overlayXY,
      screenXY,
      rotationXY,
      size,
      rotation
    };

    return parser.kmlFactory.createScreenOverlay(screenOverlayType);
  }

  private readLink(obj: any, parser: KMLParser): LinkType {

    const linkTypeValues = parser.readAbstractGroupOrType(obj, parser.readLinkType);

    const linkType: LinkType = {
      ...linkTypeValues
    }

    return parser.kmlFactory.createLink(linkType);
  }

  private readIcon(obj: any, parser: KMLParser): LinkType {

    const linkTypeValues = parser.readAbstractGroupOrType(obj, parser.readLinkType);

    const linkType: LinkType = {
      ...linkTypeValues
    }

    return parser.kmlFactory.createIcon(linkType);
  }

  private readLatLonBox(obj: any, parser: KMLParser): LatLonBoxType {

    const abstractLatLonBoxTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractLatLonBoxType);
    const rotation = parser.readChildElement('rotation', obj, parser.readAngle180Type);

    const latLonBoxType: LatLonBoxType = {
      ...abstractLatLonBoxTypeValues,
      rotation
    }

    return parser.kmlFactory.createLatLonBox(latLonBoxType);
  }

  private readViewVolume(obj: any, parser: KMLParser): ViewVolumeType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const leftFov = parser.readChildElement('leftFov', obj, parser.readAngle180Type);
    const rightFov = parser.readChildElement('rightFov', obj, parser.readAngle180Type);
    const bottomFov = parser.readChildElement('bottomFov', obj, parser.readAngle90Type);
    const topFov = parser.readChildElement('topFov', obj, parser.readAngle90Type);
    const near = parser.readChildElement('near', obj, parser.readXsdDouble);

    const viewVolumeType: ViewVolumeType = {
      ...abstractObjectTypeValues,
      leftFov,
      rightFov,
      bottomFov,
      topFov,
      near
    }

    return parser.kmlFactory.createViewVolume(viewVolumeType);
  }

  private readImagePyramid(obj: any, parser: KMLParser): ImagePyramidType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const tileSize = parser.readChildElement('tileSize', obj, parser.readXsdInt);
    const maxWidth = parser.readChildElement('maxWidth', obj, parser.readXsdInt);
    const maxHeight = parser.readChildElement('maxHeight', obj, parser.readXsdInt);
    const gridOrigin = parser.readChildElement('gridOrigin', obj, parser.readGridOriginEnumType);

    const imagePyramidType: ImagePyramidType = {
      ...abstractObjectTypeValues,
      tileSize,
      maxWidth,
      maxHeight,
      gridOrigin
    }

    return parser.kmlFactory.createImagePyramid(imagePyramidType);
  }

  private readCamera(obj: any, parser: KMLParser): CameraType {

    const abstractViewTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractViewType);
    const longitude = parser.readChildElement('longitude', obj, parser.readAngle180Type);
    const latitude = parser.readChildElement('latitude', obj, parser.readAngle90Type);
    const altitude = parser.readChildElement('altitude', obj, parser.readXsdDouble);
    const heading = parser.readChildElement('heading', obj, parser.readAngle360Type);
    const tilt = parser.readChildElement('tilt', obj, parser.readAngle180Type);
    const roll = parser.readChildElement('roll', obj, parser.readAngle180Type);
    const altitudeMode = parser.readChildElement('altitudeMode', obj, parser.readAltitudeModeGroup);

    const cameraType: CameraType = {
      ...abstractViewTypeValues,
      longitude,
      latitude,
      altitude,
      heading,
      tilt,
      roll,
      altitudeMode
    }

    return parser.kmlFactory.createCamera(cameraType);
  }

  private readLookAt(obj: any, parser: KMLParser): LookAtType {

    const abstractViewTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractViewType);
    const longitude = parser.readChildElement('longitude', obj, parser.readAngle180Type);
    const latitude = parser.readChildElement('latitude', obj, parser.readAngle90Type);
    const altitude = parser.readChildElement('altitude', obj, parser.readXsdDouble);
    const heading = parser.readChildElement('heading', obj, parser.readAngle360Type);
    const tilt = parser.readChildElement('tilt', obj, parser.readAngle180Type);
    const range = parser.readChildElement('range', obj, parser.readXsdDouble);
    const altitudeMode = parser.readChildElement('altitudeMode', obj, parser.readAltitudeModeGroup);

    const lookAtType: LookAtType = {
      ...abstractViewTypeValues,
      longitude,
      latitude,
      altitude,
      heading,
      tilt,
      range,
      altitudeMode
    }

    return parser.kmlFactory.createLookAt(lookAtType);
  }

  private readTimeSpan(obj: any, parser: KMLParser): TimeSpanType {

    const abstractTimePrimitiveTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractTimePrimitiveType);
    const begin = parser.readChildElement('begin', obj, parser.readDateTimeType);
    const end = parser.readChildElement('end', obj, parser.readDateTimeType);

    const timeSpanType: TimeSpanType = {
      ...abstractTimePrimitiveTypeValues,
      begin,
      end
    }

    return parser.kmlFactory.createTimeSpan(timeSpanType);
  }

  private readTimeStamp(obj: any, parser: KMLParser): TimeStampType {

    const abstractTimePrimitiveTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractTimePrimitiveType);
    const when = parser.readChildElement('when', obj, parser.readDateTimeType);

    const timeStampType: TimeStampType = {
      ...abstractTimePrimitiveTypeValues,
      when
    }

    return parser.kmlFactory.createTimeStamp(timeStampType);
  }

  private readStyle(obj: any, parser: KMLParser): StyleType {

    const abstractStyleSelectorTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractStyleSelectorType);
    const iconStyle = parser.readChildElement(KmlTagName.IconStyle, obj, parser.readIconStyle);
    const labelStyle = parser.readChildElement(KmlTagName.LabelStyle, obj, parser.readLabelStyle);
    const lineStyle = parser.readChildElement(KmlTagName.LineStyle, obj, parser.readLineStyle);
    const polyStyle = parser.readChildElement(KmlTagName.PolyStyle, obj, parser.readPolyStyle);
    const balloonStyle = parser.readChildElement(KmlTagName.BalloonStyle, obj, parser.readBalloonStyle);
    const listStyle = parser.readChildElement(KmlTagName.ListStyle, obj, parser.readListStyle);

    const styleType: StyleType = {
      ...abstractStyleSelectorTypeValues,
      iconStyle,
      labelStyle,
      lineStyle,
      polyStyle,
      balloonStyle,
      listStyle
    }

    return parser.kmlFactory.createStyle(styleType);
  }

  private readStyleMap(obj: any, parser: KMLParser): StyleMapType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const pair = parser.readChildElementArray(KmlTagName.Pair, obj, parser.readPair);

    const styleMapType: StyleMapType = {
      ...abstractObjectTypeValues,
      pair
    }

    return parser.kmlFactory.createStyleMap(styleMapType);
  }

  private readPair(obj: any, parser: KMLParser): PairType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const key = parser.readChildElement('key', obj, parser.readStyleStateEnumType);
    const styleUrl = parser.readChildElement('styleUrl', obj, parser.readXsdAnyUri);
    const styleSelector = parser.readAbstractGroupOrType(obj, parser.readAbstractStyleSelectorGroup);

    const pairType: PairType = {
      ...abstractObjectTypeValues,
      key,
      styleUrl,
      styleSelector
    }

    return parser.kmlFactory.createPair(pairType);
  }

  private readBalloonStyle(obj: any, parser: KMLParser): BalloonStyleType {

    const abstractSubStyleTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractSubStyleType);
    const bgColor = parser.readChildElement('bgColor', obj, parser.readColorType);
    const textColor = parser.readChildElement('textColor', obj, parser.readColorType);
    const text = parser.readChildElement('text', obj, parser.readTextContent);
    const displayMode = parser.readChildElement('displayMode', obj, parser.readDisplayModeEnumType);

    const balloonStyleType: BalloonStyleType = {
      ...abstractSubStyleTypeValues,
      bgColor,
      textColor,
      text,
      displayMode
    }

    return parser.kmlFactory.createBalloonStyle(balloonStyleType);
  }

  private readIconStyle(obj: any, parser: KMLParser): IconStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractColorStyleType);
    const scale = parser.readChildElement('scale', obj, parser.readXsdDouble);
    const heading = parser.readChildElement('heading', obj, parser.readAngle360Type);
    const icon = parser.readChildElement(KmlTagName.Icon, obj, parser.readBasicLinkType);
    const hotSpot = parser.readChildElement('hotSpot', obj, parser.readVec2Type);

    const iconStyleType: IconStyleType = {
      ...abstractColorStyleTypeValues,
      scale,
      heading,
      icon,
      hotSpot
    }

    return parser.kmlFactory.createIconStyle(iconStyleType);
  }

  private readLabelStyle(obj: any, parser: KMLParser): LabelStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractColorStyleType);
    const scale = parser.readChildElement('scale', obj, parser.readXsdDouble);

    const labelStyleType: LabelStyleType = {
      ...abstractColorStyleTypeValues,
      scale
    }

    return parser.kmlFactory.createLabelStyle(labelStyleType);
  }

  private readLineStyle(obj: any, parser: KMLParser): LineStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractColorStyleType);
    const width = parser.readChildElement('width', obj, parser.readXsdDouble);

    const lineStyleType: LineStyleType = {
      ...abstractColorStyleTypeValues,
      width
    }

    return parser.kmlFactory.createLineStyle(lineStyleType);
  }

  private readPolyStyle(obj: any, parser: KMLParser): PolyStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractColorStyleType);

    const fill = parser.readChildElement('fill', obj, parser.readXsdBoolean);
    const outline = parser.readChildElement('outline', obj, parser.readXsdBoolean);

    const polyStyleType: PolyStyleType = {
      ...abstractColorStyleTypeValues,
      fill,
      outline
    }

    return parser.kmlFactory.createPolyStyle(polyStyleType);
  }

  private readListStyle(obj: any, parser: KMLParser): ListStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractColorStyleType);
    const listItemType = parser.readChildElement('listItemType', obj, parser.readListItemTypeEnumType);
    const bgColor = parser.readChildElement('bgColor', obj, parser.readColorType);
    const itemIcon = parser.readChildElement(KmlTagName.ItemIcon, obj, parser.readItemIcon);
    const maxSnippetLines = parser.readChildElement('maxSnippetLines', obj, parser.readXsdInt);

    const listStyleType: ListStyleType = {
      ...abstractColorStyleTypeValues,
      listItemType,
      bgColor,
      itemIcon,
      maxSnippetLines
    }

    return parser.kmlFactory.createListStyle(listStyleType);
  }

  private readItemIcon(obj: any, parser: KMLParser): ItemIconType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const state = parser.readChildElement('state', obj, parser.readItemIconStateType);
    const href = parser.readChildElement('href', obj, parser.readTextContent);

    const itemIconType: ItemIconType = {
      ...abstractObjectTypeValues,
      state,
      href
    }

    return parser.kmlFactory.createItemIcon(itemIconType);
  }

  private readRegion(obj: any, parser: KMLParser): RegionType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const latLonAltBox = parser.readChildElement(KmlTagName.LatLonAltBox, obj, parser.readLatLonBox);
    const lod = parser.readChildElement(KmlTagName.Lod, obj, parser.readLod);

    const regionType: RegionType = {
      ...abstractObjectTypeValues,
      latLonAltBox,
      lod
    }

    return parser.kmlFactory.createRegion(regionType);
  }

  private readLatLonAltBox(obj: any, parser: KMLParser): LatLonAltBoxType {

    const abstractLatLonBoxTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractLatLonBoxType);
    const minAltitude = parser.readChildElement('minAltitude', obj, parser.readXsdDouble);
    const maxAltitude = parser.readChildElement('maxAltitude', obj, parser.readXsdDouble);
    const altitudeMode = parser.readChildElement('altitudeMode', obj, parser.readAltitudeModeGroup);

    const latLonAltBoxType: LatLonAltBoxType = {
      ...abstractLatLonBoxTypeValues,
      minAltitude,
      maxAltitude,
      altitudeMode
    }

    return parser.kmlFactory.createLatLonAltBox(latLonAltBoxType);
  }

  private readLod(obj: any, parser: KMLParser): LodType {

    const abstractLatLonBoxTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractLatLonBoxType);
    const minLodPixels = parser.readChildElement('minLodPixels', obj, parser.readXsdDouble);
    const maxLodPixels = parser.readChildElement('maxLodPixels', obj, parser.readXsdDouble);
    const minFadeExtent = parser.readChildElement('minFadeExtent', obj, parser.readXsdDouble);
    const maxFadeExtent = parser.readChildElement('maxFadeExtent', obj, parser.readXsdDouble);

    const lodType: LodType = {
      ...abstractLatLonBoxTypeValues,
      minLodPixels,
      maxLodPixels,
      minFadeExtent,
      maxFadeExtent
    }

    return parser.kmlFactory.createLod(lodType);
  }

  // TODO: parse any
  private readExtendedData(obj: any, parser: KMLParser): ExtendedDataType {

    const data = parser.readChildElementArray(KmlTagName.Data, obj, parser.readData);
    const schemaData = parser.readChildElementArray(KmlTagName.SchemaData, obj, parser.readSchemaData);

    const extendedDataType: ExtendedDataType = {
      data,
      schemaData,
      any: []
    }

    return parser.kmlFactory.createExtendedData(extendedDataType);
  }

  private readData(obj: any, parser: KMLParser): DataType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);

    const name = parser.readAttribute('name', obj, parser.readTextContent);
    const displayName = parser.readChildElement('displayName', obj, parser.readTextContent);
    const value = parser.readChildElement('value', obj, parser.readTextContent);

    const dataType: DataType = {
      ...abstractObjectTypeValues,
      name,
      displayName,
      value
    }

    return parser.kmlFactory.createData(dataType);
  }

  private readSchemaData(obj: any, parser: KMLParser): SchemaDataType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(obj, parser.readAbstractObjectType);
    const schemaUrl = parser.readAttribute('schemaUrl', obj, parser.readXsdAnyUri);
    const simpleData = parser.readChildElementArray(KmlTagName.SimpleData, obj, parser.readSimpleData);

    const schemaDataType: SchemaDataType = {
      ...abstractObjectTypeValues,
      schemaUrl,
      simpleData
    }

    return parser.kmlFactory.createSchemaData(schemaDataType);
  }

  // TODO: parse text content
  private readSimpleData(obj: any, parser: KMLParser): SimpleDataType {

    const name = parser.readAttribute('name', obj, parser.readTextContent);

    const simpleDataType: SimpleDataType = {
      name,
    };

    return parser.kmlFactory.createSimpleData(simpleDataType);
  }

  private readNetworkLinkControl(obj: any, parser: KMLParser): NetworkLinkControlType {

    const minRefreshPeriod = parser.readChildElement('minRefreshPeriod', obj, parser.readXsdDouble);
    const maxSessionLength = parser.readChildElement('maxSessionLength', obj, parser.readXsdDouble);
    const cookie = parser.readChildElement('cookie', obj, parser.readTextContent);
    const message = parser.readChildElement('message', obj, parser.readTextContent);
    const linkName = parser.readChildElement('linkName', obj, parser.readTextContent);
    const linkDescription = parser.readChildElement('linkDescription', obj, parser.readTextContent);
    const linkSnippet = parser.readChildElement('linkSnippet', obj, parser.readTextContent);
    const expires = parser.readChildElement('expires', obj, parser.readDateTimeType);
    const update = parser.readChildElement(KmlTagName.Update, obj, parser.readUpdate);
    const view = parser.readAbstractGroupOrType(obj, parser.readAbstractViewGroup);

    const networkLinkControlType: NetworkLinkControlType = {
      minRefreshPeriod,
      maxSessionLength,
      cookie,
      message,
      linkName,
      linkDescription,
      linkSnippet,
      expires,
      update,
      view
    }

    return parser.kmlFactory.createNetworkLinkControl(networkLinkControlType);
  }

  private readUpdate(obj: any, parser: KMLParser): UpdateType {

    const targetHref = parser.readChildElement('targetHref', obj, parser.readXsdAnyUri);
    const create = parser.readChildElement(KmlTagName.Create, obj, parser.readCreate);
    const deleteElement = parser.readChildElement(KmlTagName.Delete, obj, parser.readDelete);
    const change = parser.readChildElement(KmlTagName.Change, obj, parser.readChange);

    const createDeleteChange = create || deleteElement || change; // xsd:choice

    if (!targetHref) {
      throw new Error('Child element \'targetHref\' is required on element \'Update\'');
    }

    const updateType: UpdateType = {
      targetHref,
      createDeleteChange
    }

    return parser.kmlFactory.createUpdate(updateType);
  }

  private readCreate(obj: any, parser: KMLParser): CreateType {

    const container = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractContainerGroupArray);

    const createType: CreateType = {
      container
    }

    return parser.kmlFactory.createCreate(createType);
  }

  private readDelete(obj: any, parser: KMLParser): DeleteType {

    const feature = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractFeatureGroupArray);

    const deleteType: DeleteType = {
      feature
    }

    return parser.kmlFactory.createDelete(deleteType);
  }

  private readChange(obj: any, parser: KMLParser): ChangeType {

    const object = parser.readAbstractGroupOrTypeArray(obj, parser.readAbstractObjectGroupArray);

    const changeType: ChangeType = {
      object
    }

    return parser.kmlFactory.createChange(changeType);
  }

  private readXsdBoolean(obj: any): boolean {

    if (obj === true) {
      return true;
    } else if (obj === false) {
      return false;
    } else if (obj === 'true') {
      return true;
    } else if (obj === 'false') {
      return false;
    } else if (obj === 1) {
      return true;
    } else if (obj === 0) {
      return false;
    }

    throw new Error('Could not parse as boolean: ' + obj);
  }

  private readXsdInt(obj: any, parser: KMLParser): number {

    const intString = parser.readTextContent(obj);
    const int = parseInt(intString);

    if (isNaN(int)) {
      throw new Error('Could not parse as int: ' + int);
    }

    return int;
  }

  private readXsdDouble(obj: any, parser: KMLParser): number {

    const doubleString = parser.readTextContent(obj);
    const double = parseFloat(doubleString);

    if (isNaN(double)) {
      throw new Error('Could not parse as double: ' + obj);
    }

    return double;
  }

  private readXsdID(obj: any, parser: KMLParser): ID {
    return parser.readTextContent(obj);
  }

  private readXsdNCName(obj: any, parser: KMLParser): NCName {
    return parser.readTextContent(obj);
  }

  private readXsdAnyUri(obj: any, parser: KMLParser): AnyURI {
    return parser.readTextContent(obj);
  }

  private readAltitudeModeGroup(obj: any, parser: KMLParser): AltitudeModeGroup {

    const altitudeModeEnumTypeString = parser.readTextContent(obj);

    if (altitudeModeEnumTypeString === AltitudeModeEnumType.absolute) {
      return AltitudeModeEnumType.absolute;
    } else if (altitudeModeEnumTypeString === AltitudeModeEnumType.clampToGround) {
      return AltitudeModeEnumType.clampToGround;
    } else if (altitudeModeEnumTypeString === AltitudeModeEnumType.relativeToGround) {
      return AltitudeModeEnumType.relativeToGround;
    }

    throw new Error('Could not parse as altitudeModeGroup: ' + obj);
  }

  private readAngle90Type(obj: any, parser: KMLParser): Angle90Type {

    const double = parser.readXsdDouble(obj, parser);

    if (double < -90.0 || double > 90.0) {
      throw new Error('angle90Type out of bounds: ' + double);
    }

    return double;
  }

  private readAngle180Type(obj: any, parser: KMLParser): Angle180Type {

    const double = parser.readXsdDouble(obj, parser);

    if (double < -180.0 || double > 180.0) {
      throw new Error('angle180Type out of bounds: ' + double);
    }

    return double;
  }

  private readAngle360Type(obj: any, parser: KMLParser): Angle360Type {

    const double = parser.readXsdDouble(obj, parser);

    if (double < -360.0 || double > 360.0) {
      throw new Error('angle360Type out of bounds: ' + double);
    }

    return double;
  }

  private readColorType(obj: any, parser: KMLParser): ColorType {

    const colorTypeString = parser.readTextContent(obj);

    if (colorTypeString.length !== 8) {
      throw new Error('Could not parse as colorType: ' + obj);
    }

    return obj;
  }

  private readColorModeEnumType(obj: any, parser: KMLParser): ColorModeEnumType {

    const colorModeEnumTypeString = parser.readTextContent(obj);

    if (colorModeEnumTypeString === ColorModeEnumType.normal) {
      return ColorModeEnumType.normal;
    } else if (colorModeEnumTypeString === ColorModeEnumType.random) {
      return ColorModeEnumType.random;
    }

    throw new Error('Could not parse as colorModeEnumType: ' + obj);
  }

  // TODO: parse correctly
  private readDateTimeType(obj: any, parser: KMLParser): DateTimeType {
    const dateTimeTypeString = parser.readTextContent(obj);
    return new Date(dateTimeTypeString);
  }

  private readDisplayModeEnumType(obj: any, parser: KMLParser): DisplayModeEnumType {

    const displayModeEnumTypeString = parser.readTextContent(obj);

    if (displayModeEnumTypeString === DisplayModeEnumType.default) {
      return DisplayModeEnumType.default;
    } else if (displayModeEnumTypeString === DisplayModeEnumType.hide) {
      return DisplayModeEnumType.hide;
    }

    throw new Error('Could not parse as displayModeEnumType: ' + obj);
  }

  private readGridOriginEnumType(obj: any, parser: KMLParser): GridOriginEnumType {

    const gridOriginEnumTypeString = parser.readTextContent(obj);

    if (gridOriginEnumTypeString === GridOriginEnumType.lowerLeft) {
      return GridOriginEnumType.lowerLeft;
    } else if (gridOriginEnumTypeString === GridOriginEnumType.upperLeft) {
      return GridOriginEnumType.upperLeft;
    }

    throw new Error('Could not parse as gridOriginEnumType: ' + obj);
  }

  private readRefreshModeEnumType(obj: any, parser: KMLParser): RefreshModeEnumType {

    const refreshModeEnumTypeString = parser.readTextContent(obj);

    if (refreshModeEnumTypeString === RefreshModeEnumType.onChange) {
      return RefreshModeEnumType.onChange;
    } else if (refreshModeEnumTypeString === RefreshModeEnumType.onExpire) {
      return RefreshModeEnumType.onExpire;
    } else if (refreshModeEnumTypeString === RefreshModeEnumType.onInterval) {
      return RefreshModeEnumType.onInterval;
    }

    throw new Error('Could not parse as refreshModeEnumType: ' + obj);
  }

  private readShapeEnumType(obj: any, parser: KMLParser): ShapeEnumType {

    const readShapeEnumTypeString = parser.readTextContent(obj);

    if (readShapeEnumTypeString === ShapeEnumType.rectangle) {
      return ShapeEnumType.rectangle;
    } else if (readShapeEnumTypeString === ShapeEnumType.cylinder) {
      return ShapeEnumType.cylinder;
    } else if (readShapeEnumTypeString === ShapeEnumType.sphere) {
      return ShapeEnumType.sphere;
    }

    throw new Error('Could not parse as shapeEnumType: ' + obj);
  }

  private readStyleStateEnumType(obj: any, parser: KMLParser): StyleStateEnumType {

    const styleStateEnumTypeString = parser.readTextContent(obj);

    if (styleStateEnumTypeString === StyleStateEnumType.normal) {
      return StyleStateEnumType.normal;
    } else if (styleStateEnumTypeString === StyleStateEnumType.highlight) {
      return StyleStateEnumType.highlight;
    }

    throw new Error('Could not parse as styleStateEnumType: ' + obj);
  }

  private readUnitsEnumType(obj: any, parser: KMLParser): UnitsEnumType {

    const unitsEnumTypeString = parser.readTextContent(obj);

    if (unitsEnumTypeString === UnitsEnumType.pixels) {
      return UnitsEnumType.pixels;
    } else if (unitsEnumTypeString === UnitsEnumType.fraction) {
      return UnitsEnumType.fraction;
    } else if (unitsEnumTypeString === UnitsEnumType.insetPixels) {
      return UnitsEnumType.insetPixels;
    }

    throw new Error('Could not parse as unitsEnumType: ' + obj);
  }

  private readVec2Type(obj: any, parser: KMLParser): Vec2Type {

    const x = parser.readAttribute('x', obj, parser.readXsdDouble);
    const y = parser.readAttribute('y', obj, parser.readXsdDouble);
    const xunits = parser.readAttribute('xunits', obj, parser.readUnitsEnumType);
    const yunits = parser.readAttribute('yunits', obj, parser.readUnitsEnumType);

    if (x === undefined) {
      throw new Error('Attribute \'x\' is required on \'vec2Type\'');
    }

    if (y === undefined) {
      throw new Error('Attribute \'y\' is required on \'vec2Type\'');
    }

    return {
      x,
      y,
      xunits,
      yunits
    };
  }

  private readViewRefreshModeEnumType(obj: any, parser: KMLParser): ViewRefreshModeEnumType {

    const viewRefreshModeEnumTypeString = parser.readTextContent(obj);

    if (viewRefreshModeEnumTypeString === ViewRefreshModeEnumType.never) {
      return ViewRefreshModeEnumType.never;
    } else if (viewRefreshModeEnumTypeString === ViewRefreshModeEnumType.onRegion) {
      return ViewRefreshModeEnumType.onRegion;
    } else if (viewRefreshModeEnumTypeString === ViewRefreshModeEnumType.onStop) {
      return ViewRefreshModeEnumType.onStop;
    } else if (viewRefreshModeEnumTypeString === ViewRefreshModeEnumType.onRequest) {
      return ViewRefreshModeEnumType.onRequest;
    }

    throw new Error('Could not parse as viewRefreshModeEnumType: ' + obj);
  }

  private readListItemTypeEnumType(obj: any, parser: KMLParser): ListItemTypeEnumType {

    const listItemTypeEnumTypeString = parser.readTextContent(obj);

    if (listItemTypeEnumTypeString === ListItemTypeEnumType.check) {
      return ListItemTypeEnumType.check;
    } else if (listItemTypeEnumTypeString === ListItemTypeEnumType.checkHideChildren) {
      return ListItemTypeEnumType.checkHideChildren;
    } else if (listItemTypeEnumTypeString === ListItemTypeEnumType.checkOffOnly) {
      return ListItemTypeEnumType.checkOffOnly;
    } else if (listItemTypeEnumTypeString === ListItemTypeEnumType.radioFolder) {
      return ListItemTypeEnumType.radioFolder;
    }

    throw new Error('Could not parse as listItemTypeEnumType: ' + obj);
  }

  private readItemIconStateType(obj: any, parser: KMLParser): ItemIconStateType {

    let itemIconStateTypeString = parser.readTextContent(obj);

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

  private readBoundaryType(obj: any, parser: KMLParser): BoundaryType {

    const linearRing = parser.readChildElement(KmlTagName.LinearRing, obj, parser.readLinearRing);

    return {
      ...linearRing
    }
  }

  private readBoundaryTypeArray(obj: any, parser: KMLParser): BoundaryType[] {
    return parser.readChildElementArray(KmlTagName.LinearRing, obj, parser.readLinearRing);
  }

  private readCoordinates(obj: any, parser: KMLParser): CoordinatesType {

    let coordinatesString = parser.readTextContent(obj);

    // replace newlines and whitespaces with a single whitespace
    coordinatesString = coordinatesString.replace(/\n*\s+/g, ' ');

    return coordinatesString.split(' ');
  }
}
