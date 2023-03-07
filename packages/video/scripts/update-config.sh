#!/bin/bash

echo "Start: $1"
echo "End: $2"

FILE='props.json'
TMP_FILE="$FILE.tmp"
jq --arg date "$2" --arg start "$1" '.start=$start | .end=$date' $FILE > "$TMP_FILE"

mv "$TMP_FILE" $FILE
