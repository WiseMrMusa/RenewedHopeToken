import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import  './index.css' 
import { Home } from './pages/Home';
import { configureChains, createClient, WagmiConfig, chain } from 'wagmi';
import { sepolia, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { TokenDashboard } from './pages/TokenDashboard';
import { ConnectKitProvider, getDefaultClient } from "connectkit";

import { StakePool } from './pages/StakePool';
import { Dashboard } from './pages/Dashboard';
import { Token } from './pages/Token';
import { Portfolio } from './pages/Portfolio';
import { Ethers } from './pages/Ethers';
import { NewDashboard } from './pages/NewDashboard';
import { StakeForm } from './components/Molecules/StakeForm';

const chains = [goerli, sepolia];

const client = createClient(
  getDefaultClient({
    appName: "Wise Voting Platform",
    alchemyId: process.env.ALCHEMY_ID,
    chains,
  }),
);

export const App = () => {
  return (
    <WagmiConfig client={client}>
          <ConnectKitProvider
            chains={chains}
            mode='light'
            customTheme={{
              "--ck-overlay-backdrop-filter": "8px",
            }}
            options={{
              showBalance: true
            }}
          >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<StakeForm />} />
              <Route path="/token" element={<TokenDashboard />} />
              <Route path="/pool" element={<StakePool />} />
              <Route path="/dashboard" element={<NewDashboard />} />
              <Route path="/dashboard/:address" element={<Token />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}