# SSL Key Logging Example with Node.js

This project demonstrates how to log SSL keys with Node.js. The keys are used to decrypt network traffic captured with Wireshark.

## Prerequisites

- Node.js
- npm
- Wireshark
- Clone the repository

```shell
git clone https://github.com/bbmorten/node-tls-keylog-example.git
cd node-tls-keylog-example
```

## Installation

Run the following command to install the dependencies:

```shell
npm install
```

## Usage

Run the following command to start the application:

```shell
NODE_OPTIONS="--tls-keylog=./sslkeys.log" node app > console.log
```

Fetch and Axios requests' SSL keys are logged. Network traffic were captured with Wireshark and decrypted with the keys.
