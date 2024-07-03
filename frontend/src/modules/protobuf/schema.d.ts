import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a FormInvalid. */
export interface IFormInvalid {

    /** FormInvalid message */
    message?: (string|null);

    /** FormInvalid key */
    key?: (string|null);

    /** FormInvalid value */
    value?: (string|null);
}

/** Represents a FormInvalid. */
export class FormInvalid implements IFormInvalid {

    /**
     * Constructs a new FormInvalid.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFormInvalid);

    /** FormInvalid message. */
    public message: string;

    /** FormInvalid key. */
    public key: string;

    /** FormInvalid value. */
    public value: string;

    /**
     * Creates a new FormInvalid instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FormInvalid instance
     */
    public static create(properties?: IFormInvalid): FormInvalid;

    /**
     * Encodes the specified FormInvalid message. Does not implicitly {@link FormInvalid.verify|verify} messages.
     * @param message FormInvalid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFormInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FormInvalid message, length delimited. Does not implicitly {@link FormInvalid.verify|verify} messages.
     * @param message FormInvalid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFormInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FormInvalid message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FormInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormInvalid;

    /**
     * Decodes a FormInvalid message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FormInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormInvalid;

    /**
     * Verifies a FormInvalid message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FormInvalid message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FormInvalid
     */
    public static fromObject(object: { [k: string]: any }): FormInvalid;

    /**
     * Creates a plain object from a FormInvalid message. Also converts values to other types if specified.
     * @param message FormInvalid
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FormInvalid, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FormInvalid to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FormInvalid
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FormsInvalid. */
export interface IFormsInvalid {

    /** FormsInvalid invalid */
    invalid?: (IFormInvalid[]|null);
}

/** Represents a FormsInvalid. */
export class FormsInvalid implements IFormsInvalid {

    /**
     * Constructs a new FormsInvalid.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFormsInvalid);

    /** FormsInvalid invalid. */
    public invalid: IFormInvalid[];

    /**
     * Creates a new FormsInvalid instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FormsInvalid instance
     */
    public static create(properties?: IFormsInvalid): FormsInvalid;

    /**
     * Encodes the specified FormsInvalid message. Does not implicitly {@link FormsInvalid.verify|verify} messages.
     * @param message FormsInvalid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFormsInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FormsInvalid message, length delimited. Does not implicitly {@link FormsInvalid.verify|verify} messages.
     * @param message FormsInvalid message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFormsInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FormsInvalid message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FormsInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormsInvalid;

    /**
     * Decodes a FormsInvalid message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FormsInvalid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormsInvalid;

    /**
     * Verifies a FormsInvalid message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FormsInvalid message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FormsInvalid
     */
    public static fromObject(object: { [k: string]: any }): FormsInvalid;

    /**
     * Creates a plain object from a FormsInvalid message. Also converts values to other types if specified.
     * @param message FormsInvalid
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FormsInvalid, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FormsInvalid to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FormsInvalid
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a User. */
export interface IUser {

    /** User id */
    id?: (string|null);

    /** User phone */
    phone?: (string|null);

    /** User first_name */
    first_name?: (string|null);

    /** User last_name */
    last_name?: (string|null);

    /** User created_at */
    created_at?: (string|null);

    /** User updated_at */
    updated_at?: (string|null);

    /** User preferences */
    preferences?: (IPreferences|null);

    /** User dating_profile */
    dating_profile?: (IDatingProfile|null);

    /** User limits */
    limits?: (ILimits|null);

    /** User media */
    media?: (IMedia[]|null);

    /** User likes */
    likes?: (ILikes[]|null);

    /** User dislikes */
    dislikes?: (IDislikes[]|null);
}

/** Represents a User. */
export class User implements IUser {

    /**
     * Constructs a new User.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUser);

    /** User id. */
    public id: string;

    /** User phone. */
    public phone: string;

    /** User first_name. */
    public first_name: string;

    /** User last_name. */
    public last_name: string;

    /** User created_at. */
    public created_at: string;

    /** User updated_at. */
    public updated_at: string;

    /** User preferences. */
    public preferences?: (IPreferences|null);

    /** User dating_profile. */
    public dating_profile?: (IDatingProfile|null);

    /** User limits. */
    public limits?: (ILimits|null);

    /** User media. */
    public media: IMedia[];

    /** User likes. */
    public likes: ILikes[];

    /** User dislikes. */
    public dislikes: IDislikes[];

    /**
     * Creates a new User instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User instance
     */
    public static create(properties?: IUser): User;

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a User message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): User;

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): User;

    /**
     * Verifies a User message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns User
     */
    public static fromObject(object: { [k: string]: any }): User;

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @param message User
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: User, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this User to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for User
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Preferences. */
export interface IPreferences {

    /** Preferences id */
    id?: (string|null);

    /** Preferences owner_id */
    owner_id?: (string|null);

    /** Preferences language */
    language?: (string|null);
}

/** Represents a Preferences. */
export class Preferences implements IPreferences {

    /**
     * Constructs a new Preferences.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPreferences);

    /** Preferences id. */
    public id: string;

    /** Preferences owner_id. */
    public owner_id: string;

    /** Preferences language. */
    public language: string;

    /**
     * Creates a new Preferences instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Preferences instance
     */
    public static create(properties?: IPreferences): Preferences;

    /**
     * Encodes the specified Preferences message. Does not implicitly {@link Preferences.verify|verify} messages.
     * @param message Preferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Preferences message, length delimited. Does not implicitly {@link Preferences.verify|verify} messages.
     * @param message Preferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Preferences message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Preferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Preferences;

    /**
     * Decodes a Preferences message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Preferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Preferences;

    /**
     * Verifies a Preferences message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Preferences message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Preferences
     */
    public static fromObject(object: { [k: string]: any }): Preferences;

    /**
     * Creates a plain object from a Preferences message. Also converts values to other types if specified.
     * @param message Preferences
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Preferences, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Preferences to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Preferences
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DatingProfile. */
export interface IDatingProfile {

    /** DatingProfile id */
    id?: (string|null);

    /** DatingProfile owner_id */
    owner_id?: (string|null);

    /** DatingProfile birthday */
    birthday?: (string|null);

    /** DatingProfile gender */
    gender?: (string|null);

    /** DatingProfile fav_vgames */
    fav_vgames?: (string[]|null);

    /** DatingProfile fav_vgenres */
    fav_vgenres?: (string[]|null);

    /** DatingProfile fav_vplatforms */
    fav_vplatforms?: (string[]|null);

    /** DatingProfile fav_vcharacter */
    fav_vcharacter?: (string|null);

    /** DatingProfile likes_dnd */
    likes_dnd?: (boolean|null);

    /** DatingProfile likes_anime */
    likes_anime?: (boolean|null);

    /** DatingProfile likes_bgames */
    likes_bgames?: (boolean|null);

    /** DatingProfile fav_bgames */
    fav_bgames?: (string[]|null);

    /** DatingProfile height */
    height?: (number|null);

    /** DatingProfile bio */
    bio?: (string|null);

    /** DatingProfile prompts */
    prompts?: (string[]|null);

    /** DatingProfile known_langs */
    known_langs?: (string[]|null);

    /** DatingProfile location */
    location?: (string|null);

    /** DatingProfile location2 */
    location2?: (string|null);

    /** DatingProfile school */
    school?: (string|null);

    /** DatingProfile job_title */
    job_title?: (string|null);

    /** DatingProfile company */
    company?: (string|null);

    /** DatingProfile top_song */
    top_song?: (string|null);

    /** DatingProfile top_artist */
    top_artist?: (string|null);

    /** DatingProfile pronouns */
    pronouns?: (string|null);

    /** DatingProfile height_unit */
    height_unit?: (string|null);

    /** DatingProfile sexuality */
    sexuality?: (string|null);

    /** DatingProfile education */
    education?: (string|null);

    /** DatingProfile looking_for */
    looking_for?: (string|null);

    /** DatingProfile relationship */
    relationship?: (string|null);

    /** DatingProfile family_plans */
    family_plans?: (string|null);

    /** DatingProfile workout */
    workout?: (string|null);

    /** DatingProfile personality */
    personality?: (string|null);

    /** DatingProfile smokes */
    smokes?: (string|null);

    /** DatingProfile drinks */
    drinks?: (string|null);

    /** DatingProfile cannabis */
    cannabis?: (string|null);

    /** DatingProfile banned */
    banned?: (boolean|null);

    /** DatingProfile use_smart_photos */
    use_smart_photos?: (boolean|null);

    /** DatingProfile hide_distance */
    hide_distance?: (boolean|null);

    /** DatingProfile hide_age */
    hide_age?: (boolean|null);

    /** DatingProfile dnd_mode */
    dnd_mode?: (boolean|null);

    /** DatingProfile show_sexuality */
    show_sexuality?: (boolean|null);

    /** DatingProfile show_gender */
    show_gender?: (boolean|null);

    /** DatingProfile show_pronouns */
    show_pronouns?: (boolean|null);

    /** DatingProfile wanting */
    wanting?: (string[]|null);

    /** DatingProfile created_at */
    created_at?: (string|null);

    /** DatingProfile updated_at */
    updated_at?: (string|null);
}

/** Represents a DatingProfile. */
export class DatingProfile implements IDatingProfile {

    /**
     * Constructs a new DatingProfile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDatingProfile);

    /** DatingProfile id. */
    public id: string;

    /** DatingProfile owner_id. */
    public owner_id: string;

    /** DatingProfile birthday. */
    public birthday: string;

    /** DatingProfile gender. */
    public gender: string;

    /** DatingProfile fav_vgames. */
    public fav_vgames: string[];

    /** DatingProfile fav_vgenres. */
    public fav_vgenres: string[];

    /** DatingProfile fav_vplatforms. */
    public fav_vplatforms: string[];

    /** DatingProfile fav_vcharacter. */
    public fav_vcharacter: string;

    /** DatingProfile likes_dnd. */
    public likes_dnd: boolean;

    /** DatingProfile likes_anime. */
    public likes_anime: boolean;

    /** DatingProfile likes_bgames. */
    public likes_bgames: boolean;

    /** DatingProfile fav_bgames. */
    public fav_bgames: string[];

    /** DatingProfile height. */
    public height: number;

    /** DatingProfile bio. */
    public bio: string;

    /** DatingProfile prompts. */
    public prompts: string[];

    /** DatingProfile known_langs. */
    public known_langs: string[];

    /** DatingProfile location. */
    public location: string;

    /** DatingProfile location2. */
    public location2: string;

    /** DatingProfile school. */
    public school: string;

    /** DatingProfile job_title. */
    public job_title: string;

    /** DatingProfile company. */
    public company: string;

    /** DatingProfile top_song. */
    public top_song: string;

    /** DatingProfile top_artist. */
    public top_artist: string;

    /** DatingProfile pronouns. */
    public pronouns: string;

    /** DatingProfile height_unit. */
    public height_unit: string;

    /** DatingProfile sexuality. */
    public sexuality: string;

    /** DatingProfile education. */
    public education: string;

    /** DatingProfile looking_for. */
    public looking_for: string;

    /** DatingProfile relationship. */
    public relationship: string;

    /** DatingProfile family_plans. */
    public family_plans: string;

    /** DatingProfile workout. */
    public workout: string;

    /** DatingProfile personality. */
    public personality: string;

    /** DatingProfile smokes. */
    public smokes: string;

    /** DatingProfile drinks. */
    public drinks: string;

    /** DatingProfile cannabis. */
    public cannabis: string;

    /** DatingProfile banned. */
    public banned: boolean;

    /** DatingProfile use_smart_photos. */
    public use_smart_photos: boolean;

    /** DatingProfile hide_distance. */
    public hide_distance: boolean;

    /** DatingProfile hide_age. */
    public hide_age: boolean;

    /** DatingProfile dnd_mode. */
    public dnd_mode: boolean;

    /** DatingProfile show_sexuality. */
    public show_sexuality: boolean;

    /** DatingProfile show_gender. */
    public show_gender: boolean;

    /** DatingProfile show_pronouns. */
    public show_pronouns: boolean;

    /** DatingProfile wanting. */
    public wanting: string[];

    /** DatingProfile created_at. */
    public created_at: string;

    /** DatingProfile updated_at. */
    public updated_at: string;

    /**
     * Creates a new DatingProfile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DatingProfile instance
     */
    public static create(properties?: IDatingProfile): DatingProfile;

    /**
     * Encodes the specified DatingProfile message. Does not implicitly {@link DatingProfile.verify|verify} messages.
     * @param message DatingProfile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDatingProfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DatingProfile message, length delimited. Does not implicitly {@link DatingProfile.verify|verify} messages.
     * @param message DatingProfile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDatingProfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DatingProfile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DatingProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DatingProfile;

    /**
     * Decodes a DatingProfile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DatingProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DatingProfile;

    /**
     * Verifies a DatingProfile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DatingProfile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DatingProfile
     */
    public static fromObject(object: { [k: string]: any }): DatingProfile;

    /**
     * Creates a plain object from a DatingProfile message. Also converts values to other types if specified.
     * @param message DatingProfile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DatingProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DatingProfile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DatingProfile
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Status. */
export interface IStatus {

    /** Status id */
    id?: (string|null);

    /** Status owner_id */
    owner_id?: (string|null);

    /** Status online */
    online?: (boolean|null);

    /** Status time_active */
    time_active?: (number|null);

    /** Status last_seen */
    last_seen?: (string|null);
}

/** Represents a Status. */
export class Status implements IStatus {

    /**
     * Constructs a new Status.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStatus);

    /** Status id. */
    public id: string;

    /** Status owner_id. */
    public owner_id: string;

    /** Status online. */
    public online: boolean;

    /** Status time_active. */
    public time_active: number;

    /** Status last_seen. */
    public last_seen: string;

    /**
     * Creates a new Status instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Status instance
     */
    public static create(properties?: IStatus): Status;

    /**
     * Encodes the specified Status message. Does not implicitly {@link Status.verify|verify} messages.
     * @param message Status message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Status message, length delimited. Does not implicitly {@link Status.verify|verify} messages.
     * @param message Status message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Status message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Status;

    /**
     * Decodes a Status message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Status;

    /**
     * Verifies a Status message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Status message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Status
     */
    public static fromObject(object: { [k: string]: any }): Status;

    /**
     * Creates a plain object from a Status message. Also converts values to other types if specified.
     * @param message Status
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Status to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Status
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an EmitStatus. */
export interface IEmitStatus {

    /** EmitStatus time_active */
    time_active?: (number|null);
}

/** Represents an EmitStatus. */
export class EmitStatus implements IEmitStatus {

    /**
     * Constructs a new EmitStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmitStatus);

    /** EmitStatus time_active. */
    public time_active: number;

    /**
     * Creates a new EmitStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EmitStatus instance
     */
    public static create(properties?: IEmitStatus): EmitStatus;

    /**
     * Encodes the specified EmitStatus message. Does not implicitly {@link EmitStatus.verify|verify} messages.
     * @param message EmitStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmitStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EmitStatus message, length delimited. Does not implicitly {@link EmitStatus.verify|verify} messages.
     * @param message EmitStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmitStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EmitStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EmitStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmitStatus;

    /**
     * Decodes an EmitStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EmitStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmitStatus;

    /**
     * Verifies an EmitStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EmitStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EmitStatus
     */
    public static fromObject(object: { [k: string]: any }): EmitStatus;

    /**
     * Creates a plain object from an EmitStatus message. Also converts values to other types if specified.
     * @param message EmitStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EmitStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EmitStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EmitStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Limits. */
export interface ILimits {

    /** Limits permanent */
    permanent?: (IPermanentLimits|null);

    /** Limits daily */
    daily?: (IDailyLimits|null);

    /** Limits monthly */
    monthly?: (IMonthlyLimits|null);
}

/** Represents a Limits. */
export class Limits implements ILimits {

    /**
     * Constructs a new Limits.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILimits);

    /** Limits permanent. */
    public permanent?: (IPermanentLimits|null);

    /** Limits daily. */
    public daily?: (IDailyLimits|null);

    /** Limits monthly. */
    public monthly?: (IMonthlyLimits|null);

    /**
     * Creates a new Limits instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Limits instance
     */
    public static create(properties?: ILimits): Limits;

    /**
     * Encodes the specified Limits message. Does not implicitly {@link Limits.verify|verify} messages.
     * @param message Limits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILimits, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Limits message, length delimited. Does not implicitly {@link Limits.verify|verify} messages.
     * @param message Limits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILimits, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Limits message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Limits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Limits;

    /**
     * Decodes a Limits message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Limits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Limits;

    /**
     * Verifies a Limits message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Limits message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Limits
     */
    public static fromObject(object: { [k: string]: any }): Limits;

    /**
     * Creates a plain object from a Limits message. Also converts values to other types if specified.
     * @param message Limits
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Limits, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Limits to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Limits
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PermanentLimits. */
export interface IPermanentLimits {

    /** PermanentLimits id */
    id?: (string|null);

    /** PermanentLimits owner_id */
    owner_id?: (string|null);

    /** PermanentLimits images */
    images?: (number|null);

    /** PermanentLimits video */
    video?: (number|null);
}

/** Represents a PermanentLimits. */
export class PermanentLimits implements IPermanentLimits {

    /**
     * Constructs a new PermanentLimits.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPermanentLimits);

    /** PermanentLimits id. */
    public id: string;

    /** PermanentLimits owner_id. */
    public owner_id: string;

    /** PermanentLimits images. */
    public images: number;

    /** PermanentLimits video. */
    public video: number;

    /**
     * Creates a new PermanentLimits instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PermanentLimits instance
     */
    public static create(properties?: IPermanentLimits): PermanentLimits;

    /**
     * Encodes the specified PermanentLimits message. Does not implicitly {@link PermanentLimits.verify|verify} messages.
     * @param message PermanentLimits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPermanentLimits, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PermanentLimits message, length delimited. Does not implicitly {@link PermanentLimits.verify|verify} messages.
     * @param message PermanentLimits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPermanentLimits, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PermanentLimits message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PermanentLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PermanentLimits;

    /**
     * Decodes a PermanentLimits message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PermanentLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PermanentLimits;

    /**
     * Verifies a PermanentLimits message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PermanentLimits message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PermanentLimits
     */
    public static fromObject(object: { [k: string]: any }): PermanentLimits;

    /**
     * Creates a plain object from a PermanentLimits message. Also converts values to other types if specified.
     * @param message PermanentLimits
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PermanentLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PermanentLimits to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PermanentLimits
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DailyLimits. */
export interface IDailyLimits {

    /** DailyLimits id */
    id?: (string|null);

    /** DailyLimits owner_id */
    owner_id?: (string|null);

    /** DailyLimits likes */
    likes?: (number|null);

    /** DailyLimits dislikes */
    dislikes?: (number|null);

    /** DailyLimits messages */
    messages?: (number|null);

    /** DailyLimits renews_at */
    renews_at?: (string|null);
}

/** Represents a DailyLimits. */
export class DailyLimits implements IDailyLimits {

    /**
     * Constructs a new DailyLimits.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyLimits);

    /** DailyLimits id. */
    public id: string;

    /** DailyLimits owner_id. */
    public owner_id: string;

    /** DailyLimits likes. */
    public likes: number;

    /** DailyLimits dislikes. */
    public dislikes: number;

    /** DailyLimits messages. */
    public messages: number;

    /** DailyLimits renews_at. */
    public renews_at: string;

    /**
     * Creates a new DailyLimits instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyLimits instance
     */
    public static create(properties?: IDailyLimits): DailyLimits;

    /**
     * Encodes the specified DailyLimits message. Does not implicitly {@link DailyLimits.verify|verify} messages.
     * @param message DailyLimits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyLimits, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyLimits message, length delimited. Does not implicitly {@link DailyLimits.verify|verify} messages.
     * @param message DailyLimits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyLimits, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyLimits message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyLimits;

    /**
     * Decodes a DailyLimits message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyLimits;

    /**
     * Verifies a DailyLimits message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyLimits message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyLimits
     */
    public static fromObject(object: { [k: string]: any }): DailyLimits;

    /**
     * Creates a plain object from a DailyLimits message. Also converts values to other types if specified.
     * @param message DailyLimits
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyLimits to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyLimits
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MonthlyLimits. */
export interface IMonthlyLimits {

    /** MonthlyLimits id */
    id?: (string|null);

    /** MonthlyLimits owner_id */
    owner_id?: (string|null);

    /** MonthlyLimits superlikes */
    superlikes?: (number|null);

    /** MonthlyLimits boosts */
    boosts?: (number|null);

    /** MonthlyLimits renews_at */
    renews_at?: (string|null);
}

/** Represents a MonthlyLimits. */
export class MonthlyLimits implements IMonthlyLimits {

    /**
     * Constructs a new MonthlyLimits.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMonthlyLimits);

    /** MonthlyLimits id. */
    public id: string;

    /** MonthlyLimits owner_id. */
    public owner_id: string;

    /** MonthlyLimits superlikes. */
    public superlikes: number;

    /** MonthlyLimits boosts. */
    public boosts: number;

    /** MonthlyLimits renews_at. */
    public renews_at: string;

    /**
     * Creates a new MonthlyLimits instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MonthlyLimits instance
     */
    public static create(properties?: IMonthlyLimits): MonthlyLimits;

    /**
     * Encodes the specified MonthlyLimits message. Does not implicitly {@link MonthlyLimits.verify|verify} messages.
     * @param message MonthlyLimits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMonthlyLimits, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MonthlyLimits message, length delimited. Does not implicitly {@link MonthlyLimits.verify|verify} messages.
     * @param message MonthlyLimits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMonthlyLimits, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MonthlyLimits message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MonthlyLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MonthlyLimits;

    /**
     * Decodes a MonthlyLimits message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MonthlyLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MonthlyLimits;

    /**
     * Verifies a MonthlyLimits message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MonthlyLimits message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MonthlyLimits
     */
    public static fromObject(object: { [k: string]: any }): MonthlyLimits;

    /**
     * Creates a plain object from a MonthlyLimits message. Also converts values to other types if specified.
     * @param message MonthlyLimits
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MonthlyLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MonthlyLimits to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MonthlyLimits
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Media. */
export interface IMedia {

    /** Media id */
    id?: (string|null);

    /** Media owner_id */
    owner_id?: (string|null);

    /** Media likes */
    likes?: (number|null);

    /** Media superlikes */
    superlikes?: (number|null);

    /** Media dislikes */
    dislikes?: (number|null);

    /** Media time_spent */
    time_spent?: (number|null);

    /** Media url */
    url?: (string|null);

    /** Media mime_type */
    mime_type?: (string|null);

    /** Media file_size */
    file_size?: (number|null);

    /** Media created_at */
    created_at?: (string|null);

    /** Media updated_at */
    updated_at?: (string|null);
}

/** Represents a Media. */
export class Media implements IMedia {

    /**
     * Constructs a new Media.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMedia);

    /** Media id. */
    public id: string;

    /** Media owner_id. */
    public owner_id: string;

    /** Media likes. */
    public likes: number;

    /** Media superlikes. */
    public superlikes: number;

    /** Media dislikes. */
    public dislikes: number;

    /** Media time_spent. */
    public time_spent: number;

    /** Media url. */
    public url: string;

    /** Media mime_type. */
    public mime_type: string;

    /** Media file_size. */
    public file_size: number;

    /** Media created_at. */
    public created_at: string;

    /** Media updated_at. */
    public updated_at: string;

    /**
     * Creates a new Media instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Media instance
     */
    public static create(properties?: IMedia): Media;

    /**
     * Encodes the specified Media message. Does not implicitly {@link Media.verify|verify} messages.
     * @param message Media message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMedia, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Media message, length delimited. Does not implicitly {@link Media.verify|verify} messages.
     * @param message Media message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMedia, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Media message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Media
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Media;

    /**
     * Decodes a Media message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Media
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Media;

    /**
     * Verifies a Media message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Media message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Media
     */
    public static fromObject(object: { [k: string]: any }): Media;

    /**
     * Creates a plain object from a Media message. Also converts values to other types if specified.
     * @param message Media
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Media, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Media to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Media
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Likes. */
export interface ILikes {

    /** Likes id */
    id?: (string|null);

    /** Likes owner_id */
    owner_id?: (string|null);

    /** Likes target_id */
    target_id?: (string|null);

    /** Likes created_at */
    created_at?: (string|null);

    /** Likes is_super */
    is_super?: (boolean|null);
}

/** Represents a Likes. */
export class Likes implements ILikes {

    /**
     * Constructs a new Likes.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILikes);

    /** Likes id. */
    public id: string;

    /** Likes owner_id. */
    public owner_id: string;

    /** Likes target_id. */
    public target_id: string;

    /** Likes created_at. */
    public created_at: string;

    /** Likes is_super. */
    public is_super: boolean;

    /**
     * Creates a new Likes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Likes instance
     */
    public static create(properties?: ILikes): Likes;

    /**
     * Encodes the specified Likes message. Does not implicitly {@link Likes.verify|verify} messages.
     * @param message Likes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILikes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Likes message, length delimited. Does not implicitly {@link Likes.verify|verify} messages.
     * @param message Likes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILikes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Likes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Likes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Likes;

    /**
     * Decodes a Likes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Likes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Likes;

    /**
     * Verifies a Likes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Likes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Likes
     */
    public static fromObject(object: { [k: string]: any }): Likes;

    /**
     * Creates a plain object from a Likes message. Also converts values to other types if specified.
     * @param message Likes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Likes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Likes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Likes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Dislikes. */
export interface IDislikes {

    /** Dislikes id */
    id?: (string|null);

    /** Dislikes owner_id */
    owner_id?: (string|null);

    /** Dislikes target_id */
    target_id?: (string|null);

    /** Dislikes created_at */
    created_at?: (string|null);
}

/** Represents a Dislikes. */
export class Dislikes implements IDislikes {

    /**
     * Constructs a new Dislikes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDislikes);

    /** Dislikes id. */
    public id: string;

    /** Dislikes owner_id. */
    public owner_id: string;

    /** Dislikes target_id. */
    public target_id: string;

    /** Dislikes created_at. */
    public created_at: string;

    /**
     * Creates a new Dislikes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Dislikes instance
     */
    public static create(properties?: IDislikes): Dislikes;

    /**
     * Encodes the specified Dislikes message. Does not implicitly {@link Dislikes.verify|verify} messages.
     * @param message Dislikes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDislikes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Dislikes message, length delimited. Does not implicitly {@link Dislikes.verify|verify} messages.
     * @param message Dislikes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDislikes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Dislikes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Dislikes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Dislikes;

    /**
     * Decodes a Dislikes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Dislikes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Dislikes;

    /**
     * Verifies a Dislikes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Dislikes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Dislikes
     */
    public static fromObject(object: { [k: string]: any }): Dislikes;

    /**
     * Creates a plain object from a Dislikes message. Also converts values to other types if specified.
     * @param message Dislikes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Dislikes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Dislikes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Dislikes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Conversations. */
export interface IConversations {

    /** Conversations id */
    id?: (string|null);

    /** Conversations user1_id */
    user1_id?: (string|null);

    /** Conversations user2_id */
    user2_id?: (string|null);

    /** Conversations blocked */
    blocked?: (boolean|null);

    /** Conversations who_blocked */
    who_blocked?: (string|null);

    /** Conversations who_reported */
    who_reported?: (string|null);

    /** Conversations created_at */
    created_at?: (string|null);

    /** Conversations last_message */
    last_message?: (string|null);
}

/** Represents a Conversations. */
export class Conversations implements IConversations {

    /**
     * Constructs a new Conversations.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConversations);

    /** Conversations id. */
    public id: string;

    /** Conversations user1_id. */
    public user1_id: string;

    /** Conversations user2_id. */
    public user2_id: string;

    /** Conversations blocked. */
    public blocked: boolean;

    /** Conversations who_blocked. */
    public who_blocked: string;

    /** Conversations who_reported. */
    public who_reported: string;

    /** Conversations created_at. */
    public created_at: string;

    /** Conversations last_message. */
    public last_message: string;

    /**
     * Creates a new Conversations instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Conversations instance
     */
    public static create(properties?: IConversations): Conversations;

    /**
     * Encodes the specified Conversations message. Does not implicitly {@link Conversations.verify|verify} messages.
     * @param message Conversations message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConversations, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Conversations message, length delimited. Does not implicitly {@link Conversations.verify|verify} messages.
     * @param message Conversations message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConversations, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Conversations message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Conversations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Conversations;

    /**
     * Decodes a Conversations message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Conversations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Conversations;

    /**
     * Verifies a Conversations message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Conversations message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Conversations
     */
    public static fromObject(object: { [k: string]: any }): Conversations;

    /**
     * Creates a plain object from a Conversations message. Also converts values to other types if specified.
     * @param message Conversations
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Conversations, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Conversations to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Conversations
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ConversationList. */
export interface IConversationList {

    /** ConversationList take */
    take?: (number|null);

    /** ConversationList skip */
    skip?: (number|null);

    /** ConversationList total */
    total?: (number|null);

    /** ConversationList conversations */
    conversations?: (IConversations[]|null);

    /** ConversationList has_more */
    has_more?: (boolean|null);
}

/** Represents a ConversationList. */
export class ConversationList implements IConversationList {

    /**
     * Constructs a new ConversationList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConversationList);

    /** ConversationList take. */
    public take: number;

    /** ConversationList skip. */
    public skip: number;

    /** ConversationList total. */
    public total: number;

    /** ConversationList conversations. */
    public conversations: IConversations[];

    /** ConversationList has_more. */
    public has_more?: (boolean|null);

    /** ConversationList _has_more. */
    public _has_more?: "has_more";

    /**
     * Creates a new ConversationList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConversationList instance
     */
    public static create(properties?: IConversationList): ConversationList;

    /**
     * Encodes the specified ConversationList message. Does not implicitly {@link ConversationList.verify|verify} messages.
     * @param message ConversationList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConversationList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConversationList message, length delimited. Does not implicitly {@link ConversationList.verify|verify} messages.
     * @param message ConversationList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConversationList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConversationList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConversationList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConversationList;

    /**
     * Decodes a ConversationList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConversationList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConversationList;

    /**
     * Verifies a ConversationList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConversationList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConversationList
     */
    public static fromObject(object: { [k: string]: any }): ConversationList;

    /**
     * Creates a plain object from a ConversationList message. Also converts values to other types if specified.
     * @param message ConversationList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConversationList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConversationList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ConversationList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Messages. */
export interface IMessages {

    /** Messages id */
    id?: (string|null);

    /** Messages owner_id */
    owner_id?: (string|null);

    /** Messages conversation_id */
    conversation_id?: (string|null);

    /** Messages content */
    content?: (string|null);

    /** Messages is_read */
    is_read?: (boolean|null);

    /** Messages time_read */
    time_read?: (string|null);

    /** Messages is_sent */
    is_sent?: (boolean|null);

    /** Messages time_sent */
    time_sent?: (string|null);

    /** Messages is_received */
    is_received?: (boolean|null);

    /** Messages time_received */
    time_received?: (string|null);

    /** Messages is_deleted */
    is_deleted?: (boolean|null);

    /** Messages created_at */
    created_at?: (string|null);

    /** Messages updated_at */
    updated_at?: (string|null);

    /** Messages is_edited */
    is_edited?: (boolean|null);

    /** Messages time_edited */
    time_edited?: (string|null);

    /** Messages edit_history */
    edit_history?: (IEditHistory[]|null);
}

/** Represents a Messages. */
export class Messages implements IMessages {

    /**
     * Constructs a new Messages.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessages);

    /** Messages id. */
    public id: string;

    /** Messages owner_id. */
    public owner_id: string;

    /** Messages conversation_id. */
    public conversation_id: string;

    /** Messages content. */
    public content: string;

    /** Messages is_read. */
    public is_read: boolean;

    /** Messages time_read. */
    public time_read: string;

    /** Messages is_sent. */
    public is_sent: boolean;

    /** Messages time_sent. */
    public time_sent: string;

    /** Messages is_received. */
    public is_received: boolean;

    /** Messages time_received. */
    public time_received: string;

    /** Messages is_deleted. */
    public is_deleted: boolean;

    /** Messages created_at. */
    public created_at: string;

    /** Messages updated_at. */
    public updated_at: string;

    /** Messages is_edited. */
    public is_edited: boolean;

    /** Messages time_edited. */
    public time_edited: string;

    /** Messages edit_history. */
    public edit_history: IEditHistory[];

    /**
     * Creates a new Messages instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Messages instance
     */
    public static create(properties?: IMessages): Messages;

    /**
     * Encodes the specified Messages message. Does not implicitly {@link Messages.verify|verify} messages.
     * @param message Messages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Messages message, length delimited. Does not implicitly {@link Messages.verify|verify} messages.
     * @param message Messages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Messages message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Messages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Messages;

    /**
     * Decodes a Messages message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Messages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Messages;

    /**
     * Verifies a Messages message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Messages message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Messages
     */
    public static fromObject(object: { [k: string]: any }): Messages;

    /**
     * Creates a plain object from a Messages message. Also converts values to other types if specified.
     * @param message Messages
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Messages, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Messages to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Messages
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an EditMessage. */
export interface IEditMessage {

    /** EditMessage id */
    id?: (string|null);

    /** EditMessage content */
    content?: (string|null);
}

/** Represents an EditMessage. */
export class EditMessage implements IEditMessage {

    /**
     * Constructs a new EditMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEditMessage);

    /** EditMessage id. */
    public id: string;

    /** EditMessage content. */
    public content: string;

    /**
     * Creates a new EditMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EditMessage instance
     */
    public static create(properties?: IEditMessage): EditMessage;

    /**
     * Encodes the specified EditMessage message. Does not implicitly {@link EditMessage.verify|verify} messages.
     * @param message EditMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEditMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EditMessage message, length delimited. Does not implicitly {@link EditMessage.verify|verify} messages.
     * @param message EditMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEditMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EditMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EditMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EditMessage;

    /**
     * Decodes an EditMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EditMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EditMessage;

    /**
     * Verifies an EditMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EditMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EditMessage
     */
    public static fromObject(object: { [k: string]: any }): EditMessage;

    /**
     * Creates a plain object from an EditMessage message. Also converts values to other types if specified.
     * @param message EditMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EditMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EditMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EditMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an EditHistory. */
export interface IEditHistory {

    /** EditHistory message */
    message?: (string|null);

    /** EditHistory time_edited */
    time_edited?: (string|null);
}

/** Represents an EditHistory. */
export class EditHistory implements IEditHistory {

    /**
     * Constructs a new EditHistory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEditHistory);

    /** EditHistory message. */
    public message: string;

    /** EditHistory time_edited. */
    public time_edited: string;

    /**
     * Creates a new EditHistory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EditHistory instance
     */
    public static create(properties?: IEditHistory): EditHistory;

    /**
     * Encodes the specified EditHistory message. Does not implicitly {@link EditHistory.verify|verify} messages.
     * @param message EditHistory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEditHistory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EditHistory message, length delimited. Does not implicitly {@link EditHistory.verify|verify} messages.
     * @param message EditHistory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEditHistory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EditHistory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EditHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EditHistory;

    /**
     * Decodes an EditHistory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EditHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EditHistory;

    /**
     * Verifies an EditHistory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EditHistory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EditHistory
     */
    public static fromObject(object: { [k: string]: any }): EditHistory;

    /**
     * Creates a plain object from an EditHistory message. Also converts values to other types if specified.
     * @param message EditHistory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EditHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EditHistory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EditHistory
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Messagelist. */
export interface IMessagelist {

    /** Messagelist take */
    take?: (number|null);

    /** Messagelist skip */
    skip?: (number|null);

    /** Messagelist total */
    total?: (number|null);

    /** Messagelist conversation_id */
    conversation_id?: (string|null);

    /** Messagelist messages */
    messages?: (IMessages[]|null);

    /** Messagelist has_more */
    has_more?: (boolean|null);
}

/** Represents a Messagelist. */
export class Messagelist implements IMessagelist {

    /**
     * Constructs a new Messagelist.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessagelist);

    /** Messagelist take. */
    public take: number;

    /** Messagelist skip. */
    public skip: number;

    /** Messagelist total. */
    public total: number;

    /** Messagelist conversation_id. */
    public conversation_id: string;

    /** Messagelist messages. */
    public messages: IMessages[];

    /** Messagelist has_more. */
    public has_more?: (boolean|null);

    /** Messagelist _has_more. */
    public _has_more?: "has_more";

    /**
     * Creates a new Messagelist instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Messagelist instance
     */
    public static create(properties?: IMessagelist): Messagelist;

    /**
     * Encodes the specified Messagelist message. Does not implicitly {@link Messagelist.verify|verify} messages.
     * @param message Messagelist message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessagelist, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Messagelist message, length delimited. Does not implicitly {@link Messagelist.verify|verify} messages.
     * @param message Messagelist message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessagelist, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Messagelist message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Messagelist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Messagelist;

    /**
     * Decodes a Messagelist message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Messagelist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Messagelist;

    /**
     * Verifies a Messagelist message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Messagelist message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Messagelist
     */
    public static fromObject(object: { [k: string]: any }): Messagelist;

    /**
     * Creates a plain object from a Messagelist message. Also converts values to other types if specified.
     * @param message Messagelist
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Messagelist, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Messagelist to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Messagelist
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VideoGames. */
export interface IVideoGames {

    /** VideoGames id */
    id?: (string|null);

    /** VideoGames name */
    name?: (string|null);

    /** VideoGames image_url */
    image_url?: (string|null);

    /** VideoGames publisher */
    publisher?: (string|null);

    /** VideoGames release */
    release?: (string|null);

    /** VideoGames platforms */
    platforms?: (string[]|null);

    /** VideoGames genres */
    genres?: (string[]|null);

    /** VideoGames tags */
    tags?: (string[]|null);

    /** VideoGames description */
    description?: (string|null);
}

/** Represents a VideoGames. */
export class VideoGames implements IVideoGames {

    /**
     * Constructs a new VideoGames.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVideoGames);

    /** VideoGames id. */
    public id: string;

    /** VideoGames name. */
    public name: string;

    /** VideoGames image_url. */
    public image_url: string;

    /** VideoGames publisher. */
    public publisher: string;

    /** VideoGames release. */
    public release: string;

    /** VideoGames platforms. */
    public platforms: string[];

    /** VideoGames genres. */
    public genres: string[];

    /** VideoGames tags. */
    public tags: string[];

    /** VideoGames description. */
    public description: string;

    /**
     * Creates a new VideoGames instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VideoGames instance
     */
    public static create(properties?: IVideoGames): VideoGames;

    /**
     * Encodes the specified VideoGames message. Does not implicitly {@link VideoGames.verify|verify} messages.
     * @param message VideoGames message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVideoGames, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VideoGames message, length delimited. Does not implicitly {@link VideoGames.verify|verify} messages.
     * @param message VideoGames message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVideoGames, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VideoGames message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VideoGames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VideoGames;

    /**
     * Decodes a VideoGames message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VideoGames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VideoGames;

    /**
     * Verifies a VideoGames message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VideoGames message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VideoGames
     */
    public static fromObject(object: { [k: string]: any }): VideoGames;

    /**
     * Creates a plain object from a VideoGames message. Also converts values to other types if specified.
     * @param message VideoGames
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VideoGames, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VideoGames to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VideoGames
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an AuthorizeByPhoneRequest. */
export interface IAuthorizeByPhoneRequest {

    /** AuthorizeByPhoneRequest phone */
    phone?: (string|null);

    /** AuthorizeByPhoneRequest OTP */
    OTP?: (string|null);
}

/** Represents an AuthorizeByPhoneRequest. */
export class AuthorizeByPhoneRequest implements IAuthorizeByPhoneRequest {

    /**
     * Constructs a new AuthorizeByPhoneRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthorizeByPhoneRequest);

    /** AuthorizeByPhoneRequest phone. */
    public phone: string;

    /** AuthorizeByPhoneRequest OTP. */
    public OTP?: (string|null);

    /** AuthorizeByPhoneRequest _OTP. */
    public _OTP?: "OTP";

    /**
     * Creates a new AuthorizeByPhoneRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthorizeByPhoneRequest instance
     */
    public static create(properties?: IAuthorizeByPhoneRequest): AuthorizeByPhoneRequest;

    /**
     * Encodes the specified AuthorizeByPhoneRequest message. Does not implicitly {@link AuthorizeByPhoneRequest.verify|verify} messages.
     * @param message AuthorizeByPhoneRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthorizeByPhoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthorizeByPhoneRequest message, length delimited. Does not implicitly {@link AuthorizeByPhoneRequest.verify|verify} messages.
     * @param message AuthorizeByPhoneRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthorizeByPhoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthorizeByPhoneRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthorizeByPhoneRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthorizeByPhoneRequest;

    /**
     * Decodes an AuthorizeByPhoneRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthorizeByPhoneRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthorizeByPhoneRequest;

    /**
     * Verifies an AuthorizeByPhoneRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthorizeByPhoneRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthorizeByPhoneRequest
     */
    public static fromObject(object: { [k: string]: any }): AuthorizeByPhoneRequest;

    /**
     * Creates a plain object from an AuthorizeByPhoneRequest message. Also converts values to other types if specified.
     * @param message AuthorizeByPhoneRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthorizeByPhoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthorizeByPhoneRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AuthorizeByPhoneRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an AuthResponse. */
export interface IAuthResponse {

    /** AuthResponse authorized */
    authorized?: (boolean|null);

    /** AuthResponse message */
    message?: (string|null);

    /** AuthResponse user */
    user?: (IUser|null);
}

/** Represents an AuthResponse. */
export class AuthResponse implements IAuthResponse {

    /**
     * Constructs a new AuthResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthResponse);

    /** AuthResponse authorized. */
    public authorized: boolean;

    /** AuthResponse message. */
    public message: string;

    /** AuthResponse user. */
    public user?: (IUser|null);

    /**
     * Creates a new AuthResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthResponse instance
     */
    public static create(properties?: IAuthResponse): AuthResponse;

    /**
     * Encodes the specified AuthResponse message. Does not implicitly {@link AuthResponse.verify|verify} messages.
     * @param message AuthResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link AuthResponse.verify|verify} messages.
     * @param message AuthResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthResponse;

    /**
     * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthResponse;

    /**
     * Verifies an AuthResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthResponse
     */
    public static fromObject(object: { [k: string]: any }): AuthResponse;

    /**
     * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
     * @param message AuthResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AuthResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SyncResponse. */
export interface ISyncResponse {

    /** SyncResponse conversations */
    conversations?: (IConversations[]|null);

    /** SyncResponse media */
    media?: (IMedia[]|null);

    /** SyncResponse preferences */
    preferences?: (IPreferences|null);

    /** SyncResponse limits */
    limits?: (ILimits|null);

    /** SyncResponse datingProfile */
    datingProfile?: (IDatingProfile|null);

    /** SyncResponse user */
    user?: (IUser|null);
}

/** Represents a SyncResponse. */
export class SyncResponse implements ISyncResponse {

    /**
     * Constructs a new SyncResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISyncResponse);

    /** SyncResponse conversations. */
    public conversations: IConversations[];

    /** SyncResponse media. */
    public media: IMedia[];

    /** SyncResponse preferences. */
    public preferences?: (IPreferences|null);

    /** SyncResponse limits. */
    public limits?: (ILimits|null);

    /** SyncResponse datingProfile. */
    public datingProfile?: (IDatingProfile|null);

    /** SyncResponse user. */
    public user?: (IUser|null);

    /**
     * Creates a new SyncResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SyncResponse instance
     */
    public static create(properties?: ISyncResponse): SyncResponse;

    /**
     * Encodes the specified SyncResponse message. Does not implicitly {@link SyncResponse.verify|verify} messages.
     * @param message SyncResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISyncResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SyncResponse message, length delimited. Does not implicitly {@link SyncResponse.verify|verify} messages.
     * @param message SyncResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISyncResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SyncResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SyncResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncResponse;

    /**
     * Decodes a SyncResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SyncResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncResponse;

    /**
     * Verifies a SyncResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SyncResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SyncResponse
     */
    public static fromObject(object: { [k: string]: any }): SyncResponse;

    /**
     * Creates a plain object from a SyncResponse message. Also converts values to other types if specified.
     * @param message SyncResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SyncResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SyncResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SyncResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DataProfilesForYou. */
export interface IDataProfilesForYou {

    /** DataProfilesForYou profiles */
    profiles?: (IDatingProfile[]|null);

    /** DataProfilesForYou total */
    total?: (number|null);
}

/** Represents a DataProfilesForYou. */
export class DataProfilesForYou implements IDataProfilesForYou {

    /**
     * Constructs a new DataProfilesForYou.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDataProfilesForYou);

    /** DataProfilesForYou profiles. */
    public profiles: IDatingProfile[];

    /** DataProfilesForYou total. */
    public total: number;

    /**
     * Creates a new DataProfilesForYou instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DataProfilesForYou instance
     */
    public static create(properties?: IDataProfilesForYou): DataProfilesForYou;

    /**
     * Encodes the specified DataProfilesForYou message. Does not implicitly {@link DataProfilesForYou.verify|verify} messages.
     * @param message DataProfilesForYou message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDataProfilesForYou, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DataProfilesForYou message, length delimited. Does not implicitly {@link DataProfilesForYou.verify|verify} messages.
     * @param message DataProfilesForYou message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDataProfilesForYou, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DataProfilesForYou message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DataProfilesForYou
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataProfilesForYou;

    /**
     * Decodes a DataProfilesForYou message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DataProfilesForYou
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataProfilesForYou;

    /**
     * Verifies a DataProfilesForYou message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DataProfilesForYou message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DataProfilesForYou
     */
    public static fromObject(object: { [k: string]: any }): DataProfilesForYou;

    /**
     * Creates a plain object from a DataProfilesForYou message. Also converts values to other types if specified.
     * @param message DataProfilesForYou
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DataProfilesForYou, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DataProfilesForYou to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DataProfilesForYou
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ServerError. */
export interface IServerError {

    /** ServerError message */
    message?: (string|null);
}

/** Represents a ServerError. */
export class ServerError implements IServerError {

    /**
     * Constructs a new ServerError.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerError);

    /** ServerError message. */
    public message: string;

    /**
     * Creates a new ServerError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerError instance
     */
    public static create(properties?: IServerError): ServerError;

    /**
     * Encodes the specified ServerError message. Does not implicitly {@link ServerError.verify|verify} messages.
     * @param message ServerError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerError message, length delimited. Does not implicitly {@link ServerError.verify|verify} messages.
     * @param message ServerError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerError;

    /**
     * Decodes a ServerError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerError;

    /**
     * Verifies a ServerError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerError
     */
    public static fromObject(object: { [k: string]: any }): ServerError;

    /**
     * Creates a plain object from a ServerError message. Also converts values to other types if specified.
     * @param message ServerError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ServerError
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ClientError. */
export interface IClientError {

    /** ClientError message */
    message?: (string|null);

    /** ClientError stack_trace */
    stack_trace?: (string|null);
}

/** Represents a ClientError. */
export class ClientError implements IClientError {

    /**
     * Constructs a new ClientError.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientError);

    /** ClientError message. */
    public message: string;

    /** ClientError stack_trace. */
    public stack_trace: string;

    /**
     * Creates a new ClientError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientError instance
     */
    public static create(properties?: IClientError): ClientError;

    /**
     * Encodes the specified ClientError message. Does not implicitly {@link ClientError.verify|verify} messages.
     * @param message ClientError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientError message, length delimited. Does not implicitly {@link ClientError.verify|verify} messages.
     * @param message ClientError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientError;

    /**
     * Decodes a ClientError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientError;

    /**
     * Verifies a ClientError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientError
     */
    public static fromObject(object: { [k: string]: any }): ClientError;

    /**
     * Creates a plain object from a ClientError message. Also converts values to other types if specified.
     * @param message ClientError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClientError
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SpecifyRequest. */
export interface ISpecifyRequest {

    /** SpecifyRequest id */
    id?: (string|null);
}

/** Represents a SpecifyRequest. */
export class SpecifyRequest implements ISpecifyRequest {

    /**
     * Constructs a new SpecifyRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpecifyRequest);

    /** SpecifyRequest id. */
    public id: string;

    /**
     * Creates a new SpecifyRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SpecifyRequest instance
     */
    public static create(properties?: ISpecifyRequest): SpecifyRequest;

    /**
     * Encodes the specified SpecifyRequest message. Does not implicitly {@link SpecifyRequest.verify|verify} messages.
     * @param message SpecifyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpecifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SpecifyRequest message, length delimited. Does not implicitly {@link SpecifyRequest.verify|verify} messages.
     * @param message SpecifyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpecifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SpecifyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SpecifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SpecifyRequest;

    /**
     * Decodes a SpecifyRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SpecifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SpecifyRequest;

    /**
     * Verifies a SpecifyRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SpecifyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SpecifyRequest
     */
    public static fromObject(object: { [k: string]: any }): SpecifyRequest;

    /**
     * Creates a plain object from a SpecifyRequest message. Also converts values to other types if specified.
     * @param message SpecifyRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SpecifyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SpecifyRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SpecifyRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Blank. */
export interface IBlank {

    /** Blank i */
    i?: (number|null);
}

/** Represents a Blank. */
export class Blank implements IBlank {

    /**
     * Constructs a new Blank.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlank);

    /** Blank i. */
    public i: number;

    /**
     * Creates a new Blank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Blank instance
     */
    public static create(properties?: IBlank): Blank;

    /**
     * Encodes the specified Blank message. Does not implicitly {@link Blank.verify|verify} messages.
     * @param message Blank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Blank message, length delimited. Does not implicitly {@link Blank.verify|verify} messages.
     * @param message Blank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Blank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Blank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Blank;

    /**
     * Decodes a Blank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Blank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Blank;

    /**
     * Verifies a Blank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Blank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Blank
     */
    public static fromObject(object: { [k: string]: any }): Blank;

    /**
     * Creates a plain object from a Blank message. Also converts values to other types if specified.
     * @param message Blank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Blank, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Blank to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Blank
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ChangeEvent. */
export interface IChangeEvent {

    /** ChangeEvent type */
    type?: (string|null);

    /** ChangeEvent struct */
    struct?: (string|null);

    /** ChangeEvent user */
    user?: (IUser|null);

    /** ChangeEvent preferences */
    preferences?: (IPreferences|null);

    /** ChangeEvent dating_profile */
    dating_profile?: (IDatingProfile|null);

    /** ChangeEvent limits */
    limits?: (ILimits|null);

    /** ChangeEvent media */
    media?: (IMedia|null);

    /** ChangeEvent likes */
    likes?: (ILikes|null);

    /** ChangeEvent dislikes */
    dislikes?: (IDislikes|null);

    /** ChangeEvent status */
    status?: (IStatus|null);

    /** ChangeEvent conversations */
    conversations?: (IConversations|null);

    /** ChangeEvent messages */
    messages?: (IMessages|null);
}

/** Represents a ChangeEvent. */
export class ChangeEvent implements IChangeEvent {

    /**
     * Constructs a new ChangeEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChangeEvent);

    /** ChangeEvent type. */
    public type: string;

    /** ChangeEvent struct. */
    public struct: string;

    /** ChangeEvent user. */
    public user?: (IUser|null);

    /** ChangeEvent preferences. */
    public preferences?: (IPreferences|null);

    /** ChangeEvent dating_profile. */
    public dating_profile?: (IDatingProfile|null);

    /** ChangeEvent limits. */
    public limits?: (ILimits|null);

    /** ChangeEvent media. */
    public media?: (IMedia|null);

    /** ChangeEvent likes. */
    public likes?: (ILikes|null);

    /** ChangeEvent dislikes. */
    public dislikes?: (IDislikes|null);

    /** ChangeEvent status. */
    public status?: (IStatus|null);

    /** ChangeEvent conversations. */
    public conversations?: (IConversations|null);

    /** ChangeEvent messages. */
    public messages?: (IMessages|null);

    /** ChangeEvent _user. */
    public _user?: "user";

    /** ChangeEvent _preferences. */
    public _preferences?: "preferences";

    /** ChangeEvent _dating_profile. */
    public _dating_profile?: "dating_profile";

    /** ChangeEvent _limits. */
    public _limits?: "limits";

    /** ChangeEvent _media. */
    public _media?: "media";

    /** ChangeEvent _likes. */
    public _likes?: "likes";

    /** ChangeEvent _dislikes. */
    public _dislikes?: "dislikes";

    /** ChangeEvent _status. */
    public _status?: "status";

    /** ChangeEvent _conversations. */
    public _conversations?: "conversations";

    /** ChangeEvent _messages. */
    public _messages?: "messages";

    /**
     * Creates a new ChangeEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeEvent instance
     */
    public static create(properties?: IChangeEvent): ChangeEvent;

    /**
     * Encodes the specified ChangeEvent message. Does not implicitly {@link ChangeEvent.verify|verify} messages.
     * @param message ChangeEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChangeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChangeEvent message, length delimited. Does not implicitly {@link ChangeEvent.verify|verify} messages.
     * @param message ChangeEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChangeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChangeEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChangeEvent;

    /**
     * Decodes a ChangeEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChangeEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChangeEvent;

    /**
     * Verifies a ChangeEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChangeEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChangeEvent
     */
    public static fromObject(object: { [k: string]: any }): ChangeEvent;

    /**
     * Creates a plain object from a ChangeEvent message. Also converts values to other types if specified.
     * @param message ChangeEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChangeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChangeEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ChangeEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
