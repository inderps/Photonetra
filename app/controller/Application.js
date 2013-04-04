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
            if (!this.contactList) {
                this.contactList =  Ext.create('Photonetra.view.Contacts');
            }
            var contactStore = Ext.getStore('contactStore');
            contactStore.load();
            this.contactList.items.get("contactListId").setStore(contactStore);
            this.getMain().push(this.contactList);
        }
    }
});
