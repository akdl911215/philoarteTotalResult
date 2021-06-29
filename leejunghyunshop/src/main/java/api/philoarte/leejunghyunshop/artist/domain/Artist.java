package api.philoarte.leejunghyunshop.artist.domain;

import api.philoarte.leejunghyunshop.artist.domain.role.Role;
import api.philoarte.leejunghyunshop.common.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "artists")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "roles")
public class Artist extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artist_id", unique = true , nullable = false) // , unique = true , nullable = false
    private Long artistId;

    @Column(name = "username", unique = true , nullable = false)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "school")
    private String school;

    @Column(name = "department")
    private String department;

    @OneToMany(mappedBy = "artist")
    private List<ArtistFile> artistFiles = new ArrayList<>();

     @ElementCollection(fetch = FetchType.EAGER)
     List<Role> roles;

     public void changeArtistsFiles(List<ArtistFile> artistFiles) { this.artistFiles = artistFiles; }

    public void changeRoles(List<Role> roles){
         this.roles = roles;
     }

     public void changeSchool(String school){
         this.school = school;
     }

     public void changeDepartment(String department){
         this.department = department;
     }

     public void changePassword(String password){
        this.password = password;
     }

     public void changePhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
     }

     public void changeEmail(String email){
        this.email = email;
     }

     public void changeAddress(String address){
        this.address = address;
     }

}
