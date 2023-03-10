import { type AppType } from "next/app";
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { api } from "~/utils/api";

import "~/styles/globals.css";
import NavBar from "~/components/nav-bar";
import '@rainbow-me/rainbowkit/styles.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { chains, provider } = configureChains([polygon, mainnet], [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }),
  publicProvider()]);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const { connectors } = getDefaultWallets({
  appName: 'Weset Admin',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  connectors,
  provider
})


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} coolMode>
          <NavBar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
};

export default api.withTRPC(MyApp);
