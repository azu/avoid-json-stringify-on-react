import * as React from "react";
import { BaseComponent } from "../BaseComponent";
import { B, BProps } from "./B/B";

export type AProps = {
    b: BProps
};

export class A extends BaseComponent<AProps, {}> {
    render() {
        return <B {...this.props.b}/>
    }
}
