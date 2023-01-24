// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TonClient } from "@eversdk/core";
import type { NextApiRequest, NextApiResponse } from "next";

const { libNode } = require("@eversdk/lib-node");
type Data = {
  account: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let account;
  // ! set binary bridge
  (() => TonClient.useBinaryLibrary(libNode))();

  const client = new TonClient({
    network: {
      endpoints: ["http://localhost"],
    },
  });
  async function getAccount(address: string) {
    // `boc` or bag of cells - native blockchain data layout. Account's boc contains full account state (code and data) that
    // we will  need to execute get methods.
    const query = `
          query {
            blockchain {
              account(
                address: "${address}"
              ) {
                 info {
                  balance(format: DEC)
                  boc
                }
              }
            }
          }`;

    const { result } = await client.net.query({ query });
    const info = result.data.blockchain.account.info;
    return info;
  }
  try {
    account = await getAccount(
      "0:d5f5cfc4b52d2eb1bd9d3a8e51707872c7ce0c174facddd0e06ae5ffd17d2fcd"
    );
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ account: account });
}
