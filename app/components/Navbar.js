
const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-lg p-8 ">
        <div className="flex max-w-6xl mx-auto">
            <div className="w-64">Company logo</div>
            <div className="uppercase flex w-full justify-between text-sm">
                <div>
                    <a>Home</a>
                </div>
                <div>
                    <a>About us</a>
                </div>
                <div>
                    <a>Our service</a>
                </div>
                <div>
                    <a>Team</a>
                </div>
                <div>
                    <a>Transaction</a>
                </div>
                <div>
                    <a>publication</a>
                </div>
                <div>
                    <a>careers</a>
                </div>
                <div>
                    <a>contact us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar