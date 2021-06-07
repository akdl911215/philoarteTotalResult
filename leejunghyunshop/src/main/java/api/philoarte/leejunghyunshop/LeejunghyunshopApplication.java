package api.philoarte.leejunghyunshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class LeejunghyunshopApplication {

	public static void main(String[] args) {SpringApplication.run(LeejunghyunshopApplication.class, args);
	}

}
