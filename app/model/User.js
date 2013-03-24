Ext.define('Photonetra.model.User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email', 'password'],
    authenticate: function(callback) {
        self = this;
        Ext.Ajax.request({
            url: 'http://localhost:3000/users/authenticate',
            method: 'POST',
            withCredentials: true,
            useDefaultXhrHeader: false,
            disableCaching: false,

            params: {
                email: this.data.email,
                password: this.data.password
            },

            success: function(response) {
                user = Ext.JSON.decode(response.responseText);
                self.data.id = user.id;
                self.data.name = user.name;
                callback(true);
            },

            failure: function(response) {
                callback(true);
            }
        });
    }
});
