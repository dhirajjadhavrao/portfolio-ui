# 🚀 Portfolio Backend Service

Enterprise backend service for Dhiraj Jadhavrao's Developer Portfolio Platform.

## 🛠️ Tech Stack
- **Language:** Java 21
- **Framework:** Spring Boot 3.3.5 / Spring Web / Spring Actuator
- **Database (Planned):** PostgreSQL / H2
- **Build Tool:** Maven

## 📋 Planned REST API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/contact` | Submits an inbound inquiry message with validation & email alerting |
| `GET` | `/api/v1/profile` | Serves dynamic profile metadata, skills, and projects |
| `GET` | `/api/v1/health` | Spring Actuator health and liveness probe |

## 🚀 Running Locally
```bash
mvn clean spring-boot:run
```
