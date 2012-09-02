Ext.define('demo.store.Flickr', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],
    config: {
        proxy: {
            type: 'jsonp',
            url: 'http://api.flickr.com/services/rest/',//api_sig=483d69c418eaf235f3a723ba017998a2',
            extraParams: {
                api_key: 'f962dae2d1d11a1d44d6f88d6a2301a9',
                method: 'flickr.interestingness.getList',
                format: 'json',
            },
            reader: {
                type: 'json',
                rootProperty: 'photos.photo'
            },
            callbackKey: 'jsoncallback',
        },
        model: 'demo.model.Photo',
        storeId: 'flickr',
    },
});
