export const initialData = {
  a: 1
}

export function reducer(state = initialData, { type, payload }) {
  switch (type) {
    case 'inc':
      return {
        ...state,
        a: state.a + 1
      }
    default:
      throw new Error()
  }
}
