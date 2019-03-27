module.exports = {
    'My first test case'(browser) {
        const headerSelector = 'td[bgcolor="#ff6600"]';
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible(headerSelector)
            .assert.screenshotIdenticalToBaseline(headerSelector, 'hn-header');
    }
};
