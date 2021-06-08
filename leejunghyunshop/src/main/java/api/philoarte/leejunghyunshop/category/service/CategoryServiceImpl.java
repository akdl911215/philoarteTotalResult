package api.philoarte.leejunghyunshop.category.service;

import api.philoarte.leejunghyunshop.category.domain.Category;
import api.philoarte.leejunghyunshop.category.domain.CategoryDto;
import api.philoarte.leejunghyunshop.category.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository repo;

    @Override
    public List<CategoryDto> findAllCategory() {
        List<Category> categories = repo.findAll();
        return categories.stream().map(category -> CategoryDto.of(category)).collect(Collectors.toList());
    }

}