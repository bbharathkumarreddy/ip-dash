# IP-Dash

[![npm version](https://badge.fury.io/js/ip-dash.svg)](https://www.npmjs.com/package/ip-dash)

IP address utility tool for `IPv4` and `IPv6`

## Installation

```shell
npm install ip-dash
```

https://www.npmjs.com/package/ip-dash

## Features

- Basic IP address validation and find the version of the IP address.
- Find the scope of IP address - Public, Private or Loopback.
- Get public IP address of the client in top matched order from `req`.
- Convert both IPv4 and IPv6 to IP decimal format.

## Usage

```js
const ipDash = require('ip-dash');

// Checks valid ip address and returns the ip version 4 or 6 and 0 if invalid ip.
ipDash.isIP('35.89.146.200');

// Checks ip address is ip address version 4 and returns true or false.
ipDash.isIPv4('35.89.146.200');

// Checks ip address is ip address version 6 and returns true or false.
ipDash.isIPv6('07b5:92e5:6f12:0315:6259:34bd:93ca:bbfd');

// Checks ip address is a private ip address and returns true or false.
ipDash.isPrivateIP('127.0.0.1');

// Checks ip address is a private ip address and returns true or false.
ipDash.isPublicIP('35.89.146.200');

// Checks ip address is a private ip address and returns true or false.
ipDash.isLoopbackIP('127.0.0.1');

// Return the ip address of user from request in the order of X-Client-IP,
// X-Forwarded-For, CF-Connecting-IP, connection, socket, info remoteAddresses.
ipDash.getClientIP(req);

// Returns the private ip address of the current running process.
ipDash.getMyPrivateIP(); // Returns 192.168.0.4

// Converts IP address to IP decimal.
ipDash.ipToDecimal('35.89.146.200'); // Returns 593072840

// Converts IP address to IP decimal.
ipDash.ipToDecimal('07b5:92e5:6f12:0315:6259:34bd:93ca:bbfd'); // Returns 10247381111315175137996068065712454653
```

## Maintainers

- B Bharath Kumar - [@bbharathkumarreddy](https://github.com/bbharathkumarreddy/)

Contributors are welcome

## License

The MIT License (MIT) - 2022
