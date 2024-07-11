import Header from "./header";
import bgHomeDesktop from "../../assets/home/background-home-desktop.jpg";
import bgHomeTablet from "../../assets/home/background-home-tablet.jpg";
import bgHomeMobile from "../../assets/home/background-home-mobile.jpg";

const MainLayout = ({ children }) => {
    return (
        <main className={`h-screen flex flex-col bg-cover bg-[image:var(--bgMobile)] md:bg-[image:var(--bgTablet)] lg:bg-[image:var(--bgDesktop)]`}
            style={{
                '--bgMobile': `url(${bgHomeMobile})`,
                '--bgTablet': `url(${bgHomeTablet})`,
                '--bgDesktop': `url(${bgHomeDesktop})`
            }}
        >
            <Header />
            {children}
        </main>
    )
}

export default MainLayout;