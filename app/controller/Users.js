Ext.define('Photonetra.controller.Users', {
    extend: 'Ext.app.Controller',
    config: {
        before: {
            new: 'authenticate'
        },

        control: {
            loginButton: {
                tap: 'doLogin'
            }
        },

        refs: {
            loginPanel: 'panel[name=loginPanel]',
            loginButton: 'button[name=loginButton]',
            emailField: 'emailfield[name=email]',
            passwordField: 'passwordfield[name=password]'
        },

        routes: {
            'login': 'new'
        }
    },

    new: function() {
        Ext.Viewport.add(Ext.create('Photonetra.view.Login'));
    },

    init: function() {
    },

    authenticate: function(action) {
       action.resume();
    },

    doLogin: function() {
        Ext.Viewport.setMasked(true);
        Ext.Ajax.request({
            url: 'http://localhost:3000/users/authenticate',
            method: 'POST',
            withCredentials: true,
            useDefaultXhrHeader: false,
            disableCaching: false,

            params: {
                email: this.getEmailField()._value,
                password: this.getPasswordField()._value
            },

            success: function(response) {
                var user = Ext.create('Ext.data.Store', {
                    model: "Photonetra.model.User"
                });
                user.getProxy().clear();

                var responseUser = Ext.JSON.decode(response.responseText);
                var rec = {
                    id : responseUser.id,
                    name: responseUser.name
                };

                user.add(rec);
                user.sync();
                Ext.Viewport.setMasked(false);
            },

            failure: function(response) {
                Ext.Viewport.setMasked(false);
            }
        });
//        Photonetra.app.redirectTo('login');
    }
});