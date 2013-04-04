Ext.define('Photonetra.view.ContactsList', {
    extend: 'Ext.List',
    xtype: 'contactsList',

    config: {
        fullscreen: true,
        itemTpl: '<div class="contact">{name}</div>',
        grouped     : true,
        indexBar    : true,
        store: 'Contacts',
        hideOnMaskTap: false
    }
});

Ext.define('Photonetra.view.Contacts', {
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
            xtype: 'contactsList',
            id: 'contactListId'
        },
        {
            title: 'Add',
            iconCls: 'add',
            html: 'Contact Screen'
        }
    ]
    }
});
