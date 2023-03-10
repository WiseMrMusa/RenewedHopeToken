import React, { useState, useContext, Suspense } from 'react'
import { ContractContext } from '..';
import StakingABI from '../utils/abi/StakingABI.json'
import { useContractRead } from 'wagmi';
import { DisplayCard } from '../components/Molecules/DisplayCard';
import { Link } from 'react-router-dom';
import { Home } from './Home';
import { StakeForm } from '../components/Molecules/StakeForm';
import BGStyle from '../components/Pattern/BGStyle';


export const Portfolio = () => {
    const contract = useContext(ContractContext);

    const [tokenContractAddrs, setTokenContractAddrs] = useState(["0x5886F287C4473Ce13c58474a261b31c881f8635d"]);

    useContractRead({
        address: contract,
        abi: StakingABI,
        functionName: 'getStakeHolders',
        onSuccess(data) {
            setTokenContractAddrs(data)
        }
    })

    return (

        <main className=" mt-10 w-5/6">
            <BGStyle />
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="grid grid-cols-3 gap-8 mt-10">
                <Suspense fallback={<StakeForm />}>
                    {tokenContractAddrs?.map((e, i) => {
                        return (
                            <Link key={i} to={`/dashboard/${e}`}>
                                {/* {e} */}
                                <DisplayCard key={i} contractAddress={e} />
                            </Link>


                        )
                    })}
                </Suspense>


            </div>
        </main>

    )
}
