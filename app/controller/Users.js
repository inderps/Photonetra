Ext.define('Photonetra.controller.Users', {
    extend: 'Ext.app.Controller',
    config: {
//        before: {
//            renderLogin: 'authenticate'
//        },

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
            'login': 'renderLogin'
        }
    },

    renderLogin: function() {
        if(this.isLoggedIn()) {//right now not using routes, so before function is not working for now
            Photonetra.app.getController("Application").index();
        }
        else {
            Ext.Viewport.add(Ext.create('Photonetra.view.Login'));
        }
    },

    init: function() {
    },

    isLoggedIn: function(action) {
        var user = Ext.getStore('userStore');
        user.load();
        return user.getCount() != 0;
//       action.resume();
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
                var responseUser = Ext.JSON.decode(response.responseText);
                var rec = {
                    user_id : responseUser.id,
                    name: responseUser.name
                };
                var user = Ext.getStore('userStore');
                user.getProxy().clear();
                user.add(rec);
                user.sync();
                Ext.Viewport.setMasked(false);
                Photonetra.app.getController("Application").index();
            },

            failure: function(response) {
                Ext.Viewport.setMasked(false);
            }
        });
    }
});