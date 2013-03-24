Ext.define('Photonetra.controller.Users', {
    extend: 'Ext.app.Controller',
    config: {
        before: {
            renderLogin: 'authenticate'
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
            'login': 'renderLogin'
        }
    },

    renderLogin: function() {
        if(!this.loginPanel){
            this.loginPanel = Ext.create('Photonetra.view.Login');
        }
        Ext.Viewport.add(this.loginPanel);
        this.authenticate(); //right now not using routes, so before function is not working for now
    },

    init: function() {
    },

    authenticate: function(action) {
//        var user = Ext.create('Ext.data.Store', {
//            model: "Photonetra.model.User"
//        });
//        user.load();
//        console.log(user);
//       action.resume();
    },

    doLogin: function() {
        Ext.Viewport.setMasked(true);
        var user = Ext.create('Ext.data.Store', {
            model: "Photonetra.model.User"
        });
        user.getProxy().clear();
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
                    id : responseUser.id,
                    name: responseUser.name
                };
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