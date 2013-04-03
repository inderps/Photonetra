Ext.define('Photonetra.view.Menu', {
    extend: 'Ext.List',
    xtype: 'homeMenuList',

    config: {
        fullscreen: true,
        fields: ['item'],
            data: [
                {item: 'Clients'},
                {item: 'Shoots'},
                {item: 'Delivery'},
                {item: 'Payments'}
            ],
        itemTpl: '{item}'
    }
});