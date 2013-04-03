Ext.define('Photonetra.view.Clients', {
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