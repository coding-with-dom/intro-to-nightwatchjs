module.exports = {
    'src_folders': ['tests'],
    'page_objects_path': ['page-objects'],

    'webdriver': {
        'start_process': true,
        'server_path': 'node_modules/.bin/chromedriver',
        'port': 9515
    },

    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            'desiredCapabilities': {
                'browserName': 'chrome',
                'chromeOptions': {
                    'args': ['--headless']
                }
            }
        }
    }
};
