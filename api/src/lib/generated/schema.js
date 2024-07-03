/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.FormInvalid = (function() {

    /**
     * Properties of a FormInvalid.
     * @exports IFormInvalid
     * @interface IFormInvalid
     * @property {string|null} [message] FormInvalid message
     * @property {string|null} [key] FormInvalid key
     * @property {string|null} [value] FormInvalid value
     */

    /**
     * Constructs a new FormInvalid.
     * @exports FormInvalid
     * @classdesc Represents a FormInvalid.
     * @implements IFormInvalid
     * @constructor
     * @param {IFormInvalid=} [properties] Properties to set
     */
    function FormInvalid(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FormInvalid message.
     * @member {string} message
     * @memberof FormInvalid
     * @instance
     */
    FormInvalid.prototype.message = "";

    /**
     * FormInvalid key.
     * @member {string} key
     * @memberof FormInvalid
     * @instance
     */
    FormInvalid.prototype.key = "";

    /**
     * FormInvalid value.
     * @member {string} value
     * @memberof FormInvalid
     * @instance
     */
    FormInvalid.prototype.value = "";

    /**
     * Creates a new FormInvalid instance using the specified properties.
     * @function create
     * @memberof FormInvalid
     * @static
     * @param {IFormInvalid=} [properties] Properties to set
     * @returns {FormInvalid} FormInvalid instance
     */
    FormInvalid.create = function create(properties) {
        return new FormInvalid(properties);
    };

    /**
     * Encodes the specified FormInvalid message. Does not implicitly {@link FormInvalid.verify|verify} messages.
     * @function encode
     * @memberof FormInvalid
     * @static
     * @param {IFormInvalid} message FormInvalid message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FormInvalid.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified FormInvalid message, length delimited. Does not implicitly {@link FormInvalid.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FormInvalid
     * @static
     * @param {IFormInvalid} message FormInvalid message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FormInvalid.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FormInvalid message from the specified reader or buffer.
     * @function decode
     * @memberof FormInvalid
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FormInvalid} FormInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FormInvalid.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormInvalid();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.message = reader.string();
                    break;
                }
            case 2: {
                    message.key = reader.string();
                    break;
                }
            case 3: {
                    message.value = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FormInvalid message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FormInvalid
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FormInvalid} FormInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FormInvalid.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FormInvalid message.
     * @function verify
     * @memberof FormInvalid
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FormInvalid.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isString(message.value))
                return "value: string expected";
        return null;
    };

    /**
     * Creates a FormInvalid message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FormInvalid
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FormInvalid} FormInvalid
     */
    FormInvalid.fromObject = function fromObject(object) {
        if (object instanceof $root.FormInvalid)
            return object;
        var message = new $root.FormInvalid();
        if (object.message != null)
            message.message = String(object.message);
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a FormInvalid message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FormInvalid
     * @static
     * @param {FormInvalid} message FormInvalid
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FormInvalid.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.message = "";
            object.key = "";
            object.value = "";
        }
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this FormInvalid to JSON.
     * @function toJSON
     * @memberof FormInvalid
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FormInvalid.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FormInvalid
     * @function getTypeUrl
     * @memberof FormInvalid
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FormInvalid.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FormInvalid";
    };

    return FormInvalid;
})();

$root.FormsInvalid = (function() {

    /**
     * Properties of a FormsInvalid.
     * @exports IFormsInvalid
     * @interface IFormsInvalid
     * @property {Array.<IFormInvalid>|null} [invalid] FormsInvalid invalid
     */

    /**
     * Constructs a new FormsInvalid.
     * @exports FormsInvalid
     * @classdesc Represents a FormsInvalid.
     * @implements IFormsInvalid
     * @constructor
     * @param {IFormsInvalid=} [properties] Properties to set
     */
    function FormsInvalid(properties) {
        this.invalid = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FormsInvalid invalid.
     * @member {Array.<IFormInvalid>} invalid
     * @memberof FormsInvalid
     * @instance
     */
    FormsInvalid.prototype.invalid = $util.emptyArray;

    /**
     * Creates a new FormsInvalid instance using the specified properties.
     * @function create
     * @memberof FormsInvalid
     * @static
     * @param {IFormsInvalid=} [properties] Properties to set
     * @returns {FormsInvalid} FormsInvalid instance
     */
    FormsInvalid.create = function create(properties) {
        return new FormsInvalid(properties);
    };

    /**
     * Encodes the specified FormsInvalid message. Does not implicitly {@link FormsInvalid.verify|verify} messages.
     * @function encode
     * @memberof FormsInvalid
     * @static
     * @param {IFormsInvalid} message FormsInvalid message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FormsInvalid.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.invalid != null && message.invalid.length)
            for (var i = 0; i < message.invalid.length; ++i)
                $root.FormInvalid.encode(message.invalid[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FormsInvalid message, length delimited. Does not implicitly {@link FormsInvalid.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FormsInvalid
     * @static
     * @param {IFormsInvalid} message FormsInvalid message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FormsInvalid.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FormsInvalid message from the specified reader or buffer.
     * @function decode
     * @memberof FormsInvalid
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FormsInvalid} FormsInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FormsInvalid.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormsInvalid();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.invalid && message.invalid.length))
                        message.invalid = [];
                    message.invalid.push($root.FormInvalid.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FormsInvalid message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FormsInvalid
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FormsInvalid} FormsInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FormsInvalid.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FormsInvalid message.
     * @function verify
     * @memberof FormsInvalid
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FormsInvalid.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.invalid != null && message.hasOwnProperty("invalid")) {
            if (!Array.isArray(message.invalid))
                return "invalid: array expected";
            for (var i = 0; i < message.invalid.length; ++i) {
                var error = $root.FormInvalid.verify(message.invalid[i]);
                if (error)
                    return "invalid." + error;
            }
        }
        return null;
    };

    /**
     * Creates a FormsInvalid message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FormsInvalid
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FormsInvalid} FormsInvalid
     */
    FormsInvalid.fromObject = function fromObject(object) {
        if (object instanceof $root.FormsInvalid)
            return object;
        var message = new $root.FormsInvalid();
        if (object.invalid) {
            if (!Array.isArray(object.invalid))
                throw TypeError(".FormsInvalid.invalid: array expected");
            message.invalid = [];
            for (var i = 0; i < object.invalid.length; ++i) {
                if (typeof object.invalid[i] !== "object")
                    throw TypeError(".FormsInvalid.invalid: object expected");
                message.invalid[i] = $root.FormInvalid.fromObject(object.invalid[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a FormsInvalid message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FormsInvalid
     * @static
     * @param {FormsInvalid} message FormsInvalid
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FormsInvalid.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.invalid = [];
        if (message.invalid && message.invalid.length) {
            object.invalid = [];
            for (var j = 0; j < message.invalid.length; ++j)
                object.invalid[j] = $root.FormInvalid.toObject(message.invalid[j], options);
        }
        return object;
    };

    /**
     * Converts this FormsInvalid to JSON.
     * @function toJSON
     * @memberof FormsInvalid
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FormsInvalid.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FormsInvalid
     * @function getTypeUrl
     * @memberof FormsInvalid
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FormsInvalid.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FormsInvalid";
    };

    return FormsInvalid;
})();

$root.User = (function() {

    /**
     * Properties of a User.
     * @exports IUser
     * @interface IUser
     * @property {string|null} [id] User id
     * @property {string|null} [phone] User phone
     * @property {string|null} [first_name] User first_name
     * @property {string|null} [last_name] User last_name
     * @property {string|null} [created_at] User created_at
     * @property {string|null} [updated_at] User updated_at
     * @property {IPreferences|null} [preferences] User preferences
     * @property {IDatingProfile|null} [dating_profile] User dating_profile
     * @property {ILimits|null} [limits] User limits
     * @property {Array.<IMedia>|null} [media] User media
     * @property {Array.<ILikes>|null} [likes] User likes
     * @property {Array.<IDislikes>|null} [dislikes] User dislikes
     */

    /**
     * Constructs a new User.
     * @exports User
     * @classdesc Represents a User.
     * @implements IUser
     * @constructor
     * @param {IUser=} [properties] Properties to set
     */
    function User(properties) {
        this.media = [];
        this.likes = [];
        this.dislikes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * User id.
     * @member {string} id
     * @memberof User
     * @instance
     */
    User.prototype.id = "";

    /**
     * User phone.
     * @member {string} phone
     * @memberof User
     * @instance
     */
    User.prototype.phone = "";

    /**
     * User first_name.
     * @member {string} first_name
     * @memberof User
     * @instance
     */
    User.prototype.first_name = "";

    /**
     * User last_name.
     * @member {string} last_name
     * @memberof User
     * @instance
     */
    User.prototype.last_name = "";

    /**
     * User created_at.
     * @member {string} created_at
     * @memberof User
     * @instance
     */
    User.prototype.created_at = "";

    /**
     * User updated_at.
     * @member {string} updated_at
     * @memberof User
     * @instance
     */
    User.prototype.updated_at = "";

    /**
     * User preferences.
     * @member {IPreferences|null|undefined} preferences
     * @memberof User
     * @instance
     */
    User.prototype.preferences = null;

    /**
     * User dating_profile.
     * @member {IDatingProfile|null|undefined} dating_profile
     * @memberof User
     * @instance
     */
    User.prototype.dating_profile = null;

    /**
     * User limits.
     * @member {ILimits|null|undefined} limits
     * @memberof User
     * @instance
     */
    User.prototype.limits = null;

    /**
     * User media.
     * @member {Array.<IMedia>} media
     * @memberof User
     * @instance
     */
    User.prototype.media = $util.emptyArray;

    /**
     * User likes.
     * @member {Array.<ILikes>} likes
     * @memberof User
     * @instance
     */
    User.prototype.likes = $util.emptyArray;

    /**
     * User dislikes.
     * @member {Array.<IDislikes>} dislikes
     * @memberof User
     * @instance
     */
    User.prototype.dislikes = $util.emptyArray;

    /**
     * Creates a new User instance using the specified properties.
     * @function create
     * @memberof User
     * @static
     * @param {IUser=} [properties] Properties to set
     * @returns {User} User instance
     */
    User.create = function create(properties) {
        return new User(properties);
    };

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @function encode
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.phone);
        if (message.first_name != null && Object.hasOwnProperty.call(message, "first_name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.first_name);
        if (message.last_name != null && Object.hasOwnProperty.call(message, "last_name"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.last_name);
        if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.created_at);
        if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.updated_at);
        if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
            $root.Preferences.encode(message.preferences, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.dating_profile != null && Object.hasOwnProperty.call(message, "dating_profile"))
            $root.DatingProfile.encode(message.dating_profile, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.limits != null && Object.hasOwnProperty.call(message, "limits"))
            $root.Limits.encode(message.limits, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.media != null && message.media.length)
            for (var i = 0; i < message.media.length; ++i)
                $root.Media.encode(message.media[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.likes != null && message.likes.length)
            for (var i = 0; i < message.likes.length; ++i)
                $root.Likes.encode(message.likes[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.dislikes != null && message.dislikes.length)
            for (var i = 0; i < message.dislikes.length; ++i)
                $root.Dislikes.encode(message.dislikes[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @function encodeDelimited
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a User message from the specified reader or buffer.
     * @function decode
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.User();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.phone = reader.string();
                    break;
                }
            case 3: {
                    message.first_name = reader.string();
                    break;
                }
            case 4: {
                    message.last_name = reader.string();
                    break;
                }
            case 5: {
                    message.created_at = reader.string();
                    break;
                }
            case 6: {
                    message.updated_at = reader.string();
                    break;
                }
            case 7: {
                    message.preferences = $root.Preferences.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.dating_profile = $root.DatingProfile.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.limits = $root.Limits.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    if (!(message.media && message.media.length))
                        message.media = [];
                    message.media.push($root.Media.decode(reader, reader.uint32()));
                    break;
                }
            case 11: {
                    if (!(message.likes && message.likes.length))
                        message.likes = [];
                    message.likes.push($root.Likes.decode(reader, reader.uint32()));
                    break;
                }
            case 12: {
                    if (!(message.dislikes && message.dislikes.length))
                        message.dislikes = [];
                    message.dislikes.push($root.Dislikes.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a User message.
     * @function verify
     * @memberof User
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    User.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.phone != null && message.hasOwnProperty("phone"))
            if (!$util.isString(message.phone))
                return "phone: string expected";
        if (message.first_name != null && message.hasOwnProperty("first_name"))
            if (!$util.isString(message.first_name))
                return "first_name: string expected";
        if (message.last_name != null && message.hasOwnProperty("last_name"))
            if (!$util.isString(message.last_name))
                return "last_name: string expected";
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            if (!$util.isString(message.created_at))
                return "created_at: string expected";
        if (message.updated_at != null && message.hasOwnProperty("updated_at"))
            if (!$util.isString(message.updated_at))
                return "updated_at: string expected";
        if (message.preferences != null && message.hasOwnProperty("preferences")) {
            var error = $root.Preferences.verify(message.preferences);
            if (error)
                return "preferences." + error;
        }
        if (message.dating_profile != null && message.hasOwnProperty("dating_profile")) {
            var error = $root.DatingProfile.verify(message.dating_profile);
            if (error)
                return "dating_profile." + error;
        }
        if (message.limits != null && message.hasOwnProperty("limits")) {
            var error = $root.Limits.verify(message.limits);
            if (error)
                return "limits." + error;
        }
        if (message.media != null && message.hasOwnProperty("media")) {
            if (!Array.isArray(message.media))
                return "media: array expected";
            for (var i = 0; i < message.media.length; ++i) {
                var error = $root.Media.verify(message.media[i]);
                if (error)
                    return "media." + error;
            }
        }
        if (message.likes != null && message.hasOwnProperty("likes")) {
            if (!Array.isArray(message.likes))
                return "likes: array expected";
            for (var i = 0; i < message.likes.length; ++i) {
                var error = $root.Likes.verify(message.likes[i]);
                if (error)
                    return "likes." + error;
            }
        }
        if (message.dislikes != null && message.hasOwnProperty("dislikes")) {
            if (!Array.isArray(message.dislikes))
                return "dislikes: array expected";
            for (var i = 0; i < message.dislikes.length; ++i) {
                var error = $root.Dislikes.verify(message.dislikes[i]);
                if (error)
                    return "dislikes." + error;
            }
        }
        return null;
    };

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof User
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {User} User
     */
    User.fromObject = function fromObject(object) {
        if (object instanceof $root.User)
            return object;
        var message = new $root.User();
        if (object.id != null)
            message.id = String(object.id);
        if (object.phone != null)
            message.phone = String(object.phone);
        if (object.first_name != null)
            message.first_name = String(object.first_name);
        if (object.last_name != null)
            message.last_name = String(object.last_name);
        if (object.created_at != null)
            message.created_at = String(object.created_at);
        if (object.updated_at != null)
            message.updated_at = String(object.updated_at);
        if (object.preferences != null) {
            if (typeof object.preferences !== "object")
                throw TypeError(".User.preferences: object expected");
            message.preferences = $root.Preferences.fromObject(object.preferences);
        }
        if (object.dating_profile != null) {
            if (typeof object.dating_profile !== "object")
                throw TypeError(".User.dating_profile: object expected");
            message.dating_profile = $root.DatingProfile.fromObject(object.dating_profile);
        }
        if (object.limits != null) {
            if (typeof object.limits !== "object")
                throw TypeError(".User.limits: object expected");
            message.limits = $root.Limits.fromObject(object.limits);
        }
        if (object.media) {
            if (!Array.isArray(object.media))
                throw TypeError(".User.media: array expected");
            message.media = [];
            for (var i = 0; i < object.media.length; ++i) {
                if (typeof object.media[i] !== "object")
                    throw TypeError(".User.media: object expected");
                message.media[i] = $root.Media.fromObject(object.media[i]);
            }
        }
        if (object.likes) {
            if (!Array.isArray(object.likes))
                throw TypeError(".User.likes: array expected");
            message.likes = [];
            for (var i = 0; i < object.likes.length; ++i) {
                if (typeof object.likes[i] !== "object")
                    throw TypeError(".User.likes: object expected");
                message.likes[i] = $root.Likes.fromObject(object.likes[i]);
            }
        }
        if (object.dislikes) {
            if (!Array.isArray(object.dislikes))
                throw TypeError(".User.dislikes: array expected");
            message.dislikes = [];
            for (var i = 0; i < object.dislikes.length; ++i) {
                if (typeof object.dislikes[i] !== "object")
                    throw TypeError(".User.dislikes: object expected");
                message.dislikes[i] = $root.Dislikes.fromObject(object.dislikes[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @function toObject
     * @memberof User
     * @static
     * @param {User} message User
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    User.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.media = [];
            object.likes = [];
            object.dislikes = [];
        }
        if (options.defaults) {
            object.id = "";
            object.phone = "";
            object.first_name = "";
            object.last_name = "";
            object.created_at = "";
            object.updated_at = "";
            object.preferences = null;
            object.dating_profile = null;
            object.limits = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.phone != null && message.hasOwnProperty("phone"))
            object.phone = message.phone;
        if (message.first_name != null && message.hasOwnProperty("first_name"))
            object.first_name = message.first_name;
        if (message.last_name != null && message.hasOwnProperty("last_name"))
            object.last_name = message.last_name;
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            object.created_at = message.created_at;
        if (message.updated_at != null && message.hasOwnProperty("updated_at"))
            object.updated_at = message.updated_at;
        if (message.preferences != null && message.hasOwnProperty("preferences"))
            object.preferences = $root.Preferences.toObject(message.preferences, options);
        if (message.dating_profile != null && message.hasOwnProperty("dating_profile"))
            object.dating_profile = $root.DatingProfile.toObject(message.dating_profile, options);
        if (message.limits != null && message.hasOwnProperty("limits"))
            object.limits = $root.Limits.toObject(message.limits, options);
        if (message.media && message.media.length) {
            object.media = [];
            for (var j = 0; j < message.media.length; ++j)
                object.media[j] = $root.Media.toObject(message.media[j], options);
        }
        if (message.likes && message.likes.length) {
            object.likes = [];
            for (var j = 0; j < message.likes.length; ++j)
                object.likes[j] = $root.Likes.toObject(message.likes[j], options);
        }
        if (message.dislikes && message.dislikes.length) {
            object.dislikes = [];
            for (var j = 0; j < message.dislikes.length; ++j)
                object.dislikes[j] = $root.Dislikes.toObject(message.dislikes[j], options);
        }
        return object;
    };

    /**
     * Converts this User to JSON.
     * @function toJSON
     * @memberof User
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    User.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for User
     * @function getTypeUrl
     * @memberof User
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/User";
    };

    return User;
})();

$root.Preferences = (function() {

    /**
     * Properties of a Preferences.
     * @exports IPreferences
     * @interface IPreferences
     * @property {string|null} [id] Preferences id
     * @property {string|null} [owner_id] Preferences owner_id
     * @property {string|null} [language] Preferences language
     */

    /**
     * Constructs a new Preferences.
     * @exports Preferences
     * @classdesc Represents a Preferences.
     * @implements IPreferences
     * @constructor
     * @param {IPreferences=} [properties] Properties to set
     */
    function Preferences(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Preferences id.
     * @member {string} id
     * @memberof Preferences
     * @instance
     */
    Preferences.prototype.id = "";

    /**
     * Preferences owner_id.
     * @member {string} owner_id
     * @memberof Preferences
     * @instance
     */
    Preferences.prototype.owner_id = "";

    /**
     * Preferences language.
     * @member {string} language
     * @memberof Preferences
     * @instance
     */
    Preferences.prototype.language = "";

    /**
     * Creates a new Preferences instance using the specified properties.
     * @function create
     * @memberof Preferences
     * @static
     * @param {IPreferences=} [properties] Properties to set
     * @returns {Preferences} Preferences instance
     */
    Preferences.create = function create(properties) {
        return new Preferences(properties);
    };

    /**
     * Encodes the specified Preferences message. Does not implicitly {@link Preferences.verify|verify} messages.
     * @function encode
     * @memberof Preferences
     * @static
     * @param {IPreferences} message Preferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Preferences.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.language);
        return writer;
    };

    /**
     * Encodes the specified Preferences message, length delimited. Does not implicitly {@link Preferences.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Preferences
     * @static
     * @param {IPreferences} message Preferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Preferences.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Preferences message from the specified reader or buffer.
     * @function decode
     * @memberof Preferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Preferences} Preferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Preferences.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Preferences();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.language = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Preferences message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Preferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Preferences} Preferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Preferences.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Preferences message.
     * @function verify
     * @memberof Preferences
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Preferences.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isString(message.language))
                return "language: string expected";
        return null;
    };

    /**
     * Creates a Preferences message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Preferences
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Preferences} Preferences
     */
    Preferences.fromObject = function fromObject(object) {
        if (object instanceof $root.Preferences)
            return object;
        var message = new $root.Preferences();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.language != null)
            message.language = String(object.language);
        return message;
    };

    /**
     * Creates a plain object from a Preferences message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Preferences
     * @static
     * @param {Preferences} message Preferences
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Preferences.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.language = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        return object;
    };

    /**
     * Converts this Preferences to JSON.
     * @function toJSON
     * @memberof Preferences
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Preferences.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Preferences
     * @function getTypeUrl
     * @memberof Preferences
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Preferences.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Preferences";
    };

    return Preferences;
})();

$root.DatingProfile = (function() {

    /**
     * Properties of a DatingProfile.
     * @exports IDatingProfile
     * @interface IDatingProfile
     * @property {string|null} [id] DatingProfile id
     * @property {string|null} [owner_id] DatingProfile owner_id
     * @property {string|null} [birthday] DatingProfile birthday
     * @property {string|null} [gender] DatingProfile gender
     * @property {Array.<string>|null} [fav_vgames] DatingProfile fav_vgames
     * @property {Array.<string>|null} [fav_vgenres] DatingProfile fav_vgenres
     * @property {Array.<string>|null} [fav_vplatforms] DatingProfile fav_vplatforms
     * @property {string|null} [fav_vcharacter] DatingProfile fav_vcharacter
     * @property {boolean|null} [likes_dnd] DatingProfile likes_dnd
     * @property {boolean|null} [likes_anime] DatingProfile likes_anime
     * @property {boolean|null} [likes_bgames] DatingProfile likes_bgames
     * @property {Array.<string>|null} [fav_bgames] DatingProfile fav_bgames
     * @property {number|null} [height] DatingProfile height
     * @property {string|null} [bio] DatingProfile bio
     * @property {Array.<string>|null} [prompts] DatingProfile prompts
     * @property {Array.<string>|null} [known_langs] DatingProfile known_langs
     * @property {string|null} [location] DatingProfile location
     * @property {string|null} [location2] DatingProfile location2
     * @property {string|null} [school] DatingProfile school
     * @property {string|null} [job_title] DatingProfile job_title
     * @property {string|null} [company] DatingProfile company
     * @property {string|null} [top_song] DatingProfile top_song
     * @property {string|null} [top_artist] DatingProfile top_artist
     * @property {string|null} [pronouns] DatingProfile pronouns
     * @property {string|null} [height_unit] DatingProfile height_unit
     * @property {string|null} [sexuality] DatingProfile sexuality
     * @property {string|null} [education] DatingProfile education
     * @property {string|null} [looking_for] DatingProfile looking_for
     * @property {string|null} [relationship] DatingProfile relationship
     * @property {string|null} [family_plans] DatingProfile family_plans
     * @property {string|null} [workout] DatingProfile workout
     * @property {string|null} [personality] DatingProfile personality
     * @property {string|null} [smokes] DatingProfile smokes
     * @property {string|null} [drinks] DatingProfile drinks
     * @property {string|null} [cannabis] DatingProfile cannabis
     * @property {boolean|null} [banned] DatingProfile banned
     * @property {boolean|null} [use_smart_photos] DatingProfile use_smart_photos
     * @property {boolean|null} [hide_distance] DatingProfile hide_distance
     * @property {boolean|null} [hide_age] DatingProfile hide_age
     * @property {boolean|null} [dnd_mode] DatingProfile dnd_mode
     * @property {boolean|null} [show_sexuality] DatingProfile show_sexuality
     * @property {boolean|null} [show_gender] DatingProfile show_gender
     * @property {boolean|null} [show_pronouns] DatingProfile show_pronouns
     * @property {Array.<string>|null} [wanting] DatingProfile wanting
     * @property {string|null} [created_at] DatingProfile created_at
     * @property {string|null} [updated_at] DatingProfile updated_at
     */

    /**
     * Constructs a new DatingProfile.
     * @exports DatingProfile
     * @classdesc Represents a DatingProfile.
     * @implements IDatingProfile
     * @constructor
     * @param {IDatingProfile=} [properties] Properties to set
     */
    function DatingProfile(properties) {
        this.fav_vgames = [];
        this.fav_vgenres = [];
        this.fav_vplatforms = [];
        this.fav_bgames = [];
        this.prompts = [];
        this.known_langs = [];
        this.wanting = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DatingProfile id.
     * @member {string} id
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.id = "";

    /**
     * DatingProfile owner_id.
     * @member {string} owner_id
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.owner_id = "";

    /**
     * DatingProfile birthday.
     * @member {string} birthday
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.birthday = "";

    /**
     * DatingProfile gender.
     * @member {string} gender
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.gender = "";

    /**
     * DatingProfile fav_vgames.
     * @member {Array.<string>} fav_vgames
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.fav_vgames = $util.emptyArray;

    /**
     * DatingProfile fav_vgenres.
     * @member {Array.<string>} fav_vgenres
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.fav_vgenres = $util.emptyArray;

    /**
     * DatingProfile fav_vplatforms.
     * @member {Array.<string>} fav_vplatforms
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.fav_vplatforms = $util.emptyArray;

    /**
     * DatingProfile fav_vcharacter.
     * @member {string} fav_vcharacter
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.fav_vcharacter = "";

    /**
     * DatingProfile likes_dnd.
     * @member {boolean} likes_dnd
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.likes_dnd = false;

    /**
     * DatingProfile likes_anime.
     * @member {boolean} likes_anime
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.likes_anime = false;

    /**
     * DatingProfile likes_bgames.
     * @member {boolean} likes_bgames
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.likes_bgames = false;

    /**
     * DatingProfile fav_bgames.
     * @member {Array.<string>} fav_bgames
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.fav_bgames = $util.emptyArray;

    /**
     * DatingProfile height.
     * @member {number} height
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.height = 0;

    /**
     * DatingProfile bio.
     * @member {string} bio
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.bio = "";

    /**
     * DatingProfile prompts.
     * @member {Array.<string>} prompts
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.prompts = $util.emptyArray;

    /**
     * DatingProfile known_langs.
     * @member {Array.<string>} known_langs
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.known_langs = $util.emptyArray;

    /**
     * DatingProfile location.
     * @member {string} location
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.location = "";

    /**
     * DatingProfile location2.
     * @member {string} location2
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.location2 = "";

    /**
     * DatingProfile school.
     * @member {string} school
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.school = "";

    /**
     * DatingProfile job_title.
     * @member {string} job_title
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.job_title = "";

    /**
     * DatingProfile company.
     * @member {string} company
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.company = "";

    /**
     * DatingProfile top_song.
     * @member {string} top_song
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.top_song = "";

    /**
     * DatingProfile top_artist.
     * @member {string} top_artist
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.top_artist = "";

    /**
     * DatingProfile pronouns.
     * @member {string} pronouns
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.pronouns = "";

    /**
     * DatingProfile height_unit.
     * @member {string} height_unit
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.height_unit = "";

    /**
     * DatingProfile sexuality.
     * @member {string} sexuality
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.sexuality = "";

    /**
     * DatingProfile education.
     * @member {string} education
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.education = "";

    /**
     * DatingProfile looking_for.
     * @member {string} looking_for
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.looking_for = "";

    /**
     * DatingProfile relationship.
     * @member {string} relationship
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.relationship = "";

    /**
     * DatingProfile family_plans.
     * @member {string} family_plans
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.family_plans = "";

    /**
     * DatingProfile workout.
     * @member {string} workout
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.workout = "";

    /**
     * DatingProfile personality.
     * @member {string} personality
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.personality = "";

    /**
     * DatingProfile smokes.
     * @member {string} smokes
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.smokes = "";

    /**
     * DatingProfile drinks.
     * @member {string} drinks
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.drinks = "";

    /**
     * DatingProfile cannabis.
     * @member {string} cannabis
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.cannabis = "";

    /**
     * DatingProfile banned.
     * @member {boolean} banned
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.banned = false;

    /**
     * DatingProfile use_smart_photos.
     * @member {boolean} use_smart_photos
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.use_smart_photos = false;

    /**
     * DatingProfile hide_distance.
     * @member {boolean} hide_distance
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.hide_distance = false;

    /**
     * DatingProfile hide_age.
     * @member {boolean} hide_age
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.hide_age = false;

    /**
     * DatingProfile dnd_mode.
     * @member {boolean} dnd_mode
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.dnd_mode = false;

    /**
     * DatingProfile show_sexuality.
     * @member {boolean} show_sexuality
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.show_sexuality = false;

    /**
     * DatingProfile show_gender.
     * @member {boolean} show_gender
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.show_gender = false;

    /**
     * DatingProfile show_pronouns.
     * @member {boolean} show_pronouns
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.show_pronouns = false;

    /**
     * DatingProfile wanting.
     * @member {Array.<string>} wanting
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.wanting = $util.emptyArray;

    /**
     * DatingProfile created_at.
     * @member {string} created_at
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.created_at = "";

    /**
     * DatingProfile updated_at.
     * @member {string} updated_at
     * @memberof DatingProfile
     * @instance
     */
    DatingProfile.prototype.updated_at = "";

    /**
     * Creates a new DatingProfile instance using the specified properties.
     * @function create
     * @memberof DatingProfile
     * @static
     * @param {IDatingProfile=} [properties] Properties to set
     * @returns {DatingProfile} DatingProfile instance
     */
    DatingProfile.create = function create(properties) {
        return new DatingProfile(properties);
    };

    /**
     * Encodes the specified DatingProfile message. Does not implicitly {@link DatingProfile.verify|verify} messages.
     * @function encode
     * @memberof DatingProfile
     * @static
     * @param {IDatingProfile} message DatingProfile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DatingProfile.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.birthday != null && Object.hasOwnProperty.call(message, "birthday"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.birthday);
        if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.gender);
        if (message.fav_vgames != null && message.fav_vgames.length)
            for (var i = 0; i < message.fav_vgames.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.fav_vgames[i]);
        if (message.fav_vgenres != null && message.fav_vgenres.length)
            for (var i = 0; i < message.fav_vgenres.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.fav_vgenres[i]);
        if (message.fav_vplatforms != null && message.fav_vplatforms.length)
            for (var i = 0; i < message.fav_vplatforms.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.fav_vplatforms[i]);
        if (message.fav_vcharacter != null && Object.hasOwnProperty.call(message, "fav_vcharacter"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.fav_vcharacter);
        if (message.likes_dnd != null && Object.hasOwnProperty.call(message, "likes_dnd"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.likes_dnd);
        if (message.likes_anime != null && Object.hasOwnProperty.call(message, "likes_anime"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.likes_anime);
        if (message.likes_bgames != null && Object.hasOwnProperty.call(message, "likes_bgames"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.likes_bgames);
        if (message.fav_bgames != null && message.fav_bgames.length)
            for (var i = 0; i < message.fav_bgames.length; ++i)
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.fav_bgames[i]);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.height);
        if (message.bio != null && Object.hasOwnProperty.call(message, "bio"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.bio);
        if (message.prompts != null && message.prompts.length)
            for (var i = 0; i < message.prompts.length; ++i)
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.prompts[i]);
        if (message.known_langs != null && message.known_langs.length)
            for (var i = 0; i < message.known_langs.length; ++i)
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.known_langs[i]);
        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.location);
        if (message.location2 != null && Object.hasOwnProperty.call(message, "location2"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.location2);
        if (message.school != null && Object.hasOwnProperty.call(message, "school"))
            writer.uint32(/* id 19, wireType 2 =*/154).string(message.school);
        if (message.job_title != null && Object.hasOwnProperty.call(message, "job_title"))
            writer.uint32(/* id 20, wireType 2 =*/162).string(message.job_title);
        if (message.company != null && Object.hasOwnProperty.call(message, "company"))
            writer.uint32(/* id 21, wireType 2 =*/170).string(message.company);
        if (message.top_song != null && Object.hasOwnProperty.call(message, "top_song"))
            writer.uint32(/* id 22, wireType 2 =*/178).string(message.top_song);
        if (message.top_artist != null && Object.hasOwnProperty.call(message, "top_artist"))
            writer.uint32(/* id 23, wireType 2 =*/186).string(message.top_artist);
        if (message.pronouns != null && Object.hasOwnProperty.call(message, "pronouns"))
            writer.uint32(/* id 24, wireType 2 =*/194).string(message.pronouns);
        if (message.height_unit != null && Object.hasOwnProperty.call(message, "height_unit"))
            writer.uint32(/* id 25, wireType 2 =*/202).string(message.height_unit);
        if (message.sexuality != null && Object.hasOwnProperty.call(message, "sexuality"))
            writer.uint32(/* id 26, wireType 2 =*/210).string(message.sexuality);
        if (message.education != null && Object.hasOwnProperty.call(message, "education"))
            writer.uint32(/* id 27, wireType 2 =*/218).string(message.education);
        if (message.looking_for != null && Object.hasOwnProperty.call(message, "looking_for"))
            writer.uint32(/* id 28, wireType 2 =*/226).string(message.looking_for);
        if (message.relationship != null && Object.hasOwnProperty.call(message, "relationship"))
            writer.uint32(/* id 29, wireType 2 =*/234).string(message.relationship);
        if (message.family_plans != null && Object.hasOwnProperty.call(message, "family_plans"))
            writer.uint32(/* id 30, wireType 2 =*/242).string(message.family_plans);
        if (message.workout != null && Object.hasOwnProperty.call(message, "workout"))
            writer.uint32(/* id 31, wireType 2 =*/250).string(message.workout);
        if (message.personality != null && Object.hasOwnProperty.call(message, "personality"))
            writer.uint32(/* id 32, wireType 2 =*/258).string(message.personality);
        if (message.smokes != null && Object.hasOwnProperty.call(message, "smokes"))
            writer.uint32(/* id 33, wireType 2 =*/266).string(message.smokes);
        if (message.drinks != null && Object.hasOwnProperty.call(message, "drinks"))
            writer.uint32(/* id 34, wireType 2 =*/274).string(message.drinks);
        if (message.cannabis != null && Object.hasOwnProperty.call(message, "cannabis"))
            writer.uint32(/* id 35, wireType 2 =*/282).string(message.cannabis);
        if (message.banned != null && Object.hasOwnProperty.call(message, "banned"))
            writer.uint32(/* id 36, wireType 0 =*/288).bool(message.banned);
        if (message.use_smart_photos != null && Object.hasOwnProperty.call(message, "use_smart_photos"))
            writer.uint32(/* id 37, wireType 0 =*/296).bool(message.use_smart_photos);
        if (message.hide_distance != null && Object.hasOwnProperty.call(message, "hide_distance"))
            writer.uint32(/* id 38, wireType 0 =*/304).bool(message.hide_distance);
        if (message.hide_age != null && Object.hasOwnProperty.call(message, "hide_age"))
            writer.uint32(/* id 39, wireType 0 =*/312).bool(message.hide_age);
        if (message.dnd_mode != null && Object.hasOwnProperty.call(message, "dnd_mode"))
            writer.uint32(/* id 40, wireType 0 =*/320).bool(message.dnd_mode);
        if (message.show_sexuality != null && Object.hasOwnProperty.call(message, "show_sexuality"))
            writer.uint32(/* id 41, wireType 0 =*/328).bool(message.show_sexuality);
        if (message.show_gender != null && Object.hasOwnProperty.call(message, "show_gender"))
            writer.uint32(/* id 42, wireType 0 =*/336).bool(message.show_gender);
        if (message.show_pronouns != null && Object.hasOwnProperty.call(message, "show_pronouns"))
            writer.uint32(/* id 43, wireType 0 =*/344).bool(message.show_pronouns);
        if (message.wanting != null && message.wanting.length)
            for (var i = 0; i < message.wanting.length; ++i)
                writer.uint32(/* id 44, wireType 2 =*/354).string(message.wanting[i]);
        if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
            writer.uint32(/* id 45, wireType 2 =*/362).string(message.created_at);
        if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
            writer.uint32(/* id 46, wireType 2 =*/370).string(message.updated_at);
        return writer;
    };

    /**
     * Encodes the specified DatingProfile message, length delimited. Does not implicitly {@link DatingProfile.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DatingProfile
     * @static
     * @param {IDatingProfile} message DatingProfile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DatingProfile.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DatingProfile message from the specified reader or buffer.
     * @function decode
     * @memberof DatingProfile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DatingProfile} DatingProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DatingProfile.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DatingProfile();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.birthday = reader.string();
                    break;
                }
            case 4: {
                    message.gender = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.fav_vgames && message.fav_vgames.length))
                        message.fav_vgames = [];
                    message.fav_vgames.push(reader.string());
                    break;
                }
            case 6: {
                    if (!(message.fav_vgenres && message.fav_vgenres.length))
                        message.fav_vgenres = [];
                    message.fav_vgenres.push(reader.string());
                    break;
                }
            case 7: {
                    if (!(message.fav_vplatforms && message.fav_vplatforms.length))
                        message.fav_vplatforms = [];
                    message.fav_vplatforms.push(reader.string());
                    break;
                }
            case 8: {
                    message.fav_vcharacter = reader.string();
                    break;
                }
            case 9: {
                    message.likes_dnd = reader.bool();
                    break;
                }
            case 10: {
                    message.likes_anime = reader.bool();
                    break;
                }
            case 11: {
                    message.likes_bgames = reader.bool();
                    break;
                }
            case 12: {
                    if (!(message.fav_bgames && message.fav_bgames.length))
                        message.fav_bgames = [];
                    message.fav_bgames.push(reader.string());
                    break;
                }
            case 13: {
                    message.height = reader.int32();
                    break;
                }
            case 14: {
                    message.bio = reader.string();
                    break;
                }
            case 15: {
                    if (!(message.prompts && message.prompts.length))
                        message.prompts = [];
                    message.prompts.push(reader.string());
                    break;
                }
            case 16: {
                    if (!(message.known_langs && message.known_langs.length))
                        message.known_langs = [];
                    message.known_langs.push(reader.string());
                    break;
                }
            case 17: {
                    message.location = reader.string();
                    break;
                }
            case 18: {
                    message.location2 = reader.string();
                    break;
                }
            case 19: {
                    message.school = reader.string();
                    break;
                }
            case 20: {
                    message.job_title = reader.string();
                    break;
                }
            case 21: {
                    message.company = reader.string();
                    break;
                }
            case 22: {
                    message.top_song = reader.string();
                    break;
                }
            case 23: {
                    message.top_artist = reader.string();
                    break;
                }
            case 24: {
                    message.pronouns = reader.string();
                    break;
                }
            case 25: {
                    message.height_unit = reader.string();
                    break;
                }
            case 26: {
                    message.sexuality = reader.string();
                    break;
                }
            case 27: {
                    message.education = reader.string();
                    break;
                }
            case 28: {
                    message.looking_for = reader.string();
                    break;
                }
            case 29: {
                    message.relationship = reader.string();
                    break;
                }
            case 30: {
                    message.family_plans = reader.string();
                    break;
                }
            case 31: {
                    message.workout = reader.string();
                    break;
                }
            case 32: {
                    message.personality = reader.string();
                    break;
                }
            case 33: {
                    message.smokes = reader.string();
                    break;
                }
            case 34: {
                    message.drinks = reader.string();
                    break;
                }
            case 35: {
                    message.cannabis = reader.string();
                    break;
                }
            case 36: {
                    message.banned = reader.bool();
                    break;
                }
            case 37: {
                    message.use_smart_photos = reader.bool();
                    break;
                }
            case 38: {
                    message.hide_distance = reader.bool();
                    break;
                }
            case 39: {
                    message.hide_age = reader.bool();
                    break;
                }
            case 40: {
                    message.dnd_mode = reader.bool();
                    break;
                }
            case 41: {
                    message.show_sexuality = reader.bool();
                    break;
                }
            case 42: {
                    message.show_gender = reader.bool();
                    break;
                }
            case 43: {
                    message.show_pronouns = reader.bool();
                    break;
                }
            case 44: {
                    if (!(message.wanting && message.wanting.length))
                        message.wanting = [];
                    message.wanting.push(reader.string());
                    break;
                }
            case 45: {
                    message.created_at = reader.string();
                    break;
                }
            case 46: {
                    message.updated_at = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DatingProfile message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DatingProfile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DatingProfile} DatingProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DatingProfile.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DatingProfile message.
     * @function verify
     * @memberof DatingProfile
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DatingProfile.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.birthday != null && message.hasOwnProperty("birthday"))
            if (!$util.isString(message.birthday))
                return "birthday: string expected";
        if (message.gender != null && message.hasOwnProperty("gender"))
            if (!$util.isString(message.gender))
                return "gender: string expected";
        if (message.fav_vgames != null && message.hasOwnProperty("fav_vgames")) {
            if (!Array.isArray(message.fav_vgames))
                return "fav_vgames: array expected";
            for (var i = 0; i < message.fav_vgames.length; ++i)
                if (!$util.isString(message.fav_vgames[i]))
                    return "fav_vgames: string[] expected";
        }
        if (message.fav_vgenres != null && message.hasOwnProperty("fav_vgenres")) {
            if (!Array.isArray(message.fav_vgenres))
                return "fav_vgenres: array expected";
            for (var i = 0; i < message.fav_vgenres.length; ++i)
                if (!$util.isString(message.fav_vgenres[i]))
                    return "fav_vgenres: string[] expected";
        }
        if (message.fav_vplatforms != null && message.hasOwnProperty("fav_vplatforms")) {
            if (!Array.isArray(message.fav_vplatforms))
                return "fav_vplatforms: array expected";
            for (var i = 0; i < message.fav_vplatforms.length; ++i)
                if (!$util.isString(message.fav_vplatforms[i]))
                    return "fav_vplatforms: string[] expected";
        }
        if (message.fav_vcharacter != null && message.hasOwnProperty("fav_vcharacter"))
            if (!$util.isString(message.fav_vcharacter))
                return "fav_vcharacter: string expected";
        if (message.likes_dnd != null && message.hasOwnProperty("likes_dnd"))
            if (typeof message.likes_dnd !== "boolean")
                return "likes_dnd: boolean expected";
        if (message.likes_anime != null && message.hasOwnProperty("likes_anime"))
            if (typeof message.likes_anime !== "boolean")
                return "likes_anime: boolean expected";
        if (message.likes_bgames != null && message.hasOwnProperty("likes_bgames"))
            if (typeof message.likes_bgames !== "boolean")
                return "likes_bgames: boolean expected";
        if (message.fav_bgames != null && message.hasOwnProperty("fav_bgames")) {
            if (!Array.isArray(message.fav_bgames))
                return "fav_bgames: array expected";
            for (var i = 0; i < message.fav_bgames.length; ++i)
                if (!$util.isString(message.fav_bgames[i]))
                    return "fav_bgames: string[] expected";
        }
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        if (message.bio != null && message.hasOwnProperty("bio"))
            if (!$util.isString(message.bio))
                return "bio: string expected";
        if (message.prompts != null && message.hasOwnProperty("prompts")) {
            if (!Array.isArray(message.prompts))
                return "prompts: array expected";
            for (var i = 0; i < message.prompts.length; ++i)
                if (!$util.isString(message.prompts[i]))
                    return "prompts: string[] expected";
        }
        if (message.known_langs != null && message.hasOwnProperty("known_langs")) {
            if (!Array.isArray(message.known_langs))
                return "known_langs: array expected";
            for (var i = 0; i < message.known_langs.length; ++i)
                if (!$util.isString(message.known_langs[i]))
                    return "known_langs: string[] expected";
        }
        if (message.location != null && message.hasOwnProperty("location"))
            if (!$util.isString(message.location))
                return "location: string expected";
        if (message.location2 != null && message.hasOwnProperty("location2"))
            if (!$util.isString(message.location2))
                return "location2: string expected";
        if (message.school != null && message.hasOwnProperty("school"))
            if (!$util.isString(message.school))
                return "school: string expected";
        if (message.job_title != null && message.hasOwnProperty("job_title"))
            if (!$util.isString(message.job_title))
                return "job_title: string expected";
        if (message.company != null && message.hasOwnProperty("company"))
            if (!$util.isString(message.company))
                return "company: string expected";
        if (message.top_song != null && message.hasOwnProperty("top_song"))
            if (!$util.isString(message.top_song))
                return "top_song: string expected";
        if (message.top_artist != null && message.hasOwnProperty("top_artist"))
            if (!$util.isString(message.top_artist))
                return "top_artist: string expected";
        if (message.pronouns != null && message.hasOwnProperty("pronouns"))
            if (!$util.isString(message.pronouns))
                return "pronouns: string expected";
        if (message.height_unit != null && message.hasOwnProperty("height_unit"))
            if (!$util.isString(message.height_unit))
                return "height_unit: string expected";
        if (message.sexuality != null && message.hasOwnProperty("sexuality"))
            if (!$util.isString(message.sexuality))
                return "sexuality: string expected";
        if (message.education != null && message.hasOwnProperty("education"))
            if (!$util.isString(message.education))
                return "education: string expected";
        if (message.looking_for != null && message.hasOwnProperty("looking_for"))
            if (!$util.isString(message.looking_for))
                return "looking_for: string expected";
        if (message.relationship != null && message.hasOwnProperty("relationship"))
            if (!$util.isString(message.relationship))
                return "relationship: string expected";
        if (message.family_plans != null && message.hasOwnProperty("family_plans"))
            if (!$util.isString(message.family_plans))
                return "family_plans: string expected";
        if (message.workout != null && message.hasOwnProperty("workout"))
            if (!$util.isString(message.workout))
                return "workout: string expected";
        if (message.personality != null && message.hasOwnProperty("personality"))
            if (!$util.isString(message.personality))
                return "personality: string expected";
        if (message.smokes != null && message.hasOwnProperty("smokes"))
            if (!$util.isString(message.smokes))
                return "smokes: string expected";
        if (message.drinks != null && message.hasOwnProperty("drinks"))
            if (!$util.isString(message.drinks))
                return "drinks: string expected";
        if (message.cannabis != null && message.hasOwnProperty("cannabis"))
            if (!$util.isString(message.cannabis))
                return "cannabis: string expected";
        if (message.banned != null && message.hasOwnProperty("banned"))
            if (typeof message.banned !== "boolean")
                return "banned: boolean expected";
        if (message.use_smart_photos != null && message.hasOwnProperty("use_smart_photos"))
            if (typeof message.use_smart_photos !== "boolean")
                return "use_smart_photos: boolean expected";
        if (message.hide_distance != null && message.hasOwnProperty("hide_distance"))
            if (typeof message.hide_distance !== "boolean")
                return "hide_distance: boolean expected";
        if (message.hide_age != null && message.hasOwnProperty("hide_age"))
            if (typeof message.hide_age !== "boolean")
                return "hide_age: boolean expected";
        if (message.dnd_mode != null && message.hasOwnProperty("dnd_mode"))
            if (typeof message.dnd_mode !== "boolean")
                return "dnd_mode: boolean expected";
        if (message.show_sexuality != null && message.hasOwnProperty("show_sexuality"))
            if (typeof message.show_sexuality !== "boolean")
                return "show_sexuality: boolean expected";
        if (message.show_gender != null && message.hasOwnProperty("show_gender"))
            if (typeof message.show_gender !== "boolean")
                return "show_gender: boolean expected";
        if (message.show_pronouns != null && message.hasOwnProperty("show_pronouns"))
            if (typeof message.show_pronouns !== "boolean")
                return "show_pronouns: boolean expected";
        if (message.wanting != null && message.hasOwnProperty("wanting")) {
            if (!Array.isArray(message.wanting))
                return "wanting: array expected";
            for (var i = 0; i < message.wanting.length; ++i)
                if (!$util.isString(message.wanting[i]))
                    return "wanting: string[] expected";
        }
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            if (!$util.isString(message.created_at))
                return "created_at: string expected";
        if (message.updated_at != null && message.hasOwnProperty("updated_at"))
            if (!$util.isString(message.updated_at))
                return "updated_at: string expected";
        return null;
    };

    /**
     * Creates a DatingProfile message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DatingProfile
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DatingProfile} DatingProfile
     */
    DatingProfile.fromObject = function fromObject(object) {
        if (object instanceof $root.DatingProfile)
            return object;
        var message = new $root.DatingProfile();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.birthday != null)
            message.birthday = String(object.birthday);
        if (object.gender != null)
            message.gender = String(object.gender);
        if (object.fav_vgames) {
            if (!Array.isArray(object.fav_vgames))
                throw TypeError(".DatingProfile.fav_vgames: array expected");
            message.fav_vgames = [];
            for (var i = 0; i < object.fav_vgames.length; ++i)
                message.fav_vgames[i] = String(object.fav_vgames[i]);
        }
        if (object.fav_vgenres) {
            if (!Array.isArray(object.fav_vgenres))
                throw TypeError(".DatingProfile.fav_vgenres: array expected");
            message.fav_vgenres = [];
            for (var i = 0; i < object.fav_vgenres.length; ++i)
                message.fav_vgenres[i] = String(object.fav_vgenres[i]);
        }
        if (object.fav_vplatforms) {
            if (!Array.isArray(object.fav_vplatforms))
                throw TypeError(".DatingProfile.fav_vplatforms: array expected");
            message.fav_vplatforms = [];
            for (var i = 0; i < object.fav_vplatforms.length; ++i)
                message.fav_vplatforms[i] = String(object.fav_vplatforms[i]);
        }
        if (object.fav_vcharacter != null)
            message.fav_vcharacter = String(object.fav_vcharacter);
        if (object.likes_dnd != null)
            message.likes_dnd = Boolean(object.likes_dnd);
        if (object.likes_anime != null)
            message.likes_anime = Boolean(object.likes_anime);
        if (object.likes_bgames != null)
            message.likes_bgames = Boolean(object.likes_bgames);
        if (object.fav_bgames) {
            if (!Array.isArray(object.fav_bgames))
                throw TypeError(".DatingProfile.fav_bgames: array expected");
            message.fav_bgames = [];
            for (var i = 0; i < object.fav_bgames.length; ++i)
                message.fav_bgames[i] = String(object.fav_bgames[i]);
        }
        if (object.height != null)
            message.height = object.height | 0;
        if (object.bio != null)
            message.bio = String(object.bio);
        if (object.prompts) {
            if (!Array.isArray(object.prompts))
                throw TypeError(".DatingProfile.prompts: array expected");
            message.prompts = [];
            for (var i = 0; i < object.prompts.length; ++i)
                message.prompts[i] = String(object.prompts[i]);
        }
        if (object.known_langs) {
            if (!Array.isArray(object.known_langs))
                throw TypeError(".DatingProfile.known_langs: array expected");
            message.known_langs = [];
            for (var i = 0; i < object.known_langs.length; ++i)
                message.known_langs[i] = String(object.known_langs[i]);
        }
        if (object.location != null)
            message.location = String(object.location);
        if (object.location2 != null)
            message.location2 = String(object.location2);
        if (object.school != null)
            message.school = String(object.school);
        if (object.job_title != null)
            message.job_title = String(object.job_title);
        if (object.company != null)
            message.company = String(object.company);
        if (object.top_song != null)
            message.top_song = String(object.top_song);
        if (object.top_artist != null)
            message.top_artist = String(object.top_artist);
        if (object.pronouns != null)
            message.pronouns = String(object.pronouns);
        if (object.height_unit != null)
            message.height_unit = String(object.height_unit);
        if (object.sexuality != null)
            message.sexuality = String(object.sexuality);
        if (object.education != null)
            message.education = String(object.education);
        if (object.looking_for != null)
            message.looking_for = String(object.looking_for);
        if (object.relationship != null)
            message.relationship = String(object.relationship);
        if (object.family_plans != null)
            message.family_plans = String(object.family_plans);
        if (object.workout != null)
            message.workout = String(object.workout);
        if (object.personality != null)
            message.personality = String(object.personality);
        if (object.smokes != null)
            message.smokes = String(object.smokes);
        if (object.drinks != null)
            message.drinks = String(object.drinks);
        if (object.cannabis != null)
            message.cannabis = String(object.cannabis);
        if (object.banned != null)
            message.banned = Boolean(object.banned);
        if (object.use_smart_photos != null)
            message.use_smart_photos = Boolean(object.use_smart_photos);
        if (object.hide_distance != null)
            message.hide_distance = Boolean(object.hide_distance);
        if (object.hide_age != null)
            message.hide_age = Boolean(object.hide_age);
        if (object.dnd_mode != null)
            message.dnd_mode = Boolean(object.dnd_mode);
        if (object.show_sexuality != null)
            message.show_sexuality = Boolean(object.show_sexuality);
        if (object.show_gender != null)
            message.show_gender = Boolean(object.show_gender);
        if (object.show_pronouns != null)
            message.show_pronouns = Boolean(object.show_pronouns);
        if (object.wanting) {
            if (!Array.isArray(object.wanting))
                throw TypeError(".DatingProfile.wanting: array expected");
            message.wanting = [];
            for (var i = 0; i < object.wanting.length; ++i)
                message.wanting[i] = String(object.wanting[i]);
        }
        if (object.created_at != null)
            message.created_at = String(object.created_at);
        if (object.updated_at != null)
            message.updated_at = String(object.updated_at);
        return message;
    };

    /**
     * Creates a plain object from a DatingProfile message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DatingProfile
     * @static
     * @param {DatingProfile} message DatingProfile
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DatingProfile.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.fav_vgames = [];
            object.fav_vgenres = [];
            object.fav_vplatforms = [];
            object.fav_bgames = [];
            object.prompts = [];
            object.known_langs = [];
            object.wanting = [];
        }
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.birthday = "";
            object.gender = "";
            object.fav_vcharacter = "";
            object.likes_dnd = false;
            object.likes_anime = false;
            object.likes_bgames = false;
            object.height = 0;
            object.bio = "";
            object.location = "";
            object.location2 = "";
            object.school = "";
            object.job_title = "";
            object.company = "";
            object.top_song = "";
            object.top_artist = "";
            object.pronouns = "";
            object.height_unit = "";
            object.sexuality = "";
            object.education = "";
            object.looking_for = "";
            object.relationship = "";
            object.family_plans = "";
            object.workout = "";
            object.personality = "";
            object.smokes = "";
            object.drinks = "";
            object.cannabis = "";
            object.banned = false;
            object.use_smart_photos = false;
            object.hide_distance = false;
            object.hide_age = false;
            object.dnd_mode = false;
            object.show_sexuality = false;
            object.show_gender = false;
            object.show_pronouns = false;
            object.created_at = "";
            object.updated_at = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.birthday != null && message.hasOwnProperty("birthday"))
            object.birthday = message.birthday;
        if (message.gender != null && message.hasOwnProperty("gender"))
            object.gender = message.gender;
        if (message.fav_vgames && message.fav_vgames.length) {
            object.fav_vgames = [];
            for (var j = 0; j < message.fav_vgames.length; ++j)
                object.fav_vgames[j] = message.fav_vgames[j];
        }
        if (message.fav_vgenres && message.fav_vgenres.length) {
            object.fav_vgenres = [];
            for (var j = 0; j < message.fav_vgenres.length; ++j)
                object.fav_vgenres[j] = message.fav_vgenres[j];
        }
        if (message.fav_vplatforms && message.fav_vplatforms.length) {
            object.fav_vplatforms = [];
            for (var j = 0; j < message.fav_vplatforms.length; ++j)
                object.fav_vplatforms[j] = message.fav_vplatforms[j];
        }
        if (message.fav_vcharacter != null && message.hasOwnProperty("fav_vcharacter"))
            object.fav_vcharacter = message.fav_vcharacter;
        if (message.likes_dnd != null && message.hasOwnProperty("likes_dnd"))
            object.likes_dnd = message.likes_dnd;
        if (message.likes_anime != null && message.hasOwnProperty("likes_anime"))
            object.likes_anime = message.likes_anime;
        if (message.likes_bgames != null && message.hasOwnProperty("likes_bgames"))
            object.likes_bgames = message.likes_bgames;
        if (message.fav_bgames && message.fav_bgames.length) {
            object.fav_bgames = [];
            for (var j = 0; j < message.fav_bgames.length; ++j)
                object.fav_bgames[j] = message.fav_bgames[j];
        }
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = message.height;
        if (message.bio != null && message.hasOwnProperty("bio"))
            object.bio = message.bio;
        if (message.prompts && message.prompts.length) {
            object.prompts = [];
            for (var j = 0; j < message.prompts.length; ++j)
                object.prompts[j] = message.prompts[j];
        }
        if (message.known_langs && message.known_langs.length) {
            object.known_langs = [];
            for (var j = 0; j < message.known_langs.length; ++j)
                object.known_langs[j] = message.known_langs[j];
        }
        if (message.location != null && message.hasOwnProperty("location"))
            object.location = message.location;
        if (message.location2 != null && message.hasOwnProperty("location2"))
            object.location2 = message.location2;
        if (message.school != null && message.hasOwnProperty("school"))
            object.school = message.school;
        if (message.job_title != null && message.hasOwnProperty("job_title"))
            object.job_title = message.job_title;
        if (message.company != null && message.hasOwnProperty("company"))
            object.company = message.company;
        if (message.top_song != null && message.hasOwnProperty("top_song"))
            object.top_song = message.top_song;
        if (message.top_artist != null && message.hasOwnProperty("top_artist"))
            object.top_artist = message.top_artist;
        if (message.pronouns != null && message.hasOwnProperty("pronouns"))
            object.pronouns = message.pronouns;
        if (message.height_unit != null && message.hasOwnProperty("height_unit"))
            object.height_unit = message.height_unit;
        if (message.sexuality != null && message.hasOwnProperty("sexuality"))
            object.sexuality = message.sexuality;
        if (message.education != null && message.hasOwnProperty("education"))
            object.education = message.education;
        if (message.looking_for != null && message.hasOwnProperty("looking_for"))
            object.looking_for = message.looking_for;
        if (message.relationship != null && message.hasOwnProperty("relationship"))
            object.relationship = message.relationship;
        if (message.family_plans != null && message.hasOwnProperty("family_plans"))
            object.family_plans = message.family_plans;
        if (message.workout != null && message.hasOwnProperty("workout"))
            object.workout = message.workout;
        if (message.personality != null && message.hasOwnProperty("personality"))
            object.personality = message.personality;
        if (message.smokes != null && message.hasOwnProperty("smokes"))
            object.smokes = message.smokes;
        if (message.drinks != null && message.hasOwnProperty("drinks"))
            object.drinks = message.drinks;
        if (message.cannabis != null && message.hasOwnProperty("cannabis"))
            object.cannabis = message.cannabis;
        if (message.banned != null && message.hasOwnProperty("banned"))
            object.banned = message.banned;
        if (message.use_smart_photos != null && message.hasOwnProperty("use_smart_photos"))
            object.use_smart_photos = message.use_smart_photos;
        if (message.hide_distance != null && message.hasOwnProperty("hide_distance"))
            object.hide_distance = message.hide_distance;
        if (message.hide_age != null && message.hasOwnProperty("hide_age"))
            object.hide_age = message.hide_age;
        if (message.dnd_mode != null && message.hasOwnProperty("dnd_mode"))
            object.dnd_mode = message.dnd_mode;
        if (message.show_sexuality != null && message.hasOwnProperty("show_sexuality"))
            object.show_sexuality = message.show_sexuality;
        if (message.show_gender != null && message.hasOwnProperty("show_gender"))
            object.show_gender = message.show_gender;
        if (message.show_pronouns != null && message.hasOwnProperty("show_pronouns"))
            object.show_pronouns = message.show_pronouns;
        if (message.wanting && message.wanting.length) {
            object.wanting = [];
            for (var j = 0; j < message.wanting.length; ++j)
                object.wanting[j] = message.wanting[j];
        }
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            object.created_at = message.created_at;
        if (message.updated_at != null && message.hasOwnProperty("updated_at"))
            object.updated_at = message.updated_at;
        return object;
    };

    /**
     * Converts this DatingProfile to JSON.
     * @function toJSON
     * @memberof DatingProfile
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DatingProfile.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DatingProfile
     * @function getTypeUrl
     * @memberof DatingProfile
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DatingProfile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DatingProfile";
    };

    return DatingProfile;
})();

$root.Status = (function() {

    /**
     * Properties of a Status.
     * @exports IStatus
     * @interface IStatus
     * @property {string|null} [id] Status id
     * @property {string|null} [owner_id] Status owner_id
     * @property {boolean|null} [online] Status online
     * @property {number|null} [time_active] Status time_active
     * @property {string|null} [last_seen] Status last_seen
     */

    /**
     * Constructs a new Status.
     * @exports Status
     * @classdesc Represents a Status.
     * @implements IStatus
     * @constructor
     * @param {IStatus=} [properties] Properties to set
     */
    function Status(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Status id.
     * @member {string} id
     * @memberof Status
     * @instance
     */
    Status.prototype.id = "";

    /**
     * Status owner_id.
     * @member {string} owner_id
     * @memberof Status
     * @instance
     */
    Status.prototype.owner_id = "";

    /**
     * Status online.
     * @member {boolean} online
     * @memberof Status
     * @instance
     */
    Status.prototype.online = false;

    /**
     * Status time_active.
     * @member {number} time_active
     * @memberof Status
     * @instance
     */
    Status.prototype.time_active = 0;

    /**
     * Status last_seen.
     * @member {string} last_seen
     * @memberof Status
     * @instance
     */
    Status.prototype.last_seen = "";

    /**
     * Creates a new Status instance using the specified properties.
     * @function create
     * @memberof Status
     * @static
     * @param {IStatus=} [properties] Properties to set
     * @returns {Status} Status instance
     */
    Status.create = function create(properties) {
        return new Status(properties);
    };

    /**
     * Encodes the specified Status message. Does not implicitly {@link Status.verify|verify} messages.
     * @function encode
     * @memberof Status
     * @static
     * @param {IStatus} message Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Status.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.online != null && Object.hasOwnProperty.call(message, "online"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.online);
        if (message.time_active != null && Object.hasOwnProperty.call(message, "time_active"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.time_active);
        if (message.last_seen != null && Object.hasOwnProperty.call(message, "last_seen"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.last_seen);
        return writer;
    };

    /**
     * Encodes the specified Status message, length delimited. Does not implicitly {@link Status.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Status
     * @static
     * @param {IStatus} message Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Status.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Status message from the specified reader or buffer.
     * @function decode
     * @memberof Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Status} Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Status.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Status();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.online = reader.bool();
                    break;
                }
            case 4: {
                    message.time_active = reader.int32();
                    break;
                }
            case 5: {
                    message.last_seen = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Status message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Status} Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Status.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Status message.
     * @function verify
     * @memberof Status
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Status.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.online != null && message.hasOwnProperty("online"))
            if (typeof message.online !== "boolean")
                return "online: boolean expected";
        if (message.time_active != null && message.hasOwnProperty("time_active"))
            if (!$util.isInteger(message.time_active))
                return "time_active: integer expected";
        if (message.last_seen != null && message.hasOwnProperty("last_seen"))
            if (!$util.isString(message.last_seen))
                return "last_seen: string expected";
        return null;
    };

    /**
     * Creates a Status message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Status
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Status} Status
     */
    Status.fromObject = function fromObject(object) {
        if (object instanceof $root.Status)
            return object;
        var message = new $root.Status();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.online != null)
            message.online = Boolean(object.online);
        if (object.time_active != null)
            message.time_active = object.time_active | 0;
        if (object.last_seen != null)
            message.last_seen = String(object.last_seen);
        return message;
    };

    /**
     * Creates a plain object from a Status message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Status
     * @static
     * @param {Status} message Status
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Status.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.online = false;
            object.time_active = 0;
            object.last_seen = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.online != null && message.hasOwnProperty("online"))
            object.online = message.online;
        if (message.time_active != null && message.hasOwnProperty("time_active"))
            object.time_active = message.time_active;
        if (message.last_seen != null && message.hasOwnProperty("last_seen"))
            object.last_seen = message.last_seen;
        return object;
    };

    /**
     * Converts this Status to JSON.
     * @function toJSON
     * @memberof Status
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Status.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Status
     * @function getTypeUrl
     * @memberof Status
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Status";
    };

    return Status;
})();

$root.EmitStatus = (function() {

    /**
     * Properties of an EmitStatus.
     * @exports IEmitStatus
     * @interface IEmitStatus
     * @property {number|null} [time_active] EmitStatus time_active
     */

    /**
     * Constructs a new EmitStatus.
     * @exports EmitStatus
     * @classdesc Represents an EmitStatus.
     * @implements IEmitStatus
     * @constructor
     * @param {IEmitStatus=} [properties] Properties to set
     */
    function EmitStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EmitStatus time_active.
     * @member {number} time_active
     * @memberof EmitStatus
     * @instance
     */
    EmitStatus.prototype.time_active = 0;

    /**
     * Creates a new EmitStatus instance using the specified properties.
     * @function create
     * @memberof EmitStatus
     * @static
     * @param {IEmitStatus=} [properties] Properties to set
     * @returns {EmitStatus} EmitStatus instance
     */
    EmitStatus.create = function create(properties) {
        return new EmitStatus(properties);
    };

    /**
     * Encodes the specified EmitStatus message. Does not implicitly {@link EmitStatus.verify|verify} messages.
     * @function encode
     * @memberof EmitStatus
     * @static
     * @param {IEmitStatus} message EmitStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmitStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.time_active != null && Object.hasOwnProperty.call(message, "time_active"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time_active);
        return writer;
    };

    /**
     * Encodes the specified EmitStatus message, length delimited. Does not implicitly {@link EmitStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmitStatus
     * @static
     * @param {IEmitStatus} message EmitStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmitStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmitStatus message from the specified reader or buffer.
     * @function decode
     * @memberof EmitStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EmitStatus} EmitStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmitStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EmitStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.time_active = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EmitStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmitStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmitStatus} EmitStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmitStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmitStatus message.
     * @function verify
     * @memberof EmitStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmitStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.time_active != null && message.hasOwnProperty("time_active"))
            if (!$util.isInteger(message.time_active))
                return "time_active: integer expected";
        return null;
    };

    /**
     * Creates an EmitStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EmitStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EmitStatus} EmitStatus
     */
    EmitStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.EmitStatus)
            return object;
        var message = new $root.EmitStatus();
        if (object.time_active != null)
            message.time_active = object.time_active | 0;
        return message;
    };

    /**
     * Creates a plain object from an EmitStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EmitStatus
     * @static
     * @param {EmitStatus} message EmitStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EmitStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.time_active = 0;
        if (message.time_active != null && message.hasOwnProperty("time_active"))
            object.time_active = message.time_active;
        return object;
    };

    /**
     * Converts this EmitStatus to JSON.
     * @function toJSON
     * @memberof EmitStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EmitStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for EmitStatus
     * @function getTypeUrl
     * @memberof EmitStatus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EmitStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EmitStatus";
    };

    return EmitStatus;
})();

$root.Limits = (function() {

    /**
     * Properties of a Limits.
     * @exports ILimits
     * @interface ILimits
     * @property {IPermanentLimits|null} [permanent] Limits permanent
     * @property {IDailyLimits|null} [daily] Limits daily
     * @property {IMonthlyLimits|null} [monthly] Limits monthly
     */

    /**
     * Constructs a new Limits.
     * @exports Limits
     * @classdesc Represents a Limits.
     * @implements ILimits
     * @constructor
     * @param {ILimits=} [properties] Properties to set
     */
    function Limits(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Limits permanent.
     * @member {IPermanentLimits|null|undefined} permanent
     * @memberof Limits
     * @instance
     */
    Limits.prototype.permanent = null;

    /**
     * Limits daily.
     * @member {IDailyLimits|null|undefined} daily
     * @memberof Limits
     * @instance
     */
    Limits.prototype.daily = null;

    /**
     * Limits monthly.
     * @member {IMonthlyLimits|null|undefined} monthly
     * @memberof Limits
     * @instance
     */
    Limits.prototype.monthly = null;

    /**
     * Creates a new Limits instance using the specified properties.
     * @function create
     * @memberof Limits
     * @static
     * @param {ILimits=} [properties] Properties to set
     * @returns {Limits} Limits instance
     */
    Limits.create = function create(properties) {
        return new Limits(properties);
    };

    /**
     * Encodes the specified Limits message. Does not implicitly {@link Limits.verify|verify} messages.
     * @function encode
     * @memberof Limits
     * @static
     * @param {ILimits} message Limits message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Limits.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.permanent != null && Object.hasOwnProperty.call(message, "permanent"))
            $root.PermanentLimits.encode(message.permanent, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.daily != null && Object.hasOwnProperty.call(message, "daily"))
            $root.DailyLimits.encode(message.daily, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.monthly != null && Object.hasOwnProperty.call(message, "monthly"))
            $root.MonthlyLimits.encode(message.monthly, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Limits message, length delimited. Does not implicitly {@link Limits.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Limits
     * @static
     * @param {ILimits} message Limits message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Limits.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Limits message from the specified reader or buffer.
     * @function decode
     * @memberof Limits
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Limits} Limits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Limits.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Limits();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.permanent = $root.PermanentLimits.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.daily = $root.DailyLimits.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.monthly = $root.MonthlyLimits.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Limits message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Limits
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Limits} Limits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Limits.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Limits message.
     * @function verify
     * @memberof Limits
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Limits.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.permanent != null && message.hasOwnProperty("permanent")) {
            var error = $root.PermanentLimits.verify(message.permanent);
            if (error)
                return "permanent." + error;
        }
        if (message.daily != null && message.hasOwnProperty("daily")) {
            var error = $root.DailyLimits.verify(message.daily);
            if (error)
                return "daily." + error;
        }
        if (message.monthly != null && message.hasOwnProperty("monthly")) {
            var error = $root.MonthlyLimits.verify(message.monthly);
            if (error)
                return "monthly." + error;
        }
        return null;
    };

    /**
     * Creates a Limits message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Limits
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Limits} Limits
     */
    Limits.fromObject = function fromObject(object) {
        if (object instanceof $root.Limits)
            return object;
        var message = new $root.Limits();
        if (object.permanent != null) {
            if (typeof object.permanent !== "object")
                throw TypeError(".Limits.permanent: object expected");
            message.permanent = $root.PermanentLimits.fromObject(object.permanent);
        }
        if (object.daily != null) {
            if (typeof object.daily !== "object")
                throw TypeError(".Limits.daily: object expected");
            message.daily = $root.DailyLimits.fromObject(object.daily);
        }
        if (object.monthly != null) {
            if (typeof object.monthly !== "object")
                throw TypeError(".Limits.monthly: object expected");
            message.monthly = $root.MonthlyLimits.fromObject(object.monthly);
        }
        return message;
    };

    /**
     * Creates a plain object from a Limits message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Limits
     * @static
     * @param {Limits} message Limits
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Limits.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.permanent = null;
            object.daily = null;
            object.monthly = null;
        }
        if (message.permanent != null && message.hasOwnProperty("permanent"))
            object.permanent = $root.PermanentLimits.toObject(message.permanent, options);
        if (message.daily != null && message.hasOwnProperty("daily"))
            object.daily = $root.DailyLimits.toObject(message.daily, options);
        if (message.monthly != null && message.hasOwnProperty("monthly"))
            object.monthly = $root.MonthlyLimits.toObject(message.monthly, options);
        return object;
    };

    /**
     * Converts this Limits to JSON.
     * @function toJSON
     * @memberof Limits
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Limits.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Limits
     * @function getTypeUrl
     * @memberof Limits
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Limits.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Limits";
    };

    return Limits;
})();

$root.PermanentLimits = (function() {

    /**
     * Properties of a PermanentLimits.
     * @exports IPermanentLimits
     * @interface IPermanentLimits
     * @property {string|null} [id] PermanentLimits id
     * @property {string|null} [owner_id] PermanentLimits owner_id
     * @property {number|null} [images] PermanentLimits images
     * @property {number|null} [video] PermanentLimits video
     */

    /**
     * Constructs a new PermanentLimits.
     * @exports PermanentLimits
     * @classdesc Represents a PermanentLimits.
     * @implements IPermanentLimits
     * @constructor
     * @param {IPermanentLimits=} [properties] Properties to set
     */
    function PermanentLimits(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PermanentLimits id.
     * @member {string} id
     * @memberof PermanentLimits
     * @instance
     */
    PermanentLimits.prototype.id = "";

    /**
     * PermanentLimits owner_id.
     * @member {string} owner_id
     * @memberof PermanentLimits
     * @instance
     */
    PermanentLimits.prototype.owner_id = "";

    /**
     * PermanentLimits images.
     * @member {number} images
     * @memberof PermanentLimits
     * @instance
     */
    PermanentLimits.prototype.images = 0;

    /**
     * PermanentLimits video.
     * @member {number} video
     * @memberof PermanentLimits
     * @instance
     */
    PermanentLimits.prototype.video = 0;

    /**
     * Creates a new PermanentLimits instance using the specified properties.
     * @function create
     * @memberof PermanentLimits
     * @static
     * @param {IPermanentLimits=} [properties] Properties to set
     * @returns {PermanentLimits} PermanentLimits instance
     */
    PermanentLimits.create = function create(properties) {
        return new PermanentLimits(properties);
    };

    /**
     * Encodes the specified PermanentLimits message. Does not implicitly {@link PermanentLimits.verify|verify} messages.
     * @function encode
     * @memberof PermanentLimits
     * @static
     * @param {IPermanentLimits} message PermanentLimits message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PermanentLimits.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.images != null && Object.hasOwnProperty.call(message, "images"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.images);
        if (message.video != null && Object.hasOwnProperty.call(message, "video"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.video);
        return writer;
    };

    /**
     * Encodes the specified PermanentLimits message, length delimited. Does not implicitly {@link PermanentLimits.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PermanentLimits
     * @static
     * @param {IPermanentLimits} message PermanentLimits message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PermanentLimits.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PermanentLimits message from the specified reader or buffer.
     * @function decode
     * @memberof PermanentLimits
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PermanentLimits} PermanentLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PermanentLimits.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PermanentLimits();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.images = reader.int32();
                    break;
                }
            case 4: {
                    message.video = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PermanentLimits message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PermanentLimits
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PermanentLimits} PermanentLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PermanentLimits.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PermanentLimits message.
     * @function verify
     * @memberof PermanentLimits
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PermanentLimits.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.images != null && message.hasOwnProperty("images"))
            if (!$util.isInteger(message.images))
                return "images: integer expected";
        if (message.video != null && message.hasOwnProperty("video"))
            if (!$util.isInteger(message.video))
                return "video: integer expected";
        return null;
    };

    /**
     * Creates a PermanentLimits message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PermanentLimits
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PermanentLimits} PermanentLimits
     */
    PermanentLimits.fromObject = function fromObject(object) {
        if (object instanceof $root.PermanentLimits)
            return object;
        var message = new $root.PermanentLimits();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.images != null)
            message.images = object.images | 0;
        if (object.video != null)
            message.video = object.video | 0;
        return message;
    };

    /**
     * Creates a plain object from a PermanentLimits message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PermanentLimits
     * @static
     * @param {PermanentLimits} message PermanentLimits
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PermanentLimits.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.images = 0;
            object.video = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.images != null && message.hasOwnProperty("images"))
            object.images = message.images;
        if (message.video != null && message.hasOwnProperty("video"))
            object.video = message.video;
        return object;
    };

    /**
     * Converts this PermanentLimits to JSON.
     * @function toJSON
     * @memberof PermanentLimits
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PermanentLimits.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PermanentLimits
     * @function getTypeUrl
     * @memberof PermanentLimits
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PermanentLimits.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PermanentLimits";
    };

    return PermanentLimits;
})();

$root.DailyLimits = (function() {

    /**
     * Properties of a DailyLimits.
     * @exports IDailyLimits
     * @interface IDailyLimits
     * @property {string|null} [id] DailyLimits id
     * @property {string|null} [owner_id] DailyLimits owner_id
     * @property {number|null} [likes] DailyLimits likes
     * @property {number|null} [dislikes] DailyLimits dislikes
     * @property {number|null} [messages] DailyLimits messages
     * @property {string|null} [renews_at] DailyLimits renews_at
     */

    /**
     * Constructs a new DailyLimits.
     * @exports DailyLimits
     * @classdesc Represents a DailyLimits.
     * @implements IDailyLimits
     * @constructor
     * @param {IDailyLimits=} [properties] Properties to set
     */
    function DailyLimits(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyLimits id.
     * @member {string} id
     * @memberof DailyLimits
     * @instance
     */
    DailyLimits.prototype.id = "";

    /**
     * DailyLimits owner_id.
     * @member {string} owner_id
     * @memberof DailyLimits
     * @instance
     */
    DailyLimits.prototype.owner_id = "";

    /**
     * DailyLimits likes.
     * @member {number} likes
     * @memberof DailyLimits
     * @instance
     */
    DailyLimits.prototype.likes = 0;

    /**
     * DailyLimits dislikes.
     * @member {number} dislikes
     * @memberof DailyLimits
     * @instance
     */
    DailyLimits.prototype.dislikes = 0;

    /**
     * DailyLimits messages.
     * @member {number} messages
     * @memberof DailyLimits
     * @instance
     */
    DailyLimits.prototype.messages = 0;

    /**
     * DailyLimits renews_at.
     * @member {string} renews_at
     * @memberof DailyLimits
     * @instance
     */
    DailyLimits.prototype.renews_at = "";

    /**
     * Creates a new DailyLimits instance using the specified properties.
     * @function create
     * @memberof DailyLimits
     * @static
     * @param {IDailyLimits=} [properties] Properties to set
     * @returns {DailyLimits} DailyLimits instance
     */
    DailyLimits.create = function create(properties) {
        return new DailyLimits(properties);
    };

    /**
     * Encodes the specified DailyLimits message. Does not implicitly {@link DailyLimits.verify|verify} messages.
     * @function encode
     * @memberof DailyLimits
     * @static
     * @param {IDailyLimits} message DailyLimits message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyLimits.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.likes != null && Object.hasOwnProperty.call(message, "likes"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.likes);
        if (message.dislikes != null && Object.hasOwnProperty.call(message, "dislikes"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dislikes);
        if (message.messages != null && Object.hasOwnProperty.call(message, "messages"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.messages);
        if (message.renews_at != null && Object.hasOwnProperty.call(message, "renews_at"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.renews_at);
        return writer;
    };

    /**
     * Encodes the specified DailyLimits message, length delimited. Does not implicitly {@link DailyLimits.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyLimits
     * @static
     * @param {IDailyLimits} message DailyLimits message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyLimits.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyLimits message from the specified reader or buffer.
     * @function decode
     * @memberof DailyLimits
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyLimits} DailyLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyLimits.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyLimits();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.likes = reader.int32();
                    break;
                }
            case 4: {
                    message.dislikes = reader.int32();
                    break;
                }
            case 5: {
                    message.messages = reader.int32();
                    break;
                }
            case 6: {
                    message.renews_at = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DailyLimits message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyLimits
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyLimits} DailyLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyLimits.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyLimits message.
     * @function verify
     * @memberof DailyLimits
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyLimits.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.likes != null && message.hasOwnProperty("likes"))
            if (!$util.isInteger(message.likes))
                return "likes: integer expected";
        if (message.dislikes != null && message.hasOwnProperty("dislikes"))
            if (!$util.isInteger(message.dislikes))
                return "dislikes: integer expected";
        if (message.messages != null && message.hasOwnProperty("messages"))
            if (!$util.isInteger(message.messages))
                return "messages: integer expected";
        if (message.renews_at != null && message.hasOwnProperty("renews_at"))
            if (!$util.isString(message.renews_at))
                return "renews_at: string expected";
        return null;
    };

    /**
     * Creates a DailyLimits message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyLimits
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyLimits} DailyLimits
     */
    DailyLimits.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyLimits)
            return object;
        var message = new $root.DailyLimits();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.likes != null)
            message.likes = object.likes | 0;
        if (object.dislikes != null)
            message.dislikes = object.dislikes | 0;
        if (object.messages != null)
            message.messages = object.messages | 0;
        if (object.renews_at != null)
            message.renews_at = String(object.renews_at);
        return message;
    };

    /**
     * Creates a plain object from a DailyLimits message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyLimits
     * @static
     * @param {DailyLimits} message DailyLimits
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyLimits.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.likes = 0;
            object.dislikes = 0;
            object.messages = 0;
            object.renews_at = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.likes != null && message.hasOwnProperty("likes"))
            object.likes = message.likes;
        if (message.dislikes != null && message.hasOwnProperty("dislikes"))
            object.dislikes = message.dislikes;
        if (message.messages != null && message.hasOwnProperty("messages"))
            object.messages = message.messages;
        if (message.renews_at != null && message.hasOwnProperty("renews_at"))
            object.renews_at = message.renews_at;
        return object;
    };

    /**
     * Converts this DailyLimits to JSON.
     * @function toJSON
     * @memberof DailyLimits
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyLimits.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyLimits
     * @function getTypeUrl
     * @memberof DailyLimits
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyLimits.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyLimits";
    };

    return DailyLimits;
})();

$root.MonthlyLimits = (function() {

    /**
     * Properties of a MonthlyLimits.
     * @exports IMonthlyLimits
     * @interface IMonthlyLimits
     * @property {string|null} [id] MonthlyLimits id
     * @property {string|null} [owner_id] MonthlyLimits owner_id
     * @property {number|null} [superlikes] MonthlyLimits superlikes
     * @property {number|null} [boosts] MonthlyLimits boosts
     * @property {string|null} [renews_at] MonthlyLimits renews_at
     */

    /**
     * Constructs a new MonthlyLimits.
     * @exports MonthlyLimits
     * @classdesc Represents a MonthlyLimits.
     * @implements IMonthlyLimits
     * @constructor
     * @param {IMonthlyLimits=} [properties] Properties to set
     */
    function MonthlyLimits(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MonthlyLimits id.
     * @member {string} id
     * @memberof MonthlyLimits
     * @instance
     */
    MonthlyLimits.prototype.id = "";

    /**
     * MonthlyLimits owner_id.
     * @member {string} owner_id
     * @memberof MonthlyLimits
     * @instance
     */
    MonthlyLimits.prototype.owner_id = "";

    /**
     * MonthlyLimits superlikes.
     * @member {number} superlikes
     * @memberof MonthlyLimits
     * @instance
     */
    MonthlyLimits.prototype.superlikes = 0;

    /**
     * MonthlyLimits boosts.
     * @member {number} boosts
     * @memberof MonthlyLimits
     * @instance
     */
    MonthlyLimits.prototype.boosts = 0;

    /**
     * MonthlyLimits renews_at.
     * @member {string} renews_at
     * @memberof MonthlyLimits
     * @instance
     */
    MonthlyLimits.prototype.renews_at = "";

    /**
     * Creates a new MonthlyLimits instance using the specified properties.
     * @function create
     * @memberof MonthlyLimits
     * @static
     * @param {IMonthlyLimits=} [properties] Properties to set
     * @returns {MonthlyLimits} MonthlyLimits instance
     */
    MonthlyLimits.create = function create(properties) {
        return new MonthlyLimits(properties);
    };

    /**
     * Encodes the specified MonthlyLimits message. Does not implicitly {@link MonthlyLimits.verify|verify} messages.
     * @function encode
     * @memberof MonthlyLimits
     * @static
     * @param {IMonthlyLimits} message MonthlyLimits message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MonthlyLimits.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.superlikes != null && Object.hasOwnProperty.call(message, "superlikes"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.superlikes);
        if (message.boosts != null && Object.hasOwnProperty.call(message, "boosts"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.boosts);
        if (message.renews_at != null && Object.hasOwnProperty.call(message, "renews_at"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.renews_at);
        return writer;
    };

    /**
     * Encodes the specified MonthlyLimits message, length delimited. Does not implicitly {@link MonthlyLimits.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MonthlyLimits
     * @static
     * @param {IMonthlyLimits} message MonthlyLimits message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MonthlyLimits.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MonthlyLimits message from the specified reader or buffer.
     * @function decode
     * @memberof MonthlyLimits
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MonthlyLimits} MonthlyLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MonthlyLimits.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MonthlyLimits();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.superlikes = reader.int32();
                    break;
                }
            case 4: {
                    message.boosts = reader.int32();
                    break;
                }
            case 5: {
                    message.renews_at = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MonthlyLimits message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MonthlyLimits
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MonthlyLimits} MonthlyLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MonthlyLimits.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MonthlyLimits message.
     * @function verify
     * @memberof MonthlyLimits
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MonthlyLimits.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.superlikes != null && message.hasOwnProperty("superlikes"))
            if (!$util.isInteger(message.superlikes))
                return "superlikes: integer expected";
        if (message.boosts != null && message.hasOwnProperty("boosts"))
            if (!$util.isInteger(message.boosts))
                return "boosts: integer expected";
        if (message.renews_at != null && message.hasOwnProperty("renews_at"))
            if (!$util.isString(message.renews_at))
                return "renews_at: string expected";
        return null;
    };

    /**
     * Creates a MonthlyLimits message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MonthlyLimits
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MonthlyLimits} MonthlyLimits
     */
    MonthlyLimits.fromObject = function fromObject(object) {
        if (object instanceof $root.MonthlyLimits)
            return object;
        var message = new $root.MonthlyLimits();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.superlikes != null)
            message.superlikes = object.superlikes | 0;
        if (object.boosts != null)
            message.boosts = object.boosts | 0;
        if (object.renews_at != null)
            message.renews_at = String(object.renews_at);
        return message;
    };

    /**
     * Creates a plain object from a MonthlyLimits message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MonthlyLimits
     * @static
     * @param {MonthlyLimits} message MonthlyLimits
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MonthlyLimits.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.superlikes = 0;
            object.boosts = 0;
            object.renews_at = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.superlikes != null && message.hasOwnProperty("superlikes"))
            object.superlikes = message.superlikes;
        if (message.boosts != null && message.hasOwnProperty("boosts"))
            object.boosts = message.boosts;
        if (message.renews_at != null && message.hasOwnProperty("renews_at"))
            object.renews_at = message.renews_at;
        return object;
    };

    /**
     * Converts this MonthlyLimits to JSON.
     * @function toJSON
     * @memberof MonthlyLimits
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MonthlyLimits.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MonthlyLimits
     * @function getTypeUrl
     * @memberof MonthlyLimits
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MonthlyLimits.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MonthlyLimits";
    };

    return MonthlyLimits;
})();

$root.Media = (function() {

    /**
     * Properties of a Media.
     * @exports IMedia
     * @interface IMedia
     * @property {string|null} [id] Media id
     * @property {string|null} [owner_id] Media owner_id
     * @property {number|null} [likes] Media likes
     * @property {number|null} [superlikes] Media superlikes
     * @property {number|null} [dislikes] Media dislikes
     * @property {number|null} [time_spent] Media time_spent
     * @property {string|null} [url] Media url
     * @property {string|null} [mime_type] Media mime_type
     * @property {number|null} [file_size] Media file_size
     * @property {string|null} [created_at] Media created_at
     * @property {string|null} [updated_at] Media updated_at
     */

    /**
     * Constructs a new Media.
     * @exports Media
     * @classdesc Represents a Media.
     * @implements IMedia
     * @constructor
     * @param {IMedia=} [properties] Properties to set
     */
    function Media(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Media id.
     * @member {string} id
     * @memberof Media
     * @instance
     */
    Media.prototype.id = "";

    /**
     * Media owner_id.
     * @member {string} owner_id
     * @memberof Media
     * @instance
     */
    Media.prototype.owner_id = "";

    /**
     * Media likes.
     * @member {number} likes
     * @memberof Media
     * @instance
     */
    Media.prototype.likes = 0;

    /**
     * Media superlikes.
     * @member {number} superlikes
     * @memberof Media
     * @instance
     */
    Media.prototype.superlikes = 0;

    /**
     * Media dislikes.
     * @member {number} dislikes
     * @memberof Media
     * @instance
     */
    Media.prototype.dislikes = 0;

    /**
     * Media time_spent.
     * @member {number} time_spent
     * @memberof Media
     * @instance
     */
    Media.prototype.time_spent = 0;

    /**
     * Media url.
     * @member {string} url
     * @memberof Media
     * @instance
     */
    Media.prototype.url = "";

    /**
     * Media mime_type.
     * @member {string} mime_type
     * @memberof Media
     * @instance
     */
    Media.prototype.mime_type = "";

    /**
     * Media file_size.
     * @member {number} file_size
     * @memberof Media
     * @instance
     */
    Media.prototype.file_size = 0;

    /**
     * Media created_at.
     * @member {string} created_at
     * @memberof Media
     * @instance
     */
    Media.prototype.created_at = "";

    /**
     * Media updated_at.
     * @member {string} updated_at
     * @memberof Media
     * @instance
     */
    Media.prototype.updated_at = "";

    /**
     * Creates a new Media instance using the specified properties.
     * @function create
     * @memberof Media
     * @static
     * @param {IMedia=} [properties] Properties to set
     * @returns {Media} Media instance
     */
    Media.create = function create(properties) {
        return new Media(properties);
    };

    /**
     * Encodes the specified Media message. Does not implicitly {@link Media.verify|verify} messages.
     * @function encode
     * @memberof Media
     * @static
     * @param {IMedia} message Media message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Media.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.likes != null && Object.hasOwnProperty.call(message, "likes"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.likes);
        if (message.superlikes != null && Object.hasOwnProperty.call(message, "superlikes"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.superlikes);
        if (message.dislikes != null && Object.hasOwnProperty.call(message, "dislikes"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dislikes);
        if (message.time_spent != null && Object.hasOwnProperty.call(message, "time_spent"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.time_spent);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.url);
        if (message.mime_type != null && Object.hasOwnProperty.call(message, "mime_type"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.mime_type);
        if (message.file_size != null && Object.hasOwnProperty.call(message, "file_size"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.file_size);
        if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.created_at);
        if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.updated_at);
        return writer;
    };

    /**
     * Encodes the specified Media message, length delimited. Does not implicitly {@link Media.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Media
     * @static
     * @param {IMedia} message Media message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Media.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Media message from the specified reader or buffer.
     * @function decode
     * @memberof Media
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Media} Media
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Media.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Media();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.likes = reader.int32();
                    break;
                }
            case 4: {
                    message.superlikes = reader.int32();
                    break;
                }
            case 5: {
                    message.dislikes = reader.int32();
                    break;
                }
            case 6: {
                    message.time_spent = reader.int32();
                    break;
                }
            case 7: {
                    message.url = reader.string();
                    break;
                }
            case 8: {
                    message.mime_type = reader.string();
                    break;
                }
            case 9: {
                    message.file_size = reader.int32();
                    break;
                }
            case 10: {
                    message.created_at = reader.string();
                    break;
                }
            case 11: {
                    message.updated_at = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Media message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Media
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Media} Media
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Media.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Media message.
     * @function verify
     * @memberof Media
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Media.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.likes != null && message.hasOwnProperty("likes"))
            if (!$util.isInteger(message.likes))
                return "likes: integer expected";
        if (message.superlikes != null && message.hasOwnProperty("superlikes"))
            if (!$util.isInteger(message.superlikes))
                return "superlikes: integer expected";
        if (message.dislikes != null && message.hasOwnProperty("dislikes"))
            if (!$util.isInteger(message.dislikes))
                return "dislikes: integer expected";
        if (message.time_spent != null && message.hasOwnProperty("time_spent"))
            if (!$util.isInteger(message.time_spent))
                return "time_spent: integer expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        if (message.mime_type != null && message.hasOwnProperty("mime_type"))
            if (!$util.isString(message.mime_type))
                return "mime_type: string expected";
        if (message.file_size != null && message.hasOwnProperty("file_size"))
            if (!$util.isInteger(message.file_size))
                return "file_size: integer expected";
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            if (!$util.isString(message.created_at))
                return "created_at: string expected";
        if (message.updated_at != null && message.hasOwnProperty("updated_at"))
            if (!$util.isString(message.updated_at))
                return "updated_at: string expected";
        return null;
    };

    /**
     * Creates a Media message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Media
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Media} Media
     */
    Media.fromObject = function fromObject(object) {
        if (object instanceof $root.Media)
            return object;
        var message = new $root.Media();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.likes != null)
            message.likes = object.likes | 0;
        if (object.superlikes != null)
            message.superlikes = object.superlikes | 0;
        if (object.dislikes != null)
            message.dislikes = object.dislikes | 0;
        if (object.time_spent != null)
            message.time_spent = object.time_spent | 0;
        if (object.url != null)
            message.url = String(object.url);
        if (object.mime_type != null)
            message.mime_type = String(object.mime_type);
        if (object.file_size != null)
            message.file_size = object.file_size | 0;
        if (object.created_at != null)
            message.created_at = String(object.created_at);
        if (object.updated_at != null)
            message.updated_at = String(object.updated_at);
        return message;
    };

    /**
     * Creates a plain object from a Media message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Media
     * @static
     * @param {Media} message Media
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Media.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.likes = 0;
            object.superlikes = 0;
            object.dislikes = 0;
            object.time_spent = 0;
            object.url = "";
            object.mime_type = "";
            object.file_size = 0;
            object.created_at = "";
            object.updated_at = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.likes != null && message.hasOwnProperty("likes"))
            object.likes = message.likes;
        if (message.superlikes != null && message.hasOwnProperty("superlikes"))
            object.superlikes = message.superlikes;
        if (message.dislikes != null && message.hasOwnProperty("dislikes"))
            object.dislikes = message.dislikes;
        if (message.time_spent != null && message.hasOwnProperty("time_spent"))
            object.time_spent = message.time_spent;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.mime_type != null && message.hasOwnProperty("mime_type"))
            object.mime_type = message.mime_type;
        if (message.file_size != null && message.hasOwnProperty("file_size"))
            object.file_size = message.file_size;
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            object.created_at = message.created_at;
        if (message.updated_at != null && message.hasOwnProperty("updated_at"))
            object.updated_at = message.updated_at;
        return object;
    };

    /**
     * Converts this Media to JSON.
     * @function toJSON
     * @memberof Media
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Media.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Media
     * @function getTypeUrl
     * @memberof Media
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Media.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Media";
    };

    return Media;
})();

$root.Likes = (function() {

    /**
     * Properties of a Likes.
     * @exports ILikes
     * @interface ILikes
     * @property {string|null} [id] Likes id
     * @property {string|null} [owner_id] Likes owner_id
     * @property {string|null} [target_id] Likes target_id
     * @property {string|null} [created_at] Likes created_at
     * @property {boolean|null} [is_super] Likes is_super
     */

    /**
     * Constructs a new Likes.
     * @exports Likes
     * @classdesc Represents a Likes.
     * @implements ILikes
     * @constructor
     * @param {ILikes=} [properties] Properties to set
     */
    function Likes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Likes id.
     * @member {string} id
     * @memberof Likes
     * @instance
     */
    Likes.prototype.id = "";

    /**
     * Likes owner_id.
     * @member {string} owner_id
     * @memberof Likes
     * @instance
     */
    Likes.prototype.owner_id = "";

    /**
     * Likes target_id.
     * @member {string} target_id
     * @memberof Likes
     * @instance
     */
    Likes.prototype.target_id = "";

    /**
     * Likes created_at.
     * @member {string} created_at
     * @memberof Likes
     * @instance
     */
    Likes.prototype.created_at = "";

    /**
     * Likes is_super.
     * @member {boolean} is_super
     * @memberof Likes
     * @instance
     */
    Likes.prototype.is_super = false;

    /**
     * Creates a new Likes instance using the specified properties.
     * @function create
     * @memberof Likes
     * @static
     * @param {ILikes=} [properties] Properties to set
     * @returns {Likes} Likes instance
     */
    Likes.create = function create(properties) {
        return new Likes(properties);
    };

    /**
     * Encodes the specified Likes message. Does not implicitly {@link Likes.verify|verify} messages.
     * @function encode
     * @memberof Likes
     * @static
     * @param {ILikes} message Likes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Likes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.target_id != null && Object.hasOwnProperty.call(message, "target_id"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.target_id);
        if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.created_at);
        if (message.is_super != null && Object.hasOwnProperty.call(message, "is_super"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_super);
        return writer;
    };

    /**
     * Encodes the specified Likes message, length delimited. Does not implicitly {@link Likes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Likes
     * @static
     * @param {ILikes} message Likes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Likes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Likes message from the specified reader or buffer.
     * @function decode
     * @memberof Likes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Likes} Likes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Likes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Likes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.target_id = reader.string();
                    break;
                }
            case 4: {
                    message.created_at = reader.string();
                    break;
                }
            case 5: {
                    message.is_super = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Likes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Likes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Likes} Likes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Likes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Likes message.
     * @function verify
     * @memberof Likes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Likes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.target_id != null && message.hasOwnProperty("target_id"))
            if (!$util.isString(message.target_id))
                return "target_id: string expected";
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            if (!$util.isString(message.created_at))
                return "created_at: string expected";
        if (message.is_super != null && message.hasOwnProperty("is_super"))
            if (typeof message.is_super !== "boolean")
                return "is_super: boolean expected";
        return null;
    };

    /**
     * Creates a Likes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Likes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Likes} Likes
     */
    Likes.fromObject = function fromObject(object) {
        if (object instanceof $root.Likes)
            return object;
        var message = new $root.Likes();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.target_id != null)
            message.target_id = String(object.target_id);
        if (object.created_at != null)
            message.created_at = String(object.created_at);
        if (object.is_super != null)
            message.is_super = Boolean(object.is_super);
        return message;
    };

    /**
     * Creates a plain object from a Likes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Likes
     * @static
     * @param {Likes} message Likes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Likes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.target_id = "";
            object.created_at = "";
            object.is_super = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.target_id != null && message.hasOwnProperty("target_id"))
            object.target_id = message.target_id;
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            object.created_at = message.created_at;
        if (message.is_super != null && message.hasOwnProperty("is_super"))
            object.is_super = message.is_super;
        return object;
    };

    /**
     * Converts this Likes to JSON.
     * @function toJSON
     * @memberof Likes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Likes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Likes
     * @function getTypeUrl
     * @memberof Likes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Likes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Likes";
    };

    return Likes;
})();

$root.Dislikes = (function() {

    /**
     * Properties of a Dislikes.
     * @exports IDislikes
     * @interface IDislikes
     * @property {string|null} [id] Dislikes id
     * @property {string|null} [owner_id] Dislikes owner_id
     * @property {string|null} [target_id] Dislikes target_id
     * @property {string|null} [created_at] Dislikes created_at
     */

    /**
     * Constructs a new Dislikes.
     * @exports Dislikes
     * @classdesc Represents a Dislikes.
     * @implements IDislikes
     * @constructor
     * @param {IDislikes=} [properties] Properties to set
     */
    function Dislikes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Dislikes id.
     * @member {string} id
     * @memberof Dislikes
     * @instance
     */
    Dislikes.prototype.id = "";

    /**
     * Dislikes owner_id.
     * @member {string} owner_id
     * @memberof Dislikes
     * @instance
     */
    Dislikes.prototype.owner_id = "";

    /**
     * Dislikes target_id.
     * @member {string} target_id
     * @memberof Dislikes
     * @instance
     */
    Dislikes.prototype.target_id = "";

    /**
     * Dislikes created_at.
     * @member {string} created_at
     * @memberof Dislikes
     * @instance
     */
    Dislikes.prototype.created_at = "";

    /**
     * Creates a new Dislikes instance using the specified properties.
     * @function create
     * @memberof Dislikes
     * @static
     * @param {IDislikes=} [properties] Properties to set
     * @returns {Dislikes} Dislikes instance
     */
    Dislikes.create = function create(properties) {
        return new Dislikes(properties);
    };

    /**
     * Encodes the specified Dislikes message. Does not implicitly {@link Dislikes.verify|verify} messages.
     * @function encode
     * @memberof Dislikes
     * @static
     * @param {IDislikes} message Dislikes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Dislikes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.target_id != null && Object.hasOwnProperty.call(message, "target_id"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.target_id);
        if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.created_at);
        return writer;
    };

    /**
     * Encodes the specified Dislikes message, length delimited. Does not implicitly {@link Dislikes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Dislikes
     * @static
     * @param {IDislikes} message Dislikes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Dislikes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Dislikes message from the specified reader or buffer.
     * @function decode
     * @memberof Dislikes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Dislikes} Dislikes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Dislikes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Dislikes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.target_id = reader.string();
                    break;
                }
            case 4: {
                    message.created_at = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Dislikes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Dislikes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Dislikes} Dislikes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Dislikes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Dislikes message.
     * @function verify
     * @memberof Dislikes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Dislikes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.target_id != null && message.hasOwnProperty("target_id"))
            if (!$util.isString(message.target_id))
                return "target_id: string expected";
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            if (!$util.isString(message.created_at))
                return "created_at: string expected";
        return null;
    };

    /**
     * Creates a Dislikes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Dislikes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Dislikes} Dislikes
     */
    Dislikes.fromObject = function fromObject(object) {
        if (object instanceof $root.Dislikes)
            return object;
        var message = new $root.Dislikes();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.target_id != null)
            message.target_id = String(object.target_id);
        if (object.created_at != null)
            message.created_at = String(object.created_at);
        return message;
    };

    /**
     * Creates a plain object from a Dislikes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Dislikes
     * @static
     * @param {Dislikes} message Dislikes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Dislikes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.target_id = "";
            object.created_at = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.target_id != null && message.hasOwnProperty("target_id"))
            object.target_id = message.target_id;
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            object.created_at = message.created_at;
        return object;
    };

    /**
     * Converts this Dislikes to JSON.
     * @function toJSON
     * @memberof Dislikes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Dislikes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Dislikes
     * @function getTypeUrl
     * @memberof Dislikes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Dislikes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Dislikes";
    };

    return Dislikes;
})();

$root.Conversations = (function() {

    /**
     * Properties of a Conversations.
     * @exports IConversations
     * @interface IConversations
     * @property {string|null} [id] Conversations id
     * @property {string|null} [user1_id] Conversations user1_id
     * @property {string|null} [user2_id] Conversations user2_id
     * @property {boolean|null} [blocked] Conversations blocked
     * @property {string|null} [who_blocked] Conversations who_blocked
     * @property {string|null} [who_reported] Conversations who_reported
     * @property {string|null} [created_at] Conversations created_at
     * @property {string|null} [last_message] Conversations last_message
     */

    /**
     * Constructs a new Conversations.
     * @exports Conversations
     * @classdesc Represents a Conversations.
     * @implements IConversations
     * @constructor
     * @param {IConversations=} [properties] Properties to set
     */
    function Conversations(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Conversations id.
     * @member {string} id
     * @memberof Conversations
     * @instance
     */
    Conversations.prototype.id = "";

    /**
     * Conversations user1_id.
     * @member {string} user1_id
     * @memberof Conversations
     * @instance
     */
    Conversations.prototype.user1_id = "";

    /**
     * Conversations user2_id.
     * @member {string} user2_id
     * @memberof Conversations
     * @instance
     */
    Conversations.prototype.user2_id = "";

    /**
     * Conversations blocked.
     * @member {boolean} blocked
     * @memberof Conversations
     * @instance
     */
    Conversations.prototype.blocked = false;

    /**
     * Conversations who_blocked.
     * @member {string} who_blocked
     * @memberof Conversations
     * @instance
     */
    Conversations.prototype.who_blocked = "";

    /**
     * Conversations who_reported.
     * @member {string} who_reported
     * @memberof Conversations
     * @instance
     */
    Conversations.prototype.who_reported = "";

    /**
     * Conversations created_at.
     * @member {string} created_at
     * @memberof Conversations
     * @instance
     */
    Conversations.prototype.created_at = "";

    /**
     * Conversations last_message.
     * @member {string} last_message
     * @memberof Conversations
     * @instance
     */
    Conversations.prototype.last_message = "";

    /**
     * Creates a new Conversations instance using the specified properties.
     * @function create
     * @memberof Conversations
     * @static
     * @param {IConversations=} [properties] Properties to set
     * @returns {Conversations} Conversations instance
     */
    Conversations.create = function create(properties) {
        return new Conversations(properties);
    };

    /**
     * Encodes the specified Conversations message. Does not implicitly {@link Conversations.verify|verify} messages.
     * @function encode
     * @memberof Conversations
     * @static
     * @param {IConversations} message Conversations message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Conversations.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.user1_id != null && Object.hasOwnProperty.call(message, "user1_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.user1_id);
        if (message.user2_id != null && Object.hasOwnProperty.call(message, "user2_id"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.user2_id);
        if (message.blocked != null && Object.hasOwnProperty.call(message, "blocked"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.blocked);
        if (message.who_blocked != null && Object.hasOwnProperty.call(message, "who_blocked"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.who_blocked);
        if (message.who_reported != null && Object.hasOwnProperty.call(message, "who_reported"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.who_reported);
        if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.created_at);
        if (message.last_message != null && Object.hasOwnProperty.call(message, "last_message"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.last_message);
        return writer;
    };

    /**
     * Encodes the specified Conversations message, length delimited. Does not implicitly {@link Conversations.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Conversations
     * @static
     * @param {IConversations} message Conversations message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Conversations.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Conversations message from the specified reader or buffer.
     * @function decode
     * @memberof Conversations
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Conversations} Conversations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Conversations.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Conversations();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.user1_id = reader.string();
                    break;
                }
            case 3: {
                    message.user2_id = reader.string();
                    break;
                }
            case 4: {
                    message.blocked = reader.bool();
                    break;
                }
            case 5: {
                    message.who_blocked = reader.string();
                    break;
                }
            case 6: {
                    message.who_reported = reader.string();
                    break;
                }
            case 7: {
                    message.created_at = reader.string();
                    break;
                }
            case 8: {
                    message.last_message = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Conversations message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Conversations
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Conversations} Conversations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Conversations.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Conversations message.
     * @function verify
     * @memberof Conversations
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Conversations.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.user1_id != null && message.hasOwnProperty("user1_id"))
            if (!$util.isString(message.user1_id))
                return "user1_id: string expected";
        if (message.user2_id != null && message.hasOwnProperty("user2_id"))
            if (!$util.isString(message.user2_id))
                return "user2_id: string expected";
        if (message.blocked != null && message.hasOwnProperty("blocked"))
            if (typeof message.blocked !== "boolean")
                return "blocked: boolean expected";
        if (message.who_blocked != null && message.hasOwnProperty("who_blocked"))
            if (!$util.isString(message.who_blocked))
                return "who_blocked: string expected";
        if (message.who_reported != null && message.hasOwnProperty("who_reported"))
            if (!$util.isString(message.who_reported))
                return "who_reported: string expected";
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            if (!$util.isString(message.created_at))
                return "created_at: string expected";
        if (message.last_message != null && message.hasOwnProperty("last_message"))
            if (!$util.isString(message.last_message))
                return "last_message: string expected";
        return null;
    };

    /**
     * Creates a Conversations message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Conversations
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Conversations} Conversations
     */
    Conversations.fromObject = function fromObject(object) {
        if (object instanceof $root.Conversations)
            return object;
        var message = new $root.Conversations();
        if (object.id != null)
            message.id = String(object.id);
        if (object.user1_id != null)
            message.user1_id = String(object.user1_id);
        if (object.user2_id != null)
            message.user2_id = String(object.user2_id);
        if (object.blocked != null)
            message.blocked = Boolean(object.blocked);
        if (object.who_blocked != null)
            message.who_blocked = String(object.who_blocked);
        if (object.who_reported != null)
            message.who_reported = String(object.who_reported);
        if (object.created_at != null)
            message.created_at = String(object.created_at);
        if (object.last_message != null)
            message.last_message = String(object.last_message);
        return message;
    };

    /**
     * Creates a plain object from a Conversations message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Conversations
     * @static
     * @param {Conversations} message Conversations
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Conversations.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.user1_id = "";
            object.user2_id = "";
            object.blocked = false;
            object.who_blocked = "";
            object.who_reported = "";
            object.created_at = "";
            object.last_message = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.user1_id != null && message.hasOwnProperty("user1_id"))
            object.user1_id = message.user1_id;
        if (message.user2_id != null && message.hasOwnProperty("user2_id"))
            object.user2_id = message.user2_id;
        if (message.blocked != null && message.hasOwnProperty("blocked"))
            object.blocked = message.blocked;
        if (message.who_blocked != null && message.hasOwnProperty("who_blocked"))
            object.who_blocked = message.who_blocked;
        if (message.who_reported != null && message.hasOwnProperty("who_reported"))
            object.who_reported = message.who_reported;
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            object.created_at = message.created_at;
        if (message.last_message != null && message.hasOwnProperty("last_message"))
            object.last_message = message.last_message;
        return object;
    };

    /**
     * Converts this Conversations to JSON.
     * @function toJSON
     * @memberof Conversations
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Conversations.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Conversations
     * @function getTypeUrl
     * @memberof Conversations
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Conversations.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Conversations";
    };

    return Conversations;
})();

$root.ConversationList = (function() {

    /**
     * Properties of a ConversationList.
     * @exports IConversationList
     * @interface IConversationList
     * @property {number|null} [take] ConversationList take
     * @property {number|null} [skip] ConversationList skip
     * @property {number|null} [total] ConversationList total
     * @property {Array.<IConversations>|null} [conversations] ConversationList conversations
     * @property {boolean|null} [has_more] ConversationList has_more
     */

    /**
     * Constructs a new ConversationList.
     * @exports ConversationList
     * @classdesc Represents a ConversationList.
     * @implements IConversationList
     * @constructor
     * @param {IConversationList=} [properties] Properties to set
     */
    function ConversationList(properties) {
        this.conversations = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConversationList take.
     * @member {number} take
     * @memberof ConversationList
     * @instance
     */
    ConversationList.prototype.take = 0;

    /**
     * ConversationList skip.
     * @member {number} skip
     * @memberof ConversationList
     * @instance
     */
    ConversationList.prototype.skip = 0;

    /**
     * ConversationList total.
     * @member {number} total
     * @memberof ConversationList
     * @instance
     */
    ConversationList.prototype.total = 0;

    /**
     * ConversationList conversations.
     * @member {Array.<IConversations>} conversations
     * @memberof ConversationList
     * @instance
     */
    ConversationList.prototype.conversations = $util.emptyArray;

    /**
     * ConversationList has_more.
     * @member {boolean|null|undefined} has_more
     * @memberof ConversationList
     * @instance
     */
    ConversationList.prototype.has_more = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ConversationList _has_more.
     * @member {"has_more"|undefined} _has_more
     * @memberof ConversationList
     * @instance
     */
    Object.defineProperty(ConversationList.prototype, "_has_more", {
        get: $util.oneOfGetter($oneOfFields = ["has_more"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ConversationList instance using the specified properties.
     * @function create
     * @memberof ConversationList
     * @static
     * @param {IConversationList=} [properties] Properties to set
     * @returns {ConversationList} ConversationList instance
     */
    ConversationList.create = function create(properties) {
        return new ConversationList(properties);
    };

    /**
     * Encodes the specified ConversationList message. Does not implicitly {@link ConversationList.verify|verify} messages.
     * @function encode
     * @memberof ConversationList
     * @static
     * @param {IConversationList} message ConversationList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConversationList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.take != null && Object.hasOwnProperty.call(message, "take"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.take);
        if (message.skip != null && Object.hasOwnProperty.call(message, "skip"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skip);
        if (message.total != null && Object.hasOwnProperty.call(message, "total"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.total);
        if (message.conversations != null && message.conversations.length)
            for (var i = 0; i < message.conversations.length; ++i)
                $root.Conversations.encode(message.conversations[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.has_more != null && Object.hasOwnProperty.call(message, "has_more"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.has_more);
        return writer;
    };

    /**
     * Encodes the specified ConversationList message, length delimited. Does not implicitly {@link ConversationList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConversationList
     * @static
     * @param {IConversationList} message ConversationList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConversationList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConversationList message from the specified reader or buffer.
     * @function decode
     * @memberof ConversationList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConversationList} ConversationList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConversationList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConversationList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.take = reader.int32();
                    break;
                }
            case 2: {
                    message.skip = reader.int32();
                    break;
                }
            case 3: {
                    message.total = reader.int32();
                    break;
                }
            case 4: {
                    if (!(message.conversations && message.conversations.length))
                        message.conversations = [];
                    message.conversations.push($root.Conversations.decode(reader, reader.uint32()));
                    break;
                }
            case 5: {
                    message.has_more = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConversationList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConversationList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConversationList} ConversationList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConversationList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConversationList message.
     * @function verify
     * @memberof ConversationList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConversationList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.take != null && message.hasOwnProperty("take"))
            if (!$util.isInteger(message.take))
                return "take: integer expected";
        if (message.skip != null && message.hasOwnProperty("skip"))
            if (!$util.isInteger(message.skip))
                return "skip: integer expected";
        if (message.total != null && message.hasOwnProperty("total"))
            if (!$util.isInteger(message.total))
                return "total: integer expected";
        if (message.conversations != null && message.hasOwnProperty("conversations")) {
            if (!Array.isArray(message.conversations))
                return "conversations: array expected";
            for (var i = 0; i < message.conversations.length; ++i) {
                var error = $root.Conversations.verify(message.conversations[i]);
                if (error)
                    return "conversations." + error;
            }
        }
        if (message.has_more != null && message.hasOwnProperty("has_more")) {
            properties._has_more = 1;
            if (typeof message.has_more !== "boolean")
                return "has_more: boolean expected";
        }
        return null;
    };

    /**
     * Creates a ConversationList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConversationList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConversationList} ConversationList
     */
    ConversationList.fromObject = function fromObject(object) {
        if (object instanceof $root.ConversationList)
            return object;
        var message = new $root.ConversationList();
        if (object.take != null)
            message.take = object.take | 0;
        if (object.skip != null)
            message.skip = object.skip | 0;
        if (object.total != null)
            message.total = object.total | 0;
        if (object.conversations) {
            if (!Array.isArray(object.conversations))
                throw TypeError(".ConversationList.conversations: array expected");
            message.conversations = [];
            for (var i = 0; i < object.conversations.length; ++i) {
                if (typeof object.conversations[i] !== "object")
                    throw TypeError(".ConversationList.conversations: object expected");
                message.conversations[i] = $root.Conversations.fromObject(object.conversations[i]);
            }
        }
        if (object.has_more != null)
            message.has_more = Boolean(object.has_more);
        return message;
    };

    /**
     * Creates a plain object from a ConversationList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConversationList
     * @static
     * @param {ConversationList} message ConversationList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConversationList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.conversations = [];
        if (options.defaults) {
            object.take = 0;
            object.skip = 0;
            object.total = 0;
        }
        if (message.take != null && message.hasOwnProperty("take"))
            object.take = message.take;
        if (message.skip != null && message.hasOwnProperty("skip"))
            object.skip = message.skip;
        if (message.total != null && message.hasOwnProperty("total"))
            object.total = message.total;
        if (message.conversations && message.conversations.length) {
            object.conversations = [];
            for (var j = 0; j < message.conversations.length; ++j)
                object.conversations[j] = $root.Conversations.toObject(message.conversations[j], options);
        }
        if (message.has_more != null && message.hasOwnProperty("has_more")) {
            object.has_more = message.has_more;
            if (options.oneofs)
                object._has_more = "has_more";
        }
        return object;
    };

    /**
     * Converts this ConversationList to JSON.
     * @function toJSON
     * @memberof ConversationList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConversationList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ConversationList
     * @function getTypeUrl
     * @memberof ConversationList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ConversationList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ConversationList";
    };

    return ConversationList;
})();

$root.Messages = (function() {

    /**
     * Properties of a Messages.
     * @exports IMessages
     * @interface IMessages
     * @property {string|null} [id] Messages id
     * @property {string|null} [owner_id] Messages owner_id
     * @property {string|null} [conversation_id] Messages conversation_id
     * @property {string|null} [content] Messages content
     * @property {boolean|null} [is_read] Messages is_read
     * @property {string|null} [time_read] Messages time_read
     * @property {boolean|null} [is_sent] Messages is_sent
     * @property {string|null} [time_sent] Messages time_sent
     * @property {boolean|null} [is_received] Messages is_received
     * @property {string|null} [time_received] Messages time_received
     * @property {boolean|null} [is_deleted] Messages is_deleted
     * @property {string|null} [created_at] Messages created_at
     * @property {string|null} [updated_at] Messages updated_at
     * @property {boolean|null} [is_edited] Messages is_edited
     * @property {string|null} [time_edited] Messages time_edited
     * @property {Array.<IEditHistory>|null} [edit_history] Messages edit_history
     */

    /**
     * Constructs a new Messages.
     * @exports Messages
     * @classdesc Represents a Messages.
     * @implements IMessages
     * @constructor
     * @param {IMessages=} [properties] Properties to set
     */
    function Messages(properties) {
        this.edit_history = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Messages id.
     * @member {string} id
     * @memberof Messages
     * @instance
     */
    Messages.prototype.id = "";

    /**
     * Messages owner_id.
     * @member {string} owner_id
     * @memberof Messages
     * @instance
     */
    Messages.prototype.owner_id = "";

    /**
     * Messages conversation_id.
     * @member {string} conversation_id
     * @memberof Messages
     * @instance
     */
    Messages.prototype.conversation_id = "";

    /**
     * Messages content.
     * @member {string} content
     * @memberof Messages
     * @instance
     */
    Messages.prototype.content = "";

    /**
     * Messages is_read.
     * @member {boolean} is_read
     * @memberof Messages
     * @instance
     */
    Messages.prototype.is_read = false;

    /**
     * Messages time_read.
     * @member {string} time_read
     * @memberof Messages
     * @instance
     */
    Messages.prototype.time_read = "";

    /**
     * Messages is_sent.
     * @member {boolean} is_sent
     * @memberof Messages
     * @instance
     */
    Messages.prototype.is_sent = false;

    /**
     * Messages time_sent.
     * @member {string} time_sent
     * @memberof Messages
     * @instance
     */
    Messages.prototype.time_sent = "";

    /**
     * Messages is_received.
     * @member {boolean} is_received
     * @memberof Messages
     * @instance
     */
    Messages.prototype.is_received = false;

    /**
     * Messages time_received.
     * @member {string} time_received
     * @memberof Messages
     * @instance
     */
    Messages.prototype.time_received = "";

    /**
     * Messages is_deleted.
     * @member {boolean} is_deleted
     * @memberof Messages
     * @instance
     */
    Messages.prototype.is_deleted = false;

    /**
     * Messages created_at.
     * @member {string} created_at
     * @memberof Messages
     * @instance
     */
    Messages.prototype.created_at = "";

    /**
     * Messages updated_at.
     * @member {string} updated_at
     * @memberof Messages
     * @instance
     */
    Messages.prototype.updated_at = "";

    /**
     * Messages is_edited.
     * @member {boolean} is_edited
     * @memberof Messages
     * @instance
     */
    Messages.prototype.is_edited = false;

    /**
     * Messages time_edited.
     * @member {string} time_edited
     * @memberof Messages
     * @instance
     */
    Messages.prototype.time_edited = "";

    /**
     * Messages edit_history.
     * @member {Array.<IEditHistory>} edit_history
     * @memberof Messages
     * @instance
     */
    Messages.prototype.edit_history = $util.emptyArray;

    /**
     * Creates a new Messages instance using the specified properties.
     * @function create
     * @memberof Messages
     * @static
     * @param {IMessages=} [properties] Properties to set
     * @returns {Messages} Messages instance
     */
    Messages.create = function create(properties) {
        return new Messages(properties);
    };

    /**
     * Encodes the specified Messages message. Does not implicitly {@link Messages.verify|verify} messages.
     * @function encode
     * @memberof Messages
     * @static
     * @param {IMessages} message Messages message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Messages.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
        if (message.conversation_id != null && Object.hasOwnProperty.call(message, "conversation_id"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.conversation_id);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
        if (message.is_read != null && Object.hasOwnProperty.call(message, "is_read"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_read);
        if (message.time_read != null && Object.hasOwnProperty.call(message, "time_read"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.time_read);
        if (message.is_sent != null && Object.hasOwnProperty.call(message, "is_sent"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.is_sent);
        if (message.time_sent != null && Object.hasOwnProperty.call(message, "time_sent"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.time_sent);
        if (message.is_received != null && Object.hasOwnProperty.call(message, "is_received"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.is_received);
        if (message.time_received != null && Object.hasOwnProperty.call(message, "time_received"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.time_received);
        if (message.is_deleted != null && Object.hasOwnProperty.call(message, "is_deleted"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.is_deleted);
        if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.created_at);
        if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.updated_at);
        if (message.is_edited != null && Object.hasOwnProperty.call(message, "is_edited"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.is_edited);
        if (message.time_edited != null && Object.hasOwnProperty.call(message, "time_edited"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.time_edited);
        if (message.edit_history != null && message.edit_history.length)
            for (var i = 0; i < message.edit_history.length; ++i)
                $root.EditHistory.encode(message.edit_history[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Messages message, length delimited. Does not implicitly {@link Messages.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Messages
     * @static
     * @param {IMessages} message Messages message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Messages.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Messages message from the specified reader or buffer.
     * @function decode
     * @memberof Messages
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Messages} Messages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Messages.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Messages();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.owner_id = reader.string();
                    break;
                }
            case 3: {
                    message.conversation_id = reader.string();
                    break;
                }
            case 4: {
                    message.content = reader.string();
                    break;
                }
            case 5: {
                    message.is_read = reader.bool();
                    break;
                }
            case 6: {
                    message.time_read = reader.string();
                    break;
                }
            case 7: {
                    message.is_sent = reader.bool();
                    break;
                }
            case 8: {
                    message.time_sent = reader.string();
                    break;
                }
            case 9: {
                    message.is_received = reader.bool();
                    break;
                }
            case 10: {
                    message.time_received = reader.string();
                    break;
                }
            case 11: {
                    message.is_deleted = reader.bool();
                    break;
                }
            case 12: {
                    message.created_at = reader.string();
                    break;
                }
            case 13: {
                    message.updated_at = reader.string();
                    break;
                }
            case 14: {
                    message.is_edited = reader.bool();
                    break;
                }
            case 15: {
                    message.time_edited = reader.string();
                    break;
                }
            case 16: {
                    if (!(message.edit_history && message.edit_history.length))
                        message.edit_history = [];
                    message.edit_history.push($root.EditHistory.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Messages message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Messages
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Messages} Messages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Messages.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Messages message.
     * @function verify
     * @memberof Messages
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Messages.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            if (!$util.isString(message.owner_id))
                return "owner_id: string expected";
        if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
            if (!$util.isString(message.conversation_id))
                return "conversation_id: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.is_read != null && message.hasOwnProperty("is_read"))
            if (typeof message.is_read !== "boolean")
                return "is_read: boolean expected";
        if (message.time_read != null && message.hasOwnProperty("time_read"))
            if (!$util.isString(message.time_read))
                return "time_read: string expected";
        if (message.is_sent != null && message.hasOwnProperty("is_sent"))
            if (typeof message.is_sent !== "boolean")
                return "is_sent: boolean expected";
        if (message.time_sent != null && message.hasOwnProperty("time_sent"))
            if (!$util.isString(message.time_sent))
                return "time_sent: string expected";
        if (message.is_received != null && message.hasOwnProperty("is_received"))
            if (typeof message.is_received !== "boolean")
                return "is_received: boolean expected";
        if (message.time_received != null && message.hasOwnProperty("time_received"))
            if (!$util.isString(message.time_received))
                return "time_received: string expected";
        if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
            if (typeof message.is_deleted !== "boolean")
                return "is_deleted: boolean expected";
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            if (!$util.isString(message.created_at))
                return "created_at: string expected";
        if (message.updated_at != null && message.hasOwnProperty("updated_at"))
            if (!$util.isString(message.updated_at))
                return "updated_at: string expected";
        if (message.is_edited != null && message.hasOwnProperty("is_edited"))
            if (typeof message.is_edited !== "boolean")
                return "is_edited: boolean expected";
        if (message.time_edited != null && message.hasOwnProperty("time_edited"))
            if (!$util.isString(message.time_edited))
                return "time_edited: string expected";
        if (message.edit_history != null && message.hasOwnProperty("edit_history")) {
            if (!Array.isArray(message.edit_history))
                return "edit_history: array expected";
            for (var i = 0; i < message.edit_history.length; ++i) {
                var error = $root.EditHistory.verify(message.edit_history[i]);
                if (error)
                    return "edit_history." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Messages message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Messages
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Messages} Messages
     */
    Messages.fromObject = function fromObject(object) {
        if (object instanceof $root.Messages)
            return object;
        var message = new $root.Messages();
        if (object.id != null)
            message.id = String(object.id);
        if (object.owner_id != null)
            message.owner_id = String(object.owner_id);
        if (object.conversation_id != null)
            message.conversation_id = String(object.conversation_id);
        if (object.content != null)
            message.content = String(object.content);
        if (object.is_read != null)
            message.is_read = Boolean(object.is_read);
        if (object.time_read != null)
            message.time_read = String(object.time_read);
        if (object.is_sent != null)
            message.is_sent = Boolean(object.is_sent);
        if (object.time_sent != null)
            message.time_sent = String(object.time_sent);
        if (object.is_received != null)
            message.is_received = Boolean(object.is_received);
        if (object.time_received != null)
            message.time_received = String(object.time_received);
        if (object.is_deleted != null)
            message.is_deleted = Boolean(object.is_deleted);
        if (object.created_at != null)
            message.created_at = String(object.created_at);
        if (object.updated_at != null)
            message.updated_at = String(object.updated_at);
        if (object.is_edited != null)
            message.is_edited = Boolean(object.is_edited);
        if (object.time_edited != null)
            message.time_edited = String(object.time_edited);
        if (object.edit_history) {
            if (!Array.isArray(object.edit_history))
                throw TypeError(".Messages.edit_history: array expected");
            message.edit_history = [];
            for (var i = 0; i < object.edit_history.length; ++i) {
                if (typeof object.edit_history[i] !== "object")
                    throw TypeError(".Messages.edit_history: object expected");
                message.edit_history[i] = $root.EditHistory.fromObject(object.edit_history[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Messages message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Messages
     * @static
     * @param {Messages} message Messages
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Messages.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.edit_history = [];
        if (options.defaults) {
            object.id = "";
            object.owner_id = "";
            object.conversation_id = "";
            object.content = "";
            object.is_read = false;
            object.time_read = "";
            object.is_sent = false;
            object.time_sent = "";
            object.is_received = false;
            object.time_received = "";
            object.is_deleted = false;
            object.created_at = "";
            object.updated_at = "";
            object.is_edited = false;
            object.time_edited = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner_id != null && message.hasOwnProperty("owner_id"))
            object.owner_id = message.owner_id;
        if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
            object.conversation_id = message.conversation_id;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.is_read != null && message.hasOwnProperty("is_read"))
            object.is_read = message.is_read;
        if (message.time_read != null && message.hasOwnProperty("time_read"))
            object.time_read = message.time_read;
        if (message.is_sent != null && message.hasOwnProperty("is_sent"))
            object.is_sent = message.is_sent;
        if (message.time_sent != null && message.hasOwnProperty("time_sent"))
            object.time_sent = message.time_sent;
        if (message.is_received != null && message.hasOwnProperty("is_received"))
            object.is_received = message.is_received;
        if (message.time_received != null && message.hasOwnProperty("time_received"))
            object.time_received = message.time_received;
        if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
            object.is_deleted = message.is_deleted;
        if (message.created_at != null && message.hasOwnProperty("created_at"))
            object.created_at = message.created_at;
        if (message.updated_at != null && message.hasOwnProperty("updated_at"))
            object.updated_at = message.updated_at;
        if (message.is_edited != null && message.hasOwnProperty("is_edited"))
            object.is_edited = message.is_edited;
        if (message.time_edited != null && message.hasOwnProperty("time_edited"))
            object.time_edited = message.time_edited;
        if (message.edit_history && message.edit_history.length) {
            object.edit_history = [];
            for (var j = 0; j < message.edit_history.length; ++j)
                object.edit_history[j] = $root.EditHistory.toObject(message.edit_history[j], options);
        }
        return object;
    };

    /**
     * Converts this Messages to JSON.
     * @function toJSON
     * @memberof Messages
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Messages.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Messages
     * @function getTypeUrl
     * @memberof Messages
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Messages.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Messages";
    };

    return Messages;
})();

$root.EditMessage = (function() {

    /**
     * Properties of an EditMessage.
     * @exports IEditMessage
     * @interface IEditMessage
     * @property {string|null} [id] EditMessage id
     * @property {string|null} [content] EditMessage content
     */

    /**
     * Constructs a new EditMessage.
     * @exports EditMessage
     * @classdesc Represents an EditMessage.
     * @implements IEditMessage
     * @constructor
     * @param {IEditMessage=} [properties] Properties to set
     */
    function EditMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EditMessage id.
     * @member {string} id
     * @memberof EditMessage
     * @instance
     */
    EditMessage.prototype.id = "";

    /**
     * EditMessage content.
     * @member {string} content
     * @memberof EditMessage
     * @instance
     */
    EditMessage.prototype.content = "";

    /**
     * Creates a new EditMessage instance using the specified properties.
     * @function create
     * @memberof EditMessage
     * @static
     * @param {IEditMessage=} [properties] Properties to set
     * @returns {EditMessage} EditMessage instance
     */
    EditMessage.create = function create(properties) {
        return new EditMessage(properties);
    };

    /**
     * Encodes the specified EditMessage message. Does not implicitly {@link EditMessage.verify|verify} messages.
     * @function encode
     * @memberof EditMessage
     * @static
     * @param {IEditMessage} message EditMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified EditMessage message, length delimited. Does not implicitly {@link EditMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EditMessage
     * @static
     * @param {IEditMessage} message EditMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EditMessage message from the specified reader or buffer.
     * @function decode
     * @memberof EditMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EditMessage} EditMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EditMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.content = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EditMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EditMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EditMessage} EditMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EditMessage message.
     * @function verify
     * @memberof EditMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EditMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        return null;
    };

    /**
     * Creates an EditMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EditMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EditMessage} EditMessage
     */
    EditMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.EditMessage)
            return object;
        var message = new $root.EditMessage();
        if (object.id != null)
            message.id = String(object.id);
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from an EditMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EditMessage
     * @static
     * @param {EditMessage} message EditMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EditMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.content = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        return object;
    };

    /**
     * Converts this EditMessage to JSON.
     * @function toJSON
     * @memberof EditMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EditMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for EditMessage
     * @function getTypeUrl
     * @memberof EditMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EditMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EditMessage";
    };

    return EditMessage;
})();

$root.EditHistory = (function() {

    /**
     * Properties of an EditHistory.
     * @exports IEditHistory
     * @interface IEditHistory
     * @property {string|null} [message] EditHistory message
     * @property {string|null} [time_edited] EditHistory time_edited
     */

    /**
     * Constructs a new EditHistory.
     * @exports EditHistory
     * @classdesc Represents an EditHistory.
     * @implements IEditHistory
     * @constructor
     * @param {IEditHistory=} [properties] Properties to set
     */
    function EditHistory(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EditHistory message.
     * @member {string} message
     * @memberof EditHistory
     * @instance
     */
    EditHistory.prototype.message = "";

    /**
     * EditHistory time_edited.
     * @member {string} time_edited
     * @memberof EditHistory
     * @instance
     */
    EditHistory.prototype.time_edited = "";

    /**
     * Creates a new EditHistory instance using the specified properties.
     * @function create
     * @memberof EditHistory
     * @static
     * @param {IEditHistory=} [properties] Properties to set
     * @returns {EditHistory} EditHistory instance
     */
    EditHistory.create = function create(properties) {
        return new EditHistory(properties);
    };

    /**
     * Encodes the specified EditHistory message. Does not implicitly {@link EditHistory.verify|verify} messages.
     * @function encode
     * @memberof EditHistory
     * @static
     * @param {IEditHistory} message EditHistory message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditHistory.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        if (message.time_edited != null && Object.hasOwnProperty.call(message, "time_edited"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.time_edited);
        return writer;
    };

    /**
     * Encodes the specified EditHistory message, length delimited. Does not implicitly {@link EditHistory.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EditHistory
     * @static
     * @param {IEditHistory} message EditHistory message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditHistory.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EditHistory message from the specified reader or buffer.
     * @function decode
     * @memberof EditHistory
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EditHistory} EditHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditHistory.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EditHistory();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.message = reader.string();
                    break;
                }
            case 2: {
                    message.time_edited = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EditHistory message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EditHistory
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EditHistory} EditHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditHistory.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EditHistory message.
     * @function verify
     * @memberof EditHistory
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EditHistory.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.time_edited != null && message.hasOwnProperty("time_edited"))
            if (!$util.isString(message.time_edited))
                return "time_edited: string expected";
        return null;
    };

    /**
     * Creates an EditHistory message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EditHistory
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EditHistory} EditHistory
     */
    EditHistory.fromObject = function fromObject(object) {
        if (object instanceof $root.EditHistory)
            return object;
        var message = new $root.EditHistory();
        if (object.message != null)
            message.message = String(object.message);
        if (object.time_edited != null)
            message.time_edited = String(object.time_edited);
        return message;
    };

    /**
     * Creates a plain object from an EditHistory message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EditHistory
     * @static
     * @param {EditHistory} message EditHistory
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EditHistory.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.message = "";
            object.time_edited = "";
        }
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.time_edited != null && message.hasOwnProperty("time_edited"))
            object.time_edited = message.time_edited;
        return object;
    };

    /**
     * Converts this EditHistory to JSON.
     * @function toJSON
     * @memberof EditHistory
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EditHistory.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for EditHistory
     * @function getTypeUrl
     * @memberof EditHistory
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EditHistory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EditHistory";
    };

    return EditHistory;
})();

$root.Messagelist = (function() {

    /**
     * Properties of a Messagelist.
     * @exports IMessagelist
     * @interface IMessagelist
     * @property {number|null} [take] Messagelist take
     * @property {number|null} [skip] Messagelist skip
     * @property {number|null} [total] Messagelist total
     * @property {string|null} [conversation_id] Messagelist conversation_id
     * @property {Array.<IMessages>|null} [messages] Messagelist messages
     * @property {boolean|null} [has_more] Messagelist has_more
     */

    /**
     * Constructs a new Messagelist.
     * @exports Messagelist
     * @classdesc Represents a Messagelist.
     * @implements IMessagelist
     * @constructor
     * @param {IMessagelist=} [properties] Properties to set
     */
    function Messagelist(properties) {
        this.messages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Messagelist take.
     * @member {number} take
     * @memberof Messagelist
     * @instance
     */
    Messagelist.prototype.take = 0;

    /**
     * Messagelist skip.
     * @member {number} skip
     * @memberof Messagelist
     * @instance
     */
    Messagelist.prototype.skip = 0;

    /**
     * Messagelist total.
     * @member {number} total
     * @memberof Messagelist
     * @instance
     */
    Messagelist.prototype.total = 0;

    /**
     * Messagelist conversation_id.
     * @member {string} conversation_id
     * @memberof Messagelist
     * @instance
     */
    Messagelist.prototype.conversation_id = "";

    /**
     * Messagelist messages.
     * @member {Array.<IMessages>} messages
     * @memberof Messagelist
     * @instance
     */
    Messagelist.prototype.messages = $util.emptyArray;

    /**
     * Messagelist has_more.
     * @member {boolean|null|undefined} has_more
     * @memberof Messagelist
     * @instance
     */
    Messagelist.prototype.has_more = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Messagelist _has_more.
     * @member {"has_more"|undefined} _has_more
     * @memberof Messagelist
     * @instance
     */
    Object.defineProperty(Messagelist.prototype, "_has_more", {
        get: $util.oneOfGetter($oneOfFields = ["has_more"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Messagelist instance using the specified properties.
     * @function create
     * @memberof Messagelist
     * @static
     * @param {IMessagelist=} [properties] Properties to set
     * @returns {Messagelist} Messagelist instance
     */
    Messagelist.create = function create(properties) {
        return new Messagelist(properties);
    };

    /**
     * Encodes the specified Messagelist message. Does not implicitly {@link Messagelist.verify|verify} messages.
     * @function encode
     * @memberof Messagelist
     * @static
     * @param {IMessagelist} message Messagelist message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Messagelist.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.take != null && Object.hasOwnProperty.call(message, "take"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.take);
        if (message.skip != null && Object.hasOwnProperty.call(message, "skip"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skip);
        if (message.total != null && Object.hasOwnProperty.call(message, "total"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.total);
        if (message.conversation_id != null && Object.hasOwnProperty.call(message, "conversation_id"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.conversation_id);
        if (message.messages != null && message.messages.length)
            for (var i = 0; i < message.messages.length; ++i)
                $root.Messages.encode(message.messages[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.has_more != null && Object.hasOwnProperty.call(message, "has_more"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.has_more);
        return writer;
    };

    /**
     * Encodes the specified Messagelist message, length delimited. Does not implicitly {@link Messagelist.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Messagelist
     * @static
     * @param {IMessagelist} message Messagelist message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Messagelist.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Messagelist message from the specified reader or buffer.
     * @function decode
     * @memberof Messagelist
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Messagelist} Messagelist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Messagelist.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Messagelist();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.take = reader.int32();
                    break;
                }
            case 2: {
                    message.skip = reader.int32();
                    break;
                }
            case 3: {
                    message.total = reader.int32();
                    break;
                }
            case 4: {
                    message.conversation_id = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.Messages.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    message.has_more = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Messagelist message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Messagelist
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Messagelist} Messagelist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Messagelist.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Messagelist message.
     * @function verify
     * @memberof Messagelist
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Messagelist.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.take != null && message.hasOwnProperty("take"))
            if (!$util.isInteger(message.take))
                return "take: integer expected";
        if (message.skip != null && message.hasOwnProperty("skip"))
            if (!$util.isInteger(message.skip))
                return "skip: integer expected";
        if (message.total != null && message.hasOwnProperty("total"))
            if (!$util.isInteger(message.total))
                return "total: integer expected";
        if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
            if (!$util.isString(message.conversation_id))
                return "conversation_id: string expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (var i = 0; i < message.messages.length; ++i) {
                var error = $root.Messages.verify(message.messages[i]);
                if (error)
                    return "messages." + error;
            }
        }
        if (message.has_more != null && message.hasOwnProperty("has_more")) {
            properties._has_more = 1;
            if (typeof message.has_more !== "boolean")
                return "has_more: boolean expected";
        }
        return null;
    };

    /**
     * Creates a Messagelist message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Messagelist
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Messagelist} Messagelist
     */
    Messagelist.fromObject = function fromObject(object) {
        if (object instanceof $root.Messagelist)
            return object;
        var message = new $root.Messagelist();
        if (object.take != null)
            message.take = object.take | 0;
        if (object.skip != null)
            message.skip = object.skip | 0;
        if (object.total != null)
            message.total = object.total | 0;
        if (object.conversation_id != null)
            message.conversation_id = String(object.conversation_id);
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".Messagelist.messages: array expected");
            message.messages = [];
            for (var i = 0; i < object.messages.length; ++i) {
                if (typeof object.messages[i] !== "object")
                    throw TypeError(".Messagelist.messages: object expected");
                message.messages[i] = $root.Messages.fromObject(object.messages[i]);
            }
        }
        if (object.has_more != null)
            message.has_more = Boolean(object.has_more);
        return message;
    };

    /**
     * Creates a plain object from a Messagelist message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Messagelist
     * @static
     * @param {Messagelist} message Messagelist
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Messagelist.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.messages = [];
        if (options.defaults) {
            object.take = 0;
            object.skip = 0;
            object.total = 0;
            object.conversation_id = "";
        }
        if (message.take != null && message.hasOwnProperty("take"))
            object.take = message.take;
        if (message.skip != null && message.hasOwnProperty("skip"))
            object.skip = message.skip;
        if (message.total != null && message.hasOwnProperty("total"))
            object.total = message.total;
        if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
            object.conversation_id = message.conversation_id;
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (var j = 0; j < message.messages.length; ++j)
                object.messages[j] = $root.Messages.toObject(message.messages[j], options);
        }
        if (message.has_more != null && message.hasOwnProperty("has_more")) {
            object.has_more = message.has_more;
            if (options.oneofs)
                object._has_more = "has_more";
        }
        return object;
    };

    /**
     * Converts this Messagelist to JSON.
     * @function toJSON
     * @memberof Messagelist
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Messagelist.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Messagelist
     * @function getTypeUrl
     * @memberof Messagelist
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Messagelist.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Messagelist";
    };

    return Messagelist;
})();

$root.VideoGames = (function() {

    /**
     * Properties of a VideoGames.
     * @exports IVideoGames
     * @interface IVideoGames
     * @property {string|null} [id] VideoGames id
     * @property {string|null} [name] VideoGames name
     * @property {string|null} [image_url] VideoGames image_url
     * @property {string|null} [publisher] VideoGames publisher
     * @property {string|null} [release] VideoGames release
     * @property {Array.<string>|null} [platforms] VideoGames platforms
     * @property {Array.<string>|null} [genres] VideoGames genres
     * @property {Array.<string>|null} [tags] VideoGames tags
     * @property {string|null} [description] VideoGames description
     */

    /**
     * Constructs a new VideoGames.
     * @exports VideoGames
     * @classdesc Represents a VideoGames.
     * @implements IVideoGames
     * @constructor
     * @param {IVideoGames=} [properties] Properties to set
     */
    function VideoGames(properties) {
        this.platforms = [];
        this.genres = [];
        this.tags = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VideoGames id.
     * @member {string} id
     * @memberof VideoGames
     * @instance
     */
    VideoGames.prototype.id = "";

    /**
     * VideoGames name.
     * @member {string} name
     * @memberof VideoGames
     * @instance
     */
    VideoGames.prototype.name = "";

    /**
     * VideoGames image_url.
     * @member {string} image_url
     * @memberof VideoGames
     * @instance
     */
    VideoGames.prototype.image_url = "";

    /**
     * VideoGames publisher.
     * @member {string} publisher
     * @memberof VideoGames
     * @instance
     */
    VideoGames.prototype.publisher = "";

    /**
     * VideoGames release.
     * @member {string} release
     * @memberof VideoGames
     * @instance
     */
    VideoGames.prototype.release = "";

    /**
     * VideoGames platforms.
     * @member {Array.<string>} platforms
     * @memberof VideoGames
     * @instance
     */
    VideoGames.prototype.platforms = $util.emptyArray;

    /**
     * VideoGames genres.
     * @member {Array.<string>} genres
     * @memberof VideoGames
     * @instance
     */
    VideoGames.prototype.genres = $util.emptyArray;

    /**
     * VideoGames tags.
     * @member {Array.<string>} tags
     * @memberof VideoGames
     * @instance
     */
    VideoGames.prototype.tags = $util.emptyArray;

    /**
     * VideoGames description.
     * @member {string} description
     * @memberof VideoGames
     * @instance
     */
    VideoGames.prototype.description = "";

    /**
     * Creates a new VideoGames instance using the specified properties.
     * @function create
     * @memberof VideoGames
     * @static
     * @param {IVideoGames=} [properties] Properties to set
     * @returns {VideoGames} VideoGames instance
     */
    VideoGames.create = function create(properties) {
        return new VideoGames(properties);
    };

    /**
     * Encodes the specified VideoGames message. Does not implicitly {@link VideoGames.verify|verify} messages.
     * @function encode
     * @memberof VideoGames
     * @static
     * @param {IVideoGames} message VideoGames message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VideoGames.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.image_url != null && Object.hasOwnProperty.call(message, "image_url"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.image_url);
        if (message.publisher != null && Object.hasOwnProperty.call(message, "publisher"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.publisher);
        if (message.release != null && Object.hasOwnProperty.call(message, "release"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.release);
        if (message.platforms != null && message.platforms.length)
            for (var i = 0; i < message.platforms.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.platforms[i]);
        if (message.genres != null && message.genres.length)
            for (var i = 0; i < message.genres.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.genres[i]);
        if (message.tags != null && message.tags.length)
            for (var i = 0; i < message.tags.length; ++i)
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.tags[i]);
        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.description);
        return writer;
    };

    /**
     * Encodes the specified VideoGames message, length delimited. Does not implicitly {@link VideoGames.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VideoGames
     * @static
     * @param {IVideoGames} message VideoGames message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VideoGames.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VideoGames message from the specified reader or buffer.
     * @function decode
     * @memberof VideoGames
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VideoGames} VideoGames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VideoGames.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VideoGames();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.image_url = reader.string();
                    break;
                }
            case 4: {
                    message.publisher = reader.string();
                    break;
                }
            case 5: {
                    message.release = reader.string();
                    break;
                }
            case 6: {
                    if (!(message.platforms && message.platforms.length))
                        message.platforms = [];
                    message.platforms.push(reader.string());
                    break;
                }
            case 7: {
                    if (!(message.genres && message.genres.length))
                        message.genres = [];
                    message.genres.push(reader.string());
                    break;
                }
            case 8: {
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push(reader.string());
                    break;
                }
            case 9: {
                    message.description = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VideoGames message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VideoGames
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VideoGames} VideoGames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VideoGames.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VideoGames message.
     * @function verify
     * @memberof VideoGames
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VideoGames.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.image_url != null && message.hasOwnProperty("image_url"))
            if (!$util.isString(message.image_url))
                return "image_url: string expected";
        if (message.publisher != null && message.hasOwnProperty("publisher"))
            if (!$util.isString(message.publisher))
                return "publisher: string expected";
        if (message.release != null && message.hasOwnProperty("release"))
            if (!$util.isString(message.release))
                return "release: string expected";
        if (message.platforms != null && message.hasOwnProperty("platforms")) {
            if (!Array.isArray(message.platforms))
                return "platforms: array expected";
            for (var i = 0; i < message.platforms.length; ++i)
                if (!$util.isString(message.platforms[i]))
                    return "platforms: string[] expected";
        }
        if (message.genres != null && message.hasOwnProperty("genres")) {
            if (!Array.isArray(message.genres))
                return "genres: array expected";
            for (var i = 0; i < message.genres.length; ++i)
                if (!$util.isString(message.genres[i]))
                    return "genres: string[] expected";
        }
        if (message.tags != null && message.hasOwnProperty("tags")) {
            if (!Array.isArray(message.tags))
                return "tags: array expected";
            for (var i = 0; i < message.tags.length; ++i)
                if (!$util.isString(message.tags[i]))
                    return "tags: string[] expected";
        }
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        return null;
    };

    /**
     * Creates a VideoGames message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VideoGames
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VideoGames} VideoGames
     */
    VideoGames.fromObject = function fromObject(object) {
        if (object instanceof $root.VideoGames)
            return object;
        var message = new $root.VideoGames();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.image_url != null)
            message.image_url = String(object.image_url);
        if (object.publisher != null)
            message.publisher = String(object.publisher);
        if (object.release != null)
            message.release = String(object.release);
        if (object.platforms) {
            if (!Array.isArray(object.platforms))
                throw TypeError(".VideoGames.platforms: array expected");
            message.platforms = [];
            for (var i = 0; i < object.platforms.length; ++i)
                message.platforms[i] = String(object.platforms[i]);
        }
        if (object.genres) {
            if (!Array.isArray(object.genres))
                throw TypeError(".VideoGames.genres: array expected");
            message.genres = [];
            for (var i = 0; i < object.genres.length; ++i)
                message.genres[i] = String(object.genres[i]);
        }
        if (object.tags) {
            if (!Array.isArray(object.tags))
                throw TypeError(".VideoGames.tags: array expected");
            message.tags = [];
            for (var i = 0; i < object.tags.length; ++i)
                message.tags[i] = String(object.tags[i]);
        }
        if (object.description != null)
            message.description = String(object.description);
        return message;
    };

    /**
     * Creates a plain object from a VideoGames message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VideoGames
     * @static
     * @param {VideoGames} message VideoGames
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VideoGames.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.platforms = [];
            object.genres = [];
            object.tags = [];
        }
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.image_url = "";
            object.publisher = "";
            object.release = "";
            object.description = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.image_url != null && message.hasOwnProperty("image_url"))
            object.image_url = message.image_url;
        if (message.publisher != null && message.hasOwnProperty("publisher"))
            object.publisher = message.publisher;
        if (message.release != null && message.hasOwnProperty("release"))
            object.release = message.release;
        if (message.platforms && message.platforms.length) {
            object.platforms = [];
            for (var j = 0; j < message.platforms.length; ++j)
                object.platforms[j] = message.platforms[j];
        }
        if (message.genres && message.genres.length) {
            object.genres = [];
            for (var j = 0; j < message.genres.length; ++j)
                object.genres[j] = message.genres[j];
        }
        if (message.tags && message.tags.length) {
            object.tags = [];
            for (var j = 0; j < message.tags.length; ++j)
                object.tags[j] = message.tags[j];
        }
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        return object;
    };

    /**
     * Converts this VideoGames to JSON.
     * @function toJSON
     * @memberof VideoGames
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VideoGames.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VideoGames
     * @function getTypeUrl
     * @memberof VideoGames
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VideoGames.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VideoGames";
    };

    return VideoGames;
})();

$root.AuthorizeByPhoneRequest = (function() {

    /**
     * Properties of an AuthorizeByPhoneRequest.
     * @exports IAuthorizeByPhoneRequest
     * @interface IAuthorizeByPhoneRequest
     * @property {string|null} [phone] AuthorizeByPhoneRequest phone
     * @property {string|null} [OTP] AuthorizeByPhoneRequest OTP
     */

    /**
     * Constructs a new AuthorizeByPhoneRequest.
     * @exports AuthorizeByPhoneRequest
     * @classdesc Represents an AuthorizeByPhoneRequest.
     * @implements IAuthorizeByPhoneRequest
     * @constructor
     * @param {IAuthorizeByPhoneRequest=} [properties] Properties to set
     */
    function AuthorizeByPhoneRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthorizeByPhoneRequest phone.
     * @member {string} phone
     * @memberof AuthorizeByPhoneRequest
     * @instance
     */
    AuthorizeByPhoneRequest.prototype.phone = "";

    /**
     * AuthorizeByPhoneRequest OTP.
     * @member {string|null|undefined} OTP
     * @memberof AuthorizeByPhoneRequest
     * @instance
     */
    AuthorizeByPhoneRequest.prototype.OTP = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * AuthorizeByPhoneRequest _OTP.
     * @member {"OTP"|undefined} _OTP
     * @memberof AuthorizeByPhoneRequest
     * @instance
     */
    Object.defineProperty(AuthorizeByPhoneRequest.prototype, "_OTP", {
        get: $util.oneOfGetter($oneOfFields = ["OTP"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new AuthorizeByPhoneRequest instance using the specified properties.
     * @function create
     * @memberof AuthorizeByPhoneRequest
     * @static
     * @param {IAuthorizeByPhoneRequest=} [properties] Properties to set
     * @returns {AuthorizeByPhoneRequest} AuthorizeByPhoneRequest instance
     */
    AuthorizeByPhoneRequest.create = function create(properties) {
        return new AuthorizeByPhoneRequest(properties);
    };

    /**
     * Encodes the specified AuthorizeByPhoneRequest message. Does not implicitly {@link AuthorizeByPhoneRequest.verify|verify} messages.
     * @function encode
     * @memberof AuthorizeByPhoneRequest
     * @static
     * @param {IAuthorizeByPhoneRequest} message AuthorizeByPhoneRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthorizeByPhoneRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone);
        if (message.OTP != null && Object.hasOwnProperty.call(message, "OTP"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.OTP);
        return writer;
    };

    /**
     * Encodes the specified AuthorizeByPhoneRequest message, length delimited. Does not implicitly {@link AuthorizeByPhoneRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuthorizeByPhoneRequest
     * @static
     * @param {IAuthorizeByPhoneRequest} message AuthorizeByPhoneRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthorizeByPhoneRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuthorizeByPhoneRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AuthorizeByPhoneRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthorizeByPhoneRequest} AuthorizeByPhoneRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthorizeByPhoneRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthorizeByPhoneRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.phone = reader.string();
                    break;
                }
            case 2: {
                    message.OTP = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuthorizeByPhoneRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuthorizeByPhoneRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuthorizeByPhoneRequest} AuthorizeByPhoneRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthorizeByPhoneRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AuthorizeByPhoneRequest message.
     * @function verify
     * @memberof AuthorizeByPhoneRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AuthorizeByPhoneRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.phone != null && message.hasOwnProperty("phone"))
            if (!$util.isString(message.phone))
                return "phone: string expected";
        if (message.OTP != null && message.hasOwnProperty("OTP")) {
            properties._OTP = 1;
            if (!$util.isString(message.OTP))
                return "OTP: string expected";
        }
        return null;
    };

    /**
     * Creates an AuthorizeByPhoneRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuthorizeByPhoneRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuthorizeByPhoneRequest} AuthorizeByPhoneRequest
     */
    AuthorizeByPhoneRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.AuthorizeByPhoneRequest)
            return object;
        var message = new $root.AuthorizeByPhoneRequest();
        if (object.phone != null)
            message.phone = String(object.phone);
        if (object.OTP != null)
            message.OTP = String(object.OTP);
        return message;
    };

    /**
     * Creates a plain object from an AuthorizeByPhoneRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuthorizeByPhoneRequest
     * @static
     * @param {AuthorizeByPhoneRequest} message AuthorizeByPhoneRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuthorizeByPhoneRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.phone = "";
        if (message.phone != null && message.hasOwnProperty("phone"))
            object.phone = message.phone;
        if (message.OTP != null && message.hasOwnProperty("OTP")) {
            object.OTP = message.OTP;
            if (options.oneofs)
                object._OTP = "OTP";
        }
        return object;
    };

    /**
     * Converts this AuthorizeByPhoneRequest to JSON.
     * @function toJSON
     * @memberof AuthorizeByPhoneRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuthorizeByPhoneRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AuthorizeByPhoneRequest
     * @function getTypeUrl
     * @memberof AuthorizeByPhoneRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AuthorizeByPhoneRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AuthorizeByPhoneRequest";
    };

    return AuthorizeByPhoneRequest;
})();

$root.AuthResponse = (function() {

    /**
     * Properties of an AuthResponse.
     * @exports IAuthResponse
     * @interface IAuthResponse
     * @property {boolean|null} [authorized] AuthResponse authorized
     * @property {string|null} [message] AuthResponse message
     * @property {IUser|null} [user] AuthResponse user
     */

    /**
     * Constructs a new AuthResponse.
     * @exports AuthResponse
     * @classdesc Represents an AuthResponse.
     * @implements IAuthResponse
     * @constructor
     * @param {IAuthResponse=} [properties] Properties to set
     */
    function AuthResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthResponse authorized.
     * @member {boolean} authorized
     * @memberof AuthResponse
     * @instance
     */
    AuthResponse.prototype.authorized = false;

    /**
     * AuthResponse message.
     * @member {string} message
     * @memberof AuthResponse
     * @instance
     */
    AuthResponse.prototype.message = "";

    /**
     * AuthResponse user.
     * @member {IUser|null|undefined} user
     * @memberof AuthResponse
     * @instance
     */
    AuthResponse.prototype.user = null;

    /**
     * Creates a new AuthResponse instance using the specified properties.
     * @function create
     * @memberof AuthResponse
     * @static
     * @param {IAuthResponse=} [properties] Properties to set
     * @returns {AuthResponse} AuthResponse instance
     */
    AuthResponse.create = function create(properties) {
        return new AuthResponse(properties);
    };

    /**
     * Encodes the specified AuthResponse message. Does not implicitly {@link AuthResponse.verify|verify} messages.
     * @function encode
     * @memberof AuthResponse
     * @static
     * @param {IAuthResponse} message AuthResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.authorized != null && Object.hasOwnProperty.call(message, "authorized"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.authorized);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.User.encode(message.user, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link AuthResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuthResponse
     * @static
     * @param {IAuthResponse} message AuthResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuthResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AuthResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthResponse} AuthResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.authorized = reader.bool();
                    break;
                }
            case 2: {
                    message.message = reader.string();
                    break;
                }
            case 3: {
                    message.user = $root.User.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuthResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuthResponse} AuthResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AuthResponse message.
     * @function verify
     * @memberof AuthResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AuthResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.authorized != null && message.hasOwnProperty("authorized"))
            if (typeof message.authorized !== "boolean")
                return "authorized: boolean expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.User.verify(message.user);
            if (error)
                return "user." + error;
        }
        return null;
    };

    /**
     * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuthResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuthResponse} AuthResponse
     */
    AuthResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.AuthResponse)
            return object;
        var message = new $root.AuthResponse();
        if (object.authorized != null)
            message.authorized = Boolean(object.authorized);
        if (object.message != null)
            message.message = String(object.message);
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".AuthResponse.user: object expected");
            message.user = $root.User.fromObject(object.user);
        }
        return message;
    };

    /**
     * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuthResponse
     * @static
     * @param {AuthResponse} message AuthResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuthResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.authorized = false;
            object.message = "";
            object.user = null;
        }
        if (message.authorized != null && message.hasOwnProperty("authorized"))
            object.authorized = message.authorized;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.User.toObject(message.user, options);
        return object;
    };

    /**
     * Converts this AuthResponse to JSON.
     * @function toJSON
     * @memberof AuthResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuthResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AuthResponse
     * @function getTypeUrl
     * @memberof AuthResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AuthResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AuthResponse";
    };

    return AuthResponse;
})();

$root.SyncResponse = (function() {

    /**
     * Properties of a SyncResponse.
     * @exports ISyncResponse
     * @interface ISyncResponse
     * @property {Array.<IConversations>|null} [conversations] SyncResponse conversations
     * @property {Array.<IMedia>|null} [media] SyncResponse media
     * @property {IPreferences|null} [preferences] SyncResponse preferences
     * @property {ILimits|null} [limits] SyncResponse limits
     * @property {IDatingProfile|null} [datingProfile] SyncResponse datingProfile
     * @property {IUser|null} [user] SyncResponse user
     */

    /**
     * Constructs a new SyncResponse.
     * @exports SyncResponse
     * @classdesc Represents a SyncResponse.
     * @implements ISyncResponse
     * @constructor
     * @param {ISyncResponse=} [properties] Properties to set
     */
    function SyncResponse(properties) {
        this.conversations = [];
        this.media = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SyncResponse conversations.
     * @member {Array.<IConversations>} conversations
     * @memberof SyncResponse
     * @instance
     */
    SyncResponse.prototype.conversations = $util.emptyArray;

    /**
     * SyncResponse media.
     * @member {Array.<IMedia>} media
     * @memberof SyncResponse
     * @instance
     */
    SyncResponse.prototype.media = $util.emptyArray;

    /**
     * SyncResponse preferences.
     * @member {IPreferences|null|undefined} preferences
     * @memberof SyncResponse
     * @instance
     */
    SyncResponse.prototype.preferences = null;

    /**
     * SyncResponse limits.
     * @member {ILimits|null|undefined} limits
     * @memberof SyncResponse
     * @instance
     */
    SyncResponse.prototype.limits = null;

    /**
     * SyncResponse datingProfile.
     * @member {IDatingProfile|null|undefined} datingProfile
     * @memberof SyncResponse
     * @instance
     */
    SyncResponse.prototype.datingProfile = null;

    /**
     * SyncResponse user.
     * @member {IUser|null|undefined} user
     * @memberof SyncResponse
     * @instance
     */
    SyncResponse.prototype.user = null;

    /**
     * Creates a new SyncResponse instance using the specified properties.
     * @function create
     * @memberof SyncResponse
     * @static
     * @param {ISyncResponse=} [properties] Properties to set
     * @returns {SyncResponse} SyncResponse instance
     */
    SyncResponse.create = function create(properties) {
        return new SyncResponse(properties);
    };

    /**
     * Encodes the specified SyncResponse message. Does not implicitly {@link SyncResponse.verify|verify} messages.
     * @function encode
     * @memberof SyncResponse
     * @static
     * @param {ISyncResponse} message SyncResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.conversations != null && message.conversations.length)
            for (var i = 0; i < message.conversations.length; ++i)
                $root.Conversations.encode(message.conversations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.media != null && message.media.length)
            for (var i = 0; i < message.media.length; ++i)
                $root.Media.encode(message.media[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
            $root.Preferences.encode(message.preferences, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.limits != null && Object.hasOwnProperty.call(message, "limits"))
            $root.Limits.encode(message.limits, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.datingProfile != null && Object.hasOwnProperty.call(message, "datingProfile"))
            $root.DatingProfile.encode(message.datingProfile, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.User.encode(message.user, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SyncResponse message, length delimited. Does not implicitly {@link SyncResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SyncResponse
     * @static
     * @param {ISyncResponse} message SyncResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SyncResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SyncResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SyncResponse} SyncResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.conversations && message.conversations.length))
                        message.conversations = [];
                    message.conversations.push($root.Conversations.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    if (!(message.media && message.media.length))
                        message.media = [];
                    message.media.push($root.Media.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    message.preferences = $root.Preferences.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.limits = $root.Limits.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.datingProfile = $root.DatingProfile.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.user = $root.User.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SyncResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SyncResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SyncResponse} SyncResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SyncResponse message.
     * @function verify
     * @memberof SyncResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SyncResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.conversations != null && message.hasOwnProperty("conversations")) {
            if (!Array.isArray(message.conversations))
                return "conversations: array expected";
            for (var i = 0; i < message.conversations.length; ++i) {
                var error = $root.Conversations.verify(message.conversations[i]);
                if (error)
                    return "conversations." + error;
            }
        }
        if (message.media != null && message.hasOwnProperty("media")) {
            if (!Array.isArray(message.media))
                return "media: array expected";
            for (var i = 0; i < message.media.length; ++i) {
                var error = $root.Media.verify(message.media[i]);
                if (error)
                    return "media." + error;
            }
        }
        if (message.preferences != null && message.hasOwnProperty("preferences")) {
            var error = $root.Preferences.verify(message.preferences);
            if (error)
                return "preferences." + error;
        }
        if (message.limits != null && message.hasOwnProperty("limits")) {
            var error = $root.Limits.verify(message.limits);
            if (error)
                return "limits." + error;
        }
        if (message.datingProfile != null && message.hasOwnProperty("datingProfile")) {
            var error = $root.DatingProfile.verify(message.datingProfile);
            if (error)
                return "datingProfile." + error;
        }
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.User.verify(message.user);
            if (error)
                return "user." + error;
        }
        return null;
    };

    /**
     * Creates a SyncResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SyncResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SyncResponse} SyncResponse
     */
    SyncResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SyncResponse)
            return object;
        var message = new $root.SyncResponse();
        if (object.conversations) {
            if (!Array.isArray(object.conversations))
                throw TypeError(".SyncResponse.conversations: array expected");
            message.conversations = [];
            for (var i = 0; i < object.conversations.length; ++i) {
                if (typeof object.conversations[i] !== "object")
                    throw TypeError(".SyncResponse.conversations: object expected");
                message.conversations[i] = $root.Conversations.fromObject(object.conversations[i]);
            }
        }
        if (object.media) {
            if (!Array.isArray(object.media))
                throw TypeError(".SyncResponse.media: array expected");
            message.media = [];
            for (var i = 0; i < object.media.length; ++i) {
                if (typeof object.media[i] !== "object")
                    throw TypeError(".SyncResponse.media: object expected");
                message.media[i] = $root.Media.fromObject(object.media[i]);
            }
        }
        if (object.preferences != null) {
            if (typeof object.preferences !== "object")
                throw TypeError(".SyncResponse.preferences: object expected");
            message.preferences = $root.Preferences.fromObject(object.preferences);
        }
        if (object.limits != null) {
            if (typeof object.limits !== "object")
                throw TypeError(".SyncResponse.limits: object expected");
            message.limits = $root.Limits.fromObject(object.limits);
        }
        if (object.datingProfile != null) {
            if (typeof object.datingProfile !== "object")
                throw TypeError(".SyncResponse.datingProfile: object expected");
            message.datingProfile = $root.DatingProfile.fromObject(object.datingProfile);
        }
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".SyncResponse.user: object expected");
            message.user = $root.User.fromObject(object.user);
        }
        return message;
    };

    /**
     * Creates a plain object from a SyncResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SyncResponse
     * @static
     * @param {SyncResponse} message SyncResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SyncResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.conversations = [];
            object.media = [];
        }
        if (options.defaults) {
            object.preferences = null;
            object.limits = null;
            object.datingProfile = null;
            object.user = null;
        }
        if (message.conversations && message.conversations.length) {
            object.conversations = [];
            for (var j = 0; j < message.conversations.length; ++j)
                object.conversations[j] = $root.Conversations.toObject(message.conversations[j], options);
        }
        if (message.media && message.media.length) {
            object.media = [];
            for (var j = 0; j < message.media.length; ++j)
                object.media[j] = $root.Media.toObject(message.media[j], options);
        }
        if (message.preferences != null && message.hasOwnProperty("preferences"))
            object.preferences = $root.Preferences.toObject(message.preferences, options);
        if (message.limits != null && message.hasOwnProperty("limits"))
            object.limits = $root.Limits.toObject(message.limits, options);
        if (message.datingProfile != null && message.hasOwnProperty("datingProfile"))
            object.datingProfile = $root.DatingProfile.toObject(message.datingProfile, options);
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.User.toObject(message.user, options);
        return object;
    };

    /**
     * Converts this SyncResponse to JSON.
     * @function toJSON
     * @memberof SyncResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SyncResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SyncResponse
     * @function getTypeUrl
     * @memberof SyncResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SyncResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SyncResponse";
    };

    return SyncResponse;
})();

$root.DataProfilesForYou = (function() {

    /**
     * Properties of a DataProfilesForYou.
     * @exports IDataProfilesForYou
     * @interface IDataProfilesForYou
     * @property {Array.<IDatingProfile>|null} [profiles] DataProfilesForYou profiles
     * @property {number|null} [total] DataProfilesForYou total
     */

    /**
     * Constructs a new DataProfilesForYou.
     * @exports DataProfilesForYou
     * @classdesc Represents a DataProfilesForYou.
     * @implements IDataProfilesForYou
     * @constructor
     * @param {IDataProfilesForYou=} [properties] Properties to set
     */
    function DataProfilesForYou(properties) {
        this.profiles = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DataProfilesForYou profiles.
     * @member {Array.<IDatingProfile>} profiles
     * @memberof DataProfilesForYou
     * @instance
     */
    DataProfilesForYou.prototype.profiles = $util.emptyArray;

    /**
     * DataProfilesForYou total.
     * @member {number} total
     * @memberof DataProfilesForYou
     * @instance
     */
    DataProfilesForYou.prototype.total = 0;

    /**
     * Creates a new DataProfilesForYou instance using the specified properties.
     * @function create
     * @memberof DataProfilesForYou
     * @static
     * @param {IDataProfilesForYou=} [properties] Properties to set
     * @returns {DataProfilesForYou} DataProfilesForYou instance
     */
    DataProfilesForYou.create = function create(properties) {
        return new DataProfilesForYou(properties);
    };

    /**
     * Encodes the specified DataProfilesForYou message. Does not implicitly {@link DataProfilesForYou.verify|verify} messages.
     * @function encode
     * @memberof DataProfilesForYou
     * @static
     * @param {IDataProfilesForYou} message DataProfilesForYou message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DataProfilesForYou.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.profiles != null && message.profiles.length)
            for (var i = 0; i < message.profiles.length; ++i)
                $root.DatingProfile.encode(message.profiles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.total != null && Object.hasOwnProperty.call(message, "total"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.total);
        return writer;
    };

    /**
     * Encodes the specified DataProfilesForYou message, length delimited. Does not implicitly {@link DataProfilesForYou.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DataProfilesForYou
     * @static
     * @param {IDataProfilesForYou} message DataProfilesForYou message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DataProfilesForYou.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DataProfilesForYou message from the specified reader or buffer.
     * @function decode
     * @memberof DataProfilesForYou
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DataProfilesForYou} DataProfilesForYou
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DataProfilesForYou.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataProfilesForYou();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.profiles && message.profiles.length))
                        message.profiles = [];
                    message.profiles.push($root.DatingProfile.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    message.total = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DataProfilesForYou message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DataProfilesForYou
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DataProfilesForYou} DataProfilesForYou
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DataProfilesForYou.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DataProfilesForYou message.
     * @function verify
     * @memberof DataProfilesForYou
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DataProfilesForYou.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.profiles != null && message.hasOwnProperty("profiles")) {
            if (!Array.isArray(message.profiles))
                return "profiles: array expected";
            for (var i = 0; i < message.profiles.length; ++i) {
                var error = $root.DatingProfile.verify(message.profiles[i]);
                if (error)
                    return "profiles." + error;
            }
        }
        if (message.total != null && message.hasOwnProperty("total"))
            if (!$util.isInteger(message.total))
                return "total: integer expected";
        return null;
    };

    /**
     * Creates a DataProfilesForYou message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DataProfilesForYou
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DataProfilesForYou} DataProfilesForYou
     */
    DataProfilesForYou.fromObject = function fromObject(object) {
        if (object instanceof $root.DataProfilesForYou)
            return object;
        var message = new $root.DataProfilesForYou();
        if (object.profiles) {
            if (!Array.isArray(object.profiles))
                throw TypeError(".DataProfilesForYou.profiles: array expected");
            message.profiles = [];
            for (var i = 0; i < object.profiles.length; ++i) {
                if (typeof object.profiles[i] !== "object")
                    throw TypeError(".DataProfilesForYou.profiles: object expected");
                message.profiles[i] = $root.DatingProfile.fromObject(object.profiles[i]);
            }
        }
        if (object.total != null)
            message.total = object.total | 0;
        return message;
    };

    /**
     * Creates a plain object from a DataProfilesForYou message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DataProfilesForYou
     * @static
     * @param {DataProfilesForYou} message DataProfilesForYou
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DataProfilesForYou.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.profiles = [];
        if (options.defaults)
            object.total = 0;
        if (message.profiles && message.profiles.length) {
            object.profiles = [];
            for (var j = 0; j < message.profiles.length; ++j)
                object.profiles[j] = $root.DatingProfile.toObject(message.profiles[j], options);
        }
        if (message.total != null && message.hasOwnProperty("total"))
            object.total = message.total;
        return object;
    };

    /**
     * Converts this DataProfilesForYou to JSON.
     * @function toJSON
     * @memberof DataProfilesForYou
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DataProfilesForYou.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DataProfilesForYou
     * @function getTypeUrl
     * @memberof DataProfilesForYou
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DataProfilesForYou.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DataProfilesForYou";
    };

    return DataProfilesForYou;
})();

$root.ServerError = (function() {

    /**
     * Properties of a ServerError.
     * @exports IServerError
     * @interface IServerError
     * @property {string|null} [message] ServerError message
     */

    /**
     * Constructs a new ServerError.
     * @exports ServerError
     * @classdesc Represents a ServerError.
     * @implements IServerError
     * @constructor
     * @param {IServerError=} [properties] Properties to set
     */
    function ServerError(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerError message.
     * @member {string} message
     * @memberof ServerError
     * @instance
     */
    ServerError.prototype.message = "";

    /**
     * Creates a new ServerError instance using the specified properties.
     * @function create
     * @memberof ServerError
     * @static
     * @param {IServerError=} [properties] Properties to set
     * @returns {ServerError} ServerError instance
     */
    ServerError.create = function create(properties) {
        return new ServerError(properties);
    };

    /**
     * Encodes the specified ServerError message. Does not implicitly {@link ServerError.verify|verify} messages.
     * @function encode
     * @memberof ServerError
     * @static
     * @param {IServerError} message ServerError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerError.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified ServerError message, length delimited. Does not implicitly {@link ServerError.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerError
     * @static
     * @param {IServerError} message ServerError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerError.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerError message from the specified reader or buffer.
     * @function decode
     * @memberof ServerError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerError} ServerError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerError.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.message = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerError message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerError} ServerError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerError.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerError message.
     * @function verify
     * @memberof ServerError
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerError.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a ServerError message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerError
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerError} ServerError
     */
    ServerError.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerError)
            return object;
        var message = new $root.ServerError();
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a ServerError message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerError
     * @static
     * @param {ServerError} message ServerError
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerError.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.message = "";
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this ServerError to JSON.
     * @function toJSON
     * @memberof ServerError
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerError.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ServerError
     * @function getTypeUrl
     * @memberof ServerError
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ServerError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ServerError";
    };

    return ServerError;
})();

$root.ClientError = (function() {

    /**
     * Properties of a ClientError.
     * @exports IClientError
     * @interface IClientError
     * @property {string|null} [message] ClientError message
     * @property {string|null} [stack_trace] ClientError stack_trace
     */

    /**
     * Constructs a new ClientError.
     * @exports ClientError
     * @classdesc Represents a ClientError.
     * @implements IClientError
     * @constructor
     * @param {IClientError=} [properties] Properties to set
     */
    function ClientError(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientError message.
     * @member {string} message
     * @memberof ClientError
     * @instance
     */
    ClientError.prototype.message = "";

    /**
     * ClientError stack_trace.
     * @member {string} stack_trace
     * @memberof ClientError
     * @instance
     */
    ClientError.prototype.stack_trace = "";

    /**
     * Creates a new ClientError instance using the specified properties.
     * @function create
     * @memberof ClientError
     * @static
     * @param {IClientError=} [properties] Properties to set
     * @returns {ClientError} ClientError instance
     */
    ClientError.create = function create(properties) {
        return new ClientError(properties);
    };

    /**
     * Encodes the specified ClientError message. Does not implicitly {@link ClientError.verify|verify} messages.
     * @function encode
     * @memberof ClientError
     * @static
     * @param {IClientError} message ClientError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientError.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        if (message.stack_trace != null && Object.hasOwnProperty.call(message, "stack_trace"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.stack_trace);
        return writer;
    };

    /**
     * Encodes the specified ClientError message, length delimited. Does not implicitly {@link ClientError.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientError
     * @static
     * @param {IClientError} message ClientError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientError.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientError message from the specified reader or buffer.
     * @function decode
     * @memberof ClientError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientError} ClientError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientError.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.message = reader.string();
                    break;
                }
            case 2: {
                    message.stack_trace = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientError message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientError} ClientError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientError.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientError message.
     * @function verify
     * @memberof ClientError
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientError.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.stack_trace != null && message.hasOwnProperty("stack_trace"))
            if (!$util.isString(message.stack_trace))
                return "stack_trace: string expected";
        return null;
    };

    /**
     * Creates a ClientError message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientError
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientError} ClientError
     */
    ClientError.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientError)
            return object;
        var message = new $root.ClientError();
        if (object.message != null)
            message.message = String(object.message);
        if (object.stack_trace != null)
            message.stack_trace = String(object.stack_trace);
        return message;
    };

    /**
     * Creates a plain object from a ClientError message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientError
     * @static
     * @param {ClientError} message ClientError
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientError.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.message = "";
            object.stack_trace = "";
        }
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.stack_trace != null && message.hasOwnProperty("stack_trace"))
            object.stack_trace = message.stack_trace;
        return object;
    };

    /**
     * Converts this ClientError to JSON.
     * @function toJSON
     * @memberof ClientError
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientError.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ClientError
     * @function getTypeUrl
     * @memberof ClientError
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ClientError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ClientError";
    };

    return ClientError;
})();

$root.SpecifyRequest = (function() {

    /**
     * Properties of a SpecifyRequest.
     * @exports ISpecifyRequest
     * @interface ISpecifyRequest
     * @property {string|null} [id] SpecifyRequest id
     */

    /**
     * Constructs a new SpecifyRequest.
     * @exports SpecifyRequest
     * @classdesc Represents a SpecifyRequest.
     * @implements ISpecifyRequest
     * @constructor
     * @param {ISpecifyRequest=} [properties] Properties to set
     */
    function SpecifyRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SpecifyRequest id.
     * @member {string} id
     * @memberof SpecifyRequest
     * @instance
     */
    SpecifyRequest.prototype.id = "";

    /**
     * Creates a new SpecifyRequest instance using the specified properties.
     * @function create
     * @memberof SpecifyRequest
     * @static
     * @param {ISpecifyRequest=} [properties] Properties to set
     * @returns {SpecifyRequest} SpecifyRequest instance
     */
    SpecifyRequest.create = function create(properties) {
        return new SpecifyRequest(properties);
    };

    /**
     * Encodes the specified SpecifyRequest message. Does not implicitly {@link SpecifyRequest.verify|verify} messages.
     * @function encode
     * @memberof SpecifyRequest
     * @static
     * @param {ISpecifyRequest} message SpecifyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpecifyRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified SpecifyRequest message, length delimited. Does not implicitly {@link SpecifyRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SpecifyRequest
     * @static
     * @param {ISpecifyRequest} message SpecifyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpecifyRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SpecifyRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SpecifyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SpecifyRequest} SpecifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpecifyRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SpecifyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SpecifyRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SpecifyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SpecifyRequest} SpecifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpecifyRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SpecifyRequest message.
     * @function verify
     * @memberof SpecifyRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SpecifyRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a SpecifyRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SpecifyRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SpecifyRequest} SpecifyRequest
     */
    SpecifyRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SpecifyRequest)
            return object;
        var message = new $root.SpecifyRequest();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a SpecifyRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SpecifyRequest
     * @static
     * @param {SpecifyRequest} message SpecifyRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SpecifyRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this SpecifyRequest to JSON.
     * @function toJSON
     * @memberof SpecifyRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SpecifyRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SpecifyRequest
     * @function getTypeUrl
     * @memberof SpecifyRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SpecifyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SpecifyRequest";
    };

    return SpecifyRequest;
})();

$root.Blank = (function() {

    /**
     * Properties of a Blank.
     * @exports IBlank
     * @interface IBlank
     * @property {number|null} [i] Blank i
     */

    /**
     * Constructs a new Blank.
     * @exports Blank
     * @classdesc Represents a Blank.
     * @implements IBlank
     * @constructor
     * @param {IBlank=} [properties] Properties to set
     */
    function Blank(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Blank i.
     * @member {number} i
     * @memberof Blank
     * @instance
     */
    Blank.prototype.i = 0;

    /**
     * Creates a new Blank instance using the specified properties.
     * @function create
     * @memberof Blank
     * @static
     * @param {IBlank=} [properties] Properties to set
     * @returns {Blank} Blank instance
     */
    Blank.create = function create(properties) {
        return new Blank(properties);
    };

    /**
     * Encodes the specified Blank message. Does not implicitly {@link Blank.verify|verify} messages.
     * @function encode
     * @memberof Blank
     * @static
     * @param {IBlank} message Blank message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Blank.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.i != null && Object.hasOwnProperty.call(message, "i"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.i);
        return writer;
    };

    /**
     * Encodes the specified Blank message, length delimited. Does not implicitly {@link Blank.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Blank
     * @static
     * @param {IBlank} message Blank message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Blank.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Blank message from the specified reader or buffer.
     * @function decode
     * @memberof Blank
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Blank} Blank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Blank.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Blank();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.i = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Blank message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Blank
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Blank} Blank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Blank.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Blank message.
     * @function verify
     * @memberof Blank
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Blank.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.i != null && message.hasOwnProperty("i"))
            if (!$util.isInteger(message.i))
                return "i: integer expected";
        return null;
    };

    /**
     * Creates a Blank message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Blank
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Blank} Blank
     */
    Blank.fromObject = function fromObject(object) {
        if (object instanceof $root.Blank)
            return object;
        var message = new $root.Blank();
        if (object.i != null)
            message.i = object.i | 0;
        return message;
    };

    /**
     * Creates a plain object from a Blank message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Blank
     * @static
     * @param {Blank} message Blank
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Blank.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.i = 0;
        if (message.i != null && message.hasOwnProperty("i"))
            object.i = message.i;
        return object;
    };

    /**
     * Converts this Blank to JSON.
     * @function toJSON
     * @memberof Blank
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Blank.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Blank
     * @function getTypeUrl
     * @memberof Blank
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Blank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Blank";
    };

    return Blank;
})();

$root.ChangeEvent = (function() {

    /**
     * Properties of a ChangeEvent.
     * @exports IChangeEvent
     * @interface IChangeEvent
     * @property {string|null} [type] ChangeEvent type
     * @property {string|null} [struct] ChangeEvent struct
     * @property {IUser|null} [user] ChangeEvent user
     * @property {IPreferences|null} [preferences] ChangeEvent preferences
     * @property {IDatingProfile|null} [dating_profile] ChangeEvent dating_profile
     * @property {ILimits|null} [limits] ChangeEvent limits
     * @property {IMedia|null} [media] ChangeEvent media
     * @property {ILikes|null} [likes] ChangeEvent likes
     * @property {IDislikes|null} [dislikes] ChangeEvent dislikes
     * @property {IStatus|null} [status] ChangeEvent status
     * @property {IConversations|null} [conversations] ChangeEvent conversations
     * @property {IMessages|null} [messages] ChangeEvent messages
     */

    /**
     * Constructs a new ChangeEvent.
     * @exports ChangeEvent
     * @classdesc Represents a ChangeEvent.
     * @implements IChangeEvent
     * @constructor
     * @param {IChangeEvent=} [properties] Properties to set
     */
    function ChangeEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeEvent type.
     * @member {string} type
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.type = "";

    /**
     * ChangeEvent struct.
     * @member {string} struct
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.struct = "";

    /**
     * ChangeEvent user.
     * @member {IUser|null|undefined} user
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.user = null;

    /**
     * ChangeEvent preferences.
     * @member {IPreferences|null|undefined} preferences
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.preferences = null;

    /**
     * ChangeEvent dating_profile.
     * @member {IDatingProfile|null|undefined} dating_profile
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.dating_profile = null;

    /**
     * ChangeEvent limits.
     * @member {ILimits|null|undefined} limits
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.limits = null;

    /**
     * ChangeEvent media.
     * @member {IMedia|null|undefined} media
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.media = null;

    /**
     * ChangeEvent likes.
     * @member {ILikes|null|undefined} likes
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.likes = null;

    /**
     * ChangeEvent dislikes.
     * @member {IDislikes|null|undefined} dislikes
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.dislikes = null;

    /**
     * ChangeEvent status.
     * @member {IStatus|null|undefined} status
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.status = null;

    /**
     * ChangeEvent conversations.
     * @member {IConversations|null|undefined} conversations
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.conversations = null;

    /**
     * ChangeEvent messages.
     * @member {IMessages|null|undefined} messages
     * @memberof ChangeEvent
     * @instance
     */
    ChangeEvent.prototype.messages = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ChangeEvent _user.
     * @member {"user"|undefined} _user
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_user", {
        get: $util.oneOfGetter($oneOfFields = ["user"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ChangeEvent _preferences.
     * @member {"preferences"|undefined} _preferences
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_preferences", {
        get: $util.oneOfGetter($oneOfFields = ["preferences"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ChangeEvent _dating_profile.
     * @member {"dating_profile"|undefined} _dating_profile
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_dating_profile", {
        get: $util.oneOfGetter($oneOfFields = ["dating_profile"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ChangeEvent _limits.
     * @member {"limits"|undefined} _limits
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_limits", {
        get: $util.oneOfGetter($oneOfFields = ["limits"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ChangeEvent _media.
     * @member {"media"|undefined} _media
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_media", {
        get: $util.oneOfGetter($oneOfFields = ["media"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ChangeEvent _likes.
     * @member {"likes"|undefined} _likes
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_likes", {
        get: $util.oneOfGetter($oneOfFields = ["likes"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ChangeEvent _dislikes.
     * @member {"dislikes"|undefined} _dislikes
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_dislikes", {
        get: $util.oneOfGetter($oneOfFields = ["dislikes"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ChangeEvent _status.
     * @member {"status"|undefined} _status
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_status", {
        get: $util.oneOfGetter($oneOfFields = ["status"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ChangeEvent _conversations.
     * @member {"conversations"|undefined} _conversations
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_conversations", {
        get: $util.oneOfGetter($oneOfFields = ["conversations"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ChangeEvent _messages.
     * @member {"messages"|undefined} _messages
     * @memberof ChangeEvent
     * @instance
     */
    Object.defineProperty(ChangeEvent.prototype, "_messages", {
        get: $util.oneOfGetter($oneOfFields = ["messages"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ChangeEvent instance using the specified properties.
     * @function create
     * @memberof ChangeEvent
     * @static
     * @param {IChangeEvent=} [properties] Properties to set
     * @returns {ChangeEvent} ChangeEvent instance
     */
    ChangeEvent.create = function create(properties) {
        return new ChangeEvent(properties);
    };

    /**
     * Encodes the specified ChangeEvent message. Does not implicitly {@link ChangeEvent.verify|verify} messages.
     * @function encode
     * @memberof ChangeEvent
     * @static
     * @param {IChangeEvent} message ChangeEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.struct != null && Object.hasOwnProperty.call(message, "struct"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.struct);
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.User.encode(message.user, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
            $root.Preferences.encode(message.preferences, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.dating_profile != null && Object.hasOwnProperty.call(message, "dating_profile"))
            $root.DatingProfile.encode(message.dating_profile, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.limits != null && Object.hasOwnProperty.call(message, "limits"))
            $root.Limits.encode(message.limits, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.media != null && Object.hasOwnProperty.call(message, "media"))
            $root.Media.encode(message.media, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.likes != null && Object.hasOwnProperty.call(message, "likes"))
            $root.Likes.encode(message.likes, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.dislikes != null && Object.hasOwnProperty.call(message, "dislikes"))
            $root.Dislikes.encode(message.dislikes, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            $root.Status.encode(message.status, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.conversations != null && Object.hasOwnProperty.call(message, "conversations"))
            $root.Conversations.encode(message.conversations, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.messages != null && Object.hasOwnProperty.call(message, "messages"))
            $root.Messages.encode(message.messages, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChangeEvent message, length delimited. Does not implicitly {@link ChangeEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeEvent
     * @static
     * @param {IChangeEvent} message ChangeEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeEvent} ChangeEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.string();
                    break;
                }
            case 2: {
                    message.struct = reader.string();
                    break;
                }
            case 3: {
                    message.user = $root.User.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.preferences = $root.Preferences.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.dating_profile = $root.DatingProfile.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.limits = $root.Limits.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.media = $root.Media.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.likes = $root.Likes.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.dislikes = $root.Dislikes.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.status = $root.Status.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.conversations = $root.Conversations.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.messages = $root.Messages.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangeEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeEvent} ChangeEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChangeEvent message.
     * @function verify
     * @memberof ChangeEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChangeEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.struct != null && message.hasOwnProperty("struct"))
            if (!$util.isString(message.struct))
                return "struct: string expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            properties._user = 1;
            {
                var error = $root.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
        }
        if (message.preferences != null && message.hasOwnProperty("preferences")) {
            properties._preferences = 1;
            {
                var error = $root.Preferences.verify(message.preferences);
                if (error)
                    return "preferences." + error;
            }
        }
        if (message.dating_profile != null && message.hasOwnProperty("dating_profile")) {
            properties._dating_profile = 1;
            {
                var error = $root.DatingProfile.verify(message.dating_profile);
                if (error)
                    return "dating_profile." + error;
            }
        }
        if (message.limits != null && message.hasOwnProperty("limits")) {
            properties._limits = 1;
            {
                var error = $root.Limits.verify(message.limits);
                if (error)
                    return "limits." + error;
            }
        }
        if (message.media != null && message.hasOwnProperty("media")) {
            properties._media = 1;
            {
                var error = $root.Media.verify(message.media);
                if (error)
                    return "media." + error;
            }
        }
        if (message.likes != null && message.hasOwnProperty("likes")) {
            properties._likes = 1;
            {
                var error = $root.Likes.verify(message.likes);
                if (error)
                    return "likes." + error;
            }
        }
        if (message.dislikes != null && message.hasOwnProperty("dislikes")) {
            properties._dislikes = 1;
            {
                var error = $root.Dislikes.verify(message.dislikes);
                if (error)
                    return "dislikes." + error;
            }
        }
        if (message.status != null && message.hasOwnProperty("status")) {
            properties._status = 1;
            {
                var error = $root.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
        }
        if (message.conversations != null && message.hasOwnProperty("conversations")) {
            properties._conversations = 1;
            {
                var error = $root.Conversations.verify(message.conversations);
                if (error)
                    return "conversations." + error;
            }
        }
        if (message.messages != null && message.hasOwnProperty("messages")) {
            properties._messages = 1;
            {
                var error = $root.Messages.verify(message.messages);
                if (error)
                    return "messages." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ChangeEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeEvent} ChangeEvent
     */
    ChangeEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeEvent)
            return object;
        var message = new $root.ChangeEvent();
        if (object.type != null)
            message.type = String(object.type);
        if (object.struct != null)
            message.struct = String(object.struct);
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".ChangeEvent.user: object expected");
            message.user = $root.User.fromObject(object.user);
        }
        if (object.preferences != null) {
            if (typeof object.preferences !== "object")
                throw TypeError(".ChangeEvent.preferences: object expected");
            message.preferences = $root.Preferences.fromObject(object.preferences);
        }
        if (object.dating_profile != null) {
            if (typeof object.dating_profile !== "object")
                throw TypeError(".ChangeEvent.dating_profile: object expected");
            message.dating_profile = $root.DatingProfile.fromObject(object.dating_profile);
        }
        if (object.limits != null) {
            if (typeof object.limits !== "object")
                throw TypeError(".ChangeEvent.limits: object expected");
            message.limits = $root.Limits.fromObject(object.limits);
        }
        if (object.media != null) {
            if (typeof object.media !== "object")
                throw TypeError(".ChangeEvent.media: object expected");
            message.media = $root.Media.fromObject(object.media);
        }
        if (object.likes != null) {
            if (typeof object.likes !== "object")
                throw TypeError(".ChangeEvent.likes: object expected");
            message.likes = $root.Likes.fromObject(object.likes);
        }
        if (object.dislikes != null) {
            if (typeof object.dislikes !== "object")
                throw TypeError(".ChangeEvent.dislikes: object expected");
            message.dislikes = $root.Dislikes.fromObject(object.dislikes);
        }
        if (object.status != null) {
            if (typeof object.status !== "object")
                throw TypeError(".ChangeEvent.status: object expected");
            message.status = $root.Status.fromObject(object.status);
        }
        if (object.conversations != null) {
            if (typeof object.conversations !== "object")
                throw TypeError(".ChangeEvent.conversations: object expected");
            message.conversations = $root.Conversations.fromObject(object.conversations);
        }
        if (object.messages != null) {
            if (typeof object.messages !== "object")
                throw TypeError(".ChangeEvent.messages: object expected");
            message.messages = $root.Messages.fromObject(object.messages);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChangeEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeEvent
     * @static
     * @param {ChangeEvent} message ChangeEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = "";
            object.struct = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.struct != null && message.hasOwnProperty("struct"))
            object.struct = message.struct;
        if (message.user != null && message.hasOwnProperty("user")) {
            object.user = $root.User.toObject(message.user, options);
            if (options.oneofs)
                object._user = "user";
        }
        if (message.preferences != null && message.hasOwnProperty("preferences")) {
            object.preferences = $root.Preferences.toObject(message.preferences, options);
            if (options.oneofs)
                object._preferences = "preferences";
        }
        if (message.dating_profile != null && message.hasOwnProperty("dating_profile")) {
            object.dating_profile = $root.DatingProfile.toObject(message.dating_profile, options);
            if (options.oneofs)
                object._dating_profile = "dating_profile";
        }
        if (message.limits != null && message.hasOwnProperty("limits")) {
            object.limits = $root.Limits.toObject(message.limits, options);
            if (options.oneofs)
                object._limits = "limits";
        }
        if (message.media != null && message.hasOwnProperty("media")) {
            object.media = $root.Media.toObject(message.media, options);
            if (options.oneofs)
                object._media = "media";
        }
        if (message.likes != null && message.hasOwnProperty("likes")) {
            object.likes = $root.Likes.toObject(message.likes, options);
            if (options.oneofs)
                object._likes = "likes";
        }
        if (message.dislikes != null && message.hasOwnProperty("dislikes")) {
            object.dislikes = $root.Dislikes.toObject(message.dislikes, options);
            if (options.oneofs)
                object._dislikes = "dislikes";
        }
        if (message.status != null && message.hasOwnProperty("status")) {
            object.status = $root.Status.toObject(message.status, options);
            if (options.oneofs)
                object._status = "status";
        }
        if (message.conversations != null && message.hasOwnProperty("conversations")) {
            object.conversations = $root.Conversations.toObject(message.conversations, options);
            if (options.oneofs)
                object._conversations = "conversations";
        }
        if (message.messages != null && message.hasOwnProperty("messages")) {
            object.messages = $root.Messages.toObject(message.messages, options);
            if (options.oneofs)
                object._messages = "messages";
        }
        return object;
    };

    /**
     * Converts this ChangeEvent to JSON.
     * @function toJSON
     * @memberof ChangeEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ChangeEvent
     * @function getTypeUrl
     * @memberof ChangeEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChangeEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChangeEvent";
    };

    return ChangeEvent;
})();

module.exports = $root;
