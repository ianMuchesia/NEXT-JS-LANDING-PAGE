import fs from 'fs';

export default function handler(req:any, res:any) {
  const verificationFilePath = './public/googleaed096beea148fc0.html';
  
  fs.readFile(verificationFilePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).end();
      return;
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
}
