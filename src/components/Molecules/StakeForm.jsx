import { useEffect, useState } from "react";
import { erc20ABI, useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useToken, useWaitForTransaction } from "wagmi";
import stakingABI from '../../utils/abi/StakingABI.json'


export const StakeForm = () => {

    const { address: msgSender } = useAccount();

    const contractAddress = "0xccF6772F52D007E082bF4A01757C4091F5f4dD92";

    const [_contractAddress, _setContractAddress] = useState(null);
    const [tokenAmount, setTokenAmount] = useState(null);
    const [_allowance, _setAllowance] = useState(null);
    const [tokenWaitData, setTokenWaitData] = useState("");
    const [approveWaitData, setApproveWaitData] = useState("");

    useContractRead({
        address: _contractAddress,
        abi: erc20ABI,
        functionName: 'allowance',
        args: [msgSender, contractAddress],
        watch: true,
        onSuccess(data) {
            _setAllowance(Number(data))
        }
    })

    const { data: tokenData, isError: tokenDataError } = useToken({
        address: _contractAddress,
    })


    const { config: approveConfig, error: approveError, isError: isApproveError } = usePrepareContractWrite({
        address: _contractAddress,
        abi: erc20ABI,
        functionName: "approve",
        args: [
            contractAddress, tokenAmount
        ],
    });

    const { config: stakeConfig } = usePrepareContractWrite({
        address: contractAddress,
        abi: stakingABI,
        functionName: "StakeToken",
        args: [
            _contractAddress, tokenAmount
        ],
    });
    const { data: stakeTokenData, write: stakeToken } = useContractWrite(stakeConfig)

    const { data: approveTokenData, write: approve } = useContractWrite(approveConfig)

    const { data: approveStakeWaitData, isError: stakeTokenWaitError, isLoading: stakeTokenIsLoading } = useWaitForTransaction({
        hash: stakeTokenData?.hash,
        onSuccess(data) {
            setTokenWaitData(data);
        }
    },
    )
    const { data: approveTokenWaitData, isError: approveTokenWaitError, isLoading: approveTokenIsLoading } = useWaitForTransaction({
        hash: approveTokenData?.hash,
        onSuccess(data) {
            setApproveWaitData(data);
            // stakeToken?.();
            handleSubmit();
        }
    })




    const handleSubmit = (e) => {
        e.preventDefault()
        stakeToken?.()
    }

    const handleApprove = (e) => {
        e.preventDefault()
        approve?.()
    }


    return (
        <div>
            <form className="relative flex flex-col mt-4 px-8 py-8 m-auto bg-zinc-50 shadow-2xl shadow-zinc-200 rounded-lg ring-1 ring-zinc-200">
                <div className="">
                    <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"><svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1"><defs><pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect><svg x="50%" y="16" class="overflow-visible"><rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect><rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect></svg></svg></div>
                </div>

                <h1 className="text-2xl text-center font-bold mb-8"> Stake Token </h1>
                {/* <span>{ _allowance }</span> */}
                <div className="mb-8">
                    <div className="flex flex-col gap-4">



                        <div className="flex flex-col gap-2">
                            <label
                                className=" text-sm">Token Contract Address</label>
                            <input
                                type="text"
                                placeholder="Token Contract Address"
                                onChange={(e) => _setContractAddress(e.target.value)}
                                className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className=" text-sm">Amount</label>
                            <div className="flex gap-4">
                                <input
                                    type="number"
                                    placeholder="Amount"
                                    onChange={(e) => setTokenAmount(Number(e.target.value))}
                                    className=" flex-grow shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                                />
                                {tokenData &&
                                    <div className="flex p-2 px-4 align-middle items-center  ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50">
                                        <p className="text-sm font-semibold text-zinc-800">{tokenData.symbol}</p>
                                    </div>
                                }
                            </div>
                        </div>


                    </div>
                </div>
                <button
                    disabled={tokenDataError}
                    onClick={_allowance >= tokenAmount ? handleSubmit : handleApprove}
                    type="submit"
                    className={`w-full bg-zinc-800 text-white rounded-md p-2 hover:bg-zinc-900 z-50 ${tokenDataError ? "bg-slate-400 hover:bg-slate-400 text-slate-900" : ""}`}>{_allowance >= tokenAmount ? "Stake Token" : "Approve Token"}
                </button>
            </form>
            {approveWaitData || tokenWaitData &&
                <div className='flex flex-col gap-4 p-4 col-span-1 mt-4 m-auto bg-zinc-50 shadow-2xl shadow-zinc-200 rounded-lg ring-1 ring-zinc-200 '>

                    {approveWaitData &&
                        <div className=' p-2 ring-1 ring-zinc-200 bg-white  rounded-lg'>
                            {approveWaitData}
                        </div>
                    }
                    {tokenWaitData &&
                        <div className=' p-2 ring-1 ring-zinc-200 bg-white  rounded-lg'>
                            {tokenWaitData}
                        </div>
                    }
                </div>
            }
        </div>

    )
}