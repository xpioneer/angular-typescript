
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


  fmtpages(data: any){
    let arr: any = [];
    let n: number = 0;
    for(let i in data){
      if(typeof data[i] !== 'object'){
        if(data[i] !== undefined && data[i] !== '' && data[i] !== null){
          let s = encodeURIComponent(i) + '=' + encodeURIComponent(data[i]);
          arr.push(s);
        }
      }else {
        if(data[i]['val'] !== undefined && data[i]['val'] !== '' && data[i]['val'] !== null){
          let num = n++;
          arr.push(encodeURIComponent('colFilter['+ num +'][col]') + '=' + i);
          arr.push(encodeURIComponent('colFilter['+ num +'][exp]') + '=' + encodeURIComponent(data[i]['exp']?data[i]['exp']:'='));
          arr.push(encodeURIComponent('colFilter['+ num +'][val]') + '=' + encodeURIComponent(data[i]['val']));
        }
      }
    }
    arr.push('_=' + Date.now());
    return arr.join('&');
  }
}