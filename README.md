# low

> Scala/Haskell-style wildcards in JavaScript

## Installation

```sh
# Using Yarn
yarn add low

# Or, using NPM
npm install low --save
```

## Usage

### Without Low:

```js
let array = [
  { a: { b: 1 } },
  { a: { b: 2 } },
  { a: { b: 3 } }
]

array.map(_ => _.a.b) // [1, 2, 3]
```

### With Low:

```js
import { _ } from 'low'

array.map(_.a.b) // [1, 2, 3]
```

## License

MIT
