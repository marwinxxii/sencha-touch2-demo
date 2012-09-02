Ext.define('demo.view.ItemsList', {
    extend: 'Ext.DataView',
    requires: ['demo.store.Flickr'],
    config: {
        store: 'flickr',
        useComponents: true,
        defaultType: 'photoitem',
    }
});
