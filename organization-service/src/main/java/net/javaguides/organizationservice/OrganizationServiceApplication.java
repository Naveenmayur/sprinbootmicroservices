package net.javaguides.organizationservice;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(
		info = @io.swagger.v3.oas.annotations.info.Info(
				title = "Organization Service API",
				version = "1.0",
				description = "API for managing organizations",
				contact = @io.swagger.v3.oas.annotations.info.Contact(
						name = "John Doe",
						email = "john@doe.com",
						url = "https://www.javaguides.net"
				),
				license = @io.swagger.v3.oas.annotations.info.License(
						name = "Apache 2.0",
						url = "https://www.apache.org/licenses/LICENSE-2.0"
				)
		),
		externalDocs = @io.swagger.v3.oas.annotations.ExternalDocumentation(
				description = "Organization Service Documentation",
				url = "https://www.javaguides.net/organization-service-docs"
		)
)


@SpringBootApplication
public class OrganizationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrganizationServiceApplication.class, args);
	}

}
