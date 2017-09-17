import { CityActionType } from '../actions/cityActions';
import initialStates from './initialStates';
import * as types from '../actions/actionTypes';
import City from '../models/City';


type ICityReducer = (state: City[], action: CityActionType) => City[];

const cityReducer: ICityReducer = (
    state: City[] = initialStates.citiesState,
    action: CityActionType
): City[] => {
    switch (action.type) {
        case types.GET_CITIES: {
            return [
                new City({id: 6, text: 'Ankara'}),
                new City({id: 7, text: 'Antalya'})
            ];
        }
        case types.LOG_CITYNAME: {
            console.log(`City count: ${state.length}`); //tslint:disable-line
            
            return state;
        }
        default:
            return state;
    }
};

export default cityReducer;


// import initialStates from './initialStates';
// import * as types from '../actions/actionTypes';
// import City from '../models/City';

// export default function cityReducer(state = initialStates.cities, action) {
//     switch(action.type) {
//         case types.GET_CITIES_SUCCESS: {
//             let cities = action.data.map(city => {
//                 return new City(city);
//             });

//             return {
//                 ...state,
//                 cities
//             };
//         }
//         default:
//             return state;
//     }
// }
