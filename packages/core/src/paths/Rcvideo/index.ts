import V2 from './V2';
import V1 from './V1';
import { RingCentralInterface } from '../../types';

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }

  public path(withParameter = false): string {
    return '/rcvideo';
  }

  public v1(): V1 {
    return new V1(this);
  }

  public v2(): V2 {
    return new V2(this);
  }
}
export default Index;