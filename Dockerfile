From node:10-alpine

Run apk add --no-cache vim

Copy src /backend/src
Copy rData /backend/rData
Copy gmarket /frontend/gmarket

Copy start.sh /usr/local/bin/
Run chmod ugo+x /usr/local/bin/start.sh

Workdir /frontend/gmarket

Entrypoint [ "start.sh" ]
