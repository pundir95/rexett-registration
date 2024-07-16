import { createSlice } from "@reduxjs/toolkit";
import authInstance from "../../services/auth.instance";

const initialDeveloperData={
    skillOptions:[],
    btnLoader: false,
    screenLoader: false,
    smallLoader: false,



}


export const developerDataSlice = createSlice({
    name: "authData",
    initialState: initialDeveloperData,
    reducers: {
        setSkillOptions: (state, action) => {
            state.skillOptions = action.payload;
            state.screenLoader = false;
          },
          
    setFailDeveloperData: (state, action) => {
        state.smallLoader = false;
        state.btnLoader = false;
        state.screenLoader = false;
      },


    }
})


export const {setSkillOptions,setFailDeveloperData} = developerDataSlice.actions

export default developerDataSlice.reducer;

export function getSkillOptions() {
    return async (dispatch) => {
    //   dispatch(setScreenLoader());
      try {
        let result = await authInstance.get(`web/skills`);
        dispatch(setSkillOptions(result?.data?.data));
        // return callback();
      } catch (error) {
        console.log(error, "error");
        dispatch(setFailDeveloperData());
      }
    };
  }

