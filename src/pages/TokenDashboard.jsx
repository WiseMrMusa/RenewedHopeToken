import { erc20ABI, useContractReads } from "wagmi"
import standard from "../utils/abi/StandardERC20.json"

export const TokenDashboard = () => {
    const def = {
        address: "0xFE2ecA2a3B933E4D1679cb0EBf272eA45D664644",
        abi: erc20ABI,
    }
    const { data, isError, isLoading } = useContractReads({
        contracts: [
            {
                ...def,
                abi: standard,
            functionName: 'tokenName'
            },
            {
            ...def,
            functionName: 'symbol'
            },
            {
            ...def,
            functionName: 'decimal'
            }
        ]
    }
    )
    if (isLoading) {
        return <div>Loading</div>
    } return (
        <div>
            {data}
            {data.forEach((e, i) => {
                return (
                    <div> {e}</div>
                )
            })}
        </div>
    )
}