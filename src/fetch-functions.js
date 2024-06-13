const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
    const fetchPromise = fetch(`https://jsonplaceholder.typicode.com/users`)

    return fetchPromise
    .then((response) => {
        return {
            status: response.status,
            ok: response.ok,
            url: response.url
        }
    })
};

export const getUsers = () => {
    const fetchPromise = fetch(`https://jsonplaceholder.typicode.com/users`)

    return fetchPromise
    .then((response) => {
        return response.json()
    })
};

export const getUserPosts = (userId, maxNumPosts = 3) => {
    const fetchPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)

    return fetchPromise
    .then((response) => {
        return response.json()
    })
    .then((array) => {
        return array.slice(0, maxNumPosts)
    })
};

export const createNewUser = (newUserData) => {
    const postOption = {
        method: "POST",   
        body: JSON.stringify(newUserData), 
        headers: {
          "Content-Type": "application/json" 
        }
    }

    const fetchPromise = fetch(userUrl, postOption)

    return fetchPromise
    .then((response) => {
        return response.json()
    })
}
