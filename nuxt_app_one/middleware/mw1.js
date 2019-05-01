export default function(context){
    console.log('this is mw1.js in middleware/')
    // console.log(context.query.msg)

    // error method enchase of an error. 
    // when you have nothing to parse leave an empty error object literal.
    context.error({
        statusCode:404,
        message:'Cannot find page Sabelo 404'
    })
}