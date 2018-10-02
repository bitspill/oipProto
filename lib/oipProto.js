/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.SignedMessage = (function() {
    
        /**
         * Properties of a SignedMessage.
         * @exports ISignedMessage
         * @interface ISignedMessage
         * @property {Uint8Array|null} [SerializedMessage] SignedMessage SerializedMessage
         * @property {MessageTypes|null} [MessageType] SignedMessage MessageType
         * @property {SignatureTypes|null} [SignatureType] SignedMessage SignatureType
         * @property {Uint8Array|null} [PubKey] SignedMessage PubKey
         * @property {Uint8Array|null} [Signature] SignedMessage Signature
         */
    
        /**
         * Constructs a new SignedMessage.
         * @exports SignedMessage
         * @classdesc Represents a SignedMessage.
         * @implements ISignedMessage
         * @constructor
         * @param {ISignedMessage=} [properties] Properties to set
         */
        function SignedMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SignedMessage SerializedMessage.
         * @member {Uint8Array} SerializedMessage
         * @memberof SignedMessage
         * @instance
         */
        SignedMessage.prototype.SerializedMessage = $util.newBuffer([]);
    
        /**
         * SignedMessage MessageType.
         * @member {MessageTypes} MessageType
         * @memberof SignedMessage
         * @instance
         */
        SignedMessage.prototype.MessageType = 0;
    
        /**
         * SignedMessage SignatureType.
         * @member {SignatureTypes} SignatureType
         * @memberof SignedMessage
         * @instance
         */
        SignedMessage.prototype.SignatureType = 0;
    
        /**
         * SignedMessage PubKey.
         * @member {Uint8Array} PubKey
         * @memberof SignedMessage
         * @instance
         */
        SignedMessage.prototype.PubKey = $util.newBuffer([]);
    
        /**
         * SignedMessage Signature.
         * @member {Uint8Array} Signature
         * @memberof SignedMessage
         * @instance
         */
        SignedMessage.prototype.Signature = $util.newBuffer([]);
    
        /**
         * Creates a new SignedMessage instance using the specified properties.
         * @function create
         * @memberof SignedMessage
         * @static
         * @param {ISignedMessage=} [properties] Properties to set
         * @returns {SignedMessage} SignedMessage instance
         */
        SignedMessage.create = function create(properties) {
            return new SignedMessage(properties);
        };
    
        /**
         * Encodes the specified SignedMessage message. Does not implicitly {@link SignedMessage.verify|verify} messages.
         * @function encode
         * @memberof SignedMessage
         * @static
         * @param {ISignedMessage} message SignedMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SerializedMessage != null && message.hasOwnProperty("SerializedMessage"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.SerializedMessage);
            if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MessageType);
            if (message.SignatureType != null && message.hasOwnProperty("SignatureType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SignatureType);
            if (message.PubKey != null && message.hasOwnProperty("PubKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.PubKey);
            if (message.Signature != null && message.hasOwnProperty("Signature"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.Signature);
            return writer;
        };
    
        /**
         * Encodes the specified SignedMessage message, length delimited. Does not implicitly {@link SignedMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignedMessage
         * @static
         * @param {ISignedMessage} message SignedMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SignedMessage message from the specified reader or buffer.
         * @function decode
         * @memberof SignedMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignedMessage} SignedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignedMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SerializedMessage = reader.bytes();
                    break;
                case 2:
                    message.MessageType = reader.int32();
                    break;
                case 3:
                    message.SignatureType = reader.int32();
                    break;
                case 4:
                    message.PubKey = reader.bytes();
                    break;
                case 5:
                    message.Signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SignedMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignedMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignedMessage} SignedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SignedMessage message.
         * @function verify
         * @memberof SignedMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignedMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SerializedMessage != null && message.hasOwnProperty("SerializedMessage"))
                if (!(message.SerializedMessage && typeof message.SerializedMessage.length === "number" || $util.isString(message.SerializedMessage)))
                    return "SerializedMessage: buffer expected";
            if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                switch (message.MessageType) {
                default:
                    return "MessageType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.SignatureType != null && message.hasOwnProperty("SignatureType"))
                switch (message.SignatureType) {
                default:
                    return "SignatureType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.PubKey != null && message.hasOwnProperty("PubKey"))
                if (!(message.PubKey && typeof message.PubKey.length === "number" || $util.isString(message.PubKey)))
                    return "PubKey: buffer expected";
            if (message.Signature != null && message.hasOwnProperty("Signature"))
                if (!(message.Signature && typeof message.Signature.length === "number" || $util.isString(message.Signature)))
                    return "Signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a SignedMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignedMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignedMessage} SignedMessage
         */
        SignedMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.SignedMessage)
                return object;
            var message = new $root.SignedMessage();
            if (object.SerializedMessage != null)
                if (typeof object.SerializedMessage === "string")
                    $util.base64.decode(object.SerializedMessage, message.SerializedMessage = $util.newBuffer($util.base64.length(object.SerializedMessage)), 0);
                else if (object.SerializedMessage.length)
                    message.SerializedMessage = object.SerializedMessage;
            switch (object.MessageType) {
            case "Unknown":
            case 0:
                message.MessageType = 0;
                break;
            case "OIP05":
            case 1:
                message.MessageType = 1;
                break;
            case "Historian":
            case 2:
                message.MessageType = 2;
                break;
            }
            switch (object.SignatureType) {
            case "Unknown":
            case 0:
                message.SignatureType = 0;
                break;
            case "Flo":
            case 1:
                message.SignatureType = 1;
                break;
            case "Btc":
            case 2:
                message.SignatureType = 2;
                break;
            }
            if (object.PubKey != null)
                if (typeof object.PubKey === "string")
                    $util.base64.decode(object.PubKey, message.PubKey = $util.newBuffer($util.base64.length(object.PubKey)), 0);
                else if (object.PubKey.length)
                    message.PubKey = object.PubKey;
            if (object.Signature != null)
                if (typeof object.Signature === "string")
                    $util.base64.decode(object.Signature, message.Signature = $util.newBuffer($util.base64.length(object.Signature)), 0);
                else if (object.Signature.length)
                    message.Signature = object.Signature;
            return message;
        };
    
        /**
         * Creates a plain object from a SignedMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignedMessage
         * @static
         * @param {SignedMessage} message SignedMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignedMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.SerializedMessage = "";
                else {
                    object.SerializedMessage = [];
                    if (options.bytes !== Array)
                        object.SerializedMessage = $util.newBuffer(object.SerializedMessage);
                }
                object.MessageType = options.enums === String ? "Unknown" : 0;
                object.SignatureType = options.enums === String ? "Unknown" : 0;
                if (options.bytes === String)
                    object.PubKey = "";
                else {
                    object.PubKey = [];
                    if (options.bytes !== Array)
                        object.PubKey = $util.newBuffer(object.PubKey);
                }
                if (options.bytes === String)
                    object.Signature = "";
                else {
                    object.Signature = [];
                    if (options.bytes !== Array)
                        object.Signature = $util.newBuffer(object.Signature);
                }
            }
            if (message.SerializedMessage != null && message.hasOwnProperty("SerializedMessage"))
                object.SerializedMessage = options.bytes === String ? $util.base64.encode(message.SerializedMessage, 0, message.SerializedMessage.length) : options.bytes === Array ? Array.prototype.slice.call(message.SerializedMessage) : message.SerializedMessage;
            if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                object.MessageType = options.enums === String ? $root.MessageTypes[message.MessageType] : message.MessageType;
            if (message.SignatureType != null && message.hasOwnProperty("SignatureType"))
                object.SignatureType = options.enums === String ? $root.SignatureTypes[message.SignatureType] : message.SignatureType;
            if (message.PubKey != null && message.hasOwnProperty("PubKey"))
                object.PubKey = options.bytes === String ? $util.base64.encode(message.PubKey, 0, message.PubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.PubKey) : message.PubKey;
            if (message.Signature != null && message.hasOwnProperty("Signature"))
                object.Signature = options.bytes === String ? $util.base64.encode(message.Signature, 0, message.Signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.Signature) : message.Signature;
            return object;
        };
    
        /**
         * Converts this SignedMessage to JSON.
         * @function toJSON
         * @memberof SignedMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignedMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SignedMessage;
    })();
    
    /**
     * MessageTypes enum.
     * @exports MessageTypes
     * @enum {string}
     * @property {number} Unknown=0 Unknown value
     * @property {number} OIP05=1 OIP05 value
     * @property {number} Historian=2 Historian value
     */
    $root.MessageTypes = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "OIP05"] = 1;
        values[valuesById[2] = "Historian"] = 2;
        return values;
    })();
    
    /**
     * SignatureTypes enum.
     * @exports SignatureTypes
     * @enum {string}
     * @property {number} Unknown=0 Unknown value
     * @property {number} Flo=1 Flo value
     * @property {number} Btc=2 Btc value
     */
    $root.SignatureTypes = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "Flo"] = 1;
        values[valuesById[2] = "Btc"] = 2;
        return values;
    })();
    
    $root.HistorianDataPoint = (function() {
    
        /**
         * Properties of a HistorianDataPoint.
         * @exports IHistorianDataPoint
         * @interface IHistorianDataPoint
         * @property {number|null} [Version] HistorianDataPoint Version
         * @property {Uint8Array|null} [PubKey] HistorianDataPoint PubKey
         * @property {number|null} [MiningRigRentalsLast10] HistorianDataPoint MiningRigRentalsLast10
         * @property {number|null} [MiningRigRentalsLast24Hr] HistorianDataPoint MiningRigRentalsLast24Hr
         * @property {number|null} [AutominerPoolHashrate] HistorianDataPoint AutominerPoolHashrate
         * @property {number|null} [FloNetHashRate] HistorianDataPoint FloNetHashRate
         * @property {number|null} [FloMarketPriceBTC] HistorianDataPoint FloMarketPriceBTC
         * @property {number|null} [FloMarketPriceUSD] HistorianDataPoint FloMarketPriceUSD
         * @property {number|null} [LtcMarketPriceUSD] HistorianDataPoint LtcMarketPriceUSD
         * @property {number|null} [NiceHashLast] HistorianDataPoint NiceHashLast
         * @property {number|null} [NiceHash24hr] HistorianDataPoint NiceHash24hr
         */
    
        /**
         * Constructs a new HistorianDataPoint.
         * @exports HistorianDataPoint
         * @classdesc Represents a HistorianDataPoint.
         * @implements IHistorianDataPoint
         * @constructor
         * @param {IHistorianDataPoint=} [properties] Properties to set
         */
        function HistorianDataPoint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * HistorianDataPoint Version.
         * @member {number} Version
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.Version = 0;
    
        /**
         * HistorianDataPoint PubKey.
         * @member {Uint8Array} PubKey
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.PubKey = $util.newBuffer([]);
    
        /**
         * HistorianDataPoint MiningRigRentalsLast10.
         * @member {number} MiningRigRentalsLast10
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.MiningRigRentalsLast10 = 0;
    
        /**
         * HistorianDataPoint MiningRigRentalsLast24Hr.
         * @member {number} MiningRigRentalsLast24Hr
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.MiningRigRentalsLast24Hr = 0;
    
        /**
         * HistorianDataPoint AutominerPoolHashrate.
         * @member {number} AutominerPoolHashrate
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.AutominerPoolHashrate = 0;
    
        /**
         * HistorianDataPoint FloNetHashRate.
         * @member {number} FloNetHashRate
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.FloNetHashRate = 0;
    
        /**
         * HistorianDataPoint FloMarketPriceBTC.
         * @member {number} FloMarketPriceBTC
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.FloMarketPriceBTC = 0;
    
        /**
         * HistorianDataPoint FloMarketPriceUSD.
         * @member {number} FloMarketPriceUSD
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.FloMarketPriceUSD = 0;
    
        /**
         * HistorianDataPoint LtcMarketPriceUSD.
         * @member {number} LtcMarketPriceUSD
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.LtcMarketPriceUSD = 0;
    
        /**
         * HistorianDataPoint NiceHashLast.
         * @member {number} NiceHashLast
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.NiceHashLast = 0;
    
        /**
         * HistorianDataPoint NiceHash24hr.
         * @member {number} NiceHash24hr
         * @memberof HistorianDataPoint
         * @instance
         */
        HistorianDataPoint.prototype.NiceHash24hr = 0;
    
        /**
         * Creates a new HistorianDataPoint instance using the specified properties.
         * @function create
         * @memberof HistorianDataPoint
         * @static
         * @param {IHistorianDataPoint=} [properties] Properties to set
         * @returns {HistorianDataPoint} HistorianDataPoint instance
         */
        HistorianDataPoint.create = function create(properties) {
            return new HistorianDataPoint(properties);
        };
    
        /**
         * Encodes the specified HistorianDataPoint message. Does not implicitly {@link HistorianDataPoint.verify|verify} messages.
         * @function encode
         * @memberof HistorianDataPoint
         * @static
         * @param {IHistorianDataPoint} message HistorianDataPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistorianDataPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Version != null && message.hasOwnProperty("Version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Version);
            if (message.PubKey != null && message.hasOwnProperty("PubKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.PubKey);
            if (message.MiningRigRentalsLast10 != null && message.hasOwnProperty("MiningRigRentalsLast10"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.MiningRigRentalsLast10);
            if (message.MiningRigRentalsLast24Hr != null && message.hasOwnProperty("MiningRigRentalsLast24Hr"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.MiningRigRentalsLast24Hr);
            if (message.AutominerPoolHashrate != null && message.hasOwnProperty("AutominerPoolHashrate"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.AutominerPoolHashrate);
            if (message.FloNetHashRate != null && message.hasOwnProperty("FloNetHashRate"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.FloNetHashRate);
            if (message.FloMarketPriceBTC != null && message.hasOwnProperty("FloMarketPriceBTC"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.FloMarketPriceBTC);
            if (message.FloMarketPriceUSD != null && message.hasOwnProperty("FloMarketPriceUSD"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.FloMarketPriceUSD);
            if (message.LtcMarketPriceUSD != null && message.hasOwnProperty("LtcMarketPriceUSD"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.LtcMarketPriceUSD);
            if (message.NiceHashLast != null && message.hasOwnProperty("NiceHashLast"))
                writer.uint32(/* id 10, wireType 1 =*/81).double(message.NiceHashLast);
            if (message.NiceHash24hr != null && message.hasOwnProperty("NiceHash24hr"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.NiceHash24hr);
            return writer;
        };
    
        /**
         * Encodes the specified HistorianDataPoint message, length delimited. Does not implicitly {@link HistorianDataPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HistorianDataPoint
         * @static
         * @param {IHistorianDataPoint} message HistorianDataPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistorianDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a HistorianDataPoint message from the specified reader or buffer.
         * @function decode
         * @memberof HistorianDataPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HistorianDataPoint} HistorianDataPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistorianDataPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HistorianDataPoint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Version = reader.int32();
                    break;
                case 2:
                    message.PubKey = reader.bytes();
                    break;
                case 3:
                    message.MiningRigRentalsLast10 = reader.double();
                    break;
                case 4:
                    message.MiningRigRentalsLast24Hr = reader.double();
                    break;
                case 5:
                    message.AutominerPoolHashrate = reader.double();
                    break;
                case 6:
                    message.FloNetHashRate = reader.double();
                    break;
                case 7:
                    message.FloMarketPriceBTC = reader.double();
                    break;
                case 8:
                    message.FloMarketPriceUSD = reader.double();
                    break;
                case 9:
                    message.LtcMarketPriceUSD = reader.double();
                    break;
                case 10:
                    message.NiceHashLast = reader.double();
                    break;
                case 11:
                    message.NiceHash24hr = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a HistorianDataPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HistorianDataPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HistorianDataPoint} HistorianDataPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistorianDataPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a HistorianDataPoint message.
         * @function verify
         * @memberof HistorianDataPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HistorianDataPoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Version != null && message.hasOwnProperty("Version"))
                if (!$util.isInteger(message.Version))
                    return "Version: integer expected";
            if (message.PubKey != null && message.hasOwnProperty("PubKey"))
                if (!(message.PubKey && typeof message.PubKey.length === "number" || $util.isString(message.PubKey)))
                    return "PubKey: buffer expected";
            if (message.MiningRigRentalsLast10 != null && message.hasOwnProperty("MiningRigRentalsLast10"))
                if (typeof message.MiningRigRentalsLast10 !== "number")
                    return "MiningRigRentalsLast10: number expected";
            if (message.MiningRigRentalsLast24Hr != null && message.hasOwnProperty("MiningRigRentalsLast24Hr"))
                if (typeof message.MiningRigRentalsLast24Hr !== "number")
                    return "MiningRigRentalsLast24Hr: number expected";
            if (message.AutominerPoolHashrate != null && message.hasOwnProperty("AutominerPoolHashrate"))
                if (typeof message.AutominerPoolHashrate !== "number")
                    return "AutominerPoolHashrate: number expected";
            if (message.FloNetHashRate != null && message.hasOwnProperty("FloNetHashRate"))
                if (typeof message.FloNetHashRate !== "number")
                    return "FloNetHashRate: number expected";
            if (message.FloMarketPriceBTC != null && message.hasOwnProperty("FloMarketPriceBTC"))
                if (typeof message.FloMarketPriceBTC !== "number")
                    return "FloMarketPriceBTC: number expected";
            if (message.FloMarketPriceUSD != null && message.hasOwnProperty("FloMarketPriceUSD"))
                if (typeof message.FloMarketPriceUSD !== "number")
                    return "FloMarketPriceUSD: number expected";
            if (message.LtcMarketPriceUSD != null && message.hasOwnProperty("LtcMarketPriceUSD"))
                if (typeof message.LtcMarketPriceUSD !== "number")
                    return "LtcMarketPriceUSD: number expected";
            if (message.NiceHashLast != null && message.hasOwnProperty("NiceHashLast"))
                if (typeof message.NiceHashLast !== "number")
                    return "NiceHashLast: number expected";
            if (message.NiceHash24hr != null && message.hasOwnProperty("NiceHash24hr"))
                if (typeof message.NiceHash24hr !== "number")
                    return "NiceHash24hr: number expected";
            return null;
        };
    
        /**
         * Creates a HistorianDataPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HistorianDataPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HistorianDataPoint} HistorianDataPoint
         */
        HistorianDataPoint.fromObject = function fromObject(object) {
            if (object instanceof $root.HistorianDataPoint)
                return object;
            var message = new $root.HistorianDataPoint();
            if (object.Version != null)
                message.Version = object.Version | 0;
            if (object.PubKey != null)
                if (typeof object.PubKey === "string")
                    $util.base64.decode(object.PubKey, message.PubKey = $util.newBuffer($util.base64.length(object.PubKey)), 0);
                else if (object.PubKey.length)
                    message.PubKey = object.PubKey;
            if (object.MiningRigRentalsLast10 != null)
                message.MiningRigRentalsLast10 = Number(object.MiningRigRentalsLast10);
            if (object.MiningRigRentalsLast24Hr != null)
                message.MiningRigRentalsLast24Hr = Number(object.MiningRigRentalsLast24Hr);
            if (object.AutominerPoolHashrate != null)
                message.AutominerPoolHashrate = Number(object.AutominerPoolHashrate);
            if (object.FloNetHashRate != null)
                message.FloNetHashRate = Number(object.FloNetHashRate);
            if (object.FloMarketPriceBTC != null)
                message.FloMarketPriceBTC = Number(object.FloMarketPriceBTC);
            if (object.FloMarketPriceUSD != null)
                message.FloMarketPriceUSD = Number(object.FloMarketPriceUSD);
            if (object.LtcMarketPriceUSD != null)
                message.LtcMarketPriceUSD = Number(object.LtcMarketPriceUSD);
            if (object.NiceHashLast != null)
                message.NiceHashLast = Number(object.NiceHashLast);
            if (object.NiceHash24hr != null)
                message.NiceHash24hr = Number(object.NiceHash24hr);
            return message;
        };
    
        /**
         * Creates a plain object from a HistorianDataPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HistorianDataPoint
         * @static
         * @param {HistorianDataPoint} message HistorianDataPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HistorianDataPoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Version = 0;
                if (options.bytes === String)
                    object.PubKey = "";
                else {
                    object.PubKey = [];
                    if (options.bytes !== Array)
                        object.PubKey = $util.newBuffer(object.PubKey);
                }
                object.MiningRigRentalsLast10 = 0;
                object.MiningRigRentalsLast24Hr = 0;
                object.AutominerPoolHashrate = 0;
                object.FloNetHashRate = 0;
                object.FloMarketPriceBTC = 0;
                object.FloMarketPriceUSD = 0;
                object.LtcMarketPriceUSD = 0;
                object.NiceHashLast = 0;
                object.NiceHash24hr = 0;
            }
            if (message.Version != null && message.hasOwnProperty("Version"))
                object.Version = message.Version;
            if (message.PubKey != null && message.hasOwnProperty("PubKey"))
                object.PubKey = options.bytes === String ? $util.base64.encode(message.PubKey, 0, message.PubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.PubKey) : message.PubKey;
            if (message.MiningRigRentalsLast10 != null && message.hasOwnProperty("MiningRigRentalsLast10"))
                object.MiningRigRentalsLast10 = options.json && !isFinite(message.MiningRigRentalsLast10) ? String(message.MiningRigRentalsLast10) : message.MiningRigRentalsLast10;
            if (message.MiningRigRentalsLast24Hr != null && message.hasOwnProperty("MiningRigRentalsLast24Hr"))
                object.MiningRigRentalsLast24Hr = options.json && !isFinite(message.MiningRigRentalsLast24Hr) ? String(message.MiningRigRentalsLast24Hr) : message.MiningRigRentalsLast24Hr;
            if (message.AutominerPoolHashrate != null && message.hasOwnProperty("AutominerPoolHashrate"))
                object.AutominerPoolHashrate = options.json && !isFinite(message.AutominerPoolHashrate) ? String(message.AutominerPoolHashrate) : message.AutominerPoolHashrate;
            if (message.FloNetHashRate != null && message.hasOwnProperty("FloNetHashRate"))
                object.FloNetHashRate = options.json && !isFinite(message.FloNetHashRate) ? String(message.FloNetHashRate) : message.FloNetHashRate;
            if (message.FloMarketPriceBTC != null && message.hasOwnProperty("FloMarketPriceBTC"))
                object.FloMarketPriceBTC = options.json && !isFinite(message.FloMarketPriceBTC) ? String(message.FloMarketPriceBTC) : message.FloMarketPriceBTC;
            if (message.FloMarketPriceUSD != null && message.hasOwnProperty("FloMarketPriceUSD"))
                object.FloMarketPriceUSD = options.json && !isFinite(message.FloMarketPriceUSD) ? String(message.FloMarketPriceUSD) : message.FloMarketPriceUSD;
            if (message.LtcMarketPriceUSD != null && message.hasOwnProperty("LtcMarketPriceUSD"))
                object.LtcMarketPriceUSD = options.json && !isFinite(message.LtcMarketPriceUSD) ? String(message.LtcMarketPriceUSD) : message.LtcMarketPriceUSD;
            if (message.NiceHashLast != null && message.hasOwnProperty("NiceHashLast"))
                object.NiceHashLast = options.json && !isFinite(message.NiceHashLast) ? String(message.NiceHashLast) : message.NiceHashLast;
            if (message.NiceHash24hr != null && message.hasOwnProperty("NiceHash24hr"))
                object.NiceHash24hr = options.json && !isFinite(message.NiceHash24hr) ? String(message.NiceHash24hr) : message.NiceHash24hr;
            return object;
        };
    
        /**
         * Converts this HistorianDataPoint to JSON.
         * @function toJSON
         * @memberof HistorianDataPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HistorianDataPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return HistorianDataPoint;
    })();
    
    $root.HistorianPayout = (function() {
    
        /**
         * Properties of a HistorianPayout.
         * @exports IHistorianPayout
         * @interface IHistorianPayout
         * @property {number|null} [Version] HistorianPayout Version
         */
    
        /**
         * Constructs a new HistorianPayout.
         * @exports HistorianPayout
         * @classdesc Represents a HistorianPayout.
         * @implements IHistorianPayout
         * @constructor
         * @param {IHistorianPayout=} [properties] Properties to set
         */
        function HistorianPayout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * HistorianPayout Version.
         * @member {number} Version
         * @memberof HistorianPayout
         * @instance
         */
        HistorianPayout.prototype.Version = 0;
    
        /**
         * Creates a new HistorianPayout instance using the specified properties.
         * @function create
         * @memberof HistorianPayout
         * @static
         * @param {IHistorianPayout=} [properties] Properties to set
         * @returns {HistorianPayout} HistorianPayout instance
         */
        HistorianPayout.create = function create(properties) {
            return new HistorianPayout(properties);
        };
    
        /**
         * Encodes the specified HistorianPayout message. Does not implicitly {@link HistorianPayout.verify|verify} messages.
         * @function encode
         * @memberof HistorianPayout
         * @static
         * @param {IHistorianPayout} message HistorianPayout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistorianPayout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Version != null && message.hasOwnProperty("Version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Version);
            return writer;
        };
    
        /**
         * Encodes the specified HistorianPayout message, length delimited. Does not implicitly {@link HistorianPayout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HistorianPayout
         * @static
         * @param {IHistorianPayout} message HistorianPayout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistorianPayout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a HistorianPayout message from the specified reader or buffer.
         * @function decode
         * @memberof HistorianPayout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HistorianPayout} HistorianPayout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistorianPayout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HistorianPayout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Version = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a HistorianPayout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HistorianPayout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HistorianPayout} HistorianPayout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistorianPayout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a HistorianPayout message.
         * @function verify
         * @memberof HistorianPayout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HistorianPayout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Version != null && message.hasOwnProperty("Version"))
                if (!$util.isInteger(message.Version))
                    return "Version: integer expected";
            return null;
        };
    
        /**
         * Creates a HistorianPayout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HistorianPayout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HistorianPayout} HistorianPayout
         */
        HistorianPayout.fromObject = function fromObject(object) {
            if (object instanceof $root.HistorianPayout)
                return object;
            var message = new $root.HistorianPayout();
            if (object.Version != null)
                message.Version = object.Version | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a HistorianPayout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HistorianPayout
         * @static
         * @param {HistorianPayout} message HistorianPayout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HistorianPayout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Version = 0;
            if (message.Version != null && message.hasOwnProperty("Version"))
                object.Version = message.Version;
            return object;
        };
    
        /**
         * Converts this HistorianPayout to JSON.
         * @function toJSON
         * @memberof HistorianPayout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HistorianPayout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return HistorianPayout;
    })();

    return $root;
})(protobuf);
