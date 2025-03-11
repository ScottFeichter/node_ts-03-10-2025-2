import * as http from 'http';
import * as url from 'url';
import { myDateTime } from './myfirstmodule';

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse): void => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("The date and time are currently: " + myDateTime());
  res.write("<br>");
  res.write('Hello World!');
  res.write("<br>");
  res.write(req.url || "");

  const q: url.ParsedUrlQuery = url.parse(req.url || "", true).query;
  const txt: string = `${q.year || ''} ${q.month || ''}`;

  res.end(txt);
});

server.listen(8080, (): void => {
  console.log("Server is running on port 8080");
});

