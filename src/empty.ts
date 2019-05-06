
import noop from './noop';

class Empty {
  
  public map (_: any): void {
    return noop();
  }
  
  public fmap (_: any): Empty {
    return new Empty();
  }
  
  public toString (): string {
    return 'Empty[]';
  }
}

export default Empty;
