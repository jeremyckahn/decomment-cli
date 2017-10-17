# strip-comments-cli

Minimal, practical boilerplate for writing Node-powered CLI tools.  By default it processes text in a UNIX-friendly way.

## Usage

```
$: npm install && ./bin/cli.js --help

  Usage: strip-comments-cli [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Getting started

Here's a handy snippet you can add to your `.bash_profile` to create new tools easily:

```
function new_cli_tool () {
  if [ -z "$1" ];
  then
    "Must specify a project name as the first argument"
    return
  else
    git clone --depth=1 https://github.com/jeremyckahn/strip-comments-cli.git "$1"
    cd "$1" || exit 1
    rm -rf .git
    find . -type f -exec sed -i "" "s/strip-comments-cli/$1/g" {} \;
    git init
    git add --all
    git commit -m "Initial commit"
    npm install
  fi
}
```

## License

MIT.
