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


const observer = new (window as any).PerformanceObserver((list: any) => {
    list.getEntries().forEach((entry: any) => {
        // Display each reported measurement on console
        if (entry.name.includes("shouldComponentUpdate")) {
            console.log("Name: " + entry.name +
                ", Duration: " + (entry.duration) + "\n");
        }
    })
});
observer.observe({ entryTypes: ['measure'] });

class App extends React.Component {
    state = {
        count: 0
    };

    createComponentProps = (): ComponentProps => {
        return {
            b: {
                c: {
                    d: {
                        e: {
                            count: this.state.count
                        }
                    }
                }
            },
            other: largeUnRelatedObject
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
                <A a={this.createComponentProps()}/>
                <button onClick={this.onClick}>+1</button>
            </div>
        );
    }
}

export default App;
