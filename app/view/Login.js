//Ext.define('Ext.form.Panel', {
//    fullscreen: true,
//    items: [{
//        xtype: 'fieldset',
//        items: [
//            {
//                xtype: 'textfield',
//                name : 'name',
//                label: 'Name'
//            },
//            {
//                xtype: 'emailfield',
//                name : 'email',
//                label: 'Email'
//            },
//            {
//                xtype: 'passwordfield',
//                name : 'password',
//                label: 'Password'
//            }
//        ]
//    }]
//});
Ext.define('Photonetra.view.Login', {
    extend: 'Ext.Panel',
    config: {
        fullscreen: true,
        xtype: 'login',
        height: '100%',
        layout: {
            type: 'vbox',
            align: 'start',
            pack: 'start'
        },

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Photonetra'
            },
            {
                docked: 'top',
                xtype: 'panel',
//                height: '10%',
                items: [
                    {
                        xtype: 'label',
                        html: 'Sign In',
//                        height: '100%',
                        padding: 20,
                        centered: true
                    }
                ]
            },
            {
                docked: 'top',
                xtype: 'panel',
//                height: '40%',
                padding: 20,
                items: [
                    {
                        xtype: 'fieldset',
//                        height: '100%',
                        layout: { pack: 'center' },
                        items: [
                            {
                                xtype: 'emailfield',
                                name : 'email',
                                placeHolder: 'Enter your email',
//                                height: '50%'
                            },
                            {
                                xtype: 'passwordfield',
                                name : 'password',
                                placeHolder: 'Enter your password',
//                                height: '50%'
                            }
                        ]
                    }
                ]
            },
            {
                docked: 'top',
                xtype: 'panel',
//                height: '20%',
                padding: 20,
                items: [
                    {
                        xtype: 'button',
                        name : 'loginButton',
                        text: 'Login',
//                        height: '100%'
                    }
                ]
            }
        ]
    }
});
