export default class City {
    id: number;
    text: string;

    constructor(city: {
        id: number;
        text: string;
    }) {
        this.id = city.id;
        this.text = city.text;
    }
}
