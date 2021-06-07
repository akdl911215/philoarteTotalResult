import React from 'react'

import {Link} from 'react-router-dom';

const ItemList = () => {


    

    return (
        <> < h1 > ItemList</h1>
        < Link to = "/item/item-register" > <button>Item 등록</button>
    </Link>
    < Link to = "/item/item-read" > <button>Item 읽기</button>
    </Link>
    < Link to = "/item/item-modify" > <button>Item 수정</button>
    </Link>
         < Link to = "/" > <button>취소</button>
    </Link>
</>
    )
}

export default ItemList