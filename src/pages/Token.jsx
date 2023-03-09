import { useParams } from "react-router-dom"
import BGStyle from "../components/Pattern/BGStyle"
import { useState, useContext } from 'react'
import StakingABI from '../utils/abi/StakingABI.json'
import { ContractContext } from ".."
import { useContractRead, useContractReads, erc20ABI } from 'wagmi'

export const Token = () => {
    const { address } = useParams()
    const contract = useContext(ContractContext);

    const [tokenHolderAddrs, setTokenHolderAddrs] = useState(["0x5886F287C4473Ce13c58474a261b31c881f8635d"]);

    useContractRead({
        address: contract,
        abi: StakingABI,
        functionName: 'getStakersByTokens',
        args: [address],
        onSuccess(data) {
            setTokenHolderAddrs(data)
        }
    })

    const [tokenData, setTokenData] = useState([]);

    useContractReads({
        contracts: [
            {
                address: address,
                abi: erc20ABI,
                functionName: 'name'
            },
            {
                address: address,
                abi: erc20ABI,
                functionName: 'symbol'
            },
            // {
            //     address: address,
            //     abi: erc20ABI,
            //     functionName: 'balanceOf',
            //     args: [contract]
            // }
        ],
        onSuccess(data) {
            setTokenData(data)
        }
    })


    return (
        <main className="mt-10 ">
            <BGStyle />
            <div className="flex justify-between w-5/6 items-end ml-3 mr-20 p-4">
                <h2 className="text-3xl font-semibold">
                    {tokenData[0]}
                    <span className="text-sm text-red-600 uppercase ml-4">{tokenData[1]}</span>
                </h2>
                <span className="text-sm text-teal-900 h-auto bg-slate-100/30 backdrop-blur p-2 px-4 rounded-full ring-1 ring-teal-800">
                    {address}
                </span>
            </div>

            <table class="table-auto mt-20 border-collapse w-5/6 text-sm">
                <thead>
                    <tr>
                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">Address</th>
                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">Amount</th>
                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">Reward</th>
                    </tr>
                </thead>

                {tokenHolderAddrs.map((e, i) => {
                    return (
                        <tbody
                            key={i}
                            className="bg-white"
                        >
                            <tr>
                                <td className="border-b border-slate-100  p-4 pl-8 text-slate-600 ">{e}</td>
                                <td className="border-b border-slate-100  p-4 pl-8 text-slate-600 ">Malcolm Lockyer</td>
                                <td className="border-b border-slate-100  p-4 pl-8 text-slate-600 ">1961</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </main>
    )
}