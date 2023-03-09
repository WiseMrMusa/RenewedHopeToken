import { erc20ABI, useContractReads } from 'wagmi'
import { useContext , useState } from 'react'
import { ContractContext } from '../..';


export const DisplayCard = ({ contractAddress }) => {

    const [cardData, setCardData] = useState([]);

    const contract = useContext(ContractContext);

    useContractReads({
        contracts: [
            {
                address: contractAddress,
                abi: erc20ABI,
                functionName: 'name'
            },
            {
                address: contractAddress,
                abi: erc20ABI,
                functionName: 'symbol'
            },
            // {
            //     address: contractAddress,
            //     abi: erc20ABI,
            //     functionName: 'balanceOf',
            //     args: [contract]
            // }
        ],
        onSuccess(data) {
            setCardData(data)
        }
    })

    
    return (
        <div className="p-4 aspect-square group cursor-pointer relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5">
            <div>
                <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"><svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1"><defs><pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect><svg x="50%" y="16" class="overflow-visible"><rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect><rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect></svg></svg></div>
            </div>
            <div className='  '>
                <p className="text-sm font-semibold leading-7 text-zinc-900 uppercase">{cardData[1]}</p>
                <h1 className="mt-4 text-zinc-900 font-semibold">{cardData[0]}</h1>
                <h1 className=" text-zinc-300 ">{`${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`}</h1>
                {/* <p>{ cardData[2] } </p> */}
            </div>
        </div>
  )
}
