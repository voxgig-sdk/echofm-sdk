
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { EchofmSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await EchofmSDK.test()
    equal(null !== testsdk, true)
  })

})
