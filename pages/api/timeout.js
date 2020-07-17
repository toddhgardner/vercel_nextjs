export default (req, res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res.status(503).json({ text: 'fuck' });
      resolve();
    }, 10000);
  })



  // return new Promise((res) => {
  //   setTimeout(() => {

  //     // var buf = new Buffer(35);
  //     // buf.write('R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=', 'base64');
  //     // res.end(buf, "image/gif");
  //     res();
  //   }, 1);
  // })

}