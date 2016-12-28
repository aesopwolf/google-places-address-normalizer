# Google Places Address Normalizer

*Quick Start:*

`npm install google-places-address-normalizer --save`

or

`yarn add google-places-address-normalizer`

*Sample Code:*

```js
import googlePlacesNormalizer from 'google-places-address-normalizer';

let placesService = new window.google.maps.places.PlacesService(document.getElementById('placesService'));

let placesService.getDetails({
  placeId: '123' // some place_id,
}, (place, status) => {
  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    const normalizedAddress = googlePlacesNormalizer(place.address_components);
    // ... do something with normalizedAddress
  }
});
```

Example input:

```json
[{
    "long_name": "916",
    "short_name": "916",
    "types": ["street_number"]
}, {
    "long_name": "Kearny Street",
    "short_name": "Kearny St",
    "types": ["route"]
}, {
    "long_name": "Financial District",
    "short_name": "Financial District",
    "types": ["neighborhood", "political"]
}, {
    "long_name": "San Francisco",
    "short_name": "SF",
    "types": ["locality", "political"]
}, {
    "long_name": "San Francisco County",
    "short_name": "San Francisco County",
    "types": ["administrative_area_level_2", "political"]
}, {
    "long_name": "California",
    "short_name": "CA",
    "types": ["administrative_area_level_1", "political"]
}, {
    "long_name": "United States",
    "short_name": "US",
    "types": ["country", "political"]
}, {
    "long_name": "94133",
    "short_name": "94133",
    "types": ["postal_code"]
}, {
    "long_name": "5107",
    "short_name": "5107",
    "types": ["postal_code_suffix"]
}]
```

Example output:

```json
{
  "address": "916 Kearny Street",
  "neighborhood": "Financial District",
  "city": "San Francisco",
  "county": "San Francisco County",
  "state": "California",
  "state_abbreviation": "CA",
  "country": "United States",
  "country_abbreviation": "US",
  "postal_code": "94133",
  "postal_code_suffix": "5107"
}
```

## License

MIT
