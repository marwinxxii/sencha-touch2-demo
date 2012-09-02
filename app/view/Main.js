Ext.define("demo.view.Main", {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar', 'Ext.field.DatePicker', 'Ext.form.FieldSet'
    ],
    config: {
        /*layout: {
            align: 'middle',
            type: 'vbox'
        },*/

        items: [
            {
                xtype: 'titlebar',
                title: 'Demo - Flickr photo search',
                docked: 'top'
            },
            {
                xtype: 'fieldset',
                title: 'Enter search parameters',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Title',
                        name: 'query'
                    },
                    {
                        xtype: 'textfield',
                        label: 'City',
                        name: 'city'
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Date',
                        name: 'date',
                        value: new Date(),
                        id: 'datepicker'
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'action',
                text: 'Search',
                //handler: this.onStartSearch
                id: 'search'
            }
        ]
    },
    onStartSearch: function() {
        this.fireEvent('onStartSearch', this);
    }
});
