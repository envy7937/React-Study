import { useSelector, shallowEqual } from 'react-redux'

/**
 * selector 안티패턴을 피하기 위한 커스텀 훅
 * 
 * @param selector
 * @param equalityFn
 * @returns {any}
 */
export default function useSelectorTyped(selector, equalityFn = shallowEqual) {
  return useSelector(selector, equalityFn)
}
