<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple JavaScript Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f0f0f0;
        }
        button {
            padding: 10px 15px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Welcome to My JavaScript Page</h1>
    <p id="message">Click the button to see a greeting!</p>
    <button onclick="showGreeting()">Click Me!</button>

    <script>
        function showGreeting() {
            document.getElementById('message').textContent = 'Hello, World! Welcome to JavaScript!';
        }
    </script>
</body>
</html>