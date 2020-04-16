### To Test

First build the library, then start the dev server.
```
npm run build
```
This is an alias for: `ng build angular-checklist --prod`

```
npm start
```
This is an alias for: `ng server --project demo`



### To publish to NPM:

Be sure that `./projects/angular-checklist/packgage.json` has the appropriate version number. Then:

```
npm run build
cd dist/angular-checklist
npm publish
```
