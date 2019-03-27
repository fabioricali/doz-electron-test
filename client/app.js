const Doz = require('doz');
require('doz-router');
require('./cmp/x-button');
require('./cmp/pages/page-home');
require('./cmp/pages/page-about');

Doz.mixin({
    myMethod() {
        console.log('my method')
    }
});

new Doz({
    root: '#app',
    template(h) {
        return h`
            <nav>
                <a data-router-link="true" href="/">Home</a>
                <a data-router-link="true" href="/about">About</a>
            </nav>
            <doz-router>
                <page-home route="/"/>
                <page-about route="/about"/>
            </doz-router>
        `
    }
});