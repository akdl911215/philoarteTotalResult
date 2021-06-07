package api.philoarte.leejunghyunshop.common.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return new SimpleDateFormat("yyyy-MM-dd !!!").format(new Date());
    }

    @GetMapping("/time")
    public void timeCount(){
        Date date_now = new Date(System.currentTimeMillis());
        System.out.println("현재시간 : " + date_now);
    }

}
