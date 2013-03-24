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
        var mainPanel = Ext.create('Photonetra.view.Main');
        Ext.Viewport.add(mainPanel);
        Ext.Viewport.setActiveItem(mainPanel);
    },

    onMainPush: function(view, item) {
    },

    onMainPop: function(view, item) {
    },

    onMenuSelect: function(list, index, node, record) {
//
//        if (!this.showContact) {
//            this.showContact = Ext.create('AddressBook.view.contact.Show');
//        }
//
//        // Bind the record onto the show contact view
//        this.showContact.setRecord(record);

        // Push the show contact view into the navigation view
//        this.getMain().push(this.showContact);
    }
});
