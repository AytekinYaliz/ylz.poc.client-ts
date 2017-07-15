export default class LocalStorage {
    localStorageSupported: boolean;

    constructor() {
        this.localStorageSupported = typeof window.localStorage !== 'undefined' && window.localStorage !== null;
    }

    // add value to storage
    add(key: string, item: string) {
        if (this.localStorageSupported) {
            localStorage.setItem(key, item);
        }
    }

    // get one item by key from storage
    get(key: string): string | null {
        if (this.localStorageSupported) {
            var item = localStorage.getItem(key);
            return item;
        }
            
        return null;
    }

    // remove value from storage
    remove(key: string) {
        if (this.localStorageSupported) {
            localStorage.removeItem(key);
        }
    }

    // clear storage (remove all items from it)
    clear() {
        if (this.localStorageSupported) {
            localStorage.clear();
        }
    }

    // // get all values from storage (all items)
    // getAllItems(): Array<StorageItem> {
    //     var list = new Array<StorageItem>();

    //     for (var i = 0; i < localStorage.length; i++) {
    //         var key = localStorage.key(i);
    //         var value = localStorage.getItem(key);

    //         list.push(new StorageItem({
    //             key: key,
    //             value: value
    //         }));
    //     }

    //     return list;
    // }

    // // get only all values from localStorage
    // getAllValues(): Array<any> {
    //     var list = new Array<any>();

    //     for (var i = 0; i < localStorage.length; i++) {
    //         var key = localStorage.key(i);
    //         var value = localStorage.getItem(key);

    //         list.push(value);
    //     }

    //     return list;
    // }
}