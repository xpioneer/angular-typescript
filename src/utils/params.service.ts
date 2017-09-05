
export class Params {
  constructor() {}

  format(data: any){
    let arr = [];
    for(let i in data){
      if(data[i] !== undefined && data[i] !== '' && data[i] !== null){
        let s = encodeURIComponent(i) + '=' + encodeURIComponent(data[i]);
        arr.push(s);
      }
    }
    arr.push('_=' + Date.now());
    return arr.join('&');
  }
}