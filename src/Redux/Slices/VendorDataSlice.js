import { createSlice } from "@reduxjs/toolkit"
import authInstance from "../../services/auth.instance";

const initialVendorData={
    screenLoader: false,
    smallLoader: false,

}

export const vendorDataSlice = createSlice({
    name: "vendorData",
    initialState: initialVendorData,
    reducers: {
        setFailVendorData: (state, action) => {
            state.screenLoader = false
            state.smallLoader = false;
        },
    }
})

export const {setFailVendorData}=  vendorDataSlice.actions

export default vendorDataSlice.reducer

export function applyAsVendor(payload,callback) {
    console.log(payload,'payload')
    return async (dispatch) => {
      // dispatch(setScreenLoader());
      try {
        let result = await authInstance.post("/common/vendor-registration",{...payload})
        console.log(result?.data,"result")
        localStorage.setItem("vendorId",result?.data?.data?.id);
        return callback(result?.data?.data.Location);
      } catch (error) {
        // dispatch(setFailVendorData());
        console.log(error,"error")
      }
    };
}
