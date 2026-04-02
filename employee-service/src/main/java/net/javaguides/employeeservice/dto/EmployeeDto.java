package net.javaguides.employeeservice.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Schema(name = "EmployeeDto", description = "Data Transfer Object for Employee")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private Long id;

    @Schema(description = "First name of the employee", example = "John")
    private String firstName;

    @Schema(description = "Last name of the employee", example = "Doe")
    private String lastName;

    @Schema(description = "Email of the employee", example = "john@doe.com")
    private String email;

    @Schema(description = "Unique code for the department the employee belongs to", example = "CSE")
    private String departmentCode;

    @Schema(description = "Unique code for the organization the employee belongs to", example = "ORG001")
    private String organizationCode;
}
