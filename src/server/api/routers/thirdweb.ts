import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

// Create a Thirdweb SDK instance with your private key and network
// Remember to change the network to "mainnet" when deploying to production
const sdk = ThirdwebSDK.fromPrivateKey(
  process.env.METAMASK_PRIVATE_KEY as string,
  "mumbai"
);
// Get the contract instance of the NFT contract you want to interact with
// Remember to change the address to the address of your NFT contract
const contract = await sdk.getContract(
  "0x2FD21cf609Ff9C343542dC4b5f916AC2c73c5E9F"
);

export const thirdwebRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  lazyMintProperty: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
        deployer: z.string(),
        type: z.number(),
        price: z.number(),
        fee: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      // Custom metadata of the NFTs to create
      const metadata = [
        {
          name: input.name,
          description: input.description,
          image: input.image,
          deployer: input.deployer,
          type:  input.type,
        },
      ];
      try {
        console.log("Creating NFT in DB");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        await ctx.prisma.wesetproperties_1155_test.create({
          data: {
            name: input.name,
            deployer: input.deployer,
            main_image: input.image,
            fractional_type: input.type,
            price: input.price,
            fee: input.fee,
            metadata: JSON.stringify(metadata),
          },
        });
      } catch (error) {
        console.log(error);
      }

      const results = await contract.erc1155.lazyMint(metadata); // uploads and creates the NFTs on chain
      return results;
    }),
});