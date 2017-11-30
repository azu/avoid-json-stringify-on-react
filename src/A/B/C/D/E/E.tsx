import * as React from "react";
import { BaseComponent } from "../../../../../BaseComponent";

export interface EProps {
    count: number
}

export class E extends BaseComponent<EProps, {}> {
    render() {
        return <p>Count:{this.props.count}</p>
    }
}
