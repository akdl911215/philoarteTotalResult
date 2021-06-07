package api.philoarte.leejunghyunshop.security.config;

import api.philoarte.leejunghyunshop.security.aop.SecurityFilter;
import api.philoarte.leejunghyunshop.security.domain.SecurityProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
public class SecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
    private final SecurityProvider provider;



    @Override
    public void configure(HttpSecurity http) throws Exception {
        SecurityFilter filter = new SecurityFilter(provider);
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
    }


//    @Override
//    public void configure(AuthenticationManagerBuilder auth) throws Exception {
////        SecurityFilter filter = new SecurityFilter(provider);
////        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//        auth.userDetailsService((org.springframework.security.core.userdetails.UserDetailsService) UserDetailsService);
//        auth.eraseCredentiasl(false);
//
//    }
}
