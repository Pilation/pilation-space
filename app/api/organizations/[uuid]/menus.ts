// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Returns a menu i.e The CONTENT of a Taxonomy.  Versus the schema i.e how to make changes to it.

// Get Menu Content.

// {OrgId}/Menus/{1}/

import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uuid } = req.query;
  res.status(200).json(`Message: I'm ${uuid} menus`);
}
