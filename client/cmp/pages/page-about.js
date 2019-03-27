const Doz = require('doz');

Doz.component('my-label', {
    //store: 'myLabel',
    template(h) {
        return h`
            <div>${this.props.label}</div>
        `
    }
});

Doz.component('page-about', {

    props: {
        name: 'Roberto',
        records: [
            {key: 'ciao', value: 'roberto'},
            {key: 'ciao', value: 'fabio'},
            {key: 'ciao', value: 'claudio'},
        ]
    },

    template(h) {
        return h`
            <style> 
                div {
                    padding: 20px;
                    background: red;
                    color: white;
                }
            </style>
            <my-label d:alias="myLabel"/>
            <div onclick="this.onClickDiv(555)">I'm about page ${this.props.name}</div>
            ${this.each(this.props.records, item => h`
                <div>${item.key} ${item.value}</div>
            `)}
        `
    },

    onClickDiv(v, e) {
        this.props.name = 'Roberto Alibrando';
        this.children.myLabel.props.label = 'CIAO';
        this.props.records = [
            {key: 'ciao', value: 'pietro'},
            {key: 'ciao', value: 'dario'},
        ];

        //console.log(this)

        //this.myMethod();
    }


});