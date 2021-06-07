package api.philoarte.leejunghyunshop.crawling.picture.service;

import api.philoarte.leejunghyunshop.crawling.common.controller.Crawler;
import api.philoarte.leejunghyunshop.crawling.picture.domain.Picture;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;

public interface PictureService {

    List<Picture> saveAll(Crawler crawler) throws IOException;
    Page<Picture> findAll(final Pageable pageable);
}