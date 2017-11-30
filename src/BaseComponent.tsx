import * as React from "react";
import { shallowEqual } from "shallow-equal-object";

export const isDeepEqual = (prevState: any, nextState: any) => {
    return JSON.stringify(prevState) === JSON.stringify(nextState);
};
export const isShallowEqual = (prevState: any, nextState: any) => {
    return shallowEqual(prevState, nextState);
};

export abstract class BaseComponent<P, S> extends React.Component<P, S> {
    shouldComponentUpdate(nextProps: P) {
        const shouldUpdate = !isShallowEqual(this.props, nextProps);
        return shouldUpdate;
    }
}
