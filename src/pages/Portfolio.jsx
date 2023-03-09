import BGStyle from "../components/Pattern/BGStyle"
import { useState , useEffect } from 'react'
import { useAccount, useContractRead } from "wagmi";
import StakingABI from "../utils/abi/StakingABI.json"

export const Portfolio = () => {

    const { address } = useAccount()

    const [stakedTokens, setStakedTokens] = useState(["0x5886F287C4473Ce13c58474a261b31c881f8635d", "0xF455eB0C273b8E48A0415D34072179Aa25611791", "0x239466949bab2E503830A8e6E1B1Ab45Cd7628a0"]);

    const contractFactory = {
        old: "0x7c9210c291E00c2030116FcC930D071BBEC5C30f",
        new: "0xccF6772F52D007E082bF4A01757C4091F5f4dD92"
    }
    const CONTRACT = contractFactory.new


    const { data: contractData, isError, isLoading, isSuccess } = useContractRead({
        address: CONTRACT,
        abi: StakingABI,
        functionName: "getStakesByUser",
        args: [address]
        // args: ["0x7aEe32638eA48cEE01458bA70317fa37cC2c90aE"]
    })

    useEffect(() => {
        setStakedTokens(contractData)
    }, [contractData])


    return (
        <main className=" mt-10 ">
            Portfolio
        </main>
    )
}