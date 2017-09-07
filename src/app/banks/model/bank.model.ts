
export class BankModel {
  public bankName    : string;
  public status      : string;
  public logoUrl     : string;
  public queryUrl    : string;
  public adSlogan    : string;
  public label       : string;
  public serviceCity : Array<number|any>;
}

export class BankListModel {
  public id        : number;
  public bankName    : string;
  public status      : string;
  public logoUrl     : string;
  public queryUrl    : string;
  public adSlogan    : string;
  public label       : string;
  public createdTime : string;
}