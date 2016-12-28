module.exports = function(addressComponents) {
  var normalizedAddress = {};

  addressComponents.forEach(function(item, index, array) {
    switch(item.types[0]) {
      case 'street_number':
        normalizedAddress.address = item.long_name;
        break;
      case 'route':
        normalizedAddress.address = normalizedAddress.address + ' ' + item.long_name;
        break;
      case 'neighborhood':
        normalizedAddress.neighborhood = item.long_name;
        break;
      case 'locality':
        normalizedAddress.city = item.long_name;
        break;
      case 'administrative_area_level_2':
        normalizedAddress.county = item.long_name;
        break;
      case 'administrative_area_level_1':
        normalizedAddress.state = item.long_name;
        normalizedAddress.state_abbreviation = item.short_name;
        break;
      case 'country':
        normalizedAddress.country = item.long_name;
        normalizedAddress.country_abbreviation = item.short_name;
        break;
      case 'postal_code':
        normalizedAddress.postal_code = item.long_name;
        break;
      case 'postal_code_suffix':
        normalizedAddress.postal_code_suffix = item.long_name;
        break;
    }
  })

  return normalizedAddress;
}
