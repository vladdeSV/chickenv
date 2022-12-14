interface Chicken {
  check: <T extends string>(dict: Record<string, unknown>, keys: T[]) => Record<T, string>,
  assert: <T extends string>(dict: Record<string, unknown>, keys: T[]) => asserts dict is Record<T, string>
}

const chicken: Chicken = {
  check: <T extends string>(dict: Record<string, unknown>, keys: T[]): Record<T, string> => {
    const out: Record<T, string> = <Record<T, string>>{}

    for (const key of keys) {
      const value = dict[key]
      if (typeof value !== 'string') {
        throw new Error(`Expected ${key} to be a string`)
      }

      out[key] = value
    }

    return out
  },

  assert: <T extends string>(dict: Record<string, unknown>, keys: T[]): asserts dict is Record<T, string> => {
    chicken.check(dict, keys)
  }
}

export default chicken
