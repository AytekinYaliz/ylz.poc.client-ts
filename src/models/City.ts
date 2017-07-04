interface ICity {
    id: number;
    text: string;
}
export default class City {
    id: number;
    text: string;

    constructor(city: ICity) {
        this.id = city.id;
        this.text = city.text;
    }
}
