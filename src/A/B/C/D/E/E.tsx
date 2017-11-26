import * as React from "react";
import { BaseComponent } from "../../../../../BaseComponent";

export class E extends BaseComponent<{
    e: {
        count: number
    }
}, {}> {
    render() {
        return <p>Count:{this.props.e.count}</p>
    }
}
