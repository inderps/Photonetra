Ext.define('Photonetra.view.Menu', {
    extend: 'Ext.List',
    xtype: 'homeMenuList',

    config: {
        title: 'Photonetra',
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