// import axios from 'axios';



export class HttpClient {

    // async get( url: string ){
    //     const { data, status } = await axios.get(url);
    //     console.log({ data, status });
    //     return {data, status};
    // }

    async get( url: string ){

        const resp = await fetch(url);
        if (!resp.ok) throw new Error('Error in fetch');

        const data = await resp.json();
        const status = resp.status;
        console.log({ data, status });

        return { data, status };
    }

}