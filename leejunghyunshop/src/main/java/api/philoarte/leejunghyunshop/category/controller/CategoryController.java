package api.philoarte.leejunghyunshop.category.controller;

import api.philoarte.leejunghyunshop.category.domain.CategoryDto;
import api.philoarte.leejunghyunshop.category.service.CategoryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryServiceImpl service;

    @GetMapping("/findall")
    public ResponseEntity<List<CategoryDto>> findAllCategory() {

        return ResponseEntity.ok(service.findAllCategory());
    }
}