package dev.lucidlynxx.studylink2.entities;


import java.util.List;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
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
@Table(name = "offerings")
public class Offering {

        @Id
        private Long id;

        @Column(name = "student_id", nullable = false)
        private Long studentId;

        // @OneToMany(mappedBy = "offering", cascade = CascadeType.ALL)
        // @JoinColumn(name = "qualification_id", nullable = false)
        // private List<Qualification> qualificationId;

        @ManyToOne
        private Qualification qualification;
}
