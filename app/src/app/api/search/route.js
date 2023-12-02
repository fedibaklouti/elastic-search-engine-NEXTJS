import { NextResponse } from "next/server";
const { Client } = require("@elastic/elasticsearch");

const client = new Client({ node: "http://elasticsearch:9200" });

export const dynamic = "force-dynamic";

async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = decodeURIComponent(searchParams.get("query"));

    const { body } = await client.search(
      {
        index: "movies,books",
        query: {
          multi_match: {
            fields: [
              "text",
              "title",
              "subtitle",
              "categories",
              "description",
              "Series_Title",
              "Released_Year",
              "Overview",
            ],
            query,
            fuzziness: "AUTO",
          },
        },
        highlight: {
          order: "score",
          fields: {
            text: {},
            title: {},
            subtitle: {},
            categories: {},
            description: {},
            Series_Title: {},
            Released_Year: {},
            Overview: {},
          },
          pre_tags: ["<mark>"],
          post_tags: ["</mark>"],
        },
        explain: true,
        sort: [
          {
            _score: {
              order: "desc",
            },
          },
        ],
        size: 10,

        from: (parseInt(searchParams.get("from")) - 1) * 10 || 0,
      },
      { meta: true }
    );

    console.log("body", body);

    return NextResponse.json(
      {
        results: body.hits.hits,
        total: body.hits.total,
        duration: body.took,
        body,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Elasticsearch Error:", error);
    return NextResponse.error();
  }
}

export { GET };
