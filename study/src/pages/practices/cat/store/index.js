import {createSlice} from '@reduxjs/toolkit'
import moment from 'moment/moment'

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
    handleAddFeedCount: (state, action) => {
      state.catList = state.catList.map(cat => {
        let count = cat.feedCount
        let firstFeedTime = cat.firstFeedTime
        let lastFeedTime = cat.lastFeedTime


        if (cat.id === action.payload.id) {
          count++

          if (count === 1) {
            firstFeedTime = moment().format('YYYY-MM-DD HH:mm:ss')
          }
          lastFeedTime = moment().format('YYYY-MM-DD HH:mm:ss')
        }

        return {...cat, feedCount: count, firstFeedTime, lastFeedTime}
      })
    },
    handleAddWeight: (state, action) => {
      state.catList = state.catList.map(cat => {
        let weight = cat.weight

        if (cat.id === action.payload.id) {
          weight++
        }

        return {...cat, weight}
      })
    },
    handleAddAge: (state, action) => {
      state.catList = state.catList.map(cat => {
        let age = cat.age

        if (cat.id === action.payload.id) {
          age++
        }

        return {...cat, age}
      })
    },
    handleChangeStatus: (state, action) => {
      state.catList = state.catList.map(cat => {
        let status = cat.status

        if (cat.id === action.payload.id) {
          status = action.payload.status
        }

        return {...cat, status}
      })
    }
  },
  extraReducers: builder => {
    //
  }
})

export const {
  handleSelectCat,
  handleAddFeedCount,
  handleAddWeight,
  handleAddAge,
  handleChangeStatus
} = CatManageSlice.actions

export default CatManageSlice.reducer
