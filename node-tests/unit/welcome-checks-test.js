'use strict';

var assert = require('assert');
var path = require('path');
var WelcomeCheck = require('../../index.js');

describe('Ember welcome checks', function() {

  var fixturePath = path.join(__dirname + '/../fixtures/');

  var jsExtensions = [ 'js' ];
  var templateExtensions = [ 'template', 'hbs', 'embl', 'emblem', 'handlebars' ];

  it('returns false if template files exist', function() {
    var result = callWelcomeCheck(path.join(fixturePath, 'templates'));
    assert.ok(!result, 'template files detected');
  });

  it('returns false if routes exist in the router map ', function() {
    var result = callWelcomeCheck(path.join(fixturePath, 'routermap'));
    assert.ok(!result, 'router map changes were not detected');
  });

  it('returns false if routes files exist', function() {
    var result = callWelcomeCheck(path.join(fixturePath, 'routes'));
    assert.ok(!result, 'route files were not detected');
  });

  it('returns true if on a new app setup', function() {
    var result = callWelcomeCheck(path.join(fixturePath, 'success'));
    assert.ok(result, 'new app setup failed');
  });

  function callWelcomeCheck(path) {
    return WelcomeCheck.shouldOverride(jsExtensions, templateExtensions, path);
  }
});
