#!/bin/sh
npx next build >/tmp/build.log 2>&1 || { tail -30 /tmp/build.log; exit 1; }
netstat -ano | grep ":3111" | grep LISTENING | awk '{print $5}' | sort -u | while read pid; do taskkill //F //PID $pid >/dev/null 2>&1; done
sleep 2
(npx next start -p 3111 >/tmp/next.log 2>&1 &)
for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  sleep 2
  [ "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3111/ 2>/dev/null)" = "200" ] && { echo up; exit 0; }
done
echo failed; tail -20 /tmp/next.log; exit 1
