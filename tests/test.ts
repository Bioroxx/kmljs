import {readFileSync} from 'fs';
import {
  AbstractColorStyleType,
  AbstractGeometryType,
  AbstractObjectType,
  AbstractStyleSelectorType,
  AbstractSubStyleType,
  AbstractViewType,
  BalloonStyleType,
  Camera,
  CameraType,
  DataType,
  Document,
  ExtendedData,
  ExtendedDataType,
  Folder,
  IconStyle,
  IconStyleType,
  ItemIconType,
  Kml,
  KMLParser,
  LabelStyleType,
  LatLonAltBoxType,
  LinearRing,
  LinearRingType,
  LineString,
  LineStringType,
  LineStyleType,
  ListStyleType,
  LodType,
  LookAt,
  LookAtType,
  MultiGeometry,
  Pair,
  Placemark,
  Point,
  PointType,
  Polygon,
  PolygonType,
  PolyStyleType,
  Region,
  RegionType,
  Schema,
  SchemaDataType,
  SchemaType,
  SimpleDataType,
  SimpleFieldType,
  Style,
  StyleMap,
  StyleType,
  TimeSpan,
  TimeStamp
} from '../src';
import {get} from 'lodash';
import {XMLParser} from 'fast-xml-parser';

export const PLACEMARK_KML = './tests/datasets/placemark.kml';

test('Parses KML file', () => {

  const underTest = new KMLParser();
  const xmlParser = new XMLParser({
    attributeNamePrefix: '@_',
    ignoreAttributes: false
  });

  const kmlString = readFileSync(PLACEMARK_KML, 'utf-8');
  const expected = xmlParser.parse(kmlString);
  const actual = underTest.parse(kmlString) as Kml;

  expect(actual).toBeInstanceOf(Kml);
  expect(actual.hint).toEqual(get(expected, 'kml.@_hint'));
  expect(actual.networkLinkControl).toBeUndefined();

  // Document
  expect(actual.feature).toBeInstanceOf(Document);
  const document = actual.feature as Document;
  expect(document.name).toEqual(get(expected, 'kml.Document.name'));
  expect(document.visibility).toEqual(get(expected, 'kml.Document.visibility'));
  expect(document.open).toEqual(get(expected, 'kml.Document.open'));
  expect(document.address).toEqual(get(expected, 'kml.Document.address'));
  expect(document.phoneNumber).toEqual(get(expected, 'kml.Document.phoneNumber'));
  expect(document.snippet).toEqual(get(expected, 'kml.Document.snippet'));
  expect(document.description).toEqual(get(expected, 'kml.Document.description'));
  expect(document.styleUrl).toEqual(get(expected, 'kml.Document.styleUrl'));

  // Document.Camera
  expect(document.view).toBeInstanceOf(Camera);
  const documentCamera = document.view as Camera;
  assertCameraType(documentCamera, get(expected, 'kml.Document.Camera'));

  // Document.TimeStamp
  expect(document.timePrimitive).toBeInstanceOf(TimeStamp);
  const documentTimeStamp = document.timePrimitive as TimeStamp;
  expect(documentTimeStamp.when?.getTime()).toEqual(new Date(get(expected, 'kml.Document.TimeStamp.when')).getTime());

  // Document.StyleMap
  expect(Array.isArray(document.styleSelector)).toBeTruthy();
  expect(document.styleSelector![0]).toBeInstanceOf(StyleMap);
  const documentStyleMap = document.styleSelector![0] as StyleMap;
  expect(documentStyleMap.id).toEqual(get(expected, 'kml.Document.StyleMap.@_id'));

  // Document.StyleMap.Pair
  expect(Array.isArray(documentStyleMap.pair)).toBeTruthy();
  expect(documentStyleMap.pair.length).toEqual(2);

  // Document.StyleMap.Pair[0]
  expect(documentStyleMap.pair![0]).toBeInstanceOf(Pair);
  const documentStyleMapPair0 = documentStyleMap.pair![0];
  expect(documentStyleMapPair0.key).toEqual(get(expected, 'kml.Document.StyleMap.Pair[0].key'));

  // Document.StyleMap.Pair[0].Style
  expect(documentStyleMapPair0.styleSelector).toBeInstanceOf(Style);
  const documentStyleMapPair0Style = documentStyleMapPair0.styleSelector as Style;
  assertStyleType(documentStyleMapPair0Style, get(expected, 'kml.Document.StyleMap.Pair[0].Style'));

  // Document.StyleMap.Pair[1]
  expect(documentStyleMap.pair![1]).toBeInstanceOf(Pair);
  const documentStyleMapPair1 = documentStyleMap.pair![1];
  expect(documentStyleMapPair1.key).toEqual(get(expected, 'kml.Document.StyleMap.Pair[1].key'));

  // Document.StyleMap.Pair[1].Style
  expect(documentStyleMapPair1.styleSelector).toBeInstanceOf(Style);
  const documentStyleMapPair1Style = documentStyleMapPair1.styleSelector as Style;
  assertStyleType(documentStyleMapPair1Style, get(expected, 'kml.Document.StyleMap.Pair[1].Style'));

  // Document.Region
  expect(document.region).toBeInstanceOf(Region);
  const documentRegion = document.region as Region;
  assertRegionType(documentRegion, get(expected, 'kml.Document.Region'));

  // Document.ExtendedData
  expect(document.extendedData).toBeInstanceOf(ExtendedData);
  const documentExtendedData = document.extendedData as ExtendedData;
  assertExtendedDataType(documentExtendedData, get(expected, 'kml.Document.ExtendedData'));

  // Document.Schema
  expect(Array.isArray(document.schema)).toBeTruthy();
  expect(document.schema[0]).toBeInstanceOf(Schema);
  const documentSchema = document.schema[0] as Schema;
  assertSchemaType(documentSchema, get(expected, 'kml.Document.Schema'));

  // Document.Folder
  expect(Array.isArray(document.feature)).toBeTruthy();
  expect(document.feature[0]).toBeInstanceOf(Folder);
  const documentFolder = document.feature[0] as Folder;
  expect(documentFolder.name).toEqual(get(expected, 'kml.Document.Folder.name'));
  expect(documentFolder.visibility).toEqual(get(expected, 'kml.Document.Folder.visibility'));
  expect(documentFolder.open).toEqual(get(expected, 'kml.Document.Folder.open'));
  expect(documentFolder.address).toEqual(get(expected, 'kml.Document.Folder.address'));
  expect(documentFolder.phoneNumber).toEqual(get(expected, 'kml.Document.Folder.phoneNumber'));
  expect(documentFolder.snippet).toEqual(get(expected, 'kml.Document.Folder.snippet'));
  expect(documentFolder.description).toEqual(get(expected, 'kml.Document.Folder.description'));
  expect(documentFolder.styleUrl).toEqual(get(expected, 'kml.Document.Folder.styleUrl'));

  // Document.Folder.Camera
  expect(documentFolder.view).toBeInstanceOf(Camera);
  const documentFolderCamera = documentFolder.view as Camera;
  assertCameraType(documentFolderCamera, get(expected, 'kml.Document.Folder.Camera'));

  // Document.Folder.TimeSpan
  expect(documentFolder.timePrimitive).toBeInstanceOf(TimeSpan);
  const documentFolderTimeSpan = documentFolder.timePrimitive as TimeSpan;
  expect(documentFolderTimeSpan.begin?.getTime()).toEqual(new Date(get(expected, 'kml.Document.Folder.TimeSpan.begin')).getTime());
  expect(documentFolderTimeSpan.end?.getTime()).toEqual(new Date(get(expected, 'kml.Document.Folder.TimeSpan.end')).getTime());

  // Document.Folder.Style
  expect(Array.isArray(documentFolder.styleSelector)).toBeTruthy();
  expect(documentFolder.styleSelector![0]).toBeInstanceOf(Style);
  const documentFolderStyle = documentFolder.styleSelector![0] as Style;
  assertStyleType(documentFolderStyle, get(expected, 'kml.Document.Folder.Style'));

  // Document.Folder.Region
  expect(documentFolder.region).toBeInstanceOf(Region);
  const documentFolderRegion = documentFolder.region as Region;
  assertRegionType(documentFolderRegion, get(expected, 'kml.Document.Folder.Region'));

  // Document.Folder.ExtendedData
  expect(documentFolder.extendedData).toBeInstanceOf(ExtendedData);
  const documentFolderExtendedData = documentFolder.extendedData as ExtendedData;
  assertExtendedDataType(documentFolderExtendedData, get(expected, 'kml.Document.Folder.ExtendedData'));

  // Document.Folder.Placemark
  expect(Array.isArray(documentFolder.feature)).toBeTruthy();
  expect(documentFolder.feature[0]).toBeInstanceOf(Placemark);
  const documentFolderPlacemark = documentFolder.feature[0] as Placemark;
  expect(documentFolderPlacemark.name).toEqual(get(expected, 'kml.Document.Folder.Placemark.name'));
  expect(documentFolderPlacemark.visibility).toEqual(get(expected, 'kml.Document.Folder.Placemark.visibility'));
  expect(documentFolderPlacemark.open).toEqual(get(expected, 'kml.Document.Folder.Placemark.open'));
  expect(documentFolderPlacemark.address).toEqual(get(expected, 'kml.Document.Folder.Placemark.address'));
  expect(documentFolderPlacemark.phoneNumber).toEqual(get(expected, 'kml.Document.Folder.Placemark.phoneNumber'));
  expect(documentFolderPlacemark.snippet).toEqual(get(expected, 'kml.Document.Folder.Placemark.snippet'));
  expect(documentFolderPlacemark.description).toEqual(get(expected, 'kml.Document.Folder.Placemark.description'));
  expect(documentFolderPlacemark.styleUrl).toEqual(get(expected, 'kml.Document.Folder.Placemark.styleUrl'));

  // Document.Folder.Placemark.LookAt
  expect(documentFolderPlacemark.view).toBeInstanceOf(LookAt);
  const documentFolderPlacemarkLookAt = documentFolderPlacemark.view as LookAt;
  assertLookAtType(documentFolderPlacemarkLookAt, get(expected, 'kml.Document.Folder.Placemark.LookAt'));

  // Document.Folder.Placemark.TimeStamp
  expect(documentFolderPlacemark.timePrimitive).toBeInstanceOf(TimeStamp);
  const documentFolderPlacemarkTimeStamp = documentFolderPlacemark.timePrimitive as TimeStamp;
  expect(documentFolderPlacemarkTimeStamp.when?.getTime()).toEqual(new Date(get(expected, 'kml.Document.Folder.Placemark.TimeStamp.when')).getTime());

  // Document.Folder.Placemark.Style
  expect(Array.isArray(documentFolderPlacemark.styleSelector)).toBeTruthy();
  expect(documentFolderPlacemark.styleSelector![0]).toBeInstanceOf(Style);
  const documentFolderPlacemarkStyle = documentFolderPlacemark.styleSelector![0] as Style;
  assertStyleType(documentFolderPlacemarkStyle, get(expected, 'kml.Document.Folder.Placemark.Style'));

  // Document.Folder.Placemark.Region
  expect(documentFolderPlacemark.region).toBeInstanceOf(Region);
  const documentFolderPlacemarkRegion = documentFolderPlacemark.region as Region;
  assertRegionType(documentFolderPlacemarkRegion, get(expected, 'kml.Document.Folder.Placemark.Region'));

  // Document.Folder.Placemark.ExtendedData
  expect(documentFolderPlacemark.extendedData).toBeInstanceOf(ExtendedData);
  const documentFolderPlacemarkExtendedData = documentFolderPlacemark.extendedData as ExtendedData;
  assertExtendedDataType(documentFolderPlacemarkExtendedData, get(expected, 'kml.Document.Folder.Placemark.ExtendedData'));

  // Document.Folder.Placemark.MultiGeometry
  expect(documentFolderPlacemark.geometry).toBeInstanceOf(MultiGeometry);
  const documentFolderPlacemarkMultiGeometry = documentFolderPlacemark.geometry as MultiGeometry;
  assertAbstractObjectType(documentFolderPlacemarkMultiGeometry, get(expected, 'kml.Document.Folder.Placemark.MultiGeometry'));

  documentFolderPlacemarkMultiGeometry.geometry.forEach((geometry) => {
    if (geometry instanceof Point) {
      assertPointType(geometry, get(expected, 'kml.Document.Folder.Placemark.MultiGeometry.Point'));
    } else if (geometry instanceof LinearRing) {
      assertLinearRingType(geometry, get(expected, 'kml.Document.Folder.Placemark.MultiGeometry.LinearRing'));
    } else if (geometry instanceof LineString) {
      assertLineStringType(geometry, get(expected, 'kml.Document.Folder.Placemark.MultiGeometry.LineString'));
    } else if (geometry instanceof Polygon) {
      assertPolygonType(geometry, get(expected, 'kml.Document.Folder.Placemark.MultiGeometry.Polygon'));
    }
  });
});

export function assertAbstractObjectType(actual: AbstractObjectType, expected: any): void {
  expect(actual.id).toEqual(get(expected, '@_id'));
  expect(actual.targetId).toEqual(get(expected, '@_targetId'));
}

export function assertAbstractGeometryType(actual: AbstractGeometryType, expected: any): void {
  assertAbstractObjectType(actual, expected);
}

export function assertAbstractViewType(actual: AbstractViewType, expected: any): void {
  assertAbstractObjectType(actual, expected);
}

export function assertAbstractStyleSelectorType(actual: AbstractStyleSelectorType, expected: any): void {
  assertAbstractObjectType(actual, expected);
}

export function assertAbstractSubStyleType(actual: AbstractSubStyleType, expected: any): void {
  assertAbstractObjectType(actual, expected);
}

export function assertAbstractColorStyleType(actual: AbstractColorStyleType, expected: any): void {
  assertAbstractSubStyleType(actual, expected);
  expect(actual.color).toEqual(get(expected, 'color'));
  expect(actual.colorMode).toEqual(get(expected, 'colorMode'));
}

export function assertStyleType(actual: StyleType, expected: any): void {
  assertAbstractStyleSelectorType(actual, expected);

  const expectedIconStyle = get(expected, 'IconStyle');
  const expectedLabelStyle = get(expected, 'LabelStyle');
  const expectedLineStyle = get(expected, 'LineStyle');
  const expectedPolyStyle = get(expected, 'PolyStyle');
  const expectedBalloonStyle = get(expected, 'BalloonStyle');
  const expectedListStyle = get(expected, 'ListStyle');

  expect(!!actual.iconStyle).toEqual(!!expectedIconStyle);
  expect(!!actual.labelStyle).toEqual(!!expectedLabelStyle);
  expect(!!actual.lineStyle).toEqual(!!expectedLineStyle);
  expect(!!actual.polyStyle).toEqual(!!expectedPolyStyle);
  expect(!!actual.balloonStyle).toEqual(!!expectedBalloonStyle);
  expect(!!actual.listStyle).toEqual(!!expectedListStyle);

  if (actual.iconStyle) {
    assertIconStyleType(actual.iconStyle, expectedIconStyle);
  }

  if (actual.labelStyle) {
    assertLabelStyleType(actual.labelStyle, expectedLabelStyle);
  }

  if (actual.lineStyle) {
    assertLineStyleType(actual.lineStyle, expectedLineStyle);
  }

  if (actual.polyStyle) {
    assertPolyStyleType(actual.polyStyle, expectedPolyStyle);
  }

  if (actual.balloonStyle) {
    assertBalloonStyleType(actual.balloonStyle, expectedBalloonStyle);
  }

  if (actual.listStyle) {
    assertListStyleType(actual.listStyle, expectedListStyle);
  }
}

export function assertIconStyleType(actual: IconStyleType, expected: any): void {
  assertAbstractColorStyleType(actual, expected);
  expect(actual.scale).toEqual(get(expected, 'scale'));
  expect(actual.heading).toEqual(get(expected, 'heading'));
  expect(actual.icon?.id).toEqual(get(expected, 'Icon.@_id'));
  expect(actual.icon?.targetId).toEqual(get(expected, 'Icon.@_targetId'));
  expect(actual.icon?.href).toEqual(get(expected, 'Icon.href'));

  const expectedHotSpotX = get(expected, 'hotSpot.@_x');
  const expectedHotSpotY = get(expected, 'hotSpot.@_y');

  expect(actual.hotSpot?.x).toEqual(expectedHotSpotX ? parseFloat(expectedHotSpotX) : undefined);
  expect(actual.hotSpot?.y).toEqual(expectedHotSpotY ? parseFloat(expectedHotSpotY) : undefined);
  expect(actual.hotSpot?.xunits).toEqual(get(expected, 'hotSpot.@_xunits'));
  expect(actual.hotSpot?.yunits).toEqual(get(expected, 'hotSpot.@_yunits'));
}

export function assertLabelStyleType(actual: LabelStyleType, expected: any): void {
  assertAbstractColorStyleType(actual, expected);
  expect(actual.scale).toEqual(get(expected, 'scale'));
}

export function assertLineStyleType(actual: LineStyleType, expected: any): void {
  assertAbstractColorStyleType(actual, expected);
  expect(actual.width).toEqual(get(expected, 'width'));
}

export function assertPolyStyleType(actual: PolyStyleType, expected: any): void {
  assertAbstractColorStyleType(actual, expected);
  expect(actual.fill).toEqual(get(expected, 'fill'));
  expect(actual.outline).toEqual(get(expected, 'outline'));
}

export function assertBalloonStyleType(actual: BalloonStyleType, expected: any): void {
  assertAbstractSubStyleType(actual, expected);
  expect(actual.bgColor).toEqual(get(expected, 'bgColor'));
  expect(actual.textColor).toEqual(get(expected, 'textColor'));
  expect(actual.text).toEqual(get(expected, 'text'));
  expect(actual.displayMode).toEqual(get(expected, 'displayMode'));
}

export function assertListStyleType(actual: ListStyleType, expected: any): void {
  assertAbstractSubStyleType(actual, expected);
  expect(actual.listItemType).toEqual(get(expected, 'listItemType'));
  expect(actual.bgColor).toEqual(get(expected, 'bgColor'));
  expect(actual.maxSnippetLines).toEqual(get(expected, 'maxSnippetLines'));

  const expectedItemIcon = get(expected, 'ItemIcon');
  expect(!!actual.itemIcon).toEqual(!!expectedItemIcon);

  if (actual.itemIcon && actual.itemIcon.length == 1) {
    assertItemIconType(actual.itemIcon[0], expectedItemIcon);
  } else if (actual.itemIcon && actual.itemIcon.length > 1) {
    actual.itemIcon.forEach((itemIcon, index) => {
      assertItemIconType(itemIcon, get(expected, `ItemIcon[${index}]`));
    })
  }
}

export function assertItemIconType(actual: ItemIconType, expected: any): void {
  assertAbstractObjectType(actual, expected);

  let expectedState = get(expected, 'state');
  if (typeof expectedState === 'string') {
    expectedState = expectedState.split(' ');
  }

  expect(actual.state).toEqual(expectedState);
  expect(actual.href).toEqual(get(expected, 'href'));
}

export function assertExtendedDataType(actual: ExtendedDataType, expected: any): void {

  const expectedData = get(expected, 'Data');
  const expectedSchemaData = get(expected, 'SchemaData');

  expect(!!actual.data).toEqual(!!expectedData);
  expect(!!actual.schemaData).toEqual(!!expectedSchemaData);

  if (actual.data && actual.data.length === 1) {
    assertDataType(actual.data[0], expectedData);
  } else if (actual.data && actual.data.length > 1) {
    actual.data.forEach((data, index) => {
      assertDataType(data, get(expected, `Data[${index}]`));
    });
  }

  if (actual.schemaData && actual.schemaData.length === 1) {
    assertSchemaDataType(actual.schemaData[0], expectedSchemaData);
  } else if (actual.schemaData && actual.schemaData.length > 1) {
    actual.schemaData.forEach((data, index) => {
      assertSchemaDataType(data, get(expected, `SchemaData[${index}]`));
    });
  }
}

export function assertDataType(actual: DataType, expected: any): void {
  assertAbstractObjectType(actual, expected);
  expect(actual.name).toEqual(get(expected, '@_name'));
  expect(actual.displayName).toEqual(get(expected, 'displayName'));
  expect(actual.value).toEqual(get(expected, 'value'));
}

export function assertSchemaDataType(actual: SchemaDataType, expected: any): void {
  assertAbstractObjectType(actual, expected);
  expect(actual.schemaUrl).toEqual(get(expected, '@_schemaUrl'));

  const expectedSimpleData = get(expected, 'SimpleData');

  expect(!!actual.simpleData).toEqual(!!expectedSimpleData);

  if (actual.simpleData && actual.simpleData.length === 1) {
    assertSimpleDataType(actual.simpleData[0], expectedSimpleData);
  } else if (actual.simpleData && actual.simpleData.length > 1) {
    actual.simpleData.forEach((simpleData, index) => {
      assertSimpleDataType(simpleData, get(expected, `SimpleData[${index}]`));
    });
  }
}

export function assertSimpleDataType(actual: SimpleDataType, expected: any): void {
  expect(actual.name).toEqual(get(expected, '@_name'));
  expect(actual.textContent).toEqual(get(expected, '#text'));
}

export function assertSchemaType(actual: SchemaType, expected: any): void {

  expect(actual.id).toEqual(get(expected, '@_id'));
  expect(actual.name).toEqual(get(expected, '@_name'));

  const expectedSimpleField = get(expected, 'SimpleField');

  expect(!!actual.simpleField).toEqual(!!expectedSimpleField);

  if (actual.simpleField && actual.simpleField.length === 1) {
    assertSimpleFieldType(actual.simpleField[0], expectedSimpleField);
  } else if (actual.simpleField && actual.simpleField.length > 1) {
    actual.simpleField.forEach((simpleField, index) => {
      assertSimpleFieldType(simpleField, get(expected, `SimpleField[${index}]`))
    });
  }
}

export function assertSimpleFieldType(actual: SimpleFieldType, expected: any): void {
  expect(actual.type).toEqual(get(expected, '@_type'));
  expect(actual.name).toEqual(get(expected, '@_name'));
  expect(actual.displayName).toEqual(get(expected, 'displayName'));
}

export function assertRegionType(actual: RegionType, expected: any): void {
  assertAbstractObjectType(actual, expected);

  const expectedLatLonAltBox = get(expected, 'LatLonAltBox')
  const expectedLod = get(expected, 'Lod')

  expect(!!actual.latLonAltBox).toEqual(!!expectedLatLonAltBox);
  expect(!!actual.lod).toEqual(!!expectedLod);

  if (actual.latLonAltBox) {
    assertLatLonAltBoxType(actual.latLonAltBox, expectedLatLonAltBox);
  }

  if (actual.lod) {
    assertLodType(actual.lod, expectedLod);
  }
}

export function assertLatLonAltBoxType(actual: LatLonAltBoxType, expected: any): void {
  assertAbstractObjectType(actual, expected);
  expect(actual.north).toEqual(get(expected, 'north'));
  expect(actual.south).toEqual(get(expected, 'south'));
  expect(actual.east).toEqual(get(expected, 'east'));
  expect(actual.west).toEqual(get(expected, 'west'));
  expect(actual.minAltitude).toEqual(get(expected, 'minAltitude'));
  expect(actual.maxAltitude).toEqual(get(expected, 'maxAltitude'));
  expect(actual.altitudeMode).toEqual(get(expected, 'altitudeMode'));
}

export function assertLodType(actual: LodType, expected: any): void {
  assertAbstractObjectType(actual, expected);
  expect(actual.minLodPixels).toEqual(get(expected, 'minLodPixels'));
  expect(actual.maxLodPixels).toEqual(get(expected, 'maxLodPixels'));
  expect(actual.minFadeExtent).toEqual(get(expected, 'minFadeExtent'));
  expect(actual.maxFadeExtent).toEqual(get(expected, 'maxFadeExtent'));
}

export function assertCameraType(actual: CameraType, expected: any): void {
  assertAbstractViewType(actual, expected);
  expect(actual.longitude).toEqual(get(expected, 'longitude'));
  expect(actual.latitude).toEqual(get(expected, 'latitude'));
  expect(actual.altitude).toEqual(get(expected, 'altitude'));
  expect(actual.heading).toEqual(get(expected, 'heading'));
  expect(actual.tilt).toEqual(get(expected, 'tilt'));
  expect(actual.roll).toEqual(get(expected, 'roll'));
  expect(actual.altitudeMode).toEqual(get(expected, 'altitudeMode'));
}

export function assertLookAtType(actual: LookAtType, expected: any): void {
  assertAbstractViewType(actual, expected);
  expect(actual.longitude).toEqual(get(expected, 'longitude'));
  expect(actual.latitude).toEqual(get(expected, 'latitude'));
  expect(actual.altitude).toEqual(get(expected, 'altitude'));
  expect(actual.heading).toEqual(get(expected, 'heading'));
  expect(actual.tilt).toEqual(get(expected, 'tilt'));
  expect(actual.range).toEqual(get(expected, 'range'));
  expect(actual.altitudeMode).toEqual(get(expected, 'altitudeMode'));
}

export function assertPointType(actual: PointType, expected: any): void {
  assertAbstractGeometryType(actual, expected);
  expect(actual.extrude).toEqual(get(expected, 'extrude'));
  expect(actual.altitudeMode).toEqual(get(expected, 'altitudeMode'));
  expect(actual.coordinates?.join(' ')).toEqual(get(expected, 'coordinates'));
}

export function assertLinearRingType(actual: LinearRingType, expected: any): void {
  assertAbstractGeometryType(actual, expected);
  expect(actual.extrude).toEqual(get(expected, 'extrude'));
  expect(actual.tessellate).toEqual(get(expected, 'tessellate'));
  expect(actual.altitudeMode).toEqual(get(expected, 'altitudeMode'));
  expect(actual.coordinates?.join(' ')).toEqual(get(expected, 'coordinates'));
}

export function assertLineStringType(actual: LineStringType, expected: any): void {
  assertAbstractGeometryType(actual, expected);
  expect(actual.extrude).toEqual(get(expected, 'extrude'));
  expect(actual.tessellate).toEqual(get(expected, 'tessellate'));
  expect(actual.altitudeMode).toEqual(get(expected, 'altitudeMode'));
  expect(actual.coordinates?.join(' ')).toEqual(get(expected, 'coordinates'));
}

export function assertPolygonType(actual: PolygonType, expected: any): void {
  assertAbstractGeometryType(actual, expected);
  expect(actual.extrude).toEqual(get(expected, 'extrude'));
  expect(actual.tessellate).toEqual(get(expected, 'tessellate'));
  expect(actual.altitudeMode).toEqual(get(expected, 'altitudeMode'));

  const expectedOuterBoundaryIs = get(expected, 'outerBoundaryIs.LinearRing');
  const expectedInnerBoundaryIs = get(expected, 'innerBoundaryIs.LinearRing');

  expect(!!actual.outerBoundaryIs).toEqual(!!expectedOuterBoundaryIs);
  expect(!!actual.innerBoundaryIs).toEqual(!!expectedInnerBoundaryIs);

  if (actual.outerBoundaryIs) {
    assertLinearRingType(actual.outerBoundaryIs, expectedOuterBoundaryIs);
  }

  if (actual.innerBoundaryIs && actual.innerBoundaryIs.length === 1) {
    assertLinearRingType(actual.innerBoundaryIs[0], expectedInnerBoundaryIs);
  } else if (actual.innerBoundaryIs && actual.innerBoundaryIs.length > 1) {
    actual.innerBoundaryIs.forEach((innerBoundaryIs, index) => {
      assertLinearRingType(innerBoundaryIs, get(expected, `innerBoundaryIs.LinearRing[${index}]`))
    });
  }
}
