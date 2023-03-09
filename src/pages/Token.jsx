import { useParams } from "react-router-dom"
import BGStyle from "../components/Pattern/BGStyle"

export const Token = () => {
    const { address } = useParams()
    return (
        <main className="mt-10 ">
            <BGStyle />
            <h2 className="text-lg font-semibold">
                {address}
            </h2>
        </main>
    )
}