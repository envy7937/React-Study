import {atom, useRecoilState} from 'recoil'
import {recoilPersist} from 'recoil-persist'
import {catsData} from '../../../../data/catsData'

const {persistAtom} = recoilPersist()

const catsStore = atom({
  key: 'catsStore',
  default: catsData,
  effects_UNSTABLE: [persistAtom]
})

const selectedCatStore = atom({
  key: 'selectedCatStore',
  default: null
})

export const useCatsState = () => {
  const [cats, setCats] = useRecoilState(catsStore)
  const [selectedCat, setSelectedCat] = useRecoilState(selectedCatStore)

  return {
    cats,
    setCats,
    selectedCat,
    setSelectedCat
  }
}