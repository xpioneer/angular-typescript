
const prototypeFun = () => {
  Date.prototype['format'] = function format(fmt: string) {
    if(Object.prototype.toString.call(this) !== '[object Date]') {
      throw new Error('this caller must be a Date type.')
    }
    if(!fmt) fmt = 'YYYY-MM-DD HH:mm:ss:SSS'
    let d: Date = this
    let o = {
      'Y+': d.getFullYear(),
      'M+': (d.getMonth() + 1),
      'D+': d.getDate(),
      'H+': d.getHours(),
      'm+': d.getMinutes(),
      's+': d.getSeconds(),
      'S+': d.getMilliseconds()
    }
    for(let k in o) {
      let matched = fmt.match(k)
      let _k = matched ? matched[0] : null
      const v = o[k as keyof typeof o]
      fmt = fmt.replace(_k, (`${v > 9 ? v : '0'}${v}`))
    }
    return fmt
  }
} 

export default prototypeFun()