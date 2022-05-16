import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(
  method: "GET" | "POST" | "DELETE", 
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  // return 되는 함수가 nextJS가 실행할 함수
  return async function(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== method) {
      return res.status(405).end();
    }
    try {
      await fn(req, res);
    } catch(error) {
      console.log(error);
      return res.status(500).json({error});
    }
  }
}