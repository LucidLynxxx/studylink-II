package dev.lucidlynxx.studylink2.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "matchStatus")
public class MatchStatus {

    //will it be problematic not to use an id? we will see
    //private Long statusId;
    
    @Id
    @Column(name="match_status", nullable = false)
    private MatchStatusEnum status;
}
