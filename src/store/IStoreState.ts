import City from '../models/City';

export interface IStoreState {
    enthusiasmState: IEnthusiasmState,
    citiesState: City[]
}

export interface IEnthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}
