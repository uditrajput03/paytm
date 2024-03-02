function InputBox({label , placeholder ,onChange}) {
    return(
        <div className="w-full p-1">
            <h1>{label}</h1>
            <input onChange={onChange} type="text" className="w-full border border-slate-400 rounded-m" placeholder={placeholder} />
        </div>
    )
}
export default InputBox