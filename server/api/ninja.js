export default defineEventHandler(async (event) => {
    // // handle query params
    // const { name }  = getQuery(event)

    // //hndle post request
    // const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch(
      "https://api.currencyapi.com/v3/latest?apikey=7SxLeigNR3ihpxb78avR5VmcXA2ze43hpxsBIFcq&currencies=EUR%2CUSD%2CCAD"
    );

    // return {
    //     message: `Hello, ${name}! You are ${age} years old`
    // }

    return data
})