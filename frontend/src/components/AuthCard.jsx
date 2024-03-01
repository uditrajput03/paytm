const AuthCard = (prop) => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="p-10 w-3/12 bg-gray-200">
            {prop.children}
            </div>
        </div>
    )
}
export default AuthCard