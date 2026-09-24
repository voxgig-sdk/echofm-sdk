
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { EchofmSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = EchofmSDK.test()
    equal(testsdk instanceof EchofmSDK, true,
      'EchofmSDK.test() must return a client synchronously')
  })

})
