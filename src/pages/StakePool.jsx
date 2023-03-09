import { StakeForm } from '../components/Molecules/StakeForm'
import { WithdrawForm } from '../components/Molecules/WithdrawForm'
import { ClaimRewardForm } from '../components/Molecules/ClaimRewardForm'


import BGStyle from '../components/Pattern/BGStyle'

import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function StakePool() {
    let [categories] = useState([
        "Stake Token",
        "Claim Reward",
        "Withdraw Token"
    ])

    return (
        <div className=" px-2 py-16 sm:px-0">
            <BGStyle />
            <Tab.Group>
                <Tab.List className="flex space-x-1  bg-teal-900/20 p-1">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full  py-2.5 text-sm font-medium leading-5 text-teal-700',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-teal-600 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels className="mt-2">
                    <Tab.Panel><StakeForm /></Tab.Panel>
                    <Tab.Panel><ClaimRewardForm /></Tab.Panel>
                    <Tab.Panel><WithdrawForm /></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
