import { observable, computed, action } from "mobx";
import HomeService, { Item } from "./home-services";

class HomeStore {
    @observable _items: Item[] = [];
    @observable _isLoading = false;

    @computed get items() {
        return this._items;
    }

    @computed get isLoading() {
        return this._isLoading;
    }

    @action
    async init() {
        this._isLoading = true;

        const items = await HomeService.getItems();

        this._isLoading = false;

        items.forEach((i) => {
            this._items.push(i);
        });

        this._items = observable(items);
    }

    @action
    addRandom() {
        const id = (this._items.length + 1).toString();

        const item = {
            id,
            name: `Name ${id}`,
            quantity: 100,
            editMode: false
        };

        this._items.push(item);
    }
}

export default HomeStore;
