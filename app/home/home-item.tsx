import * as React from "react";
import { observer } from "mobx-react";
import { Item } from "./home-services";

interface IHomePageProps {
    item: Item;
}

@observer
class HomeItem extends React.Component<IHomePageProps, any> {
    constructor() {
        super();

        this.onToggleClick = this.onToggleClick.bind(this);
    }

    onToggleClick() {
        const { item } = this.props;

        item.editMode = !item.editMode;
    }

    onItemChange(prop, event) {
        const { item } = this.props;

        item[prop] = event.target.value;
    }

    render() {
        const { item } = this.props;

        let content;

        if (item.editMode) {
            content = (
                <tr>
                    <td>{item.id}</td>
                    <td><input value={item.name} onChange={this.onItemChange.bind(this, "name")}/></td>
                    <td><input value={item.quantity} onChange={this.onItemChange.bind(this, "quantity")}/></td>
                    <td>
                        <button className="btn" onClick={this.onToggleClick}>Toggle</button>
                    </td>
                </tr>
            );
        } else {
            content = (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                        <button className="btn" onClick={this.onToggleClick}>Toggle</button>
                    </td>
                </tr>
            );
        }

        return content;
    }
}

export default HomeItem;
