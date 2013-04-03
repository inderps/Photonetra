Ext.define('Photonetra.store.Client', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'clientStore',
        model: 'Photonetra.model.ClientOnline',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
        proxy: {
            timeout: 3000,
            type: 'ajax',
            url: 'http://localhost:3000/users/1/contacts'
        }
    }
});