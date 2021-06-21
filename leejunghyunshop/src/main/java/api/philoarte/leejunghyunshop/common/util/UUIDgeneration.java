package api.philoarte.leejunghyunshop.common.util;

import java.util.UUID;

public class UUIDgeneration {
    public String getUUID() {

        // UUID 생성
        String uuid = UUID.randomUUID().toString();
        System.out.println(uuid);

        // "-" 하이폰 제외
        uuid = uuid.replace("-","");
        System.out.println(uuid);
        return uuid;
    }
}
