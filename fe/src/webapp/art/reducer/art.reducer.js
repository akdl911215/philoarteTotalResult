import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ArtService } from 'webapp/art'

export const getArtList = createAsyncThunk("ART_LIST",
  async (page) => {
    const response = await ArtService.artList(page)

    return response.data
  }
)

export const getArtRegister = createAsyncThunk("ART_REGISTER",
  async (args) => {
    const response = await ArtService.artRegister(args)

    return response.data
  }
)

export const getArtUpload = createAsyncThunk("ART_UPLOAD",
  async (args) => {
    const response = await ArtService.artUpload(args)

    return response.data
  }
)

export const getArtRead = createAsyncThunk("ART_READ",
  async (args) => {
    const response = await ArtService.artRead(args)

    return response.data
  }
)

export const getArtModify = createAsyncThunk("ART_MODIFY",
  async (args) => {
    const response = await ArtService.artModify(args)

    return response.data
  }
)

export const getArtDelete = createAsyncThunk("ART_DELETE",
  async (args) => {
    const response = await ArtService.artDelete(args)

    return response.data
  }
)

export const getArtSearch = createAsyncThunk("ART_SEARCH",
  async (args) => {
    const response = await ArtService.artSearch(args)

    return response.data
  }
)

export const getArtCount = createAsyncThunk("ART_COUNT",
  async (args) => {
    const response = await ArtService.artCount(args)
    
    return response.data
  }
)

export const getArtPosts = createAsyncThunk("ART_POSTS",
  async (args) => {
    const response = await ArtService.artPosts(args)
    
    return response.data
  }
)

export const getCategoryList = createAsyncThunk("CATEGORY_LIST",
  async () => {
  const response = await ArtService.categoryList()

  return response.data
  }
)

const isRejectedAction = action => (action.type.endsWith('rejected'))

const artSlice = createSlice({
  name: 'arts',
  initialState: {
    pageResult: {
      dtoList: [],
      page: 1,
      pageList: [],
      start: 1,
      end: 1,
      prev: false,
      next: false
    },
    fileList: [],
    type: '',
    keyword: '',
    category: [],
    count: []
  },
  reducers: {
    changeSearch: (state, { payload }) => {
      state.type = payload.type
      state.keyword = payload.keyword
    },
    addFileList: (state, { payload }) => {
      state.fileList.push(payload)
    },
    changeFileList: (state, { payload }) => {
      const idx = state.fileList?.findIndex(file => file.uuid === payload.uuid)

      state.fileList[idx] = payload
    },
    deleteFileList: (state, { payload }) => {
      state.fileList = state.fileList.filter(file => file.uuid !== payload.uuid)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArtList.fulfilled, (state, { payload }) => {
        state.pageResult = payload
      })
      .addCase(getArtRegister.fulfilled, (state, { payload }) => {
        alert(`${payload}번 게시물 등록 완료 !`)
        state.fileList = []
      })
      .addCase(getArtUpload.fulfilled, (state, { payload }) => {
        alert(`${payload[0]} 파일 등록 완료 !`)
      })
      .addCase(getArtRead.fulfilled, (state, { payload }) => {
        state.current = payload
        state.fileList = payload.files
        // console.log(`바바바: ` + JSON.stringify(state.current))
      })
      .addCase(getArtModify.fulfilled, (state, { payload }) => {
        
      })
      .addCase(getArtDelete.fulfilled, (state, { payload }) => {

      })
      .addCase(getArtSearch.fulfilled, (state, { payload }) => {
        state.pageResult = payload
      })
      .addCase(getArtCount.fulfilled, (state, { payload }) => {
        state.count = payload
      })
      .addCase(getArtPosts.fulfilled, (state, { payload }) => {
        state.pageResult = payload
      })
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.category = payload
      })
      .addMatcher(isRejectedAction).addDefaultCase()
      .addDefaultCase((state, payload) => { })
  }
})

const { actions, reducer } = artSlice
export const { changeSearch, addFileList, changeFileList, deleteFileList } = actions
export default reducer
