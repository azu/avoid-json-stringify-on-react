import * as React from "react";
import { BaseComponent } from "../BaseComponent";
import { B } from "./B/B";

export class A extends BaseComponent<{
    a: {
        b: {
            c: {
                d: {
                    e: {
                        count: number
                    }
                }
            }
        }

    }
}, {}> {
    render() {
        return <B b={this.props.a.b}/>
    }
}
