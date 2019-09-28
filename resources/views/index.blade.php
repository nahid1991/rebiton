<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
    />
    <title>rebiton</title>
</head>

<body>
    <input type="hidden" id="locale" value="{{Illuminate\Support\Facades\App::getLocale()}}">
    <div id="root"></div>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    @if(env('APP_ENV') === 'local')
        <script src="http://localhost:3000/js/app.js"></script>
    @else
        <script src="/js/app.js"></script>
    @endif
</body>

</html>
