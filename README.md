# Project Notes

```shell
NODE_OPTIONS="--tls-keylog=./sslkeys.log" node app > console.log
```

Fetch and Axios requests' SSL keys are logged. Network traffic were captured with Wireshark and decrypted with the keys.
