Ext.define("demo.view.Main", {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        /*layout: {
            align: 'middle',
            type: 'vbox'
        },*/

        items: [
            {
                xtype: 'titlebar',
                title: 'Demo',
                docked: 'top',
                items: [
                    {
                        iconCls: 'home',
                        align: 'right',
                        iconMask: 'true'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Enter search parameters',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Param1',
                        name: 'param1',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'Param2',
                        name: 'param2'
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Param3',
                        name: 'param3',
                        value: new Date()
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'action',
                text: 'Search',
            }
        ]
    }
});
