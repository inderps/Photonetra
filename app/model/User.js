Ext.define('Photonetra.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['user_id', 'name', 'email', 'password'],
        identifier:'uuid', // IMPORTANT, needed to avoid console warnings!
        proxy: {
            type: 'localstorage',
            id  : 'photonetraLoggedInUserKey'
        }
    }
});
