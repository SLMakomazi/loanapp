# Loan Application Web Portal

A web-based loan application portal built with Spring Boot and React, featuring CI/CD and DevOps practices.

## Features

- User Authentication (Login/Register)
- Loan Application Submission
- Admin Dashboard for Loan Approval
- CI/CD Pipeline with GitHub Actions
- GitOps with Argo CD
- Automated Testing with Selenium
- Feature Flags
- Performance Testing
- Security Best Practices

## Tech Stack

- Frontend: React.js
- Backend: Spring Boot
- Database: MySQL
- DevOps: GitHub Actions, Argo CD, Docker, Selenium, k6

## Project Structure

```
loanapp/
├── backend/              # Spring Boot application
├── frontend/             # React application
├── k8s/                  # Kubernetes manifests
├── .github/              # GitHub Actions workflows
│   └── workflows/
├── tests/                # Test files
│   └── selenium/         # Selenium test scripts
└── README.md
```

## Getting Started

### Prerequisites

- Java 17+
- Node.js 18+
- MySQL 8+
- Docker
- Kubernetes (for deployment)

### Installation

1. Clone the repository
2. Set up the database
3. Configure environment variables
4. Build and run the applications

## Development

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

## Testing

### Manual Testing

1. User can register and login
2. User can submit loan applications
3. Admin can view and approve/reject loans

### Automated Testing

```bash
# Run Selenium tests
npm test

# Run performance tests
k6 run tests/performance/test.js
```
