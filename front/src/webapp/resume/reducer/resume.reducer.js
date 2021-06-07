import{ createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {ResumeService} from "webapp/resume/index";


export const listResume = createAsyncThunk(
    "resume/list",
    async (page) =>{
        const response = await ResumeService.resumeList(page);
        return response.data;
    }
)
export const registerResume = createAsyncThunk(
    "resume/register",
    async(data) =>{
        const response = await ResumeService.resumeRegister(data)
        return response.data;
    }
)

export const readResume = createAsyncThunk(
    "resume/read",
    async(resumeId) =>{
        const response = await ResumeService.resumeRead(resumeId);
        return response.data;
    }
)

export const modifyResume = createAsyncThunk(
    "resume/modify",
    async (data) =>{
        const response = await ResumeService.resumeModify(data);
        return response.data;
    }
)

export const deleteResume = createAsyncThunk(
    "resume/delete",
    async (data) => {
        const response = await ResumeService.resumeDelete(data)
        return response.data;
    }
)

export const searchResume = createAsyncThunk(
    "resume/search",
    async (param) => {
        const response = await ResumeService.resumeSearch(param)
        return response.data;
    }
)
export const countResume = createAsyncThunk(
    "resume/count",
    async (artistId) => {
        const response = await ResumeService.countResume(artistId)
        return response.data;
    }
)

export const listCategory = createAsyncThunk(
    "category/list",
    async () => {
        const response = await ResumeService.categoryList()
        return response.data;
    }
)


const isRejectedAction = action => (action.type.endsWith('rejected'))

const resumeSlice = createSlice({
    name: 'resumes',
    initialState: {
        pageResult:{
            dtoList:[],
            page: 1,
            pageList: [],
            start:1,
            end:1,
            prev:false,
            next:false,
        },
        count:{},
        crudResult:{},
        category:[],
        current:{
            resumeFiles:[]
        },
        type: "",
        keyword:"",
    },
    
    reducers: {
        changeSearch : (state, {payload}) =>{
        state.type = payload.type
        state.keyword = payload.keyword
    },
        addFileList : (state, {payload}) => {
            console.log("payload::::::::::::",payload)
            state.current.resumeFiles.push(payload)
        },
        delFileList : (state, {payload}) => {
            const idx = state.current.resumeFiles.findIndex(file => file.uuid === payload.uuid)
            state.current.resumeFiles.splice(idx, 1)
        },
        changeFileList : (state, {payload}) => {
            // const filteredFiles= state.current.resumeFiles.filter(file => file.uuid !== payload.uuid)
            // filteredFiles.push(payload)
            // state.current.resumeFiles = filteredFiles
            const idx= state.current.resumeFiles.findIndex(file => file.uuid === payload.uuid)
            state.current.resumeFiles[idx] = payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(listResume.fulfilled, (state,{payload}) => {
            state.pageResult = payload
        })
        .addCase(registerResume.fulfilled,(state,{payload}) => {
            state.crudResult = payload
        })
        .addCase(readResume.fulfilled,(state,{payload}) => {
            state.current = payload
        })
        .addCase(modifyResume.fulfilled,(state,{payload}) => {
            console.log("payload```````````````````````````",payload)
            state.crudResult = payload
        })
        .addCase(deleteResume.fulfilled,(state,{payload}) => {
            state.crudResult = payload

        })
        .addCase(searchResume.fulfilled,(state,{payload}) => {
            state.pageResult = payload;
        })
        .addCase(countResume.fulfilled,(state,{payload}) => {
            state.count = payload;
        })
        .addCase(listCategory.fulfilled,(state,{payload}) => {
            state.category = payload;
        })
  
        
    
        .addMatcher(isRejectedAction).addDefaultCase()
        .addDefaultCase((state, payload)=>{})
    }
})

const {actions, reducer} = resumeSlice;
export const { changeSearch, addFileList, delFileList, changeFileList} = actions;
export default reducer;