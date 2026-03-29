package net.javaguides.employeeservice.service;

import net.javaguides.employeeservice.dto.OrganizationDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ORGANIZATION-SERVICE")   // Service name (usually matches Eureka/service discovery name)
public interface OrganizationAPIClient {

    @GetMapping("api/organizations/{organization-code}")
    OrganizationDto getOrganization(@PathVariable("organization-code") String organizationCode);
}
