export interface StoreState {
    enthusiasmReducer: EnthusiasmReducer
}

export interface EnthusiasmReducer {
    languageName: string;
    enthusiasmLevel: number;
}