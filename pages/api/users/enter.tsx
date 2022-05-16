import client from "@libs/server/client";
import withHandler from "@libs/server/withHadler";
import { NextApiRequest, NextApiResponse,  } from "next";

async function handler(
  req:NextApiRequest, 
  res:NextApiResponse 
) {
  // withHandler가 아래 함수를 대신 실행하게 됨
  /* if(req.method !== "POST") {
    res.status(401).end();
  } */
  console.log(req.body);
  return res.status(200).end();
}

export default withHandler("POST", handler);