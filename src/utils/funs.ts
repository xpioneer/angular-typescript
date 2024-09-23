
export const storage = {
  get: (key: string): string => {
    const value = localStorage.getItem(key)
    return value || ''
  },

  set: (key: string, value: string) => {
    if (value !== null && value !== undefined) {
      localStorage.setItem(key, value)
    }
  },

  remove: (key: string): void => {
    localStorage.removeItem(key)
  },

  clear(exclude = false) {
    if(exclude) {
    } else {
      localStorage.clear()
    }
  }
}
