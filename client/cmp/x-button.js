const {define, Component} = require('doz');
const local = require('./x-local');

define('x-button', class extends Component {

    constructor(o) {
        super(o);
        this.config = {
            components: {
                'x-local': local
            }
        }
    }


    template(h) {
        return h`
            <button onclick="alert('Process ID ' + process.pid)">Click</button>
            <x-local/>
        `
    }
});