//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Photonetra': 'app'
});
//</debug>

Ext.application({
    name: 'Photonetra',

    requires: [
        'Ext.MessageBox'
    ],

    controllers: ['Users', 'Application'],
    views: ['Login', 'Menu', 'Main', 'Contacts'],
    models: ['User', 'ContactOnline', 'ContactOffline'],
    stores: ['User', 'Contact'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
//        this.redirectTo('login'); ??not using routes for now becuase of it calling the method twice <BUG>
        this.getController("Users").renderLogin();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    getServiceHostUrl: function() {
        return "http://localhost:3000/"
    },

    setLoadedUser: function(user) {
        this.user = user;
    },

    getLoadedUser: function() {
      return this.user;
    }
});
