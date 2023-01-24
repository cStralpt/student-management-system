import React from "react";

import {
  Address,
  ProviderRpcClient,
  TvmException,
  ContractMethod,
  Contract,
} from "everscale-inpage-provider";
const ever = new ProviderRpcClient();

// Interact with Contract
const ctr = new Contract(
  new ProviderRpcClient(),
  {
    "ABI version": 2,
    version: "2.3",
    header: ["time", "expire"],
    functions: [
      {
        name: "constructor",
        inputs: [],
        outputs: [],
      },
      {
        name: "renderHelloWorld",
        inputs: [],
        outputs: [{ name: "value0", type: "string" }],
      },
      {
        name: "name",
        inputs: [{ name: "answerId", type: "uint32" }],
        outputs: [{ name: "value0", type: "string" }],
      },
      {
        name: "symbol",
        inputs: [{ name: "answerId", type: "uint32" }],
        outputs: [{ name: "value0", type: "string" }],
      },
      {
        name: "decimals",
        inputs: [{ name: "answerId", type: "uint32" }],
        outputs: [{ name: "value0", type: "uint8" }],
      },
      {
        name: "totalSupply",
        inputs: [{ name: "answerId", type: "uint32" }],
        outputs: [{ name: "value0", type: "uint128" }],
      },
      {
        name: "acceptBurn",
        id: "0x192B51B1",
        inputs: [{ name: "_value", type: "uint128" }],
        outputs: [],
      },
      {
        name: "sendValue",
        inputs: [
          { name: "dest", type: "address" },
          { name: "amount", type: "uint128" },
          { name: "bounce", type: "bool" },
        ],
        outputs: [],
      },
      {
        name: "_tokenName",
        inputs: [],
        outputs: [{ name: "_tokenName", type: "string" }],
      },
    ],
    data: [],
    events: [],
    fields: [
      { name: "_pubkey", type: "uint256" },
      { name: "_timestamp", type: "uint64" },
      { name: "_constructorFlag", type: "bool" },
      { name: "_tokenName", type: "string" },
    ],
  },
  new Address(
    "0:607f9edbbc98997a2ee47eec4a2cd147bf424d6535982b8e98c17dd4864dbe9a"
  )
);
const Test = () => {
    (async () => {
        try {
            if (!(await ever.hasProvider())) {
                throw new Error("Extension is not installed");
            }
            console.log(await ctr.);
    } catch (error) {
      console.log(error);
    }
  })();
  return <div>Test</div>;
};

export default Test;
