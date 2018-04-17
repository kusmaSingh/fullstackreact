// figure out what set of credentails to return
if(process.env.NODE_ENV === 'production'){
    // we are in production envirnoment -return prod keys set
    module.exports = require('./prod');
}else
{
    module.exports = require('./dev');
   //we are in developement envirnomet - return dev set of keys
}