#!/bin/bash
set -e

# Ensure a version is set.
if [[ -z $1 ]]; then
  echo "Enter version number: "
  read -r VERSION
else
  VERSION=$1
fi

# Confirm the release
read -p "Releasing LOCAL $VERSION - are you sure? (y/n) " -n 1 -r
echo
if ! [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Abandoning."
  exit 0
fi
echo "Releasing LOCAL $VERSION ..."

# Execute tests
if [[ -z $SKIP_TESTS ]]; then
  npm run test
fi

# Build
npm run build

# Generate changelog
npm run build:changelog $VERSION

git add "changelog/RELEASE_NOTE_$VERSION.md"
git commit -m "chore: add changelog v$VERSION"

# Publish in the local registry
lerna publish --registry="http://localhost:4873" -m "build: release v$VERSION"

# Clean the build
npm run clean
