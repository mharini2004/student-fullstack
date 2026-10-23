\# Student Full Stack Application



A full-stack student management application built with Spring Boot, React, and MySQL.



\## Project Structure



\- `backend/` — Spring Boot REST API

\- `frontend/` — React application built with Vite



\## Prerequisites



\- Java 21

\- Maven (or the included Maven wrapper)

\- Node.js and npm

\- MySQL



\## Run the Backend



1\. Create a MySQL database for the application.

2\. Configure your local database settings in `backend/src/main/resources/application.properties`.

3\. Open a terminal in the `backend` folder.

4\. Run:



&#x20;  ```bash

&#x20;  .\\mvnw.cmd spring-boot:run

&#x20;  ```



&#x20;  On macOS/Linux, use `./mvnw spring-boot:run`.



5\. The backend should start on the port configured in `application.properties` (commonly `8080`).



Use `backend/src/main/resources/application-example.properties` as a configuration reference. Replace its placeholders with your own local settings; never commit real passwords.



\## Run the Frontend



1\. Open a separate terminal in the `frontend` folder.

2\. Install dependencies:



&#x20;  ```bash

&#x20;  npm install

&#x20;  ```



3\. Start the development server:



&#x20;  ```bash

&#x20;  npm run dev

&#x20;  ```



4\. Open the local URL displayed in the terminal, usually `http://localhost:5173`.



\## Features



\- View students

\- Add students

\- Delete students

\- Search students

\- Validate student input



\## Security



Real database credentials and environment files are excluded from Git. Configure your own local settings before running the application.

