#!/bin/bash

cd  ./api       && yarn install && yarn run proto
cd ../analytics && yarn install && yarn run proto
cd ../frontend  && yarn install && yarn run proto
cd ../gateway   && yarn install && yarn run proto
cd ..

cp ProtoTypes.ts ./api/src/lib/generated/ProtoTypes.ts
cp ProtoTypes.ts ./analytics/src/lib/generated/ProtoTypes.ts
cp ProtoTypes.ts ./frontend/src/modules/protobuf/ProtoTypes.ts
cp ProtoTypes.ts ./gateway/src/lib/generated/ProtoTypes.ts
