/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The SpecialModelName model module.
 * @module model/SpecialModelName
 * @version 1.0.0
 */
export class SpecialModelName {
  /**
   * Constructs a new <code>SpecialModelName</code>.
   * @alias module:model/SpecialModelName
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SpecialModelName</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecialModelName} obj Optional instance to populate.
   * @return {module:model/SpecialModelName} The populated <code>SpecialModelName</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SpecialModelName();
      if (data.hasOwnProperty('$special[property.name]'))
        obj.specialPropertyName = ApiClient.convertToType(data['$special[property.name]'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} specialPropertyName
 */
SpecialModelName.prototype.specialPropertyName = undefined;


