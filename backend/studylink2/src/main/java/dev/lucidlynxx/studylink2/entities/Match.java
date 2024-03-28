package dev.lucidlynxx.studylink2.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name="matches")
public class Match {
    
    @Id
    private Long id;

    // @ManyToOne
    // @JoinColumn(name="match_status")
    // private MatchStatus matchStatus;

    // @ManyToOne
    // @JoinColumn(name="subject")
    // private Subject subject;

    // @ManyToOne
    // @JoinColumn(name="subject_level")
    // private Level subject_level;

    @Column(name="MatchStatus", nullable = false)
    private MatchStatusEnum status;

    @ManyToOne
    // @JoinColumn(name="Qualification", nullable = false)
    private Qualification qualification;

}
