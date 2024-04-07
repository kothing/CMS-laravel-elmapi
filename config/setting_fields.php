<?php

return [
    'app' => [
        'title' => 'General',
        'desc' => 'All the general settings for application.',
        'icon' => 'fas fa-cube',
        'elements' => [
            [
                'type' => 'text', // input fields type
                'data' => 'string', // data type, string, int, boolean
                'name' => 'app_name', // unique name for field
                'label' => 'App Name', // you know what label it is
                'rules' => 'required|min:2|max:50', // validation rule of laravel
                'class' => '', // any class for input
                'value' => 'Laravel Costar', // default value if you want
            ],
            [
                'type' => 'text', // input fields type
                'data' => 'string', // data type, string, int, boolean
                'name' => 'footer_text', // unique name for field
                'label' => 'Footer Text', // you know what label it is
                'rules' => '', // validation rule of laravel
                'class' => '', // any class for input
                'value' => 'Built with ♥ from Laravel', // default value if you want
            ],
            [
                'type' => 'radio', // input fields type
                'data' => 'text', // data type, string, int, boolean
                'name' => 'show_copyright', // unique name for field
                'label' => 'Show Copyright', // you know what label it is
                'rules' => '', // validation rule of laravel
                'class' => '', // any class for input
                'value' => '1', // default value if you want
                'options' => [
                    0 => 'Show',
                    1 => 'Hidden'
                ]
            ],
        ],
    ],
    'meta' => [
        'title' => 'Meta ',
        'desc' => 'Application Meta Data',
        'icon' => 'fa-solid fa-earth-asia',
        'elements' => [
            [
                'type' => 'text', // input fields type
                'data' => 'text', // data type, string, int, boolean
                'name' => 'meta_site_name', // unique name for field
                'label' => 'Meta Site Name', // you know what label it is
                'rules' => '', // validation rule of laravel
                'class' => '', // any class for input
                'value' => 'Laravel Costar', // default value if you want
            ],
            [
                'type' => 'text', // input fields type
                'data' => 'text', // data type, string, int, boolean
                'name' => 'meta_description', // unique name for field
                'label' => 'Meta Description', // you know what label it is
                'rules' => '', // validation rule of laravel
                'class' => '', // any class for input
                'value' => 'A simple starter CMS based on Laravel 10.x', // default value if you want
            ],
            [
                'type' => 'text', // input fields type
                'data' => 'text', // data type, string, int, boolean
                'name' => 'meta_keyword', // unique name for field
                'label' => 'Meta Keyword', // you know what label it is
                'rules' => '', // validation rule of laravel
                'class' => '', // any class for input
                'value' => 'Web Application, web app, Laravel, Laravel Costar, Bootstrap, Admin, Template, Open Source', // default value if you want
            ],
            [
                'type' => 'text', // input fields type
                'data' => 'text', // data type, string, int, boolean
                'name' => 'meta_image', // unique name for field
                'label' => 'Meta Image', // you know what label it is
                'rules' => '', // validation rule of laravel
                'class' => '', // any class for input
                'value' => 'images/meta-image.png', // default value if you want
            ],
        ],
    ],
    'email' => [
        'title' => 'Email',
        'desc' => 'Email settings for app',
        'icon' => 'fas fa-envelope',
        'elements' => [
            [
                'type' => 'email', // input fields type
                'data' => 'string', // data type, string, int, boolean
                'name' => 'email', // unique name for field
                'label' => 'Email', // you know what label it is
                'rules' => '', // validation rule of laravel
                'class' => '', // any class for input
                'value' => '', // default value if you want
            ],
        ],
    ],
];
