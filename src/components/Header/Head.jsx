// import { ConnectButton } from '@rainbow-me/rainbowkit';
import ConnectButtonLocal, { MyConnectButton } from '../Atom/ConnectButtonLocal';
import { ConnectKitButton } from "connectkit";

const Head = () => {
    return (
        <>
            <div className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between gap-12 px-4 transition left-72 backdrop-blur-sm  ring-1 ring-zinc-900/10">
                <div className="absolute inset-x-0 top-full h-px transition">
                </div>


                <div className="block max-w-md flex-auto">
                    <button
                        type="button"
                        className="h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20  flex focus:[&amp;:not(:focus-visible)]:outline-none"
                    >
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
                        </svg>Find something ...
                        <kbd className="ml-auto text-2xs text-zinc-400 "><kbd className="font-sans">⌘</kbd><kbd className="font-sans">K</kbd></kbd>
                    </button>
                </div>


                <div className="flex items-center gap-5">
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            <li>
                                <a className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900" href="/">API</a>
                            </li>
                            <li>
                                <a className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900" href="/#">Documentation</a>
                            </li>
                            <li><a className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900" href="/#">Support</a></li>
                        </ul>
                    </nav>

                    <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 ">
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 "
                            aria-label="Toggle dark mode">

                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5 stroke-zinc-900 "><path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path strokeLinecap="round" d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"></path></svg>

                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className=" h-5 w-5 stroke-white dark:block"><path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"></path></svg>
                        </button>
                    </div>


                    <div className="flex gap-4">
                        <MyConnectButton />
                        {/* <ConnectKitButton /> */}
                        {/* <ConnectButton /> */}
                    </div>


                </div>
            </div>
        </>
    )
}

export default Head