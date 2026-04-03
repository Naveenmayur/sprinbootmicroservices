FROM eclipse-temurin:17

LABEL maintainer="Naveen"

WORKDIR /app

COPY target/employee-service-0.0.1-SNAPSHOT.jar /app/employee-service.jar
EXPOSE 8086
ENTRYPOINT ["java", "-jar", "employee-service.jar"]


# To build the Docker image, run the following command in the terminal:
# docker build -t employee-service: .

# To create a Docker network, run the following command in the terminal:
# docker network create springboot-postgres-net
#docker run --name postgresdb --network springboot-postgres-net -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=root -e POSTGRES_DB=employeedb -d postgres

# To run the Docker container, run the following command in the terminal:
#docker run --network springboot-postgres-net --name employee-psql-container -p 8086:8086 -e SPRING_DATASOURCE_URL=jdbc:postgresql://postgresdb:5432/employeedb -e SPRING_DATASOURCE_USERNAME=postgres -e SPRING_DATASOURCE_PASSWORD=root -d employee-service