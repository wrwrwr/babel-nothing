babel-nothing
=============

A [Babel][] transform that does nothing. An ad hoc solution for conditional
plugin lists:

```javascript
plugins: [
    library ? 'transform-nothing' : 'transform-remove-console'
]
```

[babel]: https://babeljs.io/

Installation
------------

```bash
npm install babel-cli babel-plugin-transform-nothing
```
