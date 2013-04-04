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
        if(record.data.item == "Clients") {
            if (!this.clientList) {
                this.clientList =  Ext.create('Photonetra.view.Clients');
            }
            var clientStore = Ext.getStore('clientStore');
            clientStore.load();
            this.clientList.items.get("clientListId").setStore(clientStore);
            this.getMain().push(this.clientList);
        }
    }
});
