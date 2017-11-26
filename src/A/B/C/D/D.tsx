import * as React from "react";
import { BaseComponent } from "../../../../BaseComponent";
import { E } from "./E/E";

export class D extends BaseComponent<{
    d: {
        e: {
            count: number
        }
    }
}, {}> {
    render() {
        return <E e={this.props.d.e}/>
    }
}
