import {atom, useRecoilState} from 'recoil'
import {recoilPersist} from 'recoil-persist'

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined

const {persistAtom} = recoilPersist({
  key: 'auth',
  storage: sessionStorage
})

const authStore = atom({
  key: 'authStore',
  default: null,
  effects_UNSTABLE: [persistAtom]
})

export const useAuthState = () => {
  const [auth, setAuth] = useRecoilState(authStore)

  return {
    auth,
    setAuth
  }
}