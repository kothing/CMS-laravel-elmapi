<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="APP_URL" content="{{ env('APP_NAME') }}">

        <!-- <title>{{ env("APP_NAME") }}</title> -->
        <title>{{ config('app.name', 'AineCMS') }}</title>

        <link rel="icon" type="image/svg+xml" href="{{ config('app.url') . '/images/favicon.svg'}}">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>

    <body>
        <div id="app" v-cloak>
            <div class="flex flex-col justify-center text-center my-5">
                <img class="w-12 w-12 mx-auto" src="{{ config('app.url') . '/images/logo-64x64-dark.svg'}}">
                <p class="mt-4">「{{ config('app.name', 'AineCMS') }}」 frontend page</p>
            </div>
        </div>
    </body>
</html>