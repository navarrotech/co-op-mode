# Copyright © 2024 Navarrotech.

# Use the official Rust image as a parent image
FROM rust:1.80.1-slim-bookworm

RUN apt-get update && \
    apt-get install -y \
    pkg-config \
    libssl-dev \
    protobuf-compiler

# Set the working directory in the container
WORKDIR /app

# Copy the Cargo.toml and Cargo.lock files
COPY ./api_v2/ .

# Copy the proto files
COPY schema.proto /app/schema.proto

# Install dependencies
RUN cargo build --release

# Set the startup command
CMD ["./target/release/api_v2"]