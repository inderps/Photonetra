Ext.define('Photonetra.model.ClientOffline', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'mobile', 'email'],
        identifier:'uuid', // IMPORTANT, needed to avoid console warnings!
        proxy: {
            type: 'localstorage',
            id  : 'photonetraClientsListKey'
        }
    }
});
