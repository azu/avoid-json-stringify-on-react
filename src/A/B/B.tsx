import * as React from "react";
import { BaseComponent } from "../../BaseComponent";
import { C } from "./C/C";

export class B extends BaseComponent<{
    b: {
        c: {
            d: {
                e: {
                    count: number
                }
            }
        }
    }
}, {}> {
    render() {
        return <C c={this.props.b.c}/>
    }
}
