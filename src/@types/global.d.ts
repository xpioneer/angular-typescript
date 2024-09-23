// 

interface Date {
  format: (s: string) => string
}

type AnyObject<T = any> = Record<string | number | symbol, T>