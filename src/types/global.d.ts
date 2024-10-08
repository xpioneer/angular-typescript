
interface Date {
  format: (s: string) => string
}

type AnyObject<T = any> = Record<string, T>


declare const classes: Readonly<AnyObject<string>>

declare module '*.less' {
  export default classes
}

declare module '*.module.less' {
  export default classes
}
