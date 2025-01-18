#!/bin/bash

rm -rf dist .sanity

set -e

# Build website
pnpm build

# Build Sanity Studio
pnpm sanity build dist/client/studio -y
