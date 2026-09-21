'use strict';
const view = location.hash === '#accounts' ? '#accounts' : '#overview';
location.replace('https://edocf.wznln.com:8443/dashboard/' + view);
