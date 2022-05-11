const ipDash = exports;

const bigInt = require('big-integer');
const nodeIp = require('ip');
const requestIp = require('request-ip');
const net = require('net');

/**
 * Returns randomly generated ip version 4 addresses.
 * @returns {string} ip
 */
ipDash.getRandomIP = function () {
  return `${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255)}.${Math.floor(
    Math.random() * 255
  )}.${Math.floor(Math.random() * 255)}`;
};

/**
 * Tests if input is an IP address.
 * @param {string} ip
 * @returns {number} `4` for IP version 4 addresses returns `6` for IP version 6 and `0` for invalid strings
 */
ipDash.isIP = function (ip) {
  return net.isIP(ip);
};

/**
 * Tests if input is an IP address version 4.
 * @param {string} ip
 * @returns {boolean}
 */
ipDash.isIPv4 = function (ip) {
  return net.isIPv4(ip);
};
/**
 * Tests if input is an IP address version 6.
 * @param {string} ip
 * @returns {boolean}
 */
ipDash.isIPv6 = function (ip) {
  return net.isIPv6(ip);
};

/**
 * Tests if input is an IP address is a private ip address.
 * @param {string} ip
 * @returns {boolean}
 */
ipDash.isPrivateIP = function (ip) {
  return nodeIp.isPrivate(ip);
};

/**
 * Tests if input is an IP address is a public ip address.
 * @param {string} ip
 * @returns {boolean}
 */
ipDash.isPublicIP = function (ip) {
  return !nodeIp.isPrivate(ip);
};

/**
 * Tests if input is an IP address is a loopback ip address.
 * @param {string} ip
 * @returns {boolean}
 */
ipDash.isLoopbackIP = function (ip) {
  return nodeIp.isLoopback(ip);
};

/**
 * Returns the private ip address of the current running process.
 * @param {string} ip
 * @returns {string} ip
 */
ipDash.getMyPrivateIP = function () {
  nodeIp.address();
};

/**
 * Returns the ip address of user from request in the order of X-Client-IP,
 * X-Forwarded-For, CF-Connecting-IP, connection, socket, info remoteAddresses.
 * @param {string} ip
 * @returns {string} ip
 */
ipDash.getClientIP = function (req) {
  requestIp.getClientIp(req);
};

/**
 * Returns the decimal represetation ip address given in version 4 or version 6
 * @param {string} ip
 * @returns {number} ip-decimal
 */
ipDash.ipToDecimal = function (ip) {
  if (net.isIPv4(ip)) {
    let iplen = 0;
    ip.split('.').forEach((it) => {
      iplen <<= 8;
      iplen += parseInt(it);
    });
    return iplen >>> 0;
  } else if (net.isIPv6(ip)) {
    const parts = [];
    ip.split(':').forEach(function (it) {
      let bin = parseInt(it, 16).toString(2);
      while (bin.length < 16) {
        bin = '0' + bin;
      }
      parts.push(bin);
    });
    return bigInt(parts.join(''), 2).toString();
  }

  return 0;
};
