//Copyright © 2024 Navarrotech.
// @ts-nocheck Copyright © 2024 Navarrotech

// THIS FILE IS AUTO COPIED FROM THE ROOT
// AND IS COPIED TO API & FRONTEND & ANALYTICS

// Types won't work in this specific file, but they work after copied to other places
import * as ProtoBufLibrary from './schema'

const {
  // Pull out enums manually for typescript
  // If a new enum is added, it must be manually added to the generated types
  Cannabis,
  Drinks,
  Education,
  FamilyPlans,
  Gender,
  HeightUnit,
  Personality,
  Platforms,
  Relationship,
  Seeking,
  Smokes,
  Sexuality,
  Workout,
  EditHistory,
  ChangeType,

  // After we pulled out all the enums above, all we have is a bunch of tables.
  // We do this for typescript safety and automated typing generation
  ...ProtoBufs
} = ProtoBufLibrary

export default ProtoBufs
