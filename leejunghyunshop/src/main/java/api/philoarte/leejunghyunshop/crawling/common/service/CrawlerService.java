package api.philoarte.leejunghyunshop.crawling.common.service;

import api.philoarte.leejunghyunshop.crawling.common.controller.Crawler;

import java.io.IOException;
import java.util.List;

public interface CrawlerService {
    List<?> scrapPicture(Crawler cralwer) throws IOException;
}