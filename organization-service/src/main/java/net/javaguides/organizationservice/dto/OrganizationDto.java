package net.javaguides.organizationservice.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Schema(name = "OrganizationDto", description = "Data Transfer Object for Organization")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OrganizationDto {
    private Long id;

    @Schema(description = "Name of the organization", example = "Tech Company")
    private String organizationName;

    @Schema(description = "Description of the organization", example = "A leading technology company specializing in software development")
    private String organizationDescription;

    @Schema(description = "Unique code for the organization", example = "TECH")
    private String organizationCode;

    @Schema(description = "Date and time when the organization was created", example = "2024-06-01T12:00:00")
    private LocalDateTime createdDate;
}
