import { getContract, getProvider, readContract } from '@wagmi/core';
import React, { useEffect, useState } from 'react'
// import { ethers } from 'ethers'
import { erc20ABI } from 'wagmi';

export const Ethers = () => {
    const [data, setData] = useState("");

    // const provider = getProvider({ chainId: 5 });
    // const contract = getContract("0xccF6772F52D007E082bF4A01757C4091F5f4dD92",
    //     erc20ABI, provider)
    // console.log(contract)
    const musa = async () => {
        const data = await readContract({
                address: "0xccF6772F52D007E082bF4A01757C4091F5f4dD92",
                    abi: erc20ABI,
                    functionName: 'name',
        })
        
        setData(data)
    
    }
    useEffect(() => {
        musa()
    })
    console.log(data);

  return (
      <div>Ethers {data} </div>
  )
}
