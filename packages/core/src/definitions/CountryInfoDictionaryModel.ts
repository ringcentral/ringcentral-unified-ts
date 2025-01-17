interface CountryInfoDictionaryModel {
  /**
   * Internal identifier of a country
   */
  id?: string;

  /**
   * Canonical URI of a country resource
   * Format: uri
   */
  uri?: string;

  /**
   * The official name of a country
   */
  name?: string;

  /**
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
   */
  isoCode?: string;

  /**
   * Country calling code defined by [ITU-T](http://en.wikipedia.org/wiki/ITU-T)
   *  recommendations, [E.123](http://en.wikipedia.org/wiki/E.123) and
   *  [E.164](http://en.wikipedia.org/wiki/E.164).
   *  See also [Calling Codes](http://en.wikipedia.org/wiki/List_of_country_calling_codes)
   */
  callingCode?: string;

  /**
   * Emergency calling feature availability/emergency address requirement indicator
   */
  emergencyCalling?: boolean;

  /**
   * Indicates that phone numbers are available for this country
   */
  numberSelling?: boolean;

  /**
   * Indicates that login with the phone number of this country is allowed
   */
  loginAllowed?: boolean;

  /**
   * Indicates that signup/billing is allowed for this country
   */
  signupAllowed?: boolean;

  /**
   * Indicates that free phone line for softphone is available for this country
   */
  freeSoftphoneLine?: boolean;

  /**
   * Indicates that the local dialing is supported in this country and default area code can be set
   */
  localDialing?: boolean;
}

export default CountryInfoDictionaryModel;
