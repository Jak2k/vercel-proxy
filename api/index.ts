import type { VercelRequest, VercelResponse } from "@vercel/node";
import { get } from "@vercel/edge-config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const baseUrl = (await get("host")) || ("https://example.com" as string);

  const headers = new Headers();
  headers.set("original-host", req.headers.host || "vercel.app");

  const response = await fetch(baseUrl + (req.query.match as string), {
    method: req.method,
    body: req.method === "GET" ? undefined : req.body,
    // Pass original website as header
    headers,
  });
  const data = await response.text();

  if (req.query.debug === "true") {
    return res.json({
      query: { ...req.query, match: undefined },
      body: req.body,
      url: req.query.match || "/",
      data,
    });
  } else {
    res.setHeader("content-type", response.headers.get("content-type") || "");

    const supportedHeaders = (await get("headers")) as string[] | undefined;
    if (supportedHeaders) {
      for (const header of supportedHeaders) {
        const value = response.headers.get(header);
        if (value) {
          res.setHeader(header, value);
        }
      }
    }

    return res.send(data);
  }
}
