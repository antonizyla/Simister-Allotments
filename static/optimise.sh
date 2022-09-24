#!/bin/bash

set -o noglob
IFS=$'\n'

images=$(find ./images -type f -name *.png -o -name *.jpg)

for img in $images; do
  avif_out=$img.avif
  webp_out=$img.webp

  if [ $img -nt $avif_out ]; then
    avifenc --speed 0 --min 25 --max 35 $img $avif_out
  fi

  if [ $img -nt $webp_out ]; then
    cwebp $img -o $webp_out
  fi
done