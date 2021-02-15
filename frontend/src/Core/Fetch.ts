type method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const CustomFetch = (method: method, resource: string, content: object) =>
    fetch(`http://localhost:3001/${resource}`, {
        method,
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(content)
    });

const getFetch = (resource: string, content: object) =>
    CustomFetch('GET', resource, content);

const postFetch = (resource: string, content: object) =>
    CustomFetch('POST', resource, content);

const putFetch = (resource: string, content: object) =>
    CustomFetch('PUT', resource, content);

const deleteFetch = (resource: string, content: object) =>
    CustomFetch('DELETE', resource, content);

const Fetch = {
    get: getFetch,
    post: postFetch,
    put: putFetch,
    delete: deleteFetch
};

export default Fetch;
