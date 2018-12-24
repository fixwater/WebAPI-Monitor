import Request from "request";

export function getLength(url) {
  return new Promise((resolve, reject) => {
    Request(url, (err, _res, body) => {
      if (err) {
        reject(err);
      }

      resolve(body.length);
    });
  });
}
