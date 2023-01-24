import {createSlice} from '@reduxjs/toolkit'

export const STATUS = {
  BABY: "새끼",
  NORMAL: "정상",
  DEAD: "사망"
}

const GENDER = {
  MALE: "수컷",
  FEMALE: "암컷"
}

export const CatManageSlice = createSlice({
  name: 'catManage',
  initialState: {
    catList: [
      {
        id: 1,
        name: 'cat mk1',
        age: 1,
        weight: 1,
        gender: GENDER.FEMALE,
        profileImage: require('../../../../assets/images/cat_1.jpg'),
        status: STATUS.BABY,
        message: '',
        feedCount: 0,
        firstFeedTime: null,
        lastFeedTime: null
      },
      {
        id: 2,
        name: '퇴근하고 싶은 고영희씨',
        age: 1,
        weight: 1,
        gender: GENDER.FEMALE,
        profileImage: require('../../../../assets/images/cat_2.jpg'),
        status: STATUS.BABY,
        message: '',
        feedCount: 0,
        firstFeedTime: null,
        lastFeedTime: null
      },
      {
        id: 3,
        name: '배트캣',
        age: 1,
        weight: 1,
        gender: GENDER.MALE,
        profileImage: require('../../../../assets/images/cat_3.jpg'),
        status: STATUS.BABY,
        message: '',
        feedCount: 0,
        firstFeedTime: null,
        lastFeedTime: null
      }
    ],
    selectedCat: null
  },
  reducers: {
    handleSelectCat: (state, action) => {
      state.selectedCat = action.payload
    },
    handleFeed: (state, action) => {
      //
    }
  },
  extraReducers: builder => {
    //
  }
})

export const {
  handleSelectCat,
  handleFeed
} = CatManageSlice.actions

export default CatManageSlice.reducer
