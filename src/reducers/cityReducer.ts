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





import { CityAction } from '../actions/cityActions';
import initialStates from './initialStates';
import * as types from '../actions/actionTypes';
import City from '../models/City';

export default function cityReducer (
    state: City[] = initialStates.cities, 
    action: CityAction
): City[] {
    switch (action.type) {
        case types.GET_CITIES: {
            return {
                ...state,
                cities: [
                    new City({id: 6, text: 'Ankara'}),
                    new City({id: 7, text: 'Antalya'})
                ]
            };
        }
        // case types.GET_CITIES_SUCCESS: {
        //     let cities = action.data.map(city => {
        //         return new City(city);
        //     });

        //     return {
        //         ...state,
        //         cities
        //     };
        // }
        default:
            return state;
    }
}
