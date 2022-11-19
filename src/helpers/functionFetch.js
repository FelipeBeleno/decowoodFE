
export async function functionFetch(path, method, data) {

    if (method.toLowerCase() === 'get') {


        const respuesta = await fetch(path, {

            method: method,

            // body: JSON.stringify(data)

        })

        const bodyR = await respuesta.json();

        return bodyR

    } else {

        let h = {
            //'Authorization': localStorage.getItem('jwt_token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",

        }
        const respuesta = await fetch(path, {

            method: method,
            headers: h,
            body: JSON.stringify(data)

        }
        )

        const bodyR = await respuesta.json();

        return bodyR
    }






}