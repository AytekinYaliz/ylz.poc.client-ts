import City from '../models/City';

export interface IGlobalState {
    isLoadingState: boolean;
    currentUserState: ICurrentUserState;
    enthusiasmState: IEnthusiasmState;
    citiesState: City[];
}

export interface ICurrentUserState {
    name: string;
}
export interface IEnthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}
