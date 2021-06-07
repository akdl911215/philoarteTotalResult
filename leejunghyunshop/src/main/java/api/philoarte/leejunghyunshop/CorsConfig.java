package api.philoarte.leejunghyunshop;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // Bean 객체생성
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // allowedOrigins 메소드를 이용해서 자원 공유를 허락할 Origin을 지정
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .maxAge(3000);
    }
}
