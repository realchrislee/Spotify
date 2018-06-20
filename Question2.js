function decodeString(s) {
  let startIdx = s.indexOf('[');
  if(startIdx < 0) return s;

  let encoded = s.slice(startIdx+1, -1);
  let decoding = s.slice(0, startIdx);
  let k = parseInt(decoding[decoding.search(/\d/)]);
  let decoded = decoding.replace(/\d/, '');
  
  for(let i = k; k > 0; k--) {
    decoded += decodeString(encoded);
  }
  return decoded;
}