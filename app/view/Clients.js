Ext.define('Photonetra.view.ClientsList', {
    extend: 'Ext.List',
    xtype: 'clientsList',

    config: {
        fullscreen: true,
        itemTpl: '<div class="contact">{name}</div>',
        grouped     : true,
        indexBar    : true,
        store: 'Clients',
        hideOnMaskTap: false
    }
});

Ext.define('Photonetra.view.Clients', {
    extend: 'Ext.TabPanel',

    config: {

    fullscreen: true,
    tabBarPosition: 'bottom',

    defaults: {
        styleHtmlContent: true
    },

    items: [
        {
            title: 'All',
            iconCls: 'user',
            xtype: 'clientsList',
            id: 'clientListId'
        },
        {
            title: 'Add',
            iconCls: 'add',
            html: 'Contact Screen'
        }
    ]
    }
});
