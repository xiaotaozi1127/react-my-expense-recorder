import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/expenses", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "1",
          title: "mock item",
          amount: "20",
          date: "2022-08-06",
        },
      ])
    );
  }),

  rest.post("http://localhost:8080/expense", async (req, res, ctx) => {
    let requestBody = await req.json();
    return res(ctx.status(201), ctx.json([requestBody]));
  }),
];
