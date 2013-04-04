Ext.define('Photonetra.store.Contact', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'contactStore',
        model: 'Photonetra.model.ContactOnline',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
        proxy: {
            timeout: 3000,
            type: 'ajax'
        }
    }
});