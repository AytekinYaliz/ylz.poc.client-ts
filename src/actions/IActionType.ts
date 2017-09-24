export interface IActionType {
    type: string;
}

export interface IActionWithDataType<T> {
    type: string;
    data: T;
}
