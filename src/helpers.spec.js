import * as helpers from '../../src/helpers';

describe('Unit tests for helper functions', function() {
  context('hello', function() {
    it('can return greeting', function() {
      expect(helpers.hello('Tom')).to.eq('Hello Tom');
    });
  })
});
