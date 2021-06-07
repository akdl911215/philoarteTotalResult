package api.philoarte.leejunghyunshop.category.domain;

import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class CategoryDto {
    private Long   categoryId;
    private String categoryName;

    public static CategoryDto of(Category category) {
        CategoryDto categoryDto = ModelMapperUtils.getModelMapper().map(category, CategoryDto.class);
        return categoryDto;
    }
}