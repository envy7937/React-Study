export const STATUS = {
  NORMAL: '보통',
  FAT: '비만', // 체중이 30kg이 넘어가면 비만
  DEAD: '사망' // 15살이 되면 사망, 체중이 나이의 10%보다 낮아지면 사망
}

export const GENDER = {
  MALE: '수컷',
  FEMALE: '암컷'
}

export const FOOD_TYPE = {
  WATER: '물',
  FEED: '사료',
  MEET: '고기'
}
export const catsData = [
  {
    id: 1,
    name: 'cat mk1',
    age: 1,
    weight: 1,
    gender: GENDER.FEMALE,
    profileImage: require('../assets/images/cat_1.jpg'),
    status: STATUS.NORMAL,
    message: '',
    feeds: []
  },
  {
    id: 2,
    name: '퇴근하고 싶은 고영희씨',
    age: 1,
    weight: 1,
    gender: GENDER.FEMALE,
    profileImage: require('../assets/images/cat_2.jpg'),
    status: STATUS.NORMAL,
    message: '',
    feedCount: 0,
    feeds: []
  },
  {
    id: 3,
    name: '배트캣',
    age: 1,
    weight: 1,
    gender: GENDER.MALE,
    profileImage: require('../assets/images/cat_3.jpg'),
    status: STATUS.NORMAL,
    message: '',
    feedCount: 0,
    feeds: []
  }
]