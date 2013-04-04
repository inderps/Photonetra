Ext.define('Photonetra.view.Menu', {
    extend: 'Ext.List',
    xtype: 'homeMenuList',

    config: {
        fullscreen: true,
        fields: ['item'],
            data: [
                {item: 'Contacts'},
                {item: 'Shoots'},
                {item: 'Delivery'},
                {item: 'Payments'}
            ],
        itemTpl: '{item}'
    }
});