function SendMoney() {
    return (
        <div className="flex flex-col justify-center h-screen bg-gray-100">
            <div className="flex flex-row justify-center w-screen">
                <div className="flex justify-center w-96 px-10 py-8 bg-white rounded-xl drop-shadow-md">
                    <div className="flex flex-col justify-center w-screen">
                        <h1 className="font-bold text-3xl text-center mb-20">Send Money</h1>
                        <div className="flex items-center">
                            <div className="flex rounded-full bg-green-500 h-12 w-12 justify-center">
                                <div className="flex flex-col text-xl justify-center text-white">
                                    A
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold ml-4">Friend's Name</h1>
                        </div>
                        <h1 className="text-l">Amount (in Rs)</h1>
                        <input className="w-full border-2 border-slate-200 rounded-l h-10 p-2 my-2" type="text" placeholder="Enter Amount" />
                        <button type="button" class="w-full text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Initiate Transfer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SendMoney