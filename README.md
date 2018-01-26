# aez-todo
AethOS TODO task manager

This is a sample application taken from Aurelia documentation and modified to work with Zen Spaces / AethOS server on the backend.

## Installation

Requires `aethos-client-core` and `aethos-spaces`.  Install them according to the README files in those projects and then link it here.

(note, I've temporarily removed the dependency on aethos-client-core; that dependency should only exist in production, not in a development environment but that requires a little more work)
```
npm link aethos-client-core
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


*Note: I have had problems with `--watch`.  If you experience problems with webpack going into an infinite loop, just use `au run` and then `ctrl-c` and restart when you make modifications.  This is **really** inconvenient so I'll try to see what I can do to solve this ASAP.*
