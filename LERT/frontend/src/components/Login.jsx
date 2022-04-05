import logo from '../assets/ibmLogo.jpg'

const login = () => {
    return (
  
      
          <section class="bg-gray-200 py-28 md: flex">
          <div class="container ml-auto mr-auto">
              <div class="flex flex-wrap -mx-4">
                  <div class="w-full px-4">
                      <div class="mx-48 text-center bg-white rounded-lg relative overflow-hidden py-16 px-10 sm:px-12 md:px-[60px]"
                      >
                      <div class="mb-10 md:mb-16 text-center">
                          <a
                              href="javascript:void(0)"
                              class="inline-block max-w-[160px] mx-auto"
                              >
                          <img src={logo} />
                          </a>
                      </div>
                      <form>
                          <div class="mb-6">
                              <input
                                  type="text"
                                  placeholder="Email"
                                  class="
                                  w-full
                                  rounded-md
                                  border
                                  bordder-[#E9EDF4]
                                  py-3
                                  px-5
                                  bg-[#FCFDFE]
                                  text-base text-body-color
                                  placeholder-[#ACB6BE]
                                  outline-none
                                  focus-visible:shadow-none
                                  focus:border-primary
                                  "
                                  />
                          </div>
                          <div class="mb-6">
                              <input
                                  type="password"
                                  placeholder="Password"
                                  class="
                                  w-full
                                  rounded-md
                                  border
                                  bordder-[#E9EDF4]
                                  py-3
                                  px-5
                                  bg-[#FCFDFE]
                                  text-base text-body-color
                                  placeholder-[#ACB6BE]
                                  outline-none
                                  focus-visible:shadow-none
                                  focus:border-primary
                                  "
                                  />
                          </div>
                          <div class="mb-10">
  
                              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-48 rounded-full">
                                  Sign In
                              </button>
  
                          </div>
                      </form>
                      
                      </div>
                  </div>
              </div>
          </div>
          </section>
      
      )
  }
  
  export default login