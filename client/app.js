const Doz = require('doz');
require('./cmp/x-button');

new Doz({
    root: '#app',
    template(h) {
        return h`
            <div>Hello Doz</div> <x-button/>
        `
    }
});