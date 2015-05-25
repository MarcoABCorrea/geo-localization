/*global describe, beforeEach, it, browser, expect */
'use strict';
describe('Geo Location page', function() {

  beforeEach(function () {
    browser.get('http://127.0.0.1:9000/#/');
  });

  // Components
  var btnSiteLocation = element(by.id('btnSiteLocation')),
    btnResetLocation = element(by.id('btnResetLocation')),
    btnMyLocation = element(by.id('btnMyLocation')),
    iptSite = element(by.model('site')),
    tblResult = element(by.tagName('table')),
    map = element(by.id('map'))
    ;

  it('should have 3 buttons, 1 input, 1 table, 1 map', function () {

    expect(btnSiteLocation.isPresent()).toBe(true);
    expect(btnResetLocation.isPresent()).toBe(true);
    expect(btnMyLocation.isPresent()).toBe(true);
    expect(iptSite.isPresent()).toBe(true);
    expect(tblResult.isPresent()).toBe(true);
    expect(map.isPresent()).toBe(true);
  });

});