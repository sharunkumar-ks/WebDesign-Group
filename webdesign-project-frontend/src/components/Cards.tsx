

const Cards = () => <div className="flex flex-wrap flex-row sm:flex-col w-full p-5 bg-white rounded-md shadow-xl border-l-4 border-blue-300 ">
    <a href="#">
        <img className="flex justify-between w-full" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image" />
    </a>
    <div className="p-2">
        <a href="#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">Place 1</h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">

            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <div className="flex items-center justify-between">
            <span className="text-1xl text-gray-500 dark:text-white">Name & Date</span>
            <a href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Select</a>
        </div>
    </div>
</div>

export default Cards