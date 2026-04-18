<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Setup Error</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .error-box {
            background: white;
            border-left: 4px solid #e74c3c;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 { color: #e74c3c; }
        .message { 
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            font-family: monospace;
            white-space: pre-wrap;
            word-break: break-all;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 15px;
        }
        .btn:hover { background: #2980b9; }
    </style>
</head>
<body>
    <div class="error-box">
        <h1>⚠️ Setup Failed</h1>
        <p>There was an error during the setup process.</p>
        
        @if(isset($message))
        <div class="message">{{ $message }}</div>
        @endif
        
        @if(isset($exception))
        <details>
            <summary style="cursor: pointer; color: #7f8c8d;">Show Details</summary>
            <div class="message">{{ $exception->getMessage() }}</div>
            <p><strong>File:</strong> {{ $exception->getFile() }}:{{ $exception->getLine() }}</p>
        </details>
        @endif
        
        <a href="/setup" class="btn">← Back to Setup</a>
        <a href="javascript:location.reload()" class="btn">🔄 Try Again</a>
    </div>
</body>
</html>
