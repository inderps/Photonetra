Ext.define('Photonetra.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            homeMenuList: 'homeMenuList'
        },

        control: {
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            homeMenuList: {
                itemtap: 'onMenuSelect'
            },
            contactsList: {
                itemtap: 'onAllContactSelect'
            }
        },

        routes: {
            'home': 'index'
        }
    },

    isLoggedIn: function() {
        return false;
    },

    index: function() {
        var userStore = Ext.getStore('userStore');
        userStore.load();
        this.loggedInUser = userStore.data.all[0].data;
        var mainPanel = Ext.create('Photonetra.view.Main');
        Ext.Viewport.add(mainPanel);
        Ext.Viewport.setActiveItem(mainPanel);
    },

    onMainPush: function(view, item) {

    },

    onMainPop: function(view, item) {
    },

    onMenuSelect: function(list, index, node, record) {
        if(record.data.item == "Contacts") {
            if (!this.contactsPanel) {
                this.contactsPanel =  Ext.create('Photonetra.view.Contacts');
            }
            var contactStore = Ext.getStore('contactStore');
            contactStore._proxy.setUrl(Photonetra.app.getServiceHostUrl() + 'users/' + Photonetra.app.getLoadedUser().user_id + '/contacts');
            contactStore.load();
            this.contactsPanel.items.get("contactListId").setStore(contactStore);
            this.getMain().push(this.contactsPanel);
        }
    },

    onAllContactSelect: function(list, index, node, record) {
        console.log(record.data.id)
    }
});
