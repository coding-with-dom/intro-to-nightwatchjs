module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';
        
        const page = browser.page.googleAdvancedSearch();

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search();
        
        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Time period is last month');
        
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]';
        const resultsPagelastUpdateSelector = '[aria-label="Past month"]';

        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
        browser.assert.containsText(resultsPageLanguageSelector, 'Search Italian pages', 'UI: Language is set to Italian');
        browser.assert.containsText(resultsPagelastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month');
        
        browser.saveScreenshot('tests_output/google.png');
    }
};
