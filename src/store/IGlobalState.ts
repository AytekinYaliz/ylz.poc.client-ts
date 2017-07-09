import City from '../models/City';

export interface IGlobalState {
    currentUserState: ICurrentUserState,
    enthusiasmState: IEnthusiasmState,
    citiesState: City[]
}

export interface ICurrentUserState {
    name: string;
}
export interface IEnthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}
