import * as React from 'react';
import './App.css';
import { A } from "./A/A";


export interface ComponentProps {
    b: {
        c: {
            d: {
                e: {
                    count: number
                }
            }
        }
    },
    other: any
}

const largeUnRelatedObject = {
    a: new Array(10000),
    b: new Array(10000),
    c: new Array(10000),
    e: new Array(10000),
    f: {
        ff: new Array(10000)
    }
};

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
        console.log(`Total: ${totalDuration}`, components);
    }

});
observer.observe({ entryTypes: ['measure'] });

class App extends React.Component {
    state = {
        count: 0
    };


    createPropsWithUnnecessaryProps = () => {
        return {
            ...this.createAProps(),
            largeUnRelatedObject
        }
    };

    createAProps = () => {
        return {
            a: this.createBProps()
        };
    };

    createBProps = () => {
        return {
            b: this.createCProps()
        };
    };

    createCProps = () => {
        return {
            c: this.createDProps()
        };
    };

    createDProps = () => {
        return {
            d: this.createEProps()
        };
    };

    createEProps = () => {
        return {
            e: {
                count: this.state.count
            }
        };
    };

    onClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div className="App">
                <A {...this.createPropsWithUnnecessaryProps()}/>
                <button onClick={this.onClick}>+1</button>
            </div>
        );
    }
}

export default App;
