# STIX2

Stix2 Typescript and Javascript definitions. Used by [UNFETTER](unfetter.io)

## Use with NPM
* `npm install --save git+https://git@github.com/unfetter-discover/stix.git`

## Commands 
* `npm run build` will yield a `dist` directory with `.d.ts` and `.js` files
* `npm run test` to run specs
* `npm run coverage` to show spec coverage
* `npm run docs` to generate typedocs

## Folder structure
* src - contains source typescript files
* src/assess/v2 - assessment 2.0 used by unfetter
* src/assess/v3 - assessment 3.0 used by unfetter
* src/common - common typescript definitions
* src/stix - stix2 definitions
* src/legacy - stix2 definitions used by old parts of unfetter
* src/unfetter - unfetter stix2 like extensions
* dist - contains compiled javascript and typescript definition files
* coverage - generated spec and source coverage files
* docs - generated typedocs
* erd - png files showing entity relations

## Git
_Branches_
* develop - unstable
* master - stable 
* feature-x - feature branches

