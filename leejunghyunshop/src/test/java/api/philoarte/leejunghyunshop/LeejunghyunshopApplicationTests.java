package api.philoarte.leejunghyunshop;

import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class LeejunghyunshopApplicationTests {

	@Autowired
	private ArtistRepository repo;

	@Test
	void contextLoads() {
		System.out.println("찍히나요?");
		System.out.println(repo);
	}

}
