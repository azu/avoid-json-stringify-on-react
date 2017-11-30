import * as React from 'react';
import './App.css';
import { A, AProps } from "./A/A";
import { BProps } from "./A/B/B";
import { CProps } from "./A/B/C/C";
import { DProps } from "./A/B/C/D/D";
import { EProps } from "./A/B/C/D/E/E";
import { List } from "./List/List";


export interface ComponentState {
    a: AProps,
    largeList: string[];
}

const frozenLargeList = new Array(10000).fill("x");

// observe
const observer = new (window as any).PerformanceObserver((list: any) => {
    let components: string[] = [];
    let totalDuration = 0;
    list.getEntries().forEach((entry: any) => {
        // Display each reported measurement on console
        if (entry.name.includes("shouldComponentUpdate")) {
            components.push(entry.name);
            totalDuration += entry.duration;
            console.log("Name: " + entry.name +
                ", Duration: " + (entry.duration) + "\n");
        }
    });
    if (components.length > 0) {
        console.log(`Total shouldComponentUpdate: ${totalDuration}`);
        console.log(`Updated components:`, components.join(", "));
    }

});
observer.observe({ entryTypes: ['measure'] });


let count = 0;

class App extends React.Component<{}, ComponentState> {
    constructor(props: any) {
        super(props);
        this.state = this.createPropsWithUnnecessaryProps();
    }

    createPropsWithUnnecessaryProps = (prevProps?: ComponentState): ComponentState => {
        return {
            a: this.createAProps(prevProps && prevProps.a),
            largeList: frozenLargeList
        }
    };

    createAProps = (prevProps?: AProps): AProps => {
        return {
            b: this.createBProps(prevProps && prevProps.b)
        };
    };

    createBProps = (prevProps?: BProps): BProps => {
        return {
            c: this.createCProps(prevProps && prevProps.c)
        };
    };

    createCProps = (prevProps?: CProps): CProps => {
        return {
            d: this.createDProps(prevProps && prevProps.d)
        };
    };

    createDProps = (prevProps?: DProps): DProps => {
        return {
            e: this.createEProps(prevProps && prevProps.e)
        };
    };

    createEProps = (prevProps?: EProps): EProps => {
        return {
            count: count
        };
    };

    onClick = () => {
        count++;
        this.setState(this.createPropsWithUnnecessaryProps(this.state));
    };

    render() {
        const state = this.createPropsWithUnnecessaryProps(this.state);
        return (
            <div className="App">
                <A {...state.a}/>
                <button onClick={this.onClick}>+1</button>
                <hr/>
                <List items={state.largeList}/>
            </div>
        );
    }
}

export default App;
