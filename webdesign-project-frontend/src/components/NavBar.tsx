

const Navbar = () => <div className="my- mr-2 ml-2 mt-2 flex items-center justify-between py-3 bg-purple-200 rounded-lg">
    <div className="ml-2 flex space-x-5">
        <div className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4 border-purple-400 ">SpaceTree</div>
        <div className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4 border-purple-400">Solution</div>

        <div className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4 border-purple-400">Pricing</div>

        <div className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4 border-purple-400">Service</div>

        <div className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4 border-purple-400">Company</div>
    </div>
    <div>
        <a className="rounded-3xl border-2 bg-purple-500 p-2 font-bold text-white  shadow-xl shadow-purple-500/50" href="#">Home</a>
        <a className="rounded-3xl border-2 bg-purple-500 p-2 font-bold text-white  shadow-xl shadow-purple-500/50" href="#">Signout</a>
    </div>
</div>

export default Navbar