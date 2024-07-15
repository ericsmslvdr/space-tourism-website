import Header from "./header";
import bgHomeDesktop from "@/assets/home/background-home-desktop.jpg";
import bgHomeTablet from "@/assets/home/background-home-tablet.jpg";
import bgHomeMobile from "@/assets/home/background-home-mobile.jpg";
import bgDestinationDesktop from "@/assets/destination/background-destination-desktop.jpg";
import bgDestinationTablet from "@/assets/destination/background-destination-tablet.jpg";
import bgDestinationMobile from "@/assets/destination/background-destination-mobile.jpg";
import bgCrewDesktop from "@/assets/crew/background-crew-desktop.jpg";
import bgCrewTablet from "@/assets/crew/background-crew-tablet.jpg";
import bgCrewMobile from "@/assets/crew/background-crew-mobile.jpg";
import bgTechDesktop from "@/assets/technology/background-technology-desktop.jpg";
import bgTechTablet from "@/assets/technology/background-technology-tablet.jpg";
import bgTechMobile from "@/assets/technology/background-technology-mobile.jpg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
    const location = useLocation();
    const { pathname } = location;
    const [bgDesktop, setBgDesktop] = useState(bgHomeDesktop);
    const [bgTablet, setBgTablet] = useState(bgHomeTablet);
    const [bgMobile, setBgMobile] = useState(bgHomeMobile);

    const getWallpaper = () => {
        switch (pathname) {
            case "/":
                setBgDesktop(bgHomeDesktop);
                setBgTablet(bgHomeTablet);
                setBgMobile(bgHomeMobile);
                break;

            case "/destination":
                setBgDesktop(bgDestinationDesktop);
                setBgTablet(bgDestinationTablet);
                setBgMobile(bgDestinationMobile);
                break;

            case "/crew":
                setBgDesktop(bgCrewDesktop);
                setBgTablet(bgCrewTablet);
                setBgMobile(bgCrewMobile);
                break;

            case "/technology":
                setBgDesktop(bgTechDesktop);
                setBgTablet(bgTechTablet);
                setBgMobile(bgTechMobile);
                break;

            default:
                console.error("Something went wrong!");
                break;
        }
    }

    useEffect(() => {
        getWallpaper();
    }, [pathname])


    return (
        <main className={`h-full w-full flex flex-col bg-cover bg-[image:var(--bgMobile)] md:bg-[image:var(--bgTablet)] lg:bg-[image:var(--bgDesktop)]`}
            style={{
                '--bgMobile': `url(${bgMobile})`,
                '--bgTablet': `url(${bgTablet})`,
                '--bgDesktop': `url(${bgDesktop})`
            }}
        >
            <Header />
            {children}
        </main>
    )
}

export default MainLayout;