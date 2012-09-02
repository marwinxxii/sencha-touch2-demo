Ext.define("demo.view.Search", {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar', 'Ext.field.DatePicker'
    ],

    config: {
        layout: {
            align: 'middle',
            type: 'fit'
        },
        items: [
            {
                xtype: 'titlebar',
                id: 'titlebar',
                title: 'Demo',
                docked: 'top',
                items: [
                    {
                        iconCls: 'home',
                        align: 'right',
                        iconMask: 'true',
                        id: 'home'
                    }
                ]
            },
            {
                xclass: 'demo.view.ItemsList'
            }
        ]
    }
});
