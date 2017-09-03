import City from '../models/City';

export default {
    isLoadingState: false,
    currentUserState: { name: 'INI-ALL' },    // null,
    enthusiasmState: {
        languageName: 'TS', 
        enthusiasmLevel: 4
    },
    citiesState: Array<City>()
};
