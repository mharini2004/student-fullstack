\# Backend Setup



\## Database Configuration



1\. Install and start MySQL.

2\. Create the database required by the application.

3\. Configure the database URL, username, and password in `src/main/resources/application.properties`.

4\. Use `src/main/resources/application-example.properties` as a reference for the required configuration keys.



\## Security



\- Keep real database credentials in the local `application.properties` file.

\- Do not commit passwords, API keys, or other secrets.

\- The real configuration file is excluded through `.gitignore`.

\- Share only example configuration files containing placeholders.



\## Run the Application



From the backend directory, run:



```bash

.\\mvnw.cmd spring-boot:run

```



Ensure MySQL is running and the local database settings are correct before starting the application.

