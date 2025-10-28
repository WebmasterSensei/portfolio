import TextDividerComponent from "./partials/text-divider";

export default function ContactUs() {
    return (
        <>
            <div className="p-4 lg:min-h-screen flex items-center justify-center mt-20" id="contactus">
                <div className="max-w-6xl max-lg:max-w-3xl mx-auto relative  ">
                    <div className="mb-20 mt-52">
                        <TextDividerComponent title="Contact us" sub="Get in touch" />
                    </div>
                    <div className="absolute  -top-6 -left-6 w-20 h-20">
                        <svg viewBox="0 0 80 80" className="w-full h-full">
                            <circle cx="40" cy="40" r="38" fill="#fed7aa" stroke="#fb923c" strokeWidth="2" />
                            <circle cx="25" cy="25" r="5" fill="#fb923c" opacity="0.6" />
                            <circle cx="50" cy="30" r="3" fill="#fb923c" opacity="0.4" />
                            <circle cx="35" cy="50" r="4" fill="#fb923c" opacity="0.5" />
                        </svg>
                    </div>
                    <div className="absolute -top-6 -right-6 w-20 h-20">
                        <svg viewBox="0 0 80 80" className="w-full h-full">
                            <circle cx="40" cy="40" r="38" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" />
                            <circle cx="30" cy="30" r="4" fill="#3b82f6" opacity="0.6" />
                            <circle cx="50" cy="25" r="3" fill="#3b82f6" opacity="0.4" />
                            <circle cx="40" cy="50" r="5" fill="#3b82f6" opacity="0.5" />
                        </svg>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12 py-8 px-6">
                        <div className="text-center flex flex-col items-center justify-center">
                            <img src="https://readymadeui.com/signin-image.webp" className="shrink-0 aspect-[250/196] object-contain" />
                        </div>

                        <form className="rounded-tl-3xl rounded-bl-3xl max-lg:-order-1">
                            <h2 className="text-3xl text-white font-bold text-center mb-8">Get in touch</h2>
                            <div className="max-w-md mx-auto space-y-3 relative">
                                <input type='text' placeholder='Name'
                                    className="w-full text-white  rounded-full py-3 px-4 text-sm outline-none border focus:border-blue-600 focus:bg-transparent transition-all" />
                                <input type='email' placeholder='Email'
                                    className="w-full  text-white rounded-full py-3 px-4 text-sm outline-none border  focus:border-blue-600 focus:bg-transparent transition-all" />
                                <input type='email' placeholder='Phone No.'
                                    className="w-full text-white rounded-full py-3 px-4 text-sm outline-none border  focus:border-blue-600 focus:bg-transparent transition-all" />
                                <textarea placeholder='Message' rows={6}
                                    className="w-full text-white  rounded-xl px-4 text-sm pt-3 outline-none border  focus:border-blue-600 focus:bg-transparent transition-all"></textarea>

                                <button type='button'
                                    className="text-white w-full relative bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-[15px] px-6 py-2.5 cursor-pointer !mt-2">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                        <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                    </svg> */}
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}