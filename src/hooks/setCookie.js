import Cookie from 'js-cookie';

const SetCookie = (cookieName, value)=>{
    Cookie.set(cookieName, value, {
        expires: 600000, // 1 day
        secure: true,
        sameSite : "strict",
        path: "/"
    })
}
export default SetCookie;