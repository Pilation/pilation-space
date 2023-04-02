// A menu is a type of taxonomy.
// It is a hierarchy
// A taxonomy has queries, sequence of pages and folders, a structure and the queries it needs.
// {OrgId}/Taxonomies/{1}/Folders/{1}

// Taxonomy Schema
// Content of a Taxonomy

// Create Folder

import type { NextApiRequest, NextApiResponse } from 'next'

type SearchRequest = {
  keywords: string
  page: number
  pageSize: number
}

type SearchResponse = {
  pages: string[]
  totalCount: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse<SearchResponse>) {
  // Search Cosmos DB (at the moment)

  // Restrict the query to the users organisation

  // Send back results

  const dummyData = {
    pages: ['8c33a0d0-09c2-428a-8efb-8e227763fa6b', 'aa7039d0-e1a9-438c-ac63-edc8dd2159c3'],
    totalCount: 2,
  }

  res.status(200).json(dummyData as SearchResponse)
}
