# kml.js

A customizable and extendable KML 2.2.0 parser framework

## Installation

For the time being, kml.js has to be built from source and installed into your project manually.
Future plans include to publish kml.js on `npm`.

````shell
# Build and pack kml.js to a .tgz archive
npm pack

# Copy .tgz into your project
cp ./bioroxx-kmljs.tgz /path-to-your-project/lib/

# Install in your project
npm install ./lib/bioroxx-kmljs.tgz
````

## Usage

### Parsing

````js
import {KMLParser} from '@bioroxx/kmljs';
import {readFileSync} from 'fs';

const kmlFileString = readFileSync('./my-kml-file.kml', 'utf-8');
const kmlParser = new KMLParser();
const kml = kmlParser.parse(kmlFileString);
````

### Parsing with custom KMLFactory

Because kmljs is built with customization in mind, you can pass your own KMLFactory implementation
to the `KMLParser` as a constructor argument. This especially makes sense, if you want the
`KMLParser` to create your own KML objects.

````ts
import {KMLFactory, PlacemarkType, Placemark, KMLParser} from '@bioroxx/kmljs';
import {readFileSync} from 'fs';

class MyPlacemark extends Placemark {

  constructor(placemarkType: PlacemarkType) {
    super(placemarkType);
  }

  render(): void {
    // Your rendering code...
  }
}

class CustomKMLFactory extends KMLFactory {

  override createPlacemark(placemarkType: PlacemarkType): PlacemarkType {
    return new MyPlacemark(placemarkType);
  }
}

const kmlFileString = readFileSync('./my-kml-file.kml', 'utf-8');
const customKMLFactory = new CustomKMLFactory();
const kmlParser = new KMLParser(customKMLFactory);
const kml = kmlParser.parse(kmlFileString);
````

## Roadmap

- [ ] Parsing
    - [x] `kml` namespace elements
    - [x] `atom` namespace elements
    - [ ] `xal` namespace elements
- [ ] Serialization
