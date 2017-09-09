import { test } from 'ava'
import { _ } from './'

test('property', t => {
  let array = [
    { a: 1 },
    { a: 2 },
    { a: 3 }
  ]
  t.deepEqual(array.map(_.a), [1, 2, 3])
})

test('property (deep)', t => {
  let array = [
    { a: { b: 1 } },
    { a: { b: 2 } },
    { a: { b: 3 } }
  ]
  t.deepEqual(array.map(_.a.b), [1, 2, 3])
})
