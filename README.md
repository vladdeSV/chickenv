# 🐥env, 🐔v
Ensure environment variables are set at both runtime and compile-time. TypeScript users benefit from auto-completion of variables.

## Installation

```sh
$ yarn add chickenv
```

## Examples 
If environment variables are not set, the method will throw.

```ts
import chick from 'chickenv'

// throws if missing
const env = chick.check(
    process.env,
    ['FOO', 'BAR', 'BAZ']
)

env.FOO // guaranteed to be set
```

Alternative assertion method.
```ts
import chicken from 'chickenv'

chicken.assert(process.env, ['FOO', 'BAR', 'BAZ'])

process.env.FOO
```

## Need more?
If you need more advanced features, you should probably take a look at other libraries, such as [runtypes](https://github.com/pelotom/runtypes).

## Pronunciation
> Art is in the eye of the beholder

Pronounced *chick-env* (🐤env), or *chicken-v* (🐔v).

## License
MIT © [Vladimirs Nordholm](https://github.com/vladdeSV)
