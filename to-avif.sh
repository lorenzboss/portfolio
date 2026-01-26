#!/bin/bash

[ -f "$1" ] || { echo "Error: file not found"; exit 1; }
[[ "$1" =~ \.(png|jpe?g)$ ]] || { echo "Error: only png, jpg or jpeg files are supported"; exit 1; }

avifenc -q 90 --depth 10 --yuv 444 "$1" "${1%.*}.avif" || {
  echo "Error: avifenc failed"
  exit 1
}
