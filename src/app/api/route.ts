import { NextResponse } from "next/server";
//DOCS: https://nextjs.org/docs/api-routes/introduction

//TODO: add data
export async function GET(request: Request) {
  const data = await fetch(
    "https://www.ag-grid.com/example-assets/row-data.json"
  ).then((result) => result.json());
  return NextResponse.json(data);
}
