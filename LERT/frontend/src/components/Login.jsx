
const login = () => {
  return (

    <div className="bg-gray-100 shadow-md rounded mt-48 px-8 pt-6 pb-8 mx-96 flex flex-col">
        <div className="mb-8">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Email Address" />
        </div>

        <div className="mb-8">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="**********" />
        </div>

        <div className="mb-4">
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign in</button>
        </div>
       
    </div>

    )
}

export default login