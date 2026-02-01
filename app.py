from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-here'


@app.route('/')
def home():
    """Home page route"""
    return render_template('index.html')


@app.route('/api/hello', methods=['GET'])
def hello():
    """Sample API endpoint"""
    name = request.args.get('name', 'World')
    return jsonify({
        'message': f'Hello, {name}!',
        'status': 'success'
    })


@app.route('/about')
def about():
    """About page route"""
    return render_template('about.html')


@app.errorhandler(404)
def page_not_found(e):
    """Handle 404 errors"""
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_error(e):
    """Handle 500 errors"""
    return render_template('500.html'), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
