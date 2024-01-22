package dev.lucidlynxx.studylink2.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentDto {
    private Long untisId;
    private Long untisKey;
    private String foreName;
    private String lastName;
    private String untisName;
}

