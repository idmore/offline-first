/**
 * Created by yussan on 19/10/16.
 * بسم الله الرحمن الرحيم
 */

// checking is browser support serice worker
if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('./offline-first.sw.js').then((registration) => {
        //registration was successfull
        console.log('registration was successfull with scope', registration.scope)
    })
}