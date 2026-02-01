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

