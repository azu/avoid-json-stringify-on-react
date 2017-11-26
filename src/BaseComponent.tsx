import * as React from "react";
import { shallowEqual } from "shallow-equal-object";

export abstract class BaseComponent<P, S> extends React.Component<P, S> {
    shouldComponentUpdate(nextProps: P) {
        const shouldUpdate = !shallowEqual(this.props, nextProps);
        return shouldUpdate;
    }
}
