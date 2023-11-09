import Cookie from 'js-cookie';

const SetCookie = (cookieName, value)=>{
    Cookie.set(cookieName, value, {
        // expires: 1/48,// 30 minute // 10 minute(144) - "here 1 is day(1440minute)/ minute(144)"
        //domain: 'www.pppmedia.com',
        expires: 1,// 1 day
        secure: true,
        sameSite : "none",
        path: "/"
    })
}
export default SetCookie;
