import { Nav } from "../components/partials/Nav"
import { Home } from "../pages/Home"

export const HomeLayout = () => {
    return <main className={"home"}>
        <Nav/>
        <section className={"content"}>
            <Home/>
        </section>
    </main>
}