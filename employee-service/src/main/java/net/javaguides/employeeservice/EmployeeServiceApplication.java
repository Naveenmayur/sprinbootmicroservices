package net.javaguides.employeeservice;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

@OpenAPIDefinition(
		info = @io.swagger.v3.oas.annotations.info.Info(
				title = "Employee Service API",
				version = "1.0",
				description = "API for managing employees",
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
				description = "Employee Service Documentation",
				url = "https://www.javaguides.net/employee-service-docs"
		)
)
@SpringBootApplication
@EnableFeignClients
public class EmployeeServiceApplication {

//	@Bean
//	@LoadBalanced
//	public RestTemplate restTemplate(){
//		return new RestTemplate();
//	}

	@Bean
	public WebClient webClient(){
		return WebClient.builder().build();
	}

	public static void main(String[] args) {
		SpringApplication.run(EmployeeServiceApplication.class, args);
	}

}
