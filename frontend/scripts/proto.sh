#!/bin/bash

# Run me in WSL!
# Outdated: We don't use google protobuf anymore!

# Generate the proto files
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
OUT_DIR="./src/modules/protobuf/lib/"

mkdir -p ${OUT_DIR}

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    --proto_path="./src/modules/protobuf/" \
    schema.proto
