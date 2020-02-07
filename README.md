# FooLib

Example library made for testing purposes only, inside there are two components (button and grid). Feel free to download and edit it for your purposes.

## Dummy step 
####1) _npm i foo-lib-sinossi_
####2) Import library on app.module.ts 

```javascript
import { FooLibModule } from "foo-lib-sinossi";
@NgModule({
	declarations: [],
	imports: [
	...
        FooLibModule,
	]
})
```
####3) Use component  
######Component Grid: the grid component expects as input a list composed of an array of objects.

```javascript
someData = [
   {
     position: 1,
     name: 'Hydrogen',
     weight: 1.0079,
     symbol: 'H',
     description: `Some Description`
   }
]
```

```html
<foo-button></foo-button>
<foo-grid [elList]="someData"></foo-grid>
```
