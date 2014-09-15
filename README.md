# generator-showcase

### Installing the generator
```
npm install -g git+https://git@github.com/mattkelley/generator-showcase.git
```

### Commands

Development Environment
```
grunt serve
```

Production Build with local server for testing
```
grunt serve:dist
```

Production Build
```
grunt build
```


### Errors on Build
[See this thread](https://github.com/kevva/pngquant-bin/issues/24)
```
> pngquant-bin@0.3.1 postinstall /Users/ronnie/Sites/test-showcase-3/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/imagemin-pngquant/node_modules/pngquant-bin
> node index.js

✗ pre-build test failed, compiling from source...
libpng-dev is installed

{ [Error: Command failed: In file included from pngquant.c:59:
./rwpng.h:35:10: fatal error: 'png.h' file not found
#include "png.h"    /* libpng header; includes zlib.h */
         ^
1 error generated.
make: *** [pngquant.o] Error 1
] killed: false, code: 2, signal: null }
```

Using HomeBrew install 'libpng'
```
brew install libpng
```
