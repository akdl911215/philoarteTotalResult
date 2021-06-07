package api.philoarte.leejunghyunshop.resume.service;

import api.philoarte.leejunghyunshop.category.repository.ResumeRepository;
import api.philoarte.leejunghyunshop.common.service.AbstractService;
import api.philoarte.leejunghyunshop.resume.domain.ResumeDto;
import api.philoarte.leejunghyunshop.resume.repository.ResumeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Log4j2
@Transactional
public class ResumeServiceImpl extends AbstractService<ResumeDto> implements ResumeService {

    private final ResumeRepository repo;
    private final ResumeFileRepository fileRepo;

    @Override
    public String resumeSaveWithFile(ResumeDto resumeDto) {

        Resume resume = Resume.of(resumeDto);
        resume.saveAll(resumeDto);
        log.info(resume.getDetail());
        List<ResumeFileDto> files = resumeDto.getResumeFiles();
        if (!files.isEmpty()) {
            files.forEach(fileDto -> {
                ResumeFile rf = dtoToEntityResumeFile(fileDto);
                rf.saveDetails(fileDto);
                rf.confirmResume(resume);
                fileRepo.save(rf);
            });
        }

        return (repo.save(resume) != null) ? "Save Success" : "Save Failed";
    }

    @Override
    public String editResume(ResumeDto resumeDto) {
        log.info("EDIT Resume parameter: " + resumeDto);
        Resume resume = Resume.of(resumeDto);
        resume.saveAll(resumeDto);
        fileRepo.deleteByResumeId(resume.getResumeId());
        log.info("Edit ModelMapped resume: " + resume);
        repo.save(resume);
        List<ResumeFileDto> files = resumeDto.getResumeFiles();
        if (!files.isEmpty()) {
            files.forEach(fileDto -> {
                ResumeFile rf = dtoToEntityResumeFile(fileDto);
                log.info("MODIFY ResumeFile: " + rf);
                rf.saveDetails(fileDto);
                rf.confirmResume(resume);
                fileRepo.save(rf);
            });
        }
        return (repo.save(resume) != null) ? "Update Success" : "Update Failed";
    }

    @Override
    public ResumeDto findById(Long resumeId) {
        Resume resume = repo.findById(resumeId).orElseThrow(IllegalArgumentException::new);

        return resumeEntityToDto(resume);
    }

    @Override
    public String delete(ResumeDto resumeDto) {
        Resume resume = Resume.builder().resumeId(resumeDto.getResumeId()).build();
        repo.getOne(resume.getResumeId());
        fileRepo.deleteByResumeId(resume.getResumeId());
        repo.delete(resume);
        return (repo.findById(resume.getResumeId()).isPresent()) ? "Delete Failed" : "Delete Success";
    }

    @Override
    public PageResultDto<ResumeDto, Resume> getAllDataPaging(int page) {
        return new PageResultDto<>(repo.getAllDataPaging(conditionPage(page)), makeDtoPage());
    }

    @Override
    public PageResultDto<ResumeDto, Resume> getUserPKDataPage(Long artistId, int page) {
        return new PageResultDto<>(repo.getUserPKDataPage(artistId, conditionPage(page)), makeDtoPage());
    }

    @Override
    public PageResultDto<ResumeDto, Resume> getCategoryPKDataPage(Long categoryId, int page) {
        return new PageResultDto<>(repo.getCategoryPKDataPage(categoryId, conditionPage(page)), makeDtoPage());
    }

    @Override
    public PageResultDto<ResumeDto, Resume> getCategoryAndUserDataPage(Long categoryId, Long artistId, int page) {

        return new PageResultDto<>(repo.getCategoryAndUserDataPage(categoryId, artistId, conditionPage(page)),
                makeDtoPage());
    }

    @Override
    public PageResultDto<ResumeDto, Object[]> conditionSearch(String type, String keyword, int page) {

        Function<Object[], ResumeDto> fn = (arr -> resumeEntityToDto((Resume) arr[0]));

        Page<Object[]> result = repo.searchPage(type, keyword, conditionPage(page));

        return new PageResultDto<>(result, fn);
    }

    @Override
    public List<ResumeDto> getAllResume() {
        List<Resume> resumes = repo.findAll();
        return resumes.stream().map(resume -> ResumeDto.of(resume)).collect(Collectors.toList());
    }

    @Override
    public List<ResumeDto> findAll() {

        return null;
    }

    public List<Object[]> countByArtistId(Long artistId) {

        return repo.countByArtistId(artistId);
    }

    @Override
    public Optional<ResumeDto> getOne(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deleteAll() {
        // TODO Auto-generated method stub

    }

    @Override
    public Boolean existsById(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deleteById(Long id) {
        // TODO Auto-generated method stub

    }

    @Override
    public String save(ResumeDto t) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Long count() {
        // TODO Auto-generated method stub
        return null;
    }

}