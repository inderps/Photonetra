Ext.define('Photonetra.store.User', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'userStore',
        model: 'Photonetra.model.User'
    }
});