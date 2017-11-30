import * as React from "react";
import { BaseComponent } from "../../../BaseComponent";
import { D, DProps } from "./D/D";

export type CProps = {
    d: DProps
};

export class C extends BaseComponent<CProps, {}> {
    render() {
        return <D {...this.props.d}/>
    }
}
