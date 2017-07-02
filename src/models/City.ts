export default class City {
    id: number;
    text: string;

    constructor({id = 0, text = ''}) {
        this.id = id;
        this.text = text;
    }
}
