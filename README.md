# 🚀 DevOps Project - Containerized React Application

![CI/CD Pipeline](https://github.com/JeetRatanpara28/devops-project/actions/workflows/ci-cd.yml/badge.svg)

A full-stack DevOps demonstration project featuring React frontend with Docker containerization and automated CI/CD pipeline.

## ✨ Features

- ⚛️ React 18 frontend application
- 🐳 Docker containerization with multi-stage builds
- ⚙️ **Automated CI/CD pipeline with GitHub Actions**
- 🧪 **Automated testing on every push**
- 🌐 Nginx web server for production
- 📦 Optimized production build

## 🔄 CI/CD Pipeline

The project includes an automated CI/CD pipeline that:
- ✅ Runs tests on every push
- ✅ Builds the application
- ✅ Creates Docker image
- ✅ Tests the Docker container
- ✅ Provides build status

### Pipeline Jobs:
1. **Build & Test** - Install dependencies, run tests, build app
2. **Docker Build** - Build and test Docker image
3. **Code Quality** - Check code quality

## 🛠️ Technologies

- **Frontend:** React, JavaScript, CSS
- **Containerization:** Docker, Docker Compose
- **CI/CD:** GitHub Actions
- **Web Server:** Nginx
- **Version Control:** Git, GitHub

## 🚀 Quick Start

### Run Locally
```bash
npm install
npm start
# Visit http://localhost:3000
```

### Run with Docker
```bash
# Build image
docker build -t devops-app .

# Run container
docker run -d -p 8080:80 --name devops-app devops-app

# Visit http://localhost:8080
```

### Using Docker Compose
```bash
docker-compose up -d
# Visit http://localhost:8080
```

## 📁 Project Structure
```
devops-project/
├── .github/
│   └── workflows/
│       └── ci-cd.yml        # CI/CD Pipeline
├── public/                  # Static files
├── src/                     # React source code
├── Dockerfile               # Docker build configuration
├── docker-compose.yml       # Docker Compose setup
├── package.json             # Dependencies
└── README.md               # Documentation
```

## 🎯 DevOps Practices

✅ **Version Control** - Git workflow with GitHub  
✅ **Containerization** - Docker multi-stage builds  
✅ **CI/CD Pipeline** - Automated testing and building  
✅ **Automated Testing** - Tests run on every commit  
✅ **Production Ready** - Optimized Nginx deployment  
✅ **Infrastructure as Code** - Dockerfile & docker-compose.yml  

## 🔄 Workflow

1. Developer pushes code to GitHub
2. GitHub Actions automatically triggers
3. Pipeline runs tests
4. Pipeline builds application
5. Pipeline creates Docker image
6. Pipeline tests the container
7. All status visible in GitHub Actions tab

## 👨‍💻 Author

**Jeet Ratanpara**
- GitHub: [@JeetRatanpara28](https://github.com/JeetRatanpara28)

## 📄 License

MIT License - feel free to use this project for learning!

---

**Built with ❤️ using React, Docker, and GitHub Actions**

## 🌐 Live Demo

**Live Site:** https://devops-project-mbxv990la-jeets-projects-7aaae00e.vercel.app

Deployed on Vercel with automatic deployments from GitHub!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JeetRatanpara28/devops-project)
