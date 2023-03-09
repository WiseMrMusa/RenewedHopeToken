import { Outlet, Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Head from '../components/Header/Head'
import { SideNav } from '../components/Nav/SideNav'



export const Layout = () => {
    return (
        <div className=" ml-72 ">
            <header className="pointer-events-none fixed inset-0 z-40 flex">
                <div className=" pointer-events-auto w-72 overflow-y-auto border-r px-6 pt-4 pb-8 border-zinc-900/10">

                    <div className="flex">
                        <Link to="/" >
                            <Logo />
                        </Link>
                    </div>

                    <Head />
                    <SideNav />
                </div>

            </header>
            <div className="relative px-8 pt-14 ">
                <Outlet className="py-16" />
            </div>
        </div>
    )
}