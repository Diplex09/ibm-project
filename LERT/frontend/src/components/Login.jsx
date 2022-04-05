import logo from "../assets/ibmLogo.jpg";
import { VscAccount } from "react-icons/vsc";
import { FaRegEnvelope } from "react-icons/fa";

const login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-row w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">IBM</div>

            <div className="py-10">
              <h2 className="text-3xl font-bold mb-3">Sign In</h2>
              <div className="border-2 border-slate-800 ml-auto mr-auto mb-3 "></div>
              <div className="flex justify-center my-2">
                <VscAccount />
              </div>
              <p className="text-gray-400 mb-3">Use your email account</p>

              <div className=" flex flex-col items-center ">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <input
                    className="bg-gray-100 outline-none text-sm"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <input
                    className="bg-gray-100 outline-none text-sm"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button className="bg-slate-800 text-white font-bold py-2 px-4 rounded-full">
                  Sign In
                </button>
              </div>
            </div>
          </div>
          {/* Sign In */}

          <div className="w-2/5 bg-slate-800 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">LERT</h2>
            <div className="border-2 ml-auto mr-auto mb-2 "></div>
            <p>Labor Expenses Recovery Tool</p>
          </div>
          {/* Sign In */}
        </div>
      </main>
    </div>
  );
};

export default login;
