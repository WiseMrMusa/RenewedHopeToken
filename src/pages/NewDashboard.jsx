import React, { useContext } from 'react'
import { ContractContext } from '..';
import StakingABI from '../utils/abi/StakingABI.json'
import { useContractRead } from 'wagmi';
import { DisplayCard } from '../components/Molecules/DisplayCard';
import { Link } from 'react-router-dom';


export const NewDashboard = () => {
  const contract = useContext(ContractContext);

  const { data: tokenContractAddrs } = useContractRead({
    address: contract,
    abi: StakingABI,
    functionName: 'getStakeTokens',
  })


  return (

    <main className=" mt-10 w-5/6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-8 mt-10">
        {tokenContractAddrs.map((e, i) => {
          return (
            <Link key={i}  to={`/dashboard/${e}`}>
              <DisplayCard key={i} contractAddress={e} />
            </Link>
          )
        })}
      </div>
    </main>

  )
}
