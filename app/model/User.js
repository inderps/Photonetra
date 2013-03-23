Ext.define('Photonetra.model.User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email', 'password'],
    authenticate: function() {
        isValid = false;
        user = null;
        Ext.Ajax.request({
            url: 'http://localhost:3000/users/authenticate',
            method: 'POST',
            withCredentials: true,
            useDefaultXhrHeader: false,
            disableCaching: false,
            async:false,

            params: {
                email: this.data.email,
                password: this.data.password
            },

            success: function(response) {
                user = Ext.JSON.decode(response.responseText);
                isValid = true;
            },

            failure: function(response) {
                isValid = false;
            }
        });

        if(isValid == true) {
            this.data.id = user.id;
            this.data.name = user.name;
            return true;
        }
        return false;
    }
});
