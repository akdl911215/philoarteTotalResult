import axios from 'axios'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {UserService} from 'users/index'


export const getUserList = createAsyncThunk("users/findAll",
async()=>{
    const response = await UserService.findAll()
    return response.data
})

const isRejectAction=action=>
     (action.type.endsWith('rejected'))

export const getUserSignUp = createAsyncThunk(
    "users/signup",
    async (input) =>{
        const response = await UserService.signUp(input)
        return response.data
    })

export const getUserSignIn = createAsyncThunk("users/signin",
async(login)=>{
    const response = await UserService.login(login)
    console.log("response: " + login)
    return response.data
})


const userSlice = createSlice({
    name : 'users',
    initialState : [],
    reducers:{},
    extraReducers : (builder)=>{
        builder
        .addCase(getUserList.fulfilled, (state, {payload})=>{
            return [...payload]
        })
        .addCase(getUserSignUp.fulfilled,(state, {payload})=>{
            return [...payload]
        })
        .addCase(getUserSignIn.fulfilled,(state, {payload})=>{
            
        })
        // .addCase(getUserEdit.fulfilled,(state,{payload})=>{
        //     return[...payload]
        // })
        // .addCase(getUserDelete,(state, {payload})=>{
        //     return [...payload]
        // })
        .addMatcher(isRejectAction,()=>{})
        .addDefaultCase((state, payload)=>{})
    },
})             



const {reducer}= userSlice
export default reducer

