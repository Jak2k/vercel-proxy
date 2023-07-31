import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.
  return res.json({
    query: req.query,
    body: req.body,
    req: req
  })
}