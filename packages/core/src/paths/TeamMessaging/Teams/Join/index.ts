import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/join`;
  }

  /**
   * Adds the current user to the specified team.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/teams/{chatId}/join
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;