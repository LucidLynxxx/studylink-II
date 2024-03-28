package dev.lucidlynxx.studylink2.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name="departments")
public class Department {

    @Id
    private Long id;

    @Column(name="department", nullable=false)
    private String department;

    // @JoinColumn(name="qualifications", nullable = false)
    // private Qualification qualifications;
    
    @OneToMany
    private List<Qualification> qualifications;

}


