// Copyright © 2024 Navarrotech

import * as ProtoBufLibrary from "./schema"

const {
    // Pull out enums manually for typescript
    // eslint-disable-next-line
    Cannabis, Drinks, Education, FamilyPlans, Gender, HeightUnit, Personality, Platforms, Relationship, Seeking, Smokes, Sexuality, Workout, 
    ...ProtoBufs
} = ProtoBufLibrary

export {
    ProtoBufs
}

export type ProtoBufMessages = keyof typeof ProtoBufs

export default ProtoBufs
