import * as React from "react";
import { observer } from "mobx-react";
import { Item } from "./home-services";
import HomeItem from "./home-item";

interface IHomePageProps {
    isLoading: boolean;
    items: Item[];
}

@observer
class HomeList extends React.Component<IHomePageProps, any> {
    renderItems() {
        const items = this.props.items.map((item, index) => {
            return <HomeItem key={index} item={item} />;
        });

        return items;
    }

    renderEmpty() {
        return (
            <tr>
                <td colSpan={3} className="text-center">No Items</td>
            </tr>
        );
    }

    renderLoading() {
        return (
            <tr>
                <td colSpan={3} className="text-center">Loading...</td>
            </tr>
        );
    }

    render() {
        const { isLoading, items } = this.props;

        let content;

        if (isLoading) {
            content = this.renderLoading();
        } else {
            content = items.length ? this.renderItems() : this.renderEmpty();
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Quantity</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        );
    }
}

export default HomeList;
