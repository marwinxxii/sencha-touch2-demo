Ext.define('demo.controller.Search', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'search/:date': 'search',
            '': 'main'
        },
        refs: {
            btnSearch: '#search',
            btnHome: '#home',
            datepicker: '#datepicker',
            titlebar: '#titlebar',
        },
        control: {
            btnSearch: {
                tap: 'onSearch'
            },
            btnHome: {
                tap: 'onNavigateHome'
            }
        }
    },
    onSearch: function() {
        console.log('onSearch');
        this.redirectTo('search/' + this.getDatepicker().getFormattedValue('Y-m-d'));
    },
    onNavigateHome: function() {
        //this.redirectTo('');
        Ext.Viewport.setActiveItem(0);
    },
    search: function(date) {
        console.log('search');
        var store = Ext.getStore('flickr');
        store.getProxy().setExtraParam('date', date);
        store.load();
        Ext.Viewport.setActiveItem(Ext.create('demo.view.Search'));
        this.getTitlebar().setTitle('Demo - Photos for ' + date);
    },
    main: function() {
        Ext.Viewport.setActiveItem(Ext.create('demo.view.Main'));
    }
});
