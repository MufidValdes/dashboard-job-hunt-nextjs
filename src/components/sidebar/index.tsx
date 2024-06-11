"use client"
import React, { FC } from "react";
import { Button } from "../ui/button";
import {
    HiHome,
    HiChatBubbleLeftRight,
    HiBuildingOffice2,
    HiUserGroup,
    HiClipboardDocumentList,
    HiCalendarDays,
    HiCog6Tooth ,
    HiOutlineArrowRightOnRectangle 
} from "react-icons/hi2";
import { useRouter } from "next/navigation";

interface SidebarProps { }
const Sidebar: FC<SidebarProps> = ({ }) => {
    const router = useRouter()
    return (
        <div className="pb-12 min-h-screen">
            <div className="space-y-4 py-4 ">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold">Dasboard</h2>
                    <div className="space-y-3">
                        <Button
                            variant={"ghost"}
                            className="w-full justify-start rounded-none hover:text-teal-700"
                            onClick={()=> router.push('/')}
                        >
                            <HiHome className="mr-2 text-lg" />
                            Home
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="w-full justify-start rounded-none hover:text-teal-700"
                        >
                            <HiChatBubbleLeftRight className="mr-2 text-lg" />
                            Message
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="w-full justify-start rounded-none hover:text-teal-700"
                        >
                            <HiBuildingOffice2 className="mr-2 text-lg" />
                            Company Profile
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="w-full justify-start rounded-none hover:text-teal-700"
                        >
                            <HiUserGroup className="mr-2 text-lg" />
                            All Aplication
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="w-full justify-start rounded-none hover:text-teal-700"
                            onClick={()=> router.push('/job-listings')}
                        >
                            <HiClipboardDocumentList className="mr-2 text-lg" />
                            Jobs Listings
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="w-full justify-start rounded-none hover:text-teal-700"
                        >
                            <HiCalendarDays className="mr-2 text-lg" />
                            My Schedule
                        </Button>
                    </div>
                </div>
            </div>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold">Setting</h2>
                        <Button
                            variant={"ghost"}
                            className="w-full justify-start rounded-none hover:text-teal-700"
                            onClick={()=> router.push('/settings')}
                        >
                            <HiCog6Tooth className="mr-2 text-lg" />
                            Setting
                        </Button>
                        <Button
                            variant={"ghost"}
                            className="w-full justify-start rounded-none text-red-500 hover:text-red-700"
                        >
                            <HiOutlineArrowRightOnRectangle className="mr-2 text-lg" />
                            Log Out
                        </Button>
                
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
