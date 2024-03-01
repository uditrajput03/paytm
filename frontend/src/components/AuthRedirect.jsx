function AuthRedirect({label , page , link}) {
    return(
        <div>
            {label}
            <a className="underline" href={link}>{page}</a>
        </div>
    )
}
export default AuthRedirect