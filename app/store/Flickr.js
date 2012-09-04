Ext.define('demo.store.Flickr', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],
    config: {
        proxy: {
            type: 'jsonp',
            url: 'http://api.flickr.com/services/rest/',//api_sig=483d69c418eaf235f3a723ba017998a2',
            extraParams: {
                api_key: 'e0b8fe486f491a77fc18b5c3ecc6c55b',
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
