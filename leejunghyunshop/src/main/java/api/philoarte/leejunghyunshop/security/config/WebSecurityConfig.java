package api.philoarte.leejunghyunshop.security.config;

import api.philoarte.leejunghyunshop.security.domain.SecurityProvider;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration //인터셉터
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    private final SecurityProvider provider;
//    public AuthenticationManagerBuilder  authenticationManagerBuilder;

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService());
        auth.eraseCredentials(false);
    }

    @Override // 오버라이드 할때 열쇠있는걸로 오버라이드해야한다.
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable(); // csrf 기능 비활성화
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.authorizeRequests()
                .antMatchers("/artists/signin").permitAll()
                .antMatchers("/artists/signup").permitAll()
                .antMatchers("/artists/findAll").permitAll()
                .antMatchers("/page/list/{page}").permitAll()
                .antMatchers("/page/list").permitAll()
                .antMatchers("/page/list/search").permitAll()
                .antMatchers("/page/**/**").permitAll()
                .antMatchers("/page/**").permitAll()
                .antMatchers("/h2-console/**/**").permitAll()
                .antMatchers("/artists/delete/{artistId}").permitAll()
                .antMatchers("/artists/update/{artistId}").permitAll()
                .antMatchers("/artists/mypage/{artistId}").permitAll()
                .antMatchers("/artists/**/**").permitAll()
                .antMatchers("/artists/**").permitAll()
                .antMatchers("/artists/fetchOne/{artistId}").permitAll()
                .antMatchers("/sample/ex1").permitAll()
                .antMatchers("/sample/ex2").permitAll()
                .antMatchers("/sample/exTemplate").permitAll()
                .antMatchers("/reviews/**/**").permitAll()
                .antMatchers("/reviews/**/**/**").permitAll()
                .antMatchers("/replies/**/**").permitAll()
                .antMatchers("/review_files/**/**").permitAll()
                .antMatchers("/funding/**/**").permitAll()
                .antMatchers("/artist_files/**/**").permitAll()
                .antMatchers("/artist_files/**").permitAll()
                .antMatchers("/artistFiles/**").permitAll()
                .antMatchers("/artistFiles/**").permitAll()
                .anyRequest().authenticated();
//                .and()
//                    .formLogin()
//                        .loginPage("/artists/signin")
//                        .defaultSuccessUrl("/");
        http.exceptionHandling().accessDeniedPage("/login");
        http.apply(new SecurityConfig(provider));


    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
                .antMatchers(HttpMethod.OPTIONS, "/*/**") // 모든 곳에서 접속
                .antMatchers("/", "/h2-console/**");
    }
}