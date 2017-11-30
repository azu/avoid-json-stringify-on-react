import * as React from "react";
import { BaseComponent } from "../../BaseComponent";
import { C, CProps } from "./C/C";

export type BProps = {
    c: CProps
};

export class B extends BaseComponent<BProps, {}> {
    render() {
        return <C {...this.props.c}/>
    }
}
