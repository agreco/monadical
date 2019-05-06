
class Empty {
  
  public map (_: any): Empty {
    return this;
  }
  
  public fmap (_: any): Empty {
    return new Empty();
  }
  
  public toString (): string {
    return 'Empty[]';
  }
}

export default Empty;
