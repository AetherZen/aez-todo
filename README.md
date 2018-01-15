# aez-todo
AethOS TODO task manager

This is a sample application taken from Aurelia documentation and modified to work with Zen Spaces / AethOS server on the backend.

## Installation

Requires aethos-spaces.  Install that according to its README and then link it here.
```
npm link aethos-spaces
```

## Build

```
au build
```

## Run dev environment

Change `aurelia.json`
```
"platform": {
  ...
  "port": 8083
  "public": <host-name>
}
```


This will run in a development environment on port 8083.  Any changes you make will be compiled and re-bundled and automatically refresh your browser.  Make sure your `index` service in `aethos-server` routes correctly.
```
au run --watch
```
