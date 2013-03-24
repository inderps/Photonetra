Ext.define('Photonetra.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
        'Photonetra.view.Menu'
    ],

    config: {
        autoDestroy: false,

//        navigationBar: {
//            ui: 'sencha',
//            items: [
//                {
//                    xtype: 'button',
//                    id: 'editButton',
//                    text: 'Edit',
//                    align: 'right',
//                    hidden: true,
//                    hideAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeOut',
//                        duration: 200
//                    },
//                    showAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeIn',
//                        duration: 200
//                    }
//                },
//                {
//                    xtype: 'button',
//                    id: 'saveButton',
//                    text: 'Save',
//                    ui: 'sencha',
//                    align: 'right',
//                    hidden: true,
//                    hideAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeOut',
//                        duration: 200
//                    },
//                    showAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeIn',
//                        duration: 200
//                    }
//                }
//            ]
//        },

        items: [
            { xtype: 'homeMenuList' }
        ]
    }
});
