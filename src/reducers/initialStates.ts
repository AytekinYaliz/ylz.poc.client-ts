import City from '../models/City';

export default {
    isLoading: false,
    currentUser: { name: 'INI-ALL' },    // null,
    enthusiasm: {
        languageName: 'TS', 
        enthusiasmLevel: 4
    },
    cities: Array<City>(0)
};
