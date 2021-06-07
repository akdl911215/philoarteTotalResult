import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {FundingService} from '../index'

export const getFundingList = createAsyncThunk(
    "fundings/list",
    async(page) =>{
        const response = await FundingService.getList(page)
        return response.data
    }
)
export const saveFunding = createAsyncThunk(
    "funding/register",
    async (newFunding) =>{
        const response = await FundingService.fundingRegister(newFunding)
        console.log("saveFunding action  ===" ,newFunding)
        return response.data
    }
)
export const searchSomething = createAsyncThunk(
    "funding/search",
    async(page,keyword)=>{
        const response = await FundingService.searchSomething(page,keyword)
        return response.data
    }
)
export const getFundingDetail = createAsyncThunk(
    "funding/Detail",
    async(fundingId)=>{
        const response = await FundingService.showDetail(fundingId)
        console.log("export const 의 fundingNo :"+ fundingId)
        console.log("export const 의 response", response)   
        return response.data 
        // return {...state, selected: state.boards.find(post => post.id === action.postId)}
    }
)
export const updateFunding = createAsyncThunk(
    'funding/update',
        async (obj)=>{
            console.log("funding id" , obj.fundingId)
            console.log("[UPDATE reducer]data :::::",obj.data)
            const response = await FundingService.fundingUpdate(obj.fundingId,obj.data)
            return response.data
    }
)

export const deleteFunding = createAsyncThunk(
    "funding/deleteById",
    async(fundingId)=>{
        const ressponse = await FundingService.deleteFunding(fundingId)
        return ressponse.data
    }
)
export const deleteFile = createAsyncThunk(
    "funding/fileDelete",
    async(id)=>{
        const response = await FundingService.deleteFile(id)
        return response.data
    }
)

const isRejectAction=action=>
     (action.type.endsWith('rejected'))

const fundingSlice = createSlice({
    name: "fundings",
    initialState: {
        param:{},
        pageResult:{
            dtoList:[],
            page:1,
            pageList:[],
            start:1,
            end:1,
            prev:false,
            next:false
        },
        fileList:[],
        keyword:'',
        current:{}
        
    },
    reducers:{
        addFileList:(state,{payload})=>{
            state.fileList.push(payload)
        }
        
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getFundingList.fulfilled,(state, {payload})=>{
            state.pageResult = payload
        })
        .addCase(searchSomething.fulfilled,(state,{payload})=>{
            state.pageResult = payload
        })
        .addCase(getFundingDetail.fulfilled,(state,{payload})=>{
            console.log("extra ==============="+ JSON.stringify(payload))
            state.current = payload
        })
        .addCase(updateFunding.fulfilled,(state,{payload})=>{
            // state.param.map(data => data.fundingId ===payload ? state.param : data)
            state.fundingId = payload
        })
        .addCase(saveFunding.fulfilled,(state,{payload})=>{
            state.fundings = payload
        })
        .addCase(deleteFunding.fulfilled,(state,{payload})=>{
            alert(`delete : ${payload}`)
            return state.filter((funding) => funding.fundingId == payload)
        })
        .addCase(deleteFile.fulfilled,(state,{payload})=>{
            state.fundingId=payload
        })
        .addMatcher(isRejectAction,() =>{})
        .addDefaultCase((state, payload)=>{})
    },
})



const {actions ,reducer} = fundingSlice
export const currentFunding = state => state.fundings.current
export const dtoPath = state => state.fundings.pageResult.dtoList
export const nomalDto = state => state.fundings.current

export const {addFileList}=actions
export default reducer 

// const funding = state.find(funding => funding.fundingNo == payload)
//             return funding ? payload : funding.fundingNo;