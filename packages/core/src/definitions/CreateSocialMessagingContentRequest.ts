import type ContentContextData from './ContentContextData';

/**
 * Request body for operation createSocialMessagingContent
 */
interface CreateSocialMessagingContentRequest {
  /**
   * Identity identifier of the content author. Not mandatory on creation,
   *  by default it uses the token's user first identity on channel
   */
  authorIdentityId?: string;

  /**
   * Content body. On creation this field is mandatory except for WhatsApp content
   *  using templates. The following are the channels supported and their **max length**
   *  restrictions (in brackets):
   *
   *    - *Apple Messages For Business* (10000)
   *    - *Email* (262144)
   *    - *RingCX Digital Messaging* (1024)
   *    - *Facebook* (8000)
   *    - *Google My Business* (4000)
   *    - *Instagram* (950)
   *    - *Instagram Messaging* (1000)
   *    - *LinkedIn* (3000)
   *    - *Messenger* (2000)
   *    - *Twitter* (280)
   *    - *Viber* (7000)
   *    - *WhatsApp* (3800)
   *    - *Youtube* (8000)
   * Example: Body of the content
   */
  body?: string;

  /**
   * Content identifier to which this content is a reply to. On creation, if omitted,
   *  a new discussion will be created. If the channel does not support discussion initiation,
   *  this parameter is mandatory
   */
  inReplyToContentId?: string;

  /**
   * If set to `true`, then the content is publicly visible on remote channel.
   *  Private content is NOT supported on every channel
   * Default: true
   */
  public?: boolean;

  /**
   * Channel identifier.
   * Example: 506d9e817aa58d1259000f12
   */
  channelId?: string;

  /**
   * List of attachment identifiers to be added to the content
   * Example: 541014e17aa58d8ccf000023,541014e17aa58d8ccf000023
   */
  attachmentIds?: string[];

  /**
   * Applicable to Email channels only. The subject of the email.
   *  This field is mandatory when initiating a discussion
   * Example: An email title
   */
  title?: string;

  /**
   * Applicable to Email channels only.
   *  An array containing the email addresses used in sections of the email.
   *  This parameter is mandatory when initiating a discussion
   */
  to?: string[];

  /**
   * Applicable to Email channels only.
   *  An array containing the email addresses used in sections of the email.
   *  This parameter is mandatory when initiating a discussion
   */
  cc?: string[];

  /**
   * Applicable to Email channels only.
   *  An array containing the email addresses used in sections of the email.
   *  This parameter is mandatory when initiating a discussion
   */
  bcc?: string[];

  /**
   * Applicable to WhatsApp channels only. Name of the WhatsApp template to use for the content.
   *  All available template names are visible on the WhatsApp Business Manager interface
   * Example: customer_order_shipment_template
   */
  templateName?: string;

  /**
   * Applicable to WhatsApp channels only. Language of the WhatsApp template
   *  to use for the content. All available template languages are visible on
   *  the WhatsApp Business Manager interface. Language specified must conform
   *  to the ISO 639-1 alpha-2 codes for representing the names of languages
   * Example: fr
   */
  templateLanguage?: string;

  /**
   * Applicable to WhatsApp channels only. Component configuration of the WhatsApp
   *  template to use for the content. All available components are visible on
   *  the WhatsApp Business Manager interface
   * Example: [object Object],[object Object]
   */
  components?: object[];

  /**
   */
  contextData?: ContentContextData;

  /**
   * Auto submitted content:
   *    - won't reopen tasks or interventions
   *    - can be used to send automatic messages like asking an user to follow on twitter, sending a survey, etc,
   *    - doesn't get included in statistics
   */
  autoSubmitted?: boolean;
}

export default CreateSocialMessagingContentRequest;