// Copyright © 2024 Navarrotech

extern crate protobuf_codegen;

use std::path::PathBuf;

/// This is the main function for the build script.
/// It generates Rust code from Protocol Buffers definitions.
fn main() {
    println!("Starting Protobuf codegen");

    // Define possible paths for the schema.proto file
    let schema_paths = vec![
        // If not in a Docker container, the schema.proto file
        // is in parent of the api_v2 directory
        PathBuf::from("./schema.proto"),
        // If in a Docker container, the schema.proto file is in the /app directory
        PathBuf::from("/app/schema.proto"),
    ];

    // Find the first existing schema path
    let schema_path: PathBuf = schema_paths.into_iter()
        .find(|path| {
            println!("Checking path: {:?}", path);
            path.exists()
        })
        .expect("Could not find schema.proto file");

    println!("Full path: {:?}", schema_path.canonicalize().unwrap());

    // Use a hard-coded path for the output directory
    let out_dir = PathBuf::from("./target/protobuf");

    // Create the directory if it doesn't exist
    std::fs::create_dir_all(&out_dir).expect("Failed to create output directory");

    // Create a new Protobuf code generator
    protobuf_codegen::Codegen::new()
        // Set the output directory for generated code
        .out_dir(&out_dir)
        // Specify the input .proto file(s)
        .inputs(&[schema_path])
        // Set the include directory for .proto files
        .includes(&["."])
        // Run the code generation
        .run()
        // If code generation fails, panic with an error message
        .expect("Protobuf codegen failed");

    println!("Protobuf codegen succeeded");
}
