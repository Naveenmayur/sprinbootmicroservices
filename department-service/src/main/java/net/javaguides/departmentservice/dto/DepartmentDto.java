package net.javaguides.departmentservice.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Schema(name = "DepartmentDto", description = "Data Transfer Object for Department")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentDto {
    private Long id;

    @Schema(description = "Name of the department", example = "Computer Science")
    private String departmentName;

    @Schema(description = "Description of the department", example = "Department of Computer Science and Engineering")
    private String departmentDescription;

    @Schema(description = "Unique code for the department", example = "CSE")
    private String departmentCode;
}
