import {readFileSync} from 'fs';
import {Kml, KMLParser, Placemark} from '../src';
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
    expect(actual!.feature!.name).toBe(get(expected, 'kml.Placemark.name'));
    expect(actual!.feature!.description).toBe(get(expected, 'kml.Placemark.description'));
})
