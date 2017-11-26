# Avoid-json-stringify-on-react

React's document said that

> We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.
> https://reactjs.org/docs/react-component.html#shouldcomponentupdate

## Related Issue

- [Performance issue (crash) in large apps when using Field with children in React v16 · Issue #3461 · erikras/redux-form](https://github.com/erikras/redux-form/issues/3461)
- [Document that deep equality checks and JSON.stringify() in shouldComponentUpdate() are a bad idea · Issue #7 · reactjs/reactjs.org](https://github.com/reactjs/reactjs.org/issues/7)

## Before

Deep Equal (`JSON.stringify(prevProps) === JSON.stringify(nextProps)`):

```
App.tsx:35 Name: ⚛ A.shouldComponentUpdate, Duration: 4.319999999999709

App.tsx:35 Name: ⚛ B.shouldComponentUpdate, Duration: 0.015000000000100044

App.tsx:35 Name: ⚛ C.shouldComponentUpdate, Duration: 0.009999999999990905

App.tsx:35 Name: ⚛ D.shouldComponentUpdate, Duration: 0.009999999999990905

App.tsx:35 Name: ⚛ E.shouldComponentUpdate, Duration: 0.029999999999972715

App.tsx:35 Name: ⚛ A.shouldComponentUpdate, Duration: 4.960000000000036

App.tsx:35 Name: ⚛ B.shouldComponentUpdate, Duration: 0.02500000000009095

App.tsx:35 Name: ⚛ C.shouldComponentUpdate, Duration: 0.010000000000218279

App.tsx:35 Name: ⚛ D.shouldComponentUpdate, Duration: 0.009999999999763531

App.tsx:35 Name: ⚛ E.shouldComponentUpdate, Duration: 0.010000000000218279

App.tsx:35 Name: ⚛ A.shouldComponentUpdate, Duration: 3.9400000000000546

App.tsx:35 Name: ⚛ B.shouldComponentUpdate, Duration: 0.004999999999654392

App.tsx:35 Name: ⚛ C.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:35 Name: ⚛ D.shouldComponentUpdate, Duration: 0.005000000000563887

App.tsx:35 Name: ⚛ E.shouldComponentUpdate, Duration: 0.009999999999763531
```


## After

Shallow Equal(Use [shallow-equal-object](https://github.com/azu/shallow-equal-object "shallow-equal-object"))

```
Name: ⚛ A.shouldComponentUpdate, Duration: 0.3450000000000273

App.tsx:35 Name: ⚛ B.shouldComponentUpdate, Duration: 0.015000000000100044

App.tsx:35 Name: ⚛ C.shouldComponentUpdate, Duration: 0.035000000000081855

App.tsx:35 Name: ⚛ D.shouldComponentUpdate, Duration: 0.01499999999987267

App.tsx:35 Name: ⚛ E.shouldComponentUpdate, Duration: 0.009999999999990905

App.tsx:35 Name: ⚛ A.shouldComponentUpdate, Duration: 0.04500000000007276

App.tsx:35 Name: ⚛ B.shouldComponentUpdate, Duration: 0.01499999999987267

App.tsx:35 Name: ⚛ C.shouldComponentUpdate, Duration: 0.009999999999990905

App.tsx:35 Name: ⚛ D.shouldComponentUpdate, Duration: 0.009999999999990905

App.tsx:35 Name: ⚛ E.shouldComponentUpdate, Duration: 0.009999999999990905

App.tsx:35 Name: ⚛ A.shouldComponentUpdate, Duration: 0.01499999999987267

App.tsx:35 Name: ⚛ B.shouldComponentUpdate, Duration: 0.004999999999654392

App.tsx:35 Name: ⚛ C.shouldComponentUpdate, Duration: 0.004999999999654392

App.tsx:35 Name: ⚛ D.shouldComponentUpdate, Duration: 0.004999999999654392

App.tsx:35 Name: ⚛ E.shouldComponentUpdate, Duration: 0.010000000000218279
```
