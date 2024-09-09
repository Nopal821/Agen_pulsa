<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Agen Pulsa')</title>
    <!-- Include Tailwind CSS -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- Include other CSS if needed -->
</head>
<body>
    <header>
        <!-- Navigation or header content -->
        <nav>
            <ul>
                <li><a href="{{ route('home') }}">Home</a></li>
                <li><a href="{{ route('prabayar.index') }}">Prabayar</a></li>
                <li><a href="{{ route('operator.index') }}">Operator</a></li>
                <!-- Add more navigation items as needed -->
            </ul>
        </nav>
    </header>
    <main>
        @yield('content')
    </main>
    <footer>
        <!-- Footer content -->
        <p>&copy; {{ date('Y') }} Agen Pulsa. All rights reserved.</p>
    </footer>
    <!-- Include JavaScript files if needed -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
