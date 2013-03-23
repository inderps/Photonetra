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
            loginButton: 'button[name=loginButton]',
            usernameField: 'emailfield[name=loginButton]',
            passwordField: 'passwordfield[name=loginButton]',
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
        console.log("Login")
    }
});