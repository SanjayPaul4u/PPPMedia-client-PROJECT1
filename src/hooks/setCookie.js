import Cookie from 'js-cookie';

const SetCookie = (cookieName, value)=>{
    Cookie.set(cookieName, value, {
        expires: 1/144, // 10 minute - "here 1 is day(1440minute)/ minute(144)"
        secure: true,
        sameSite : "strict",
        path: "/"
    })
}
export default SetCookie;