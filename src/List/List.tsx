import * as React from "react";
import { BaseComponent } from "../BaseComponent";

export interface ListProps {
    items: string[]
}

export class List extends BaseComponent<ListProps, {}> {
    render() {
        return <ul>{
            this.props.items.map((item, i) => {
                return <li key={i}>{item}</li>
            })
        }</ul>;
    }
}
