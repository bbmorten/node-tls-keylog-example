# SSL Key Logging Example with Node.js

This project demonstrates how to log SSL keys with Node.js. The keys are used to decrypt network traffic captured with Wireshark.

## Prerequisites

- Node.js
- npm
- Wireshark
- Clone the repository

```shell
git clone https://github.com/bbmorten/node-tls-keylog-example.git
cd node-tls-keylog-example
```

## Installation

Run the following command to install the dependencies:

```shell
npm install
```

## Usage

start wireshark and capture network traffic on the interface you are using to reach the Internet. Use the capture filter `tcp port 443` to filter out HTTP traffic.

Use the display filter `tls.handshake.extensions_server_name in {"swapi.dev","jsonplaceholder.typicode.com"}`to filter out HTTPS traffic.



Run the following command to start the application:

```shell
NODE_OPTIONS="--tls-keylog=./sslkeys.log" node app > console.log
```

SSL keys are logged to `sslkeys.log` in the current working directory.

You'll see three Client Hello packets each of them belonging to a different TCP stream in the Wireshark window. 

Find the stream ids (assuming 24,25,26) from the TCP headers and use the following display filter to filter out the packets from the stream:

`tcp.stream in {24,25,26}`

Do a File -> Export Specified Packets and save the packets to a file.

Open the file in Wireshark and you should see the decrypted packets after you reference the `sslkeys.log` file in the TLS protocol preferences.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```