const { client } = require('nightwatch-api');
const { Given, Then } = require('cucumber');

Given(/^I open Hacker News's home page$/, () => {
    return client
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
    return client.assert.title(title);
});

Then(/^the Hacker News search form exists$/, () => {
    return client.assert.visible('input[name="q"]');
});
