
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    searchValue: "",
    alert: {
         show: false,
         text: ''
    },
    isOpen: false,
    successModal: false,
    removeAllModal: false,
    
   

}


const actionsSlice = createSlice({
    name: "actions",
    initialState,
    reducers: {
        updateSearch : (state, action) => {
             state.searchValue = action.payload;
        },
        updateAlert : (state, { payload }) => {
             state.alert.show =  payload.show;
             state.alert.text =  payload.text;
        },
        toggleIsOpen: (state) => {
              state.isOpen = !state.isOpen;
        },
        alertShow : (state, { payload }) => {
              state.alert.show = true
              state.alert.text = payload
        },
        alertHide: (state) => {
              state.alert.show = false
              state.alert.text = ''
        },
        showRemoveAllModal: (state) => {
             state.removeAllModal = true;
        }, 
         hideRemoveAllModal: (state) => {
             state.removeAllModal = false;
        }, 
        showSuccessModal: (state) => {
             state.successModal = true;
        },
        hideSuccessModal: (state) => {
             state.successModal = false;
        }
    }

})


export const {updateSearch,
     updateAlert, toggleIsOpen, alertHide, alertShow, showRemoveAllModal, hideRemoveAllModal, showSuccessModal, hideSuccessModal,
} = actionsSlice.actions;


export default actionsSlice.reducer