import chicken from './index'

describe('basic usage', () => {
  test('check', () => {
    expect(chicken.check({}, []))
      .toEqual({})

    expect(chicken.check({ foo: 'a', bar: 'b' }, []))
      .toEqual({})

    expect(chicken.check({ foo: 'a', bar: 'b' }, ['foo', 'bar']))
      .toEqual({ foo: 'a', bar: 'b' })

    expect(() => chicken.check({ foo: 'a', bar: 'b' }, ['foo', 'bar', 'baz']))
      .toThrow()
  })

  test('validate', () => {
    expect(chicken.validate({}, []))
      .toEqual({})

    expect(chicken.validate({ foo: 'a', bar: 'b' }, []))
      .toEqual({})

    expect(chicken.validate({ foo: 'a', bar: 'b' }, ['foo', 'bar']))
      .toEqual({ foo: 'a', bar: 'b' })

    expect(chicken.validate({ foo: 'a', bar: 'b' }, ['foo', 'bar', 'baz']))
      .toBeUndefined()
  })

  test('assert', () => {
    const processEnv1 = {} as NodeJS.ProcessEnv
    expect(() => chicken.assert(processEnv1, []))
      .not.toThrow()

    const processEnv2 = { foo: 'a', bar: 'b' } as NodeJS.ProcessEnv
    expect(() => chicken.assert(processEnv2, []))
      .not.toThrow()

    const processEnv3 = { foo: 'a', bar: 'b' } as NodeJS.ProcessEnv
    expect(() => chicken.assert(processEnv3, ['foo', 'bar']))
      .not.toThrow()

    const processEnv4 = { foo: 'a', bar: 'b' } as NodeJS.ProcessEnv
    expect(() => chicken.assert(processEnv4, ['foo', 'bar', 'baz']))
      .toThrow()
  })
})

describe('misc', () => {
  test('other types', () => {
    expect(() => chicken.check({ foo: 1 }, ['foo']))
      .toThrow()

    expect(() => chicken.check({ foo: true }, ['foo']))
      .toThrow()

    expect(() => chicken.check({ foo: null }, ['foo']))
      .toThrow()

    expect(() => chicken.check({ foo: undefined }, ['foo']))
      .toThrow()

    expect(() => chicken.check({ foo: {} }, ['foo']))
      .toThrow()

    expect(() => chicken.check({ foo: [] }, ['foo']))
      .toThrow()
  })
})
