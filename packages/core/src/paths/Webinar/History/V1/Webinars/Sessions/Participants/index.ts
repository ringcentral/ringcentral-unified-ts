import ParticipantListResource from '../../../../../../../definitions/ParticipantListResource';
import RcwHistoryListParticipantsParameters from '../../../../../../../definitions/RcwHistoryListParticipantsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/participants`;
  }

  /**
   * Returns the list of participants of a given Webinar Session.
 *
   * HTTP Method: get
   * Endpoint: /webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}/participants
   * Rate Limit Group: Heavy
   * App Permission: ReadWebinars
   */
  public async get(queryParams?: RcwHistoryListParticipantsParameters, restRequestConfig?: RestRequestConfig): Promise<ParticipantListResource> {
    const r = await this.rc.get<ParticipantListResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;