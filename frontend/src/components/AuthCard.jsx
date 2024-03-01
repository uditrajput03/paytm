const AuthCard = (prop) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-10 w-3/12 bg-gray-200">
            {prop.children}
            </div>
        </div>
    )
}
export default AuthCard