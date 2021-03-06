const url = "http://localhost:3000";

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${url}/articles?_start=3&_end=10`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_ARTICLE',
        payload:output
    }
}


export function galleryNews(){
    const output = fetch(`${url}/galleries?_limit=3`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_GALLERY',
        payload:output
    }
}

export function selectedNews(id){
    const output = fetch(`${url}/articles?id=${id}`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'SELECTED_NEWS',
        payload:output
    }
}

export function clearSelectedNews(){
    return{
        type:'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}

