# Web Components in actions

The purpose of this evaluation is to find out the strong and stable web components helper libraries or framework in the market,
which is suitable to create easy-to-integrate and easy-to-maintain web components.

Web components should be seamlessly integrable into any project regardless the framework being used, be it `React`, `Vue` or `Angular` based.

## Taking into consideration
1. Bundle size
1. Resource sharing (images/fonts/...) - CDN handling by the Product Managers
1. Events and callback integration with the existing framework
1. Server side rendering support

## Libraries / Framework being evaluated
1. Stencil
1. Hybrids
1. Polymer's lit-element

# How to run
1. Run `yarn bootstrap`
1. Run `yarn serve` to serve the static files, and navigate `http://localhost:3000` to view the libraries in action.

# Bundle size quick view

| Module  | File  | Size  | gzip Size  |  
|---|---|---|---|
|Only React | main.js | 407 KB | 110 KB |  
|Pure Hybrids | main.js | 411 KB | 108 KB |
|Hybrids with React | main.js | 542 KB | 148 KB |
|Pure Polymer LitElement | custom-elements-es5-adapter.js <br/>webcomponents-loader.js <br /> start-lit-element.js <br /> lazy-element | 0.95KB <br /> 6 KB <br /> 135 KB <br /> 705 KB | - <br /> 2.4 KB <br /> 32 KB <br /> 130 KB |
|Pure Stencil | \<hash>.js <br /> \<hash>.entry.js | 8 KB <br /> 124 KB | 4 KB <br /> 41.2 KB |
|Stencil with React (not minified) | entry.js | 1.4 MB | 321 KB |
|Pure Angular (compiled by ng-cli) | main-es2015.js | 49 KB | 48 KB
|Hybrids in Angular (compiled by ng-cli) 1 web components | main-es2015.js | 592 KB | 162 KB
|Hybrids in Angular (compiled by ng-cli) 2 web components | main-es2015.js | 1.1 MB | 309 KB

\* The `main-es2015.js` in the `Hybrids in Angular` includes two distributed files (to demonstrate multiple web components import, 540+ KB each file) taken from `Hybrids with React` module.

# Todo
1. Unit test and E2E test
1. CI/CD
