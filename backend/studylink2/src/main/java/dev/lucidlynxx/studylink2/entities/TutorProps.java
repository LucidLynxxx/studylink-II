package dev.lucidlynxx.studylink2.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name="tutor_props")
public class TutorProps {

    @Id
    private Long id;

    // @ManyToOne()
    // @JoinColumn(name = "tutor_qualifications", nullable = yes)


}
