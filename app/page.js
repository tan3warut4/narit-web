import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
        <Navbar/>
        <div className="p-24">
        <p>Hello world</p>
        </div>
    </main>
  )
}
