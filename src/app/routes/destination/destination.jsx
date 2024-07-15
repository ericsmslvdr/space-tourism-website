import DestinationSection from "@/components/destination"
import MainLayout from "@/components/main-layout"
import { Outlet } from "react-router-dom"

const Destination = () => {
    return (
        <MainLayout>
            <DestinationSection />
        </MainLayout >
    )
}

export default Destination