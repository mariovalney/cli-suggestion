# CLI Suggestion

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]

It's just a simple module to return a command suggestion based on a try.

## Installation

Add to your project:

`npm install cli-suggestion --save`

## Starting

Require and start with options:

```js
var suggestion = require('suggestion');

...

var doSuggestion = suggestion({
    command: '',
    file: 'suggestions.json',
    text: 'Did want to say that?'
});
```

Then you can receive suggestions passing a string as the attempt:

```js
var return = doSuggestion('test'); // Just the string, do not pass your app/command.
```

## Options

### command | `default: a empty string`

String | Your command. To be added before suggestion:

> Did want to say that?
>   command suggestion

### file | `default: suggestions.json`

String | The suggestions JSON file.
If it's invalid we will consider no suggestions.

### text | `default: Did want to say that?`

String | A humman readable text before suggestion.
Just like GIT.

## Suggestion File

It's a JSON file with a array of suggestions.
Each suggestion should have `command` (string) and `errors` (array of strings) properties.

```json
[
  {
    "command": "--test",
    "errors": ["test", "t"]
  },
  {
    "command": "--version",
    "errors": ["version", "v"]
  },
]
```

## License

MIT

## Developers

[Mário Valney](https://github.com/mariovalney)

[npm-url]: https://www.npmjs.com/package/cli-suggestion
[npm-image]: https://img.shields.io/npm/v/cli-suggestion.svg?style=for-the-badge

[travis-url]: https://travis-ci.org/mariovalney/cli-suggestion
[travis-image]: https://img.shields.io/travis/mariovalney/cli-suggestion.svg?label=travis-ci&style=for-the-badge

[coveralls-url]: https://coveralls.io/github/mariovalney/cli-suggestion
[coveralls-image]: https://img.shields.io/coveralls/mariovalney/cli-suggestion/master.svg?style=for-the-badge
