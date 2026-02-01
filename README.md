Below is a **clean, structured, copy-paste–ready documentation** you can directly use as a **README.md** for your Azure container workflow 👌
(I’ve kept it practical, DevOps-style, and stage-wise.)

---

# ☁️ Azure Containerized Web Application – End-to-End Flow

## 🧰 Tools & Services Used

* **Azure CLI**
* **VS Code** (GitHub, GitHub Copilot, Copilot Chat)
* **Git**
* **Docker**
* **Azure Container Registry (ACR)**
* **Azure Container Instances (ACI)**
* **Optional Kubernetes**: Minikube / AKS
* **Load Balancer** (future stage)

---

## 🔁 Application Delivery Flow

```
Web Application
   ↓
Local Development
   ↓
Dockerfile
   ↓
Docker Image
   ↓
Push Image (ACR / Docker Hub)
   ↓
Container Runtime (ACI / Kubernetes)
   ↓
Load Balancer (Public Access)
```

---

## 🧪 Stage 1 – Development (DEV)

### 1️⃣ Open PowerShell

### 2️⃣ Setup VS Code

* Install **VS Code**
* Extensions:

  * GitHub
  * GitHub Copilot
  * GitHub Copilot Chat

---

### 3️⃣ Create Project Workspace

```bash
mkdir azureproject
cd azureproject
code .
```

---

### 4️⃣ Verify Tools

```bash
git --version
az --version
```

Login to Azure:

```bash
az login
```

---

### 5️⃣ Create Web Application

Choose **any one stack**:

* Python (Flask)
* Node.js
* React
* Java
* Go
* .NET

Example: **Python Flask App**

* Install dependencies
* Run locally
* Test on port `5000`

📌 Ensure:

* App runs successfully
* Port is known
* App is production-ready

---

### 6️⃣ Create `README.md`

Document:

* App overview
* How to run locally
* Port details
* Future deployment steps

---

## 📦 Stage 2 – Containerization

### 1️⃣ Create `Dockerfile`

* Base image
* Copy app
* Install dependencies
* Expose port
* Start application

---

## 🐳 Docker Hub – Image Build & Push

### 1️⃣ Login to Docker Hub

```bash
sudo docker login
```

---

### 2️⃣ Build Multi-Architecture Image

```bash
sudo docker buildx build \
--platform linux/amd64,linux/arm64 \
-t docker.io/atuljkamble/azureproject \
--load .
```

---

### 3️⃣ Verify Image

```bash
sudo docker images
```

---

### 4️⃣ Run Container Locally

```bash
sudo docker run -d -p 5000:5000 docker.io/atuljkamble/azureproject
```

Check running containers:

```bash
sudo docker container ls
```

---

### 5️⃣ Push Image to Docker Hub

```bash
sudo docker push docker.io/atuljkamble/azureproject
```

Test pull:

```bash
docker pull atuljkamble/azureproject
```

---

## ☁️ Azure Container Registry (ACR)

### 1️⃣ Login to ACR

```bash
docker login atulkamble.azurecr.io
```

**Username:** `atulkamble`
**Password:** ACR Access Token

---

### 2️⃣ Build Image for ACR

```bash
sudo docker buildx build \
--platform linux/amd64,linux/arm64 \
-t atulkamble.azurecr.io/azureproject:v1 \
--load .
```

---

### 3️⃣ Push Image to ACR

```bash
sudo docker push atulkamble.azurecr.io/azureproject:v1
```

Image reference:

```
atulkamble.azurecr.io/azureproject:v1
```

---

## 🚀 Azure Container Instances (ACI)

### Configuration

* **Image Source:** Azure Container Registry
* **Image Name:** `azureproject:v1`
* **Port:** `5000`
* **OS Type:** Linux
* **Public IP:** Enabled

---

### Access Application

Once container is running, copy the **Public IP**.

Example:

```
http://20.29.128.166:5000/
```

✅ Application is now live on Azure!

---

## 🔜 Next Stages (Optional / Advanced)

* Kubernetes Deployment (Minikube / AKS)
* Azure Load Balancer / Ingress
* CI/CD using GitHub Actions
* Azure Monitor & Log Analytics
* Secure ACR with Managed Identity

---

If you want, next I can:

* Convert this into **enterprise-grade README**
* Add **Dockerfile + Flask sample code**
* Extend flow to **AKS with Terraform**
* Add **CI/CD pipeline (GitHub Actions)** 🚀


# Flask Application

A modern Flask web application with RESTful API, responsive UI, and comprehensive error handling.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This is a production-ready Flask web application built with Python 3.9+. It demonstrates best practices for Flask development including:
- MVC architecture pattern
- RESTful API design
- Template rendering with Jinja2
- Static file management
- Error handling and logging
- Environment-based configuration

## ✨ Features

- **Web Pages**
  - 📱 Responsive home page with interactive API demo
  - ℹ️ About page with application information
  - 🎨 Modern CSS styling with smooth transitions
  
- **REST API**
  - 🔌 RESTful endpoint with JSON responses
  - ✅ Input validation and error handling
  - 📊 Structured response format

- **Error Handling**
  - 🚫 Custom 404 (Not Found) page
  - ⚠️ Custom 500 (Internal Server Error) page
  - 🔍 Detailed error logging

- **Frontend**
  - 💻 Modern JavaScript (async/await)
  - 🎨 Clean CSS with flexbox layout
  - 📲 Mobile-friendly responsive design
  - ⌨️ Keyboard navigation support

- **Security & Best Practices**
  - 🔐 Secret key configuration
  - 🌍 Environment variable support
  - 📝 .gitignore for sensitive files
  - 🛡️ CORS-ready architecture

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Python**: 3.9 or higher
  ```bash
  python3 --version
  ```

- **pip**: Latest version
  ```bash
  pip3 --version
  ```

- **Virtual Environment**: (Recommended)
  - Included with Python 3.3+

## 🚀 Installation

### 1. Clone the Repository

```bash
cd /Users/atul/Downloads/azureproject
```

### 2. Create Virtual Environment

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

**Windows:**
```cmd
python -m venv venv
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

**Installed Packages:**
- `Flask==3.0.3` - Web framework
- `Werkzeug==3.1.3` - WSGI utility library (compatible with Azure Functions)
- `python-dotenv==1.0.0` - Environment variable management

### 4. Verify Installation

```bash
pip list
```

## ⚙️ Configuration

### Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your settings:
   ```env
   SECRET_KEY=your-random-secret-key-here
   FLASK_ENV=development
   FLASK_DEBUG=True
   ```

3. Generate a secure secret key:
   ```python
   python -c "import secrets; print(secrets.token_hex(32))"
   ```

### Application Settings

Edit `app.py` to customize:
- **Port**: Change `port=5000` to your preferred port
- **Host**: Modify `host='0.0.0.0'` for network access
- **Debug Mode**: Set `debug=False` for production

## 🏃 Running the Application

### Development Mode

```bash
python app.py
```

The application will start at:
- **Local**: http://localhost:5000
- **Network**: http://0.0.0.0:5000

You should see:
```
 * Serving Flask app 'app'
 * Debug mode: on
 * Running on http://0.0.0.0:5000
```

### Production Mode

```bash
export FLASK_ENV=production
export FLASK_DEBUG=False
python app.py
```

Or use a production WSGI server:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 📁 Project Structure

```
azureproject/
├── .github/                 # GitHub Actions workflows
├── app.py                   # Main Flask application
├── requirements.txt         # Python dependencies
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── README.md               # This file
│
├── templates/              # Jinja2 HTML templates
│   ├── index.html         # Home page
│   ├── about.html         # About page
│   ├── 404.html           # Not found error page
│   └── 500.html           # Server error page
│
└── static/                # Static assets
    ├── css/
    │   └── style.css      # Application styles
    └── js/
        └── main.js        # Frontend JavaScript
```

## 📡 API Documentation

### Endpoints

#### 1. Home Page
```http
GET /
```
**Response:** HTML page

#### 2. About Page
```http
GET /about
```
**Response:** HTML page

#### 3. Hello API
```http
GET /api/hello?name={name}
```

**Parameters:**
- `name` (optional): Name to greet. Default: "World"

**Example Request:**
```bash
curl "http://localhost:5000/api/hello?name=John"
```

**Example Response:**
```json
{
  "message": "Hello, John!",
  "status": "success"
}
```

**Status Codes:**
- `200` - Success
- `404` - Endpoint not found
- `500` - Server error

## 🔧 Development

### Code Style

Follow PEP 8 guidelines for Python code:
```bash
pip install flake8
flake8 app.py
```

### Testing

Run the application in debug mode to enable auto-reload:
```bash
export FLASK_DEBUG=True
python app.py
```

Changes to Python files will automatically restart the server.

### Adding New Routes

1. Define route in `app.py`:
   ```python
   @app.route('/new-page')
   def new_page():
       return render_template('new_page.html')
   ```

2. Create template in `templates/new_page.html`

3. Add navigation link in templates

### Adding API Endpoints

```python
@app.route('/api/endpoint', methods=['GET', 'POST'])
def api_endpoint():
    if request.method == 'POST':
        data = request.get_json()
        # Process data
        return jsonify({'result': 'success'})
    return jsonify({'message': 'GET request'})
```

## 🚀 Deployment

### Deploy to Azure Web Apps

1. **Install Azure CLI:**
   ```bash
   brew install azure-cli  # macOS
   ```

2. **Login to Azure:**
   ```bash
   az login
   ```

3. **Create Web App:**
   ```bash
   az webapp up --name your-app-name --resource-group your-rg --runtime "PYTHON:3.11"
   ```

### Deploy to Heroku

1. **Create Procfile:**
   ```
   web: gunicorn app:app
   ```

2. **Deploy:**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Deploy with Docker

1. **Create Dockerfile:**
   ```dockerfile
   FROM python:3.11-slim
   WORKDIR /app
   COPY requirements.txt .
   RUN pip install -r requirements.txt
   COPY . .
   EXPOSE 5000
   CMD ["python", "app.py"]
   ```

2. **Build and Run:**
   ```bash
   docker build -t flask-app .
   docker run -p 5000:5000 flask-app
   ```

## 🔍 Troubleshooting

### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

### Module Not Found Error
```bash
# Ensure virtual environment is activated
source venv/bin/activate

# Reinstall dependencies
pip install -r requirements.txt
```

### Template Not Found
- Verify `templates/` directory exists
- Check template file names match route handlers
- Ensure proper capitalization

### Azure Functions Compatibility Issue
If you see Werkzeug version conflicts:
```bash
pip install Werkzeug==3.1.3
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For issues or questions:
- Create an issue in the repository
- Check existing documentation
- Review Flask documentation: https://flask.palletsprojects.com/

---

**Created:** February 2026  
**Python Version:** 3.9+  
**Flask Version:** 3.0.3
