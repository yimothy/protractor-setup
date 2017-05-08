describe('angularjs homepage todo list', function() {
    beforeAll(function() {
        browser.wait(browser.get('https://angularjs.org'), 30000);
    });
    it('should add a todo', function() {
        // This is a simplified version of the example test taken from Protractor's homepage
        // http://www.protractortest.org
        browser.wait(browser.get('https://angularjs.org'), 30000);

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(2);
        expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });
});