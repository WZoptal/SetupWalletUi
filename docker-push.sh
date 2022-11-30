#!/bin/zsh

version=$(jq '.version' package.json)

echo "$version"

