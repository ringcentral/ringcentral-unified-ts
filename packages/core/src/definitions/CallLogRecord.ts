import CallLogCallerInfo from './CallLogCallerInfo';
import CallLogRecordingInfo from './CallLogRecordingInfo';
import ActiveCallsRecordExtensionInfo from './ActiveCallsRecordExtensionInfo';
import CallLogDelegateInfo from './CallLogDelegateInfo';
import CallLogRecordLegInfo from './CallLogRecordLegInfo';
import CallLogRecordMessage from './CallLogRecordMessage';

interface CallLogRecord {
  /**
   * Internal identifier of a cal log record
   */
  id?: string;

  /**
   * Canonical URI of a call log record
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a call session
   */
  sessionId?: string;

  /**
   * Telephony identifier of a call session
   */
  telephonySessionId?: string;

  /**
   */
  from?: CallLogCallerInfo;

  /**
   */
  to?: CallLogCallerInfo;

  /**
   * The type of a call
   */
  type?: ('Voice' | 'Fax');

  /**
   * The direction of a call
   */
  direction?: ('Inbound' | 'Outbound');

  /**
   * The internal action corresponding to the call operation
   */
  action?: ('Unknown' | 'Phone Call' | 'Phone Login' | 'Calling Card' | 'VoIP Call' | 'Paging' | 'Hunting' | 'Call Park' | 'Monitoring' | 'Text Relay' | 'External Application' | 'Park Location' | 'CallOut-CallMe' | 'Conference Call' | 'Move' | 'RC Meetings' | 'Accept Call' | 'FindMe' | 'FollowMe' | 'RingMe' | 'Transfer' | 'Call Return' | 'Ring Directly' | 'RingOut Web' | 'RingOut PC' | 'RingOut Mobile' | '411 Info' | 'Emergency' | 'E911 Update' | 'Support' | 'Incoming Fax' | 'Outgoing Fax');

  /**
   * The result of the call operation
   */
  result?: ('Unknown' | 'Accepted' | 'Call connected' | 'In Progress' | 'Voicemail' | 'Reply' | 'Missed' | 'Busy' | 'Rejected' | 'No Answer' | 'Hang Up' | 'Blocked' | 'ResultEmpty' | 'Suspended account' | 'Call Failed' | 'Call Failure' | 'Internal Error' | 'IP Phone Offline' | 'No Calling Credit' | 'Not Allowed' | 'Restricted Number' | 'Wrong Number' | 'Answered Not Accepted' | 'Stopped' | 'Poor Line Quality' | 'International Disabled' | 'International Restricted' | 'Abandoned' | 'Declined' | 'Received' | 'Fax on Demand' | 'Partial Receive' | 'Receive Error' | 'Fax Receipt Error' | 'Fax Partially Sent' | 'No fax machine' | 'Send Error' | 'Sent' | 'Fax Not Sent' | 'Fax Poor Line');

  /**
   * The reason of the call result:
 *    * `Accepted` - The call was connected to and accepted by this number
 *    * `Connected` - The call was answered, but there was no response on how to handle the call (for example, a voice mail system answered the call and did not push "1" to accept)
 *    * `Line Busy` - The phone number you dialed was busy
 *    * `Not Answered` - The phone number you dialed was not answered
 *    * `No Answer` - You did not answer the call
 *    * `Hang Up` - The caller hung up before the call was answered
 *    * `Stopped` - This attempt was stopped because the call was answered by another phone
 *    * `Internal Error` - An internal error occurred when making the call. Please try again
 *    * `No Credit` - There was not enough Calling Credit on your account to make this call
 *    * `Restricted Number` - The number you dialed is restricted by RingCentral
 *    * `Wrong Number` - The number you dialed has either been disconnected or is not a valid phone number. Please check the number and try again
 *    * `International Disabled` - International calling is not enabled on your account. Contact customer service to activate International Calling
 *    * `International Restricted` - The country and/or area you attempted to call has been prohibited by your administrator
 *    * `Bad Number` - An error occurred when making the call. Please check the number before trying again
 *    * `Info 411 Restricted` - Calling to 411 Information Services is restricted
 *    * `Customer 611 Restricted` - 611 customer service is not supported. Please contact customer service at <(888) 555-1212>
 *    * `No Digital Line` - This DigitalLine was either not plugged in or did not have an internet connection
 *    * `Failed Try Again` - Call failed. Please try again
 *    * `Max Call Limit` - The number of simultaneous calls to your account has reached its limit
 *    * `Too Many Calls` - The number of simultaneous calls for per DigitalLine associated with Other Phone has reached its limit. Please contact customer service
 *    * `Calls Not Accepted` - Your account was not accepting calls at this time
 *    * `Number Not Allowed` - The number that was dialed to access your account is not allowed
 *    * `Number Blocked` - This number is in your Blocked Numbers list
 *    * `Number Disabled` - The phone number and/or area you attempted to call has been prohibited by your administrator
 *    * `Resource Error` - An error occurred when making the call. Please try again
 *    * `Call Loop` - A call loop occurred due to an incorrect call forwarding configuration. Please check that you are not forwarding calls back to your own account
 *    * `Fax Not Received` - An incoming fax could not be received because a proper connection with the sender's fax machine could not be established
 *    * `Fax Partially Sent` - The fax was only partially sent. Possible explanations include phone line quality to poor to maintain the connection or the call was dropped
 *    * `Fax Not Sent` - An attempt to send the fax was made, but could not connect with the receiving fax machine
 *    * `Fax Poor Line` - An attempt to send the fax was made, but the phone line quality was too poor to send the fax
 *    * `Fax Prepare Error` - An internal error occurred when preparing the fax. Please try again
 *    * `Fax Save Error` - An internal error occurred when saving the fax. Please try again
 *    * `Fax Send Error` - An error occurred when sending the fax. Please try again
 *    * `DescNoE911Address` - The call was rejected due to no E911 address
   */
  reason?: ('Accepted' | 'Connected' | 'line Busy' | 'Not Answered' | 'No Answer' | 'Hang Up' | 'Stopped' | 'Internal Error' | 'No Credit' | 'Restricted Number' | 'Wrong Number' | 'International Disabled' | 'International Restricted' | 'Bad Number' | 'Info 411 Restricted' | 'Customer 611 Restricted' | 'No Digital Line' | 'Failed Try Again' | 'Max Call Limit' | 'Too Many Calls' | 'Calls Not Accepted' | 'Number Not Allowed' | 'Number Blocked' | 'Number Disabled' | 'Resource Error' | 'Call Loop' | 'Fax Not Received' | 'Fax Partially Sent' | 'Fax Not Sent' | 'Fax Poor Line' | 'Fax Prepare Error' | 'Fax Save Error' | 'Fax Send Error' | 'DescNoE911Address');

  /**
   * The call start datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  startTime?: string;

  /**
   * Call duration in seconds
   * Format: int32
   */
  duration?: number;

  /**
   */
  recording?: CallLogRecordingInfo;

  /**
   * For 'Detailed' view only. The datetime when the call log record was modified in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * The type of a call transport. 'PSTN' indicates that a call leg was initiated
 *  from the PSTN network provider; 'VoIP' - from an RC phone.
   */
  transport?: ('PSTN' | 'VoIP');

  /**
   */
  extension?: ActiveCallsRecordExtensionInfo;

  /**
   */
  delegate?: CallLogDelegateInfo;

  /**
   * For 'Detailed' view only. Leg description
   * Required
   */
  legs?: CallLogRecordLegInfo[];

  /**
   */
  message?: CallLogRecordMessage;

  /**
   * Returned only if this call was deleted. Value is set to 'True' in this case
   */
  deleted?: boolean;

  /**
   * The internal type of the call
   */
  internalType?: ('Local' | 'LongDistance' | 'International' | 'Sip' | 'RingMe' | 'RingOut' | 'Usual' | 'TollFreeNumber' | 'VerificationNumber' | 'Vma' | 'LocalNumber' | 'ImsOutgoing' | 'ImsIncoming');
}

export default CallLogRecord;