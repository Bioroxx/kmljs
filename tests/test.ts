import {readFileSync} from 'fs';
import {Kml, KMLParser, LookAt, Placemark, Point} from '../src';
import {get} from 'lodash';


export const SIMPLE_PLACEMARK_KML = './tests/datasets/simple-placemark.kml';
export const SIMPLE_PLACEMARK_JSON = './tests/datasets/simple-placemark.json';

// TODO: implement way more tests

test('Parses simple placemark', () => {

  const kml = readFileSync(SIMPLE_PLACEMARK_KML, 'utf-8');
  const expected = JSON.parse(readFileSync(SIMPLE_PLACEMARK_JSON, 'utf-8'));
  const underTest = new KMLParser();
  const actual = underTest.parse(kml);

  expect(actual).toBeInstanceOf(Kml);
  expect(actual).toHaveProperty('hint');
  expect(actual!.hint).toBe(get(expected, 'kml.@_hint'));
  expect(actual!.networkLinkControl).toBeUndefined();
  expect(actual!.feature).toBeInstanceOf(Placemark);

  const placemark = actual!.feature as Placemark;

  expect(placemark.name).toBe(get(expected, 'kml.Placemark.name'));
  expect(placemark.description).toBe(get(expected, 'kml.Placemark.description'));
  expect(placemark.view).toBeInstanceOf(LookAt);
  expect(placemark.geometry).toBeInstanceOf(Point);

  const lookAt = placemark.view as LookAt;
  const point = placemark.geometry as Point;

  expect(lookAt.longitude).toBe(get(expected, 'kml.Placemark.LookAt.longitude'));
  expect(lookAt.latitude).toBe(get(expected, 'kml.Placemark.LookAt.latitude'));
  expect(lookAt.range).toBe(get(expected, 'kml.Placemark.LookAt.range'));
  expect(lookAt.tilt).toBe(get(expected, 'kml.Placemark.LookAt.tilt'));
  expect(lookAt.heading).toBe(get(expected, 'kml.Placemark.LookAt.heading'));

  expect(point.coordinates![0]).toBe(get(expected, 'kml.Placemark.Point.coordinates'));
});
