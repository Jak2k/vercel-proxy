import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.json({
    query: {...req.query, match: undefined},
    body: req.body,
    url: req.query.match
  })
}