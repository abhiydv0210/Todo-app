const base = 'http://192.168.29.145:8000/';
const endpoint = 'user/register';

const useFetchAPI = () => {
    const apifunction = async (endpoint, type, data, res) => {
        let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify(data);

        let requestOptions = {
            method: type,
            headers: myHeaders,
            redirect: 'follow',
        };
        if (data)
            requestOptions.body = raw

       // console.log(requestOptiuons, 'please request');

        try {
            const response = await fetch(base + endpoint, requestOptions);
            console.log(response,"====>")
            if (!response.ok) {
                const e = await response.json();
                console.log(e.message);
                throw new Error(e.message)
            }
            const data = await response.json();
            res(data, null);
        }
        catch (error) {
            console.log(error,"====>")

            res(null, error.message)
        }
    }
    return apifunction;
}




export default useFetchAPI;
