# Flask Application

A simple Flask web application with basic routes, templates, and static files.

## Features

- Home and About pages
- REST API endpoint
- Error handling (404, 500)
- Static files (CSS, JavaScript)
- Template rendering

## Setup

1. Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file (optional):
```bash
cp .env.example .env
```

4. Run the application:
```bash
python app.py
```

The application will be available at `http://localhost:5000`

## Project Structure

```
.
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── .env.example          # Environment variables template
├── templates/            # HTML templates
│   ├── index.html
│   ├── about.html
│   ├── 404.html
│   └── 500.html
└── static/              # Static files
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## API Endpoints

- `GET /` - Home page
- `GET /about` - About page
- `GET /api/hello?name=<name>` - Sample API endpoint

## Development

To run in development mode with auto-reload:
```bash
export FLASK_ENV=development
export FLASK_DEBUG=True
python app.py
```
