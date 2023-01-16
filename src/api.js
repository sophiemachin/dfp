export async function getAllUsers() {

    try{
        const response = await fetch('http://127.0.0.1:5000/list_all');
        console.log(response);
        const json = await response.text();
        console.log(json);
        return json;
    }catch(error) {
        return [];
    }

}


export async function helloWorld() {
    try{
        const response = await fetch('http://127.0.0.1:5000');
        // console.log(response);
        const text = await response.text();
        console.log(text);
        return text;
    }catch(error) {
        return [];
    }
}


export function helloWorld2() {

    let link = "http://127.0.0.1:5000";
    let to_return = ''

    fetch(link)
      .then(response => console.log(response.text()))
      // .then(data => console.log(data))
      // .catch(error => console.error(error));

    console.log(to_return)

    return to_return
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}