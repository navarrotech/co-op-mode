// package: 
// file: schema.proto

import * as jspb from "google-protobuf";

export class error extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): error.AsObject;
  static toObject(includeInstance: boolean, msg: error): error.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): error;
  static deserializeBinaryFromReader(message: error, reader: jspb.BinaryReader): error;
}

export namespace error {
  export type AsObject = {
  }
}

export class users extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): users.AsObject;
  static toObject(includeInstance: boolean, msg: users): users.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: users, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): users;
  static deserializeBinaryFromReader(message: users, reader: jspb.BinaryReader): users;
}

export namespace users {
  export type AsObject = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
  }
}

export class likes extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOwnerId(): string;
  setOwnerId(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getIsSuper(): boolean;
  setIsSuper(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): likes.AsObject;
  static toObject(includeInstance: boolean, msg: likes): likes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: likes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): likes;
  static deserializeBinaryFromReader(message: likes, reader: jspb.BinaryReader): likes;
}

export namespace likes {
  export type AsObject = {
    id: string,
    ownerId: string,
    targetId: string,
    createdAt: string,
    isSuper: boolean,
  }
}

export class dislikes extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOwnerId(): string;
  setOwnerId(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): dislikes.AsObject;
  static toObject(includeInstance: boolean, msg: dislikes): dislikes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: dislikes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): dislikes;
  static deserializeBinaryFromReader(message: dislikes, reader: jspb.BinaryReader): dislikes;
}

export namespace dislikes {
  export type AsObject = {
    id: string,
    ownerId: string,
    targetId: string,
    createdAt: string,
  }
}

export class preferences extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOwnerId(): string;
  setOwnerId(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): preferences.AsObject;
  static toObject(includeInstance: boolean, msg: preferences): preferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: preferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): preferences;
  static deserializeBinaryFromReader(message: preferences, reader: jspb.BinaryReader): preferences;
}

export namespace preferences {
  export type AsObject = {
    id: string,
    ownerId: string,
    language: string,
  }
}

