package api.philoarte.leejunghyunshop.category.service;

import api.philoarte.leejunghyunshop.category.domain.CategoryDto;

import java.util.List;

public interface CategoryService {
    List<CategoryDto> findAllCategory();
}