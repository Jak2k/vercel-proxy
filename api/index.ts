import type { VercelRequest, VercelResponse } from '@vercel/node';
import { get } from '@vercel/edge-config';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const response = await fetch(get("host", "https://example.com")+req.query.match);
  const data = await response.text()

  return res.json({
    query: {...req.query, match: undefined},
    body: req.body,
    url: req.query.match|| "/",
    data
  })
}