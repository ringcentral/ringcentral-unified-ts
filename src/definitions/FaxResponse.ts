import CallerInfoFrom from './CallerInfoFrom'
import CallerInfoTo from './CallerInfoTo'
import MessageAttachmentInfoIntId from './MessageAttachmentInfoIntId'

class FaxResponse
{
    /**
     * Internal identifier of a message
     */
    id?: number

    /**
     * Canonical URI of a message
     */
    uri?: string

    /**
     * Message type - 'Fax'
     */
    type?: string

    /**
     * Sender information
     */
    from?: CallerInfoFrom

    /**
     * Recipient information
     */
    to?: CallerInfoTo[]

    /**
     * Message creation datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    creationTime?: string

    /**
     * Message read status
     * Enum: Read, Unread
     */
    readStatus?: string

    /**
     * Message priority
     * Enum: Normal, High
     */
    priority?: string

    /**
     * The list of message attachments
     */
    attachments?: MessageAttachmentInfoIntId[]

    /**
     * Message direction
     * Enum: Inbound, Outbound
     */
    direction?: string

    /**
     * Message availability status. Message in 'Deleted' state is still preserved with all its attachments and can be restored. 'Purged' means that all attachments are already deleted and the message itself is about to be physically deleted shortly
     * Enum: Alive, Deleted, Purged
     */
    availability?: string

    /**
     * Message status. 'Queued' - the message is queued for sending; 'Sent' - a message is successfully sent; 'SendingFailed' - a message sending attempt has failed; 'Received' - a message is received (inbound messages have this status by default)
     * Enum: Queued, Sent, SendingFailed, Received
     */
    messageStatus?: string

    /**
     * Resolution of a fax message. ('High' for black and white image scanned at 200 dpi, 'Low' for black and white image scanned at 100 dpi)
     * Enum: High, Low
     */
    faxResolution?: string

    /**
     * Page count in a fax message
     */
    faxPageCount?: number

    /**
     * Datetime when the message was modified on server in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    lastModifiedTime?: string

    /**
     * Cover page identifier. For the list of available cover page identifiers please call the Fax Cover Pages method
     */
    coverIndex?: number

    /**
     * Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
     */
    coverPageText?: string
}

export default FaxResponse