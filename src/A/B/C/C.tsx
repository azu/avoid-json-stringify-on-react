import * as React from "react";
import { BaseComponent } from "../../../BaseComponent";
import { D } from "./D/D";

export class C extends BaseComponent<{
    c: {
        d: {
            e: {
                count: number
            }
        }
    }
}, {}> {
    render() {
        return <D d={this.props.c.d}/>
    }
}
