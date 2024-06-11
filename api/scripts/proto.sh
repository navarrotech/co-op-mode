#!/bin/bash

# Constants
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
OUT_DIR="/app/src/lib/protobuf"

mkdir -p ${OUT_DIR}

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    schema.proto

# cp ${OUT_DIR}/schema_pb.js ${OUT_DIR}/schema_pb.cjs

# Find "goog.object.extend(exports, proto);" and replace with:
# "export default proto;"
# sed -i 's/goog.object.extend(exports, proto);/export default proto;/g' ${OUT_DIR}/schema_pb.js