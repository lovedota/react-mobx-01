import * as React from "react";
import { observer } from "mobx-react";

import HomeStore from "./home-store";
import HomeList from "./home-list";

const homeStore = new HomeStore();

@observer
class HomePage extends React.Component<any, any> {
    componentDidMount() {
        homeStore.init();
    }

    onAddButtonClick() {
        homeStore.addRandom();
    }

    render() {
        const { isLoading, items } = homeStore;

        return (
            <div>
                <HomeList isLoading={isLoading} items={items} />
                <button className="btn" onClick={this.onAddButtonClick}>Add</button>
            </div>
        );
    }
}

export default HomePage;
