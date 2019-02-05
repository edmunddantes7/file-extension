# file-language
Fork of file-extension npm repository.

[![](https://img.shields.io/npm/v/file-extension.svg?style=flat)](https://www.npmjs.org/package/file-extension) [![](https://img.shields.io/npm/dm/file-extension.svg)](https://www.npmjs.org/package/file-extension) [![](https://api.travis-ci.org/silverwind/file-extension.svg?style=flat)](https://travis-ci.org/silverwind/file-extension)
> Get the extension of a given filename or path

Differences to [`path.extname`](https://nodejs.org/api/path.html#path_path_extname_path):

* Treats dotfiles as extension (`.eslintrc` => `eslintrc`)
* Treats extensionless files as extension (`Makefile` => `makefile`)
* Doesn't include the dot in the extension (`package.json` => `json`)
* Returns lowercase by default (`LICENCE` => `licence`)

Works in Node.js and the browser.

## Installation
#### Node.js
```
$ npm install --save file-language
```
#### Browser
```html
<script src="file-language.js"></script>
<!-- Available as global `fileLanguage` -->
```
## Example
```js
var fileLanguage = require('file-language'); // Skip this in the browser

// Case insensitive
fileLanguage('file.zip');          //=> 'zip'
fileLanguage('.Dockerfile');       //=> 'dockerfile'
fileLanguage('file');              //=> 'file'
fileLanguage('.file.tar');         //=> 'tar'

// Or with case preserved
fileLanguage('.Vagrantfile', {preserveCase: true}); //=> 'Vagrantfile'
fileLanguage('INDEX.HTML', {preserveCase: true});   //=> 'HTML'

// Or with fullExtensionName, falls back to fullExtensionName false and returns just the 
// extension if could not find property with given extension name. Map file is on
// `fileExtensionToLanguageMap.js`
fileLanguage('', { fullExtensionName: true })
```

## API
### fileLanguage(filename, [options])
- `filename` {String} The file name. Required.
- `options` {Object} Options object.

#### Options
- `preserveCase` {Boolean} Whether case should be preserved. Default: false.
- `languageName` {Boolean} Return the language name. Default: false.
