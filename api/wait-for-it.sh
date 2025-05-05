#!/bin/sh

# wait-for-it.sh
# Usage: ./wait-for-it.sh host:port -- your_command

hostport="$1"
shift

host="$(echo $hostport | cut -d: -f1)"
port="$(echo $hostport | cut -d: -f2)"

echo "Waiting for $host:$port..."

while ! nc -z $host $port; do
  sleep 1
done

echo "$host:$port is available. Starting application..."

exec "$@"
