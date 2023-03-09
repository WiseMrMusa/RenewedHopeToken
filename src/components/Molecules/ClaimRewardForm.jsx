    import { useEffect, useState } from "react";
import { useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
    import stakingABI from '../../utils/abi/StakingABI.json'


export const ClaimRewardForm = () => {

    const contractAddress = "0xccF6772F52D007E082bF4A01757C4091F5f4dD92";

        const [_contractAddress, _setContractAddress] = useState(null);
        const [tokenAmount, setTokenAmount] = useState(null);


        const { config } = usePrepareContractWrite({
            address: contractAddress,
            abi: stakingABI,
            functionName: "ClaimReward",
            args: [
                _contractAddress,tokenAmount
            ],
        });

        const { data: stakeTokenData, isLoading: stakeTokenIsLoading, write: stakeToken } = useContractWrite(config)




        // const { data: ballotName, isLoading: ballotIsLoading, isError: ballotIsError } = useContractRead({
        //     address: "0x789b976e837d7c0fae59d4e7cbdc86a56364cb68",
        //     abi: Ballot_Abi,
        //     functionName: 'name'
        // })




        const handleSubmit = (e) => {
            e.preventDefault()

            setTimeout(() => {
                // console.log({ name, period, tokenPerVote, contenders1, contenders2, contenders3 })

                stakeToken?.()
            }, 1000)
        }


        // 0x789b976e837d7c0fae59d4e7cbdc86a56364cb68

        // useEffect(() => {
        //     if (voteFactoryData) {
        //         console.log(voteFactoryData);
        //     }
        // }, [voteFactoryData])
    
    return (

        <form onSubmit={handleSubmit} className="relative flex flex-col mt-4 px-8 py-8 w-1/2 m-auto bg-zinc-50 shadow-2xl shadow-zinc-200 rounded-lg ring-1 ring-zinc-200">
            <div className="">
                <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"><svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1"><defs><pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect><svg x="50%" y="16" class="overflow-visible"><rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect><rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect></svg></svg></div>
            </div>

            <h1 className="text-2xl text-center font-bold mb-8"> Claim Reward </h1>

            <div className="mb-8">
                <div className="flex flex-col gap-4">



                    <div className="flex flex-col gap-2">
                        <label
                            className=" text-sm">Claim Reward</label>
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
                        <input
                            type="number"
                            placeholder="Amount"
                            onChange={(e) => setTokenAmount(e.target.value)}
                            className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                        />
                    </div>

                </div>
            </div>

            <button type="submit" className="w-full bg-zinc-800 text-white rounded-md p-2 hover:bg-zinc-900">Stake Token</button>
        </form>
    )
            
    
}