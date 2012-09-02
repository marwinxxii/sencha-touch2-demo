Ext.define('demo.view.PhotoItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Label', 'Ext.Array', 'Ext.Img'],
    xtype: 'photoitem',

    config: {
        layout: {
            type: 'hbox',
            align: 'center'
        },
        title: {
            flex: 1
        },
        image: {
            width: '80px',
            height: '80px'
        },

        dataMap: {
            getTitle: {
                setHtml: 'title'
            },
            getImage: {}
        },
        styleHtmlContent: true,
    },

    applyTitle: function(config) {
        return Ext.factory(config, Ext.Label, this.getTitle());
    },

    updateTitle: function(newTitle, oldTitle) {
        if (oldTitle) {
            this.remove(oldTitle);
        }

        if (newTitle) {
            this.add(newTitle);
        }
    },

    applyImage: function(config) {
        var img = this.getRecord().data;
        config.src = 'http://farm' + img.farm
            + '.staticflickr.com/' + img.server
            + '/' + img.id + '_' + img.secret + '_s.jpg';
        return Ext.factory(config, Ext.Img, this.getImage());
    },

    updateImage: function(newImage, oldImage) {
        if (oldImage) {
            this.remove(oldImage);
        }

        if (newImage) {
            this.add(newImage);
        }
    },
});
