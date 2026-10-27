# Q20 – Deployment Overview

## 1. Build and Run Locally

The React frontend is built using `npm run build` and tested using `npm run preview`. The production build files are generated in the `dist` folder.

The Spring Boot backend is packaged using `mvn clean package` (or `.\mvnw.cmd clean package` on Windows). The generated JAR is executed using `java -jar`. The backend runs on port `8080`, and the API is tested using Postman.

## 2. Deployment Plan

- **Frontend:** Host the React + Vite application on a static hosting platform such as Vercel or Netlify.
- **Backend:** Host the Spring Boot JAR on a Java-compatible hosting service or cloud virtual machine.
- **MySQL database:** Use a managed MySQL database service. Configure the backend to connect to it using its database URL and credentials.

## 3. Environment Variables

The following environment variables must be configured on the backend hosting service:

- `SPRING_DATASOURCE_URL` – MySQL JDBC connection URL.
- `SPRING_DATASOURCE_USERNAME` – MySQL username.
- `SPRING_DATASOURCE_PASSWORD` – MySQL password.

The frontend build must use:

- `VITE_API_URL` – Base URL of the deployed backend API, ending in `/api`.

Secrets must be stored in the hosting platform's environment settings and must not be committed to GitHub.

## 4. Production Configuration Changes

- **CORS:** Update the backend CORS configuration to allow requests from the deployed frontend's exact HTTPS origin instead of only local development origins.
- **React API URL:** Set `VITE_API_URL` to the deployed backend address followed by `/api`, then rebuild the frontend.
- **Database:** Use the production MySQL connection details through environment variables rather than hard-coded credentials.

## 5. Verification

After deployment, open the public frontend URL and verify that the dashboard loads. Test the deployed `GET /api/students` endpoint and confirm that student records are returned successfully.

The application has been built and tested locally. Public deployment will be completed after the hosting services and production environment variables are configured.