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
        var user =
            Ext.create('Photonetra.model.User', {
                email: this.getEmailField()._value,
                password: this.getPasswordField()._value
            });
        Ext.Viewport.setMasked(true);
        user.authenticate(function(isValid) {
            Ext.Viewport.setMasked(false);
            //        console.log(user);
        });
    }
});