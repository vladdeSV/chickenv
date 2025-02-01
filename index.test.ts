import chick from './index'
import { expect, test, describe } from 'bun:test'

describe('basic usage', () => {
  test('assert', () => {
    const processEnv1 = {} as NodeJS.ProcessEnv
    expect(() => chick.assert(processEnv1, [])).not.toThrow()

    const processEnv2 = { foo: 'a', bar: 'b' } as NodeJS.ProcessEnv
    expect(() => chick.assert(processEnv2, [])).not.toThrow()

    const processEnv3 = { foo: 'a', bar: 'b' } as NodeJS.ProcessEnv
    expect(() => chick.assert(processEnv3, ['foo', 'bar'])).not.toThrow()

    const processEnv4 = { foo: 'a', bar: 'b' } as NodeJS.ProcessEnv
    expect(() => chick.assert(processEnv4, ['foo', 'bar', 'baz'])).toThrow()
  })
})
