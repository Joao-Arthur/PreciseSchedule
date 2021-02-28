type method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function CustomFetch<T>(
    method: method,
    resource: string,
    content: object
): Promise<T> {
    return fetch(`http://localhost:3001/${resource}`, {
        method,
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(content)
    }).then(res => res.json());
}

function getFetch<T>(resource: string, content: object) {
    return CustomFetch<T>('GET', resource, content);
}

function postFetch<T>(resource: string, content: object) {
    return CustomFetch<T>('POST', resource, content);
}

function patchFetch<T>(resource: string, content: object) {
    return CustomFetch<T>('PATCH', resource, content);
}

function deleteFetch<T>(resource: string, content: object) {
    return CustomFetch<T>('DELETE', resource, content);
}

const Fetch = {
    get: getFetch,
    post: postFetch,
    patch: patchFetch,
    delete: deleteFetch
};

export default Fetch;
