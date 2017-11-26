import * as React from "react";

export abstract class BaseComponent<P, S> extends React.Component<P, S> {
    shouldComponentUpdate(nextProps: P) {
        const shouldUpdate = JSON.stringify(this.props) !== JSON.stringify(nextProps);
        return shouldUpdate;
    }
}
