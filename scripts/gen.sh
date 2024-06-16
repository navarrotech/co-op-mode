#!/bin/bash

cd ./api && yarn install && yarn run proto
cd ./frontend && yarn install && yarn run proto
