# Avoid-json-stringify-on-react

React's document said that

> We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.
> https://reactjs.org/docs/react-component.html#shouldcomponentupdate

## Related Issue

- [Performance issue (crash) in large apps when using Field with children in React v16 · Issue #3461 · erikras/redux-form](https://github.com/erikras/redux-form/issues/3461)
- [Document that deep equality checks and JSON.stringify() in shouldComponentUpdate() are a bad idea · Issue #7 · reactjs/reactjs.org](https://github.com/reactjs/reactjs.org/issues/7)

## Test

Environment:

- MacBookPro14,1
- CPU: Intel Core i7, 2.5 GHz
- Browser: Chrome – 6x CPU throttling

## Before

Deep Equal (`JSON.stringify(prevProps) === JSON.stringify(nextProps)`):


![image](https://user-images.githubusercontent.com/19714/33408570-7e4ff248-d5ba-11e7-8470-684413a8fb25.png)

```
Name: ⚛ A.shouldComponentUpdate, Duration: 0.9350000000004002

App.tsx:27 Name: ⚛ B.shouldComponentUpdate, Duration: 0.010000000000218279

App.tsx:27 Name: ⚛ C.shouldComponentUpdate, Duration: 1.1300000000001091

App.tsx:27 Name: ⚛ D.shouldComponentUpdate, Duration: 0.015000000000327418

App.tsx:27 Name: ⚛ E.shouldComponentUpdate, Duration: 0.009999999999308784

App.tsx:27 Name: ⚛ List.shouldComponentUpdate, Duration: 5.364999999999782

App.tsx:32 Total shouldComponentUpdate: 7.4650000000001455
App.tsx:33 Update components: ⚛ A.shouldComponentUpdate, ⚛ B.shouldComponentUpdate, ⚛ C.shouldComponentUpdate, ⚛ D.shouldComponentUpdate, ⚛ E.shouldComponentUpdate, ⚛ List.shouldComponentUpdate

App.tsx:27 Name: ⚛ A.shouldComponentUpdate, Duration: 0.014999999999417923

App.tsx:27 Name: ⚛ B.shouldComponentUpdate, Duration: 0.004999999999199645

App.tsx:27 Name: ⚛ C.shouldComponentUpdate, Duration: 0.019999999999527063

App.tsx:27 Name: ⚛ D.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:27 Name: ⚛ E.shouldComponentUpdate, Duration: 0

App.tsx:27 Name: ⚛ List.shouldComponentUpdate, Duration: 5.770000000000437

App.tsx:32 Total shouldComponentUpdate: 5.81499999999869
App.tsx:33 Update components: ⚛ A.shouldComponentUpdate, ⚛ B.shouldComponentUpdate, ⚛ C.shouldComponentUpdate, ⚛ D.shouldComponentUpdate, ⚛ E.shouldComponentUpdate, ⚛ List.shouldComponentUpdate


App.tsx:27 Name: ⚛ A.shouldComponentUpdate, Duration: 0.015000000000327418

App.tsx:27 Name: ⚛ B.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:27 Name: ⚛ C.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:27 Name: ⚛ D.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:27 Name: ⚛ E.shouldComponentUpdate, Duration: 0.005000000001018634

App.tsx:27 Name: ⚛ List.shouldComponentUpdate, Duration: 5.154999999999745

App.tsx:32 Total shouldComponentUpdate: 5.190000000001419
App.tsx:33 Update components: ⚛ A.shouldComponentUpdate, ⚛ B.shouldComponentUpdate, ⚛ C.shouldComponentUpdate, ⚛ D.shouldComponentUpdate, ⚛ E.shouldComponentUpdate, ⚛ List.shouldComponentUpdate
```


## After

Shallow Equal(Use [shallow-equal-object](https://github.com/azu/shallow-equal-object "shallow-equal-object"))

![image](https://user-images.githubusercontent.com/19714/33408628-d3677756-d5ba-11e7-83a3-5113a2e09739.png)

```
Name: ⚛ A.shouldComponentUpdate, Duration: 0.13999999999941792

App.tsx:27 Name: ⚛ B.shouldComponentUpdate, Duration: 0.010000000001127773

App.tsx:27 Name: ⚛ C.shouldComponentUpdate, Duration: 0.004999999999199645

App.tsx:27 Name: ⚛ D.shouldComponentUpdate, Duration: 0.010000000000218279

App.tsx:27 Name: ⚛ E.shouldComponentUpdate, Duration: 0.015000000000327418

App.tsx:27 Name: ⚛ List.shouldComponentUpdate, Duration: 1.125

App.tsx:32 Total shouldComponentUpdate: 1.305000000000291
App.tsx:33 Updated components: ⚛ A.shouldComponentUpdate, ⚛ B.shouldComponentUpdate, ⚛ C.shouldComponentUpdate, ⚛ D.shouldComponentUpdate, ⚛ E.shouldComponentUpdate, ⚛ List.shouldComponentUpdate

App.tsx:27 Name: ⚛ A.shouldComponentUpdate, Duration: 0.009999999999308784

App.tsx:27 Name: ⚛ B.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:27 Name: ⚛ C.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:27 Name: ⚛ D.shouldComponentUpdate, Duration: 0.004999999999199645

App.tsx:27 Name: ⚛ E.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:27 Name: ⚛ List.shouldComponentUpdate, Duration: 0.009999999999308784

App.tsx:32 Total shouldComponentUpdate: 0.03999999999814463
App.tsx:33 Updated components: ⚛ A.shouldComponentUpdate, ⚛ B.shouldComponentUpdate, ⚛ C.shouldComponentUpdate, ⚛ D.shouldComponentUpdate, ⚛ E.shouldComponentUpdate, ⚛ List.shouldComponentUpdate

App.tsx:27 Name: ⚛ A.shouldComponentUpdate, Duration: 0.010000000000218279

App.tsx:27 Name: ⚛ B.shouldComponentUpdate, Duration: 0.004999999999199645

App.tsx:27 Name: ⚛ C.shouldComponentUpdate, Duration: 0

App.tsx:27 Name: ⚛ D.shouldComponentUpdate, Duration: 0.004999999999199645

App.tsx:27 Name: ⚛ E.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:27 Name: ⚛ List.shouldComponentUpdate, Duration: 0.005000000000109139

App.tsx:32 Total shouldComponentUpdate: 0.029999999998835847
App.tsx:33 Updated components: ⚛ A.shouldComponentUpdate, ⚛ B.shouldComponentUpdate, ⚛ C.shouldComponentUpdate, ⚛ D.shouldComponentUpdate, ⚛ E.shouldComponentUpdate, ⚛ List.shouldComponentUpdate
```
