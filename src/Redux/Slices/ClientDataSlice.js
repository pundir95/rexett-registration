import { createSlice } from "@reduxjs/toolkit"
// import clientInstance, { clientFormInstance } from "../../services/client.instance";
import authInstance from "../../services/auth.instance";


const initialClientData = {
  countriesList: [],
  statesList: [],
  citiesList: [],
  smallLoader: false,
  screenLoader: false,
  approvedLoader: false,
  clientLook:{},
  profileData:{},
  degreeList:{}

}

export const clientDataSlice = createSlice({
  name: 'clientData',
  initialState: initialClientData,
  reducers: {
    setScreenLoader: (state, action) => {
      state.screenLoader = true;
    },
    setSmallLoader: (state, action) => {
      state.smallLoader = true;
    },
    setApprovedLoader: (state, action) => {
      state.approvedLoader = true;
    },
    closeApprovedLoader: (state, action) => {
      state.approvedLoader = false;
    },
    setFailClientData: (state, action) => {
      state.smallLoader = false;
      state.approvedLoader = false;
      state.screenLoader = false;
      state.OtpLoader = false
    },

    setActionSuccessFully: (state, action) => {
      state.smallLoader = false;
      state.approvedLoader = false;
      state.screenLoader = false;
      state.OtpLoader = false
    },
    setCountriesList: (state, action) => {
      state.countriesList = action.payload;
      // state.screenLoader = false;
    },
    setStatesList: (state, action) => {
      state.statesList = action.payload;
      state.screenLoader = false;
    },
    setCitiesList: (state, action) => {
      state.citiesList = action.payload;
      state.screenLoader = false;
    },
    setTimeZones: (state, action) => {
      state.timeZones = action.payload;
      state.screenLoader = false;
    },
    setFailClientData: (state, action) => {
      state.smallLoader = false;
      state.approvedLoader = false;
      state.screenLoader = false;
      state.OtpLoader = false
    },
    setClientLook: (state, action) => {
      state.clientLook = action.payload
      state.screenLoader = false;
  },
  setProfile:(state,action) =>{
    state.profileData = action.payload
  },
  setDegreeList: (state, action) => {
    let data = action?.payload?.map((item) => {
      return { label: item.title, value: item.id };
    });
    state.degreeList = data;
    // state.smallLoader = false;
  },
  }
})

export const { setCountriesList, setStatesList,setClientLook,setDegreeList ,setProfile, setTimeZones, setCitiesList } = clientDataSlice.actions

export default clientDataSlice.reducer



export function applyAsClient(payload, callback) {
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    try {
      let result = await authInstance.post(`/common/client-registration`,{...payload});
      console.log(result.data,"result")
      localStorage.setItem("clientId", result?.data?.data?.id);
      return callback(result?.data?.data.Location);
    } catch (error) {
      const message = error?.message;
      // if (error?.message === VERIFY_USER_MESSAGE) {
      if (error.response?.data?.verify_user) {
        // triggerVerificationModal("verify");
      } else {
        // toast.error(error?.response?.data?.message, { position: "top-center" });
      }
      // dispatch(setFailClientData());
    }
  };
}
export function getWebClientLookUp(callback) {
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    try {
      let result = await authInstance.get(`web/get-lookups`);
      dispatch(setClientLook(result?.data?.data));
      callback && callback(result?.data?.data)
    } catch (error) {
      const message = error?.message;
      toast.error(error?.response?.data?.message, { position: "top-center" });
      dispatch(setFailClientData());
    }
  };
}






export const uploadFileToS3Bucket = (payload, callback) => {
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    // dispatch(setSmallLoader());
    try {
      let result = await authInstance.post(`/web/upload-file/`, payload);
      callback && callback(result?.data?.data?.Location);
      // dispatch(setActionSuccessFully())
      // toast.success("project added successfully", {
      //   position: "top-center",
      // });
    } catch (error) {
      console.log(error,"error")
      // toast.error(error?.response?.data?.message, { position: "top-center" });
      // dispatch(setFailClientData());
    }
  };
};

export function getCoutriesList() {
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    try {
      let result = await authInstance.get(`web/countries/`);
      console.log(result.data, "countrylist")
      dispatch(setCountriesList(result?.data?.data));
    } catch (error) {
      const message = error?.message;
      // toast.error(error?.response?.data?.message, { position: "top-center" });
      // dispatch(setFailClientData());
    }
  };
}
export function getStatesList(countryCode) {
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    try {
      let result = await authInstance.get(`web/countries/${countryCode}/states`);
      console.log(result, "result")
      dispatch(setStatesList(result?.data?.data));
    } catch (error) {
      const message = error?.message;
      toast.error(error?.response?.data?.message, { position: "top-center" });
      dispatch(setFailClientData());
    }
  };
}
export function getTimeZoneForCountry(countryCode) {
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    try {
      let result = await authInstance.get(`web/countries/${countryCode}/timezones`);
      dispatch(setTimeZones(result?.data?.data?.timezones));
    } catch (error) {
      const message = error?.message;
      toast.error(error?.response?.data?.message, { position: "top-center" });
      dispatch(setFailClientData());
    }
  };
}
export function getCitiesList(countryCode, stateName) {
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    try {
      let result = await authInstance.get(`web/countries/${countryCode}/states/${stateName}/cities`);
      dispatch(setCitiesList(result?.data?.data));
    } catch (error) {
      const message = error?.message;
      toast.error(error?.response?.data?.message, { position: "top-center" });
      dispatch(setFailClientData());
    }
  };
}
export function getJobPost(payload, id) {
  console.log(payload, "paylaoad")
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    try {
      let result = await authInstance.post(`/common/post-job/?user_id=${id}`, {...payload });
      // dispatch(setJobPost(result?.data?.data));
    } catch (error) {
      // const message = error?.message;
      // toast.error(error?.response?.data?.message, { position: "top-center" });
      dispatch(setFailClientData());
    }
  };
}
export function getProfile( id,callback) {
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    try {
      let result = await authInstance.get(`/common/client-details/${id}`);
      callback(result?.data?.data)
      dispatch(setProfile(result?.data?.data));
    } catch (error) {
      // const message = error?.message;
      // toast.error(error?.response?.data?.message, { position: "top-center" });
      dispatch(setFailClientData());
    }
  };
}
export function getDegreeList(payload, callback) {
  return async (dispatch) => {
    // dispatch(setSmallLoader())
    try {
      let result = await authInstance.get(`common/degree-list`);
      dispatch(setDegreeList(result.data.data));
      // return callback()
    } catch (error) {
      const message = error.message || "Something went wrong";
      toast.error(message, { position: "top-center" });
      dispatch(setFailDeveloperData());
    }
  };
}
export function getJobPostData(id, callback) {
  return async (dispatch) => {
    // dispatch(setScreenLoader());
    try {
      let result = await clientInstance.get(`common/get-job-detail/${id}`);
      // toast.success("Job successfully Posted", { position: "top-center" })
      dispatch(setJobPostedData(result.data?.data));
      dispatch(setActionSuccessFully());
      return callback(result.data?.data);
    } catch (error) {
      const message = error.message || "Something went wrong";
      toast.error(message, { position: "top-center" });
      dispatch(setFailClientData());
    }
  };
}

