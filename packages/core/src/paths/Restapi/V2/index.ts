import Accounts from './Accounts';
import { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path(false)}/v2`;
  }

  public accounts(accountId: (string | null) = '~'): Accounts {
    return new Accounts(this, accountId);
  }
}
export default Index;