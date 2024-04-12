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

  private readAbstractObjectType(node: any, parser: KMLParser): AbstractObjectType {

    const id = parser.readAttribute(KmlAttributeName.id, node, parser.readXsID);
    const targetId = parser.readAttribute(KmlAttributeName.targetId, node, parser.readXsNCName);

    return {
      id,
      targetId
    }
  }

  private readAbstractFeatureType(node: any, parser: KMLParser): AbstractFeatureType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);

    const name = parser.readChildElement(KmlTagName.name, node, parser.readXsString);
    const visibility = parser.readChildElement(KmlTagName.visibility, node, parser.readXsBoolean);
    const open = parser.readChildElement(KmlTagName.open, node, parser.readXsBoolean);
    const atomAuthor = parser.readChildElement(KmlTagName.author, node, parser.readAtomAuthor);
    const atomLink = parser.readChildElement(KmlTagName.link, node, parser.readAtomLink);
    const address = parser.readChildElement(KmlTagName.address, node, parser.readXsString);
    // TODO: xal:AddressDetails
    const phoneNumber = parser.readChildElement(KmlTagName.phoneNumber, node, parser.readXsString);
    const snippet = parser.readChildElement(KmlTagName.snippet, node, parser.readXsString);
    const description = parser.readChildElement(KmlTagName.description, node, parser.readXsString);
    const view = parser.readAbstractGroupOrType(node, parser.readAbstractViewGroup);
    const timePrimitive = parser.readAbstractGroupOrType(node, parser.readAbstractTimePrimitiveGroup);
    const styleUrl = parser.readChildElement(KmlTagName.styleUrl, node, parser.readXsAnyUri);
    const styleSelector = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractStyleSelectorGroupArray);
    const region = parser.readChildElement(KmlTagName.Region, node, parser.readRegion);
    const extendedData = parser.readChildElement(KmlTagName.ExtendedData, node, parser.readExtendedData);

    return {
      ...abstractObjectTypeValues,
      name,
      visibility,
      open,
      atomAuthor,
      atomLink,
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

  private readAbstractContainerType(node: any, parser: KMLParser): AbstractContainerType {
    return {
      ...parser.readAbstractGroupOrType(node, parser.readAbstractFeatureType)
    };
  }

  private readAbstractGeometryType(node: any, parser: KMLParser): AbstractGeometryType {
    return {
      ...parser.readAbstractGroupOrType(node, parser.readAbstractObjectType)
    };
  }

  private readAbstractOverlayType(node: any, parser: KMLParser): AbstractOverlayType {

    const abstractFeatureTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractFeatureType);
    const color = parser.readChildElement(KmlTagName.color, node, parser.readColorType);
    const drawOrder = parser.readChildElement(KmlTagName.drawOrder, node, parser.readXsInt);
    const icon = parser.readChildElement(KmlTagName.Icon, node, parser.readIcon);

    return {
      ...abstractFeatureTypeValues,
      color,
      drawOrder,
      icon
    }
  }

  private readAbstractStyleSelectorType(node: any, parser: KMLParser): AbstractStyleSelectorType {
    return {
      ...parser.readAbstractGroupOrType(node, parser.readAbstractObjectType)
    };
  }

  private readAbstractSubStyleType(node: any, parser: KMLParser): AbstractSubStyleType {
    return {
      ...parser.readAbstractGroupOrType(node, parser.readAbstractObjectType)
    };
  }

  private readAbstractColorStyleType(node: any, parser: KMLParser): AbstractColorStyleType {

    const abstractSubStyleTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractSubStyleType);

    const color = parser.readChildElement(KmlTagName.color, node, parser.readColorType);
    const colorMode = parser.readChildElement(KmlTagName.colorMode, node, parser.readColorModeEnumType);

    return {
      ...abstractSubStyleTypeValues,
      color,
      colorMode
    }
  }

  private readAbstractViewType(node: any, parser: KMLParser): AbstractViewType {
    return {
      ...parser.readAbstractGroupOrType(node, parser.readAbstractObjectType)
    }
  }

  private readAbstractLatLonBoxType(node: any, parser: KMLParser): AbstractLatLonBoxType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const north = parser.readChildElement(KmlTagName.north, node, parser.readAngle180Type);
    const south = parser.readChildElement(KmlTagName.south, node, parser.readAngle180Type);
    const east = parser.readChildElement(KmlTagName.east, node, parser.readAngle180Type);
    const west = parser.readChildElement(KmlTagName.west, node, parser.readAngle180Type);

    return {
      ...abstractObjectTypeValues,
      north,
      south,
      east,
      west
    }
  }

  private readBasicLinkType(node: any, parser: KMLParser): BasicLinkType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const href = parser.readChildElement(KmlTagName.href, node, parser.readXsString);

    return {
      ...abstractObjectTypeValues,
      href
    }
  }

  private readLinkType(node: any, parser: KMLParser): LinkType {

    const basicLinkTypeValues = parser.readAbstractGroupOrType(node, parser.readBasicLinkType);
    const refreshMode = parser.readChildElement(KmlTagName.refreshMode, node, parser.readRefreshModeEnumType);
    const refreshInterval = parser.readChildElement(KmlTagName.refreshInterval, node, parser.readXsDouble);
    const viewRefreshMode = parser.readChildElement(KmlTagName.viewRefreshMode, node, parser.readViewRefreshModeEnumType);
    const viewRefreshTime = parser.readChildElement(KmlTagName.viewRefreshTime, node, parser.readXsDouble);
    const viewBoundScale = parser.readChildElement(KmlTagName.viewBoundScale, node, parser.readXsDouble);
    const viewFormat = parser.readChildElement(KmlTagName.viewFormat, node, parser.readXsString);
    const httpQuery = parser.readChildElement(KmlTagName.httpQuery, node, parser.readXsString);

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

  private readAbstractTimePrimitiveType(node: any, parser: KMLParser): AbstractTimePrimitiveType {
    return {
      ...parser.readAbstractGroupOrType(node, parser.readAbstractObjectType)
    };
  }

  private readAbstractObjectGroupArray(node: any, parser: KMLParser): AbstractObjectType[] {

    const abstractFeatureGroupArray = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractFeatureGroupArray); // Includes AbstractContainerGroup, AbstractOverlayGroup
    const abstractGeometryGroupArray = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractGeometryGroupArray);
    const abstractStyleSelectorGroupArray = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractStyleSelectorGroupArray);
    const abstractTimePrimitiveGroupArray = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractTimePrimitiveGroupArray);
    const abstractViewGroupArray = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractViewGroupArray);
    const abstractSubStyleGroupArray = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractSubStyleGroupArray); // Includes AbstractColorStyleGroup
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
    const abstractContainerGroup = parser.readAbstractGroupOrType(node, parser.readAbstractContainerGroup);
    const abstractOverlayGroup = parser.readAbstractGroupOrType(node, parser.readAbstractOverlayGroup);

    return placemark || networkLink || abstractContainerGroup || abstractOverlayGroup;
  }

  private readAbstractFeatureGroupArray(node: any, parser: KMLParser): AbstractFeatureType[] {

    const placemark = parser.readChildElementArray(KmlTagName.Placemark, node, parser.readPlacemark);
    const networkLink = parser.readChildElementArray(KmlTagName.NetworkLink, node, parser.readNetworkLink);
    const abstractContainerGroupArray = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractContainerGroupArray);
    const abstractOverlayGroupArray = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractOverlayGroupArray);

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
    const colorStyleGroupArray = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractColorStyleGroupArray);

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

    const hint = parser.readAttribute(KmlAttributeName.hint, node, parser.readXsString);
    const networkLinkControl = parser.readChildElement(KmlTagName.NetworkLinkControl, node, parser.readNetworkLinkControl);
    const feature = parser.readAbstractGroupOrType(node, parser.readAbstractFeatureGroup);

    const kml: KmlType = {
      hint,
      networkLinkControl,
      feature
    }

    return parser.kmlFactory.createKml(kml);
  }

  private readPlacemark(node: any, parser: KMLParser): PlacemarkType {

    const abstractFeatureTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractFeatureType);
    const geometry = parser.readAbstractGroupOrType(node, parser.readAbstractGeometryGroup);

    const placemarkType: PlacemarkType = {
      ...abstractFeatureTypeValues,
      geometry
    };

    return parser.kmlFactory.createPlacemark(placemarkType);
  }

  private readFolder(node: any, parser: KMLParser): FolderType {

    const abstractContainerTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractContainerType);
    const feature = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractFeatureGroupArray);

    const folderType: FolderType = {
      ...abstractContainerTypeValues,
      feature
    }

    return parser.kmlFactory.createFolder(folderType);
  }

  private readDocument(node: any, parser: KMLParser): DocumentType {

    const abstractContainerTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractContainerType);

    parser.kmlFactory.setSharedStyle(abstractContainerTypeValues?.styleSelector ?? []);

    const schema = parser.readChildElementArray(KmlTagName.Schema, node, parser.readSchema);
    const feature = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractFeatureGroupArray);

    const documentType: DocumentType = {
      ...abstractContainerTypeValues,
      schema,
      feature
    }

    parser.kmlFactory.resetSharedStyle();
    return parser.kmlFactory.createDocument(documentType);
  }

  private readSchema(node: any, parser: KMLParser): SchemaType {

    const id = parser.readAttribute(KmlAttributeName.id, node, parser.readXsID);
    const name = parser.readAttribute(KmlAttributeName.name, node, parser.readXsString);
    const simpleField = parser.readChildElementArray(KmlTagName.SimpleField, node, parser.readSimpleField);

    const schemaType: SchemaType = {
      id,
      name,
      simpleField
    }

    return parser.kmlFactory.createSchema(schemaType);
  }

  private readSimpleField(node: any, parser: KMLParser): SimpleFieldType {

    const type = parser.readAttribute(KmlAttributeName.type, node, parser.readXsString);
    const name = parser.readAttribute(KmlAttributeName.name, node, parser.readXsString);
    const displayName = parser.readChildElement(KmlTagName.displayName, node, parser.readXsString);

    const simpleFieldType: SimpleFieldType = {
      type,
      name,
      displayName
    }

    return parser.kmlFactory.createSimpleField(simpleFieldType);
  }

  private readLineString(node: any, parser: KMLParser): LineStringType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractGeometryType);
    const extrude = parser.readChildElement(KmlTagName.extrude, node, parser.readXsBoolean);
    const tessellate = parser.readChildElement(KmlTagName.tessellate, node, parser.readXsBoolean);
    const altitudeMode = parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup);
    const coordinates = parser.readChildElement(KmlTagName.coordinates, node, parser.readCoordinates);

    const lineStringType: LineStringType = {
      ...abstractGeometryTypeValues,
      extrude,
      tessellate,
      altitudeMode,
      coordinates
    }

    return parser.kmlFactory.createLineString(lineStringType);
  }

  private readPolygon(node: any, parser: KMLParser): PolygonType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractGeometryType);
    const extrude = parser.readChildElement(KmlTagName.extrude, node, parser.readXsBoolean);
    const tessellate = parser.readChildElement(KmlTagName.tessellate, node, parser.readXsBoolean);
    const altitudeMode = parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup);
    const outerBoundaryIs = parser.readChildElement(KmlTagName.outerBoundaryIs, node, parser.readBoundaryType);
    const innerBoundaryIs = parser.readChildElement(KmlTagName.innerBoundaryIs, node, parser.readBoundaryTypeArray);

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

  private readPoint(node: any, parser: KMLParser): PointType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractGeometryType);
    const extrude = parser.readChildElement(KmlTagName.extrude, node, parser.readXsBoolean);
    const altitudeMode = parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup);
    const coordinates = parser.readChildElement(KmlTagName.coordinates, node, parser.readCoordinates);

    const pointType: PointType = {
      ...abstractGeometryTypeValues,
      extrude,
      altitudeMode,
      coordinates
    }

    return parser.kmlFactory.createPoint(pointType);
  }

  private readLinearRing(node: any, parser: KMLParser): LinearRingType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractGeometryType);

    const extrude = parser.readChildElement(KmlTagName.extrude, node, parser.readXsBoolean);
    const tessellate = parser.readChildElement(KmlTagName.tessellate, node, parser.readXsBoolean);
    const altitudeMode = parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup);
    const coordinates = parser.readChildElement(KmlTagName.coordinates, node, parser.readCoordinates);

    const linearRingType: LinearRingType = {
      ...abstractGeometryTypeValues,
      extrude,
      tessellate,
      altitudeMode,
      coordinates
    }

    return parser.kmlFactory.createLinearRing(linearRingType);
  }

  private readModel(node: any, parser: KMLParser): ModelType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractGeometryType);
    const altitudeMode = parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup);
    const location = parser.readChildElement(KmlTagName.Location, node, parser.readLocation);
    const orientation = parser.readChildElement(KmlTagName.Orientation, node, parser.readOrientation);
    const scale = parser.readChildElement(KmlTagName.Scale, node, parser.readScale);
    const link = parser.readChildElement(KmlTagName.Link, node, parser.readLink);
    const resourceMap = parser.readChildElement(KmlTagName.ResourceMap, node, parser.readResourceMap);

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

  private readLocation(node: any, parser: KMLParser): LocationType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);

    const longitude = parser.readChildElement(KmlTagName.longitude, node, parser.readAngle180Type);
    const latitude = parser.readChildElement(KmlTagName.latitude, node, parser.readAngle90Type);
    const altitude = parser.readChildElement(KmlTagName.altitude, node, parser.readXsDouble);

    const locationType: LocationType = {
      ...abstractObjectTypeValues,
      longitude,
      latitude,
      altitude
    }

    return parser.kmlFactory.createLocation(locationType);
  }

  private readOrientation(node: any, parser: KMLParser): OrientationType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const heading = parser.readChildElement(KmlTagName.heading, node, parser.readAngle360Type);
    const tilt = parser.readChildElement(KmlTagName.tilt, node, parser.readAngle180Type);
    const roll = parser.readChildElement(KmlTagName.roll, node, parser.readAngle360Type);

    const orientationType: OrientationType = {
      ...abstractObjectTypeValues,
      heading,
      tilt,
      roll
    }

    return parser.kmlFactory.createOrientation(orientationType);
  }

  private readScale(node: any, parser: KMLParser): ScaleType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const x = parser.readChildElement(KmlTagName.x, node, parser.readXsDouble);
    const y = parser.readChildElement(KmlTagName.y, node, parser.readXsDouble);
    const z = parser.readChildElement(KmlTagName.z, node, parser.readXsDouble);

    const scaleType: ScaleType = {
      ...abstractObjectTypeValues,
      x,
      y,
      z
    }

    return parser.kmlFactory.createScale(scaleType);
  }

  private readResourceMap(node: any, parser: KMLParser): ResourceMapType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const alias = parser.readChildElementArray(KmlTagName.Alias, node, parser.readAlias);

    const resourceMapType: ResourceMapType = {
      ...abstractObjectTypeValues,
      alias
    }

    return parser.kmlFactory.createResourceMap(resourceMapType);
  }

  private readAlias(node: any, parser: KMLParser): AliasType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);

    const targetHref = parser.readChildElement(KmlTagName.targetHref, node, parser.readXsString);
    const sourceHref = parser.readChildElement(KmlTagName.sourceHref, node, parser.readXsString);

    const aliasType: AliasType = {
      ...abstractObjectTypeValues,
      targetHref,
      sourceHref
    }

    return parser.kmlFactory.createAlias(aliasType);
  }

  private readMultiGeometry(node: any, parser: KMLParser): MultiGeometryType {

    const abstractGeometryTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractGeometryType);
    const geometry = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractGeometryGroupArray);

    const multiGeometryType: MultiGeometryType = {
      ...abstractGeometryTypeValues,
      geometry
    }

    return parser.kmlFactory.createMultiGeometry(multiGeometryType);
  }

  private readNetworkLink(node: any, parser: KMLParser): NetworkLinkType {

    const abstractFeatureGroupTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractFeatureType);
    const refreshVisibility = parser.readChildElement(KmlTagName.refreshVisibility, node, parser.readXsBoolean);
    const flyToView = parser.readChildElement(KmlTagName.flyToView, node, parser.readXsBoolean);
    const link = parser.readChildElement(KmlTagName.Link, node, parser.readLink);

    const networkLinkType: NetworkLinkType = {
      ...abstractFeatureGroupTypeValues,
      refreshVisibility,
      flyToView,
      link
    }

    return parser.kmlFactory.createNetworkLink(networkLinkType);
  }

  private readGroundOverlay(node: any, parser: KMLParser): GroundOverlayType {

    const abstractOverlayTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractOverlayType);
    const altitude = parser.readChildElement(KmlTagName.altitude, node, parser.readXsDouble);
    const altitudeMode = parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup);
    const latLonBox = parser.readChildElement(KmlTagName.latLonBox, node, parser.readLatLonBox);

    const groundOverlayType: GroundOverlayType = {
      ...abstractOverlayTypeValues,
      altitude,
      altitudeMode,
      latLonBox
    }

    return parser.kmlFactory.createGroundOverlay(groundOverlayType);
  }

  private readPhotoOverlay(node: any, parser: KMLParser): PhotoOverlayType {

    const abstractOverlayTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractOverlayType);
    const rotation = parser.readChildElement(KmlTagName.rotation, node, parser.readAngle180Type);
    const viewVolume = parser.readChildElement(KmlTagName.viewVolume, node, parser.readViewVolume);
    const imagePyramid = parser.readChildElement(KmlTagName.imagePyramid, node, parser.readImagePyramid);
    const point = parser.readChildElement(KmlTagName.Point, node, parser.readPoint);
    const shape = parser.readChildElement(KmlTagName.shape, node, parser.readShapeEnumType);

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

  private readScreenOverlay(node: any, parser: KMLParser): ScreenOverlayType {

    const abstractOverlayTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractOverlayType);
    const overlayXY = parser.readChildElement(KmlTagName.overlayXY, node, parser.readVec2Type);
    const screenXY = parser.readChildElement(KmlTagName.screenXY, node, parser.readVec2Type);
    const rotationXY = parser.readChildElement(KmlTagName.rotationXY, node, parser.readVec2Type);
    const size = parser.readChildElement(KmlTagName.size, node, parser.readVec2Type);
    const rotation = parser.readChildElement(KmlTagName.rotation, node, parser.readAngle180Type);

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

  private readLink(node: any, parser: KMLParser): LinkType {

    const linkTypeValues = parser.readAbstractGroupOrType(node, parser.readLinkType);

    const linkType: LinkType = {
      ...linkTypeValues
    }

    return parser.kmlFactory.createLink(linkType);
  }

  private readIcon(node: any, parser: KMLParser): LinkType {

    const linkTypeValues = parser.readAbstractGroupOrType(node, parser.readLinkType);

    const linkType: LinkType = {
      ...linkTypeValues
    }

    return parser.kmlFactory.createIcon(linkType);
  }

  private readLatLonBox(node: any, parser: KMLParser): LatLonBoxType {

    const abstractLatLonBoxTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractLatLonBoxType);
    const rotation = parser.readChildElement(KmlTagName.rotation, node, parser.readAngle180Type);

    const latLonBoxType: LatLonBoxType = {
      ...abstractLatLonBoxTypeValues,
      rotation
    }

    return parser.kmlFactory.createLatLonBox(latLonBoxType);
  }

  private readViewVolume(node: any, parser: KMLParser): ViewVolumeType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const leftFov = parser.readChildElement(KmlTagName.leftFov, node, parser.readAngle180Type);
    const rightFov = parser.readChildElement(KmlTagName.rightFov, node, parser.readAngle180Type);
    const bottomFov = parser.readChildElement(KmlTagName.bottomFov, node, parser.readAngle90Type);
    const topFov = parser.readChildElement(KmlTagName.topFov, node, parser.readAngle90Type);
    const near = parser.readChildElement(KmlTagName.near, node, parser.readXsDouble);

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

  private readImagePyramid(node: any, parser: KMLParser): ImagePyramidType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const tileSize = parser.readChildElement(KmlTagName.tileSize, node, parser.readXsInt);
    const maxWidth = parser.readChildElement(KmlTagName.maxWidth, node, parser.readXsInt);
    const maxHeight = parser.readChildElement(KmlTagName.maxHeight, node, parser.readXsInt);
    const gridOrigin = parser.readChildElement(KmlTagName.gridOrigin, node, parser.readGridOriginEnumType);

    const imagePyramidType: ImagePyramidType = {
      ...abstractObjectTypeValues,
      tileSize,
      maxWidth,
      maxHeight,
      gridOrigin
    }

    return parser.kmlFactory.createImagePyramid(imagePyramidType);
  }

  private readCamera(node: any, parser: KMLParser): CameraType {

    const abstractViewTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractViewType);
    const longitude = parser.readChildElement(KmlTagName.longitude, node, parser.readAngle180Type);
    const latitude = parser.readChildElement(KmlTagName.latitude, node, parser.readAngle90Type);
    const altitude = parser.readChildElement(KmlTagName.altitude, node, parser.readXsDouble);
    const heading = parser.readChildElement(KmlTagName.heading, node, parser.readAngle360Type);
    const tilt = parser.readChildElement(KmlTagName.tilt, node, parser.readAngle180Type);
    const roll = parser.readChildElement(KmlTagName.roll, node, parser.readAngle180Type);
    const altitudeMode = parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup);

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

  private readLookAt(node: any, parser: KMLParser): LookAtType {

    const abstractViewTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractViewType);
    const longitude = parser.readChildElement(KmlTagName.longitude, node, parser.readAngle180Type);
    const latitude = parser.readChildElement(KmlTagName.latitude, node, parser.readAngle90Type);
    const altitude = parser.readChildElement(KmlTagName.altitude, node, parser.readXsDouble);
    const heading = parser.readChildElement(KmlTagName.heading, node, parser.readAngle360Type);
    const tilt = parser.readChildElement(KmlTagName.tilt, node, parser.readAngle180Type);
    const range = parser.readChildElement(KmlTagName.range, node, parser.readXsDouble);
    const altitudeMode = parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup);

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

  private readTimeSpan(node: any, parser: KMLParser): TimeSpanType {

    const abstractTimePrimitiveTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractTimePrimitiveType);
    const begin = parser.readChildElement(KmlTagName.begin, node, parser.readDateTimeType);
    const end = parser.readChildElement(KmlTagName.end, node, parser.readDateTimeType);

    const timeSpanType: TimeSpanType = {
      ...abstractTimePrimitiveTypeValues,
      begin,
      end
    }

    return parser.kmlFactory.createTimeSpan(timeSpanType);
  }

  private readTimeStamp(node: any, parser: KMLParser): TimeStampType {

    const abstractTimePrimitiveTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractTimePrimitiveType);
    const when = parser.readChildElement(KmlTagName.when, node, parser.readDateTimeType);

    const timeStampType: TimeStampType = {
      ...abstractTimePrimitiveTypeValues,
      when
    }

    return parser.kmlFactory.createTimeStamp(timeStampType);
  }

  private readStyle(node: any, parser: KMLParser): StyleType {

    const abstractStyleSelectorTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractStyleSelectorType);
    const iconStyle = parser.readChildElement(KmlTagName.IconStyle, node, parser.readIconStyle);
    const labelStyle = parser.readChildElement(KmlTagName.LabelStyle, node, parser.readLabelStyle);
    const lineStyle = parser.readChildElement(KmlTagName.LineStyle, node, parser.readLineStyle);
    const polyStyle = parser.readChildElement(KmlTagName.PolyStyle, node, parser.readPolyStyle);
    const balloonStyle = parser.readChildElement(KmlTagName.BalloonStyle, node, parser.readBalloonStyle);
    const listStyle = parser.readChildElement(KmlTagName.ListStyle, node, parser.readListStyle);

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

  private readStyleMap(node: any, parser: KMLParser): StyleMapType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const pair = parser.readChildElementArray(KmlTagName.Pair, node, parser.readPair);

    const styleMapType: StyleMapType = {
      ...abstractObjectTypeValues,
      pair
    }

    return parser.kmlFactory.createStyleMap(styleMapType);
  }

  private readPair(node: any, parser: KMLParser): PairType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const key = parser.readChildElement(KmlTagName.key, node, parser.readStyleStateEnumType);
    const styleUrl = parser.readChildElement(KmlTagName.styleUrl, node, parser.readXsAnyUri);
    const styleSelector = parser.readAbstractGroupOrType(node, parser.readAbstractStyleSelectorGroup);

    const pairType: PairType = {
      ...abstractObjectTypeValues,
      key,
      styleUrl,
      styleSelector
    }

    return parser.kmlFactory.createPair(pairType);
  }

  private readBalloonStyle(node: any, parser: KMLParser): BalloonStyleType {

    const abstractSubStyleTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractSubStyleType);
    const bgColor = parser.readChildElement(KmlTagName.bgColor, node, parser.readColorType);
    const textColor = parser.readChildElement(KmlTagName.textColor, node, parser.readColorType);
    const text = parser.readChildElement(KmlTagName.text, node, parser.readXsString);
    const displayMode = parser.readChildElement(KmlTagName.displayMode, node, parser.readDisplayModeEnumType);

    const balloonStyleType: BalloonStyleType = {
      ...abstractSubStyleTypeValues,
      bgColor,
      textColor,
      text,
      displayMode
    }

    return parser.kmlFactory.createBalloonStyle(balloonStyleType);
  }

  private readIconStyle(node: any, parser: KMLParser): IconStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractColorStyleType);
    const scale = parser.readChildElement(KmlTagName.scale, node, parser.readXsDouble);
    const heading = parser.readChildElement(KmlTagName.heading, node, parser.readAngle360Type);
    const icon = parser.readChildElement(KmlTagName.Icon, node, parser.readBasicLinkType);
    const hotSpot = parser.readChildElement(KmlTagName.hotSpot, node, parser.readVec2Type);

    const iconStyleType: IconStyleType = {
      ...abstractColorStyleTypeValues,
      scale,
      heading,
      icon,
      hotSpot
    }

    return parser.kmlFactory.createIconStyle(iconStyleType);
  }

  private readLabelStyle(node: any, parser: KMLParser): LabelStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractColorStyleType);
    const scale = parser.readChildElement(KmlTagName.scale, node, parser.readXsDouble);

    const labelStyleType: LabelStyleType = {
      ...abstractColorStyleTypeValues,
      scale
    }

    return parser.kmlFactory.createLabelStyle(labelStyleType);
  }

  private readLineStyle(node: any, parser: KMLParser): LineStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractColorStyleType);
    const width = parser.readChildElement(KmlTagName.width, node, parser.readXsDouble);

    const lineStyleType: LineStyleType = {
      ...abstractColorStyleTypeValues,
      width
    }

    return parser.kmlFactory.createLineStyle(lineStyleType);
  }

  private readPolyStyle(node: any, parser: KMLParser): PolyStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractColorStyleType);

    const fill = parser.readChildElement(KmlTagName.fill, node, parser.readXsBoolean);
    const outline = parser.readChildElement(KmlTagName.outline, node, parser.readXsBoolean);

    const polyStyleType: PolyStyleType = {
      ...abstractColorStyleTypeValues,
      fill,
      outline
    }

    return parser.kmlFactory.createPolyStyle(polyStyleType);
  }

  private readListStyle(node: any, parser: KMLParser): ListStyleType {

    const abstractColorStyleTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractColorStyleType);
    const listItemType = parser.readChildElement(KmlTagName.listItemType, node, parser.readListItemTypeEnumType);
    const bgColor = parser.readChildElement(KmlTagName.bgColor, node, parser.readColorType);
    const itemIcon = parser.readChildElementArray(KmlTagName.ItemIcon, node, parser.readItemIcon);
    const maxSnippetLines = parser.readChildElement(KmlTagName.maxSnippetLines, node, parser.readXsInt);

    const listStyleType: ListStyleType = {
      ...abstractColorStyleTypeValues,
      listItemType,
      bgColor,
      itemIcon,
      maxSnippetLines
    }

    return parser.kmlFactory.createListStyle(listStyleType);
  }

  private readItemIcon(node: any, parser: KMLParser): ItemIconType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const state = parser.readChildElement(KmlTagName.state, node, parser.readItemIconStateType);
    const href = parser.readChildElement(KmlTagName.href, node, parser.readXsString);

    const itemIconType: ItemIconType = {
      ...abstractObjectTypeValues,
      state,
      href
    }

    return parser.kmlFactory.createItemIcon(itemIconType);
  }

  private readRegion(node: any, parser: KMLParser): RegionType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const latLonAltBox = parser.readChildElement(KmlTagName.LatLonAltBox, node, parser.readLatLonAltBox);
    const lod = parser.readChildElement(KmlTagName.Lod, node, parser.readLod);

    const regionType: RegionType = {
      ...abstractObjectTypeValues,
      latLonAltBox,
      lod
    }

    return parser.kmlFactory.createRegion(regionType);
  }

  private readLatLonAltBox(node: any, parser: KMLParser): LatLonAltBoxType {

    const abstractLatLonBoxTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractLatLonBoxType);
    const minAltitude = parser.readChildElement(KmlTagName.minAltitude, node, parser.readXsDouble);
    const maxAltitude = parser.readChildElement(KmlTagName.maxAltitude, node, parser.readXsDouble);
    const altitudeMode = parser.readChildElement(KmlTagName.altitudeMode, node, parser.readAltitudeModeGroup);

    const latLonAltBoxType: LatLonAltBoxType = {
      ...abstractLatLonBoxTypeValues,
      minAltitude,
      maxAltitude,
      altitudeMode
    }

    return parser.kmlFactory.createLatLonAltBox(latLonAltBoxType);
  }

  private readLod(node: any, parser: KMLParser): LodType {

    const abstractLatLonBoxTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractLatLonBoxType);
    const minLodPixels = parser.readChildElement(KmlTagName.minLodPixels, node, parser.readXsDouble);
    const maxLodPixels = parser.readChildElement(KmlTagName.maxLodPixels, node, parser.readXsDouble);
    const minFadeExtent = parser.readChildElement(KmlTagName.minFadeExtent, node, parser.readXsDouble);
    const maxFadeExtent = parser.readChildElement(KmlTagName.maxFadeExtent, node, parser.readXsDouble);

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
  private readExtendedData(node: any, parser: KMLParser): ExtendedDataType {

    const data = parser.readChildElementArray(KmlTagName.Data, node, parser.readData);
    const schemaData = parser.readChildElementArray(KmlTagName.SchemaData, node, parser.readSchemaData);

    const extendedDataType: ExtendedDataType = {
      data,
      schemaData,
      any: []
    }

    return parser.kmlFactory.createExtendedData(extendedDataType);
  }

  private readData(node: any, parser: KMLParser): DataType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);

    const name = parser.readAttribute(KmlAttributeName.name, node, parser.readXsString);
    const displayName = parser.readChildElement(KmlTagName.displayName, node, parser.readXsString);
    const value = parser.readChildElement(KmlTagName.value, node, parser.readXsString);

    const dataType: DataType = {
      ...abstractObjectTypeValues,
      name,
      displayName,
      value
    }

    return parser.kmlFactory.createData(dataType);
  }

  private readSchemaData(node: any, parser: KMLParser): SchemaDataType {

    const abstractObjectTypeValues = parser.readAbstractGroupOrType(node, parser.readAbstractObjectType);
    const schemaUrl = parser.readAttribute(KmlAttributeName.schemaUrl, node, parser.readXsAnyUri);
    const simpleData = parser.readChildElementArray(KmlTagName.SimpleData, node, parser.readSimpleData);

    const schemaDataType: SchemaDataType = {
      ...abstractObjectTypeValues,
      schemaUrl,
      simpleData
    }

    return parser.kmlFactory.createSchemaData(schemaDataType);
  }

  private readSimpleData(node: any, parser: KMLParser): SimpleDataType {

    const name = parser.readAttribute(KmlAttributeName.name, node, parser.readXsString);
    const textContent = parser.readTextContent(node);

    const simpleDataType: SimpleDataType = {
      name,
      textContent
    };

    return parser.kmlFactory.createSimpleData(simpleDataType);
  }

  private readNetworkLinkControl(node: any, parser: KMLParser): NetworkLinkControlType {

    const minRefreshPeriod = parser.readChildElement(KmlTagName.minRefreshPeriod, node, parser.readXsDouble);
    const maxSessionLength = parser.readChildElement(KmlTagName.maxSessionLength, node, parser.readXsDouble);
    const cookie = parser.readChildElement(KmlTagName.cookie, node, parser.readXsString);
    const message = parser.readChildElement(KmlTagName.message, node, parser.readXsString);
    const linkName = parser.readChildElement(KmlTagName.linkName, node, parser.readXsString);
    const linkDescription = parser.readChildElement(KmlTagName.linkDescription, node, parser.readXsString);
    const linkSnippet = parser.readChildElement(KmlTagName.linkSnippet, node, parser.readXsString);
    const expires = parser.readChildElement(KmlTagName.expires, node, parser.readDateTimeType);
    const update = parser.readChildElement(KmlTagName.Update, node, parser.readUpdate);
    const view = parser.readAbstractGroupOrType(node, parser.readAbstractViewGroup);

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

    const container = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractContainerGroupArray);

    const createType: CreateType = {
      container
    }

    return parser.kmlFactory.createCreate(createType);
  }

  private readDelete(node: any, parser: KMLParser): DeleteType {

    const feature = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractFeatureGroupArray);

    const deleteType: DeleteType = {
      feature
    }

    return parser.kmlFactory.createDelete(deleteType);
  }

  private readChange(node: any, parser: KMLParser): ChangeType {

    const object = parser.readAbstractGroupOrTypeArray(node, parser.readAbstractObjectGroupArray);

    const changeType: ChangeType = {
      object
    }

    return parser.kmlFactory.createChange(changeType);
  }

  private readAtomAuthor(node: any, parser: KMLParser): AtomPersonConstruct {

    const name = parser.readChildElementArray(AtomTagName.name, node, parser.readXsString);
    const uri = parser.readChildElementArray(AtomTagName.uri, node, parser.readXsString);
    const email = parser.readChildElementArray(AtomTagName.email, node, parser.readXsString);

    const atomPersonConstruct: AtomPersonConstruct = {
      name,
      uri,
      email
    };

    return parser.kmlFactory.createAtomAuthor(atomPersonConstruct);
  }

  private readAtomLink(node: any, parser: KMLParser): AtomLink {

    const href = parser.readAttribute(AtomAttributeName.href, node, parser.readXsString);
    const rel = parser.readAttribute(AtomAttributeName.rel, node, parser.readXsString);
    const type = parser.readAttribute(AtomAttributeName.type, node, parser.readXsString);
    const hreflang = parser.readAttribute(AtomAttributeName.hreflang, node, parser.readXsString);
    const title = parser.readAttribute(AtomAttributeName.title, node, parser.readXsString);
    const length = parser.readAttribute(AtomAttributeName.length, node, parser.readXsString);

    if (href === undefined) {
      throw new Error('href attribute on atom:link is required');
    }

    const atomLink: AtomLink = {
      href,
      rel,
      type,
      hreflang,
      title,
      length
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

    const x = parser.readAttribute(KmlAttributeName.x, value, parser.readXsDouble);
    const y = parser.readAttribute(KmlAttributeName.y, value, parser.readXsDouble);
    const xunits = parser.readAttribute(KmlAttributeName.xunits, value, parser.readUnitsEnumType);
    const yunits = parser.readAttribute(KmlAttributeName.yunits, value, parser.readUnitsEnumType);

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

  private readBoundaryType(node: any, parser: KMLParser): BoundaryType {

    const linearRing = parser.readChildElement(KmlTagName.LinearRing, node, parser.readLinearRing);

    return {
      ...linearRing
    }
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
