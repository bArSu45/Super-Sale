
export default function FetchData(url) {
    return fetch(url).then(res => res.json())
}