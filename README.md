# generator-react-container [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator for creating react container folders.

This generator generates an opinionated react container folder.

The generated folder structure is as follows:

```
TemplateContainer/
├── Component.css
├── Component.js
├── Container.js
└── index.js
```

The generated files are based on the template in [`app/templates/TemplateContainer`](https://github.com/marcusmolchany/generator-react-container/tree/master/generators/app/templates/TemplateContainer).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-container using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-container
```

Then generate your new react container folder:

```bash
yo react-container ContainerName  # ContainerName will be the name of your new container's folder
```

## License

MIT


[npm-image]: https://badge.fury.io/js/generator-react-container.svg
[npm-url]: https://npmjs.org/package/generator-react-container
[travis-image]: https://travis-ci.org/marcusmolchany/generator-react-container.svg?branch=master
[travis-url]: https://travis-ci.org/marcusmolchany/generator-react-container
[daviddm-image]: https://david-dm.org/marcusmolchany/generator-react-container.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/marcusmolchany/generator-react-container
