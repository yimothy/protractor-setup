'use strict';

exports.config = {
    jvmArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.4.0.exe'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',

    multiCapabilities: [
     {
     browserName: 'internet explorer',
     ignoreProtectedModeSettings: true
     }
    ],
    specs: ['todo-spec.js']
};
