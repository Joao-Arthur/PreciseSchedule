import NodeRSA from 'node-rsa';

function encryptRSA(text: string) {
    const publicKey = new NodeRSA(
        `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAhHjfi/OHsmRuc9tnyvkd
JJF9vKf8/deMsg1m8itzpyB4hCn65sVIL9hmJmlUUebzAGssFQTZOc4rnAZqmXYo
swodJiGXMt6oovozxuxae3dyE/4JG8LRKbIZGZn0FFJQ1snBuJToJbhKte0gxb00
nayunYhNfs8N03fC+DXY+58XXBRdUVBfmmxNIjn+YEEPPjKMn4Cay68NmMYbHik4
vzwhwjjeDCXwDX8xYhPxMgEdg79l8nsClL1BNCUEwYiTfkS+U/3InrIvuvXnkd3d
mDtY1NG3PFljFa0T57yKuapi2+mA78O1Y2rab0nGOLJdWFHDgLq3gIV3oih+cBEk
4K7yhpdSChiS+2nsBlRADErt6IQtYQQqUXlcQL2CNoCSX8LyysehyxEmMt7Sj4UV
+HrbjcwvaUq2gIkxHtnqD1h/BKdcaPl79WkTF3HNkqrcnPS+0sGXJsr5wCna5wAq
jskfR8loZPEIVlLS5ysRuSe/3rSTdiYUkZbNgKGvaxZ9zBoUxtwMTOhTl1QoZ2W+
lRZYX+hEk38sYtxs1CcTI9J67FFP4+ZMbORZx41ehYaEXMxFXiNdXC/7JKkTtbXl
ExnaIyw9WMVb3qG6uQy62PAAhSzA4acaqAW3i0KeCDCddWuJrd/KmNU3QCEaXxDX
NjsOcBln9aaHTYn2u0bF7BECAwEAAQ==
-----END PUBLIC KEY-----`,
        'pkcs8-public-pem'
    );
    return publicKey.encrypt(text, 'base64');
}

const Cryptography = {
    encryptRSA
};

export default Cryptography;
