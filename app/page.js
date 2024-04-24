import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <>
    <Header />
    <main className="gap-[15vh] flex-col flex w-full pb-[10vh]">
      <Projects />
      <Contact />
    </main>
    </>
  )
}
