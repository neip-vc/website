export default function handler(req, res) {
  const html = process.env.ANNA_HTML;
  if (!html) return res.status(404).end('Not found');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(html);
}
