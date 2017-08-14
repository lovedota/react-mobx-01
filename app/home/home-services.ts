export interface Item {
    id: string;
    name: string;
    quantity: number;
    editMode?: boolean;
}

export default {
    getItems() {
        return new Promise<Item[]>((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: "1",
                        name: "Items 1",
                        quantity: 100,
                        editMode: false
                    },
                    {
                        id: "2",
                        name: "Items 2",
                        quantity: 99,
                        editMode: false
                    }
                ]);
            }, 1000);
        });
    }
};
