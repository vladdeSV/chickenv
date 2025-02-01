interface Chickenv {
  assert: <T extends string>(dict: Record<string, unknown>, keys: T[]) => asserts dict is Record<T, string>
}

const chickenv: Chickenv = {
  assert: <T extends string>(dict: Record<string, unknown>, keys: T[]): asserts dict is Record<T, string> => {
    for (const key of keys) {
      const value = dict[key]
      if (typeof value !== 'string') {
        throw new Error(`Expected ${key} to be a string`)
      }
    }
  },
}

export default chickenv
