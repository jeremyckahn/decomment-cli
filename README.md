# decomment-cli

A CLI interface for https://github.com/vitaly-t/decomment.

## Usage

```
$: npm install -g decomment-cli

  Usage: decomment-cli [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

Works in a UNIX-y way:

```
$ cat test/before/basic.js
// Hi I'm a comment
var a = 'Hello World!';

$ cat test/before/basic.js | decomment-cli
var a = 'Hello World!';

$ decomment-cli < test/before/basic.js
var a = 'Hello World!';
```

## License

MIT.
