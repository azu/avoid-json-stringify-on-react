import * as React from "react";
import { BaseComponent } from "../../../../BaseComponent";
import { E, EProps } from "./E/E";

export type DProps = {
    e: EProps
};

export class D extends BaseComponent<DProps, {}> {
    render() {
        return <E {...this.props.e}/>
    }
}
