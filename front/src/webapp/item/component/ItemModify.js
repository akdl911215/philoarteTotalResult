import React from 'react'

import {Link} from 'react-router-dom';

const ItemModify = () => {

    return (
        <> < h1 > ItemModify</h1>
         < Link to = "/" > <button>홈으로</button>
    </Link>
    < Link to = "/item/item-list" > <button>뒤로가기</button>
    </Link>
</>
    )
}

export default ItemModify