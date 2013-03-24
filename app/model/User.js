Ext.define('Photonetra.model.User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email', 'password'],
    identifier:'uuid', // IMPORTANT, needed to avoid console warnings!
    proxy: {
        type: 'localstorage',
        id  : 'user'
    }
});
