import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bills', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bills');
    assert.ok(route);
  });
});
