import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  // {
  //   id: 'default-paris',
  //   predictionPlace: {
  //     address: 'Paris, France',
  //     bounds: new LatLngBounds(
  //       new LatLng(48.9020129995121 , 2.46976999462145 ),
  //       new LatLng(48.8156060108013 , 2.22422400085346)
  //     ),
  //   },
  // },
  {
    id: 'default-bayonne',
    predictionPlace: {
      address: 'Bayonne, Pyrénées-Atlantiques, France',
      bounds: new LatLngBounds(
        new LatLng(43.518974, -1.418087 ),
        new LatLng(43.452072 , -1.504866)
      ),
    },
  },
  {
    id: 'default-biarritz',
    predictionPlace: {
      address: 'Biarritz, Pyrénées-Atlantiques, France',
      bounds: new LatLngBounds(
        new LatLng(43.494667 , -1.533894),
        new LatLng(43.446316 , -1.576853)
      ),
    },
  },
  {
    id: 'default-hendaye',
    predictionPlace: {
      address: 'Hendaye, Pyrénées-Atlantiques, France',
      bounds: new LatLngBounds(
        new LatLng(43.38509 , -1.731871),
        new LatLng(43.342154 , -1.789155)
      ),
    },
  },
  {
    id: 'default-saint-jean-de-luz',
    predictionPlace: {
      address: 'Saint-Jean-de-Luz, Pyrénées-Atlantiques, France',
      bounds: new LatLngBounds(
        new LatLng(43.42264 , -1.597611),
        new LatLng(43.365076 , -1.668996)
      ),
    },
  },
];
export default defaultLocations;
