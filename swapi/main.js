

const residents = document.querySelector('button');
const body = document.querySelector('body')
const buttonClicked = (evn) => {
    console.log("button clicked")
    axios.get('https://swapi.dev/api/planets/?search=alderaan').then(res => {
        let residents = (res.data.results[0].residents);
        residents.forEach(element => {
            axios.get(element).then(res => {
                console.group(res.data.name);
                let name = document.createElement('h2');
                name.textContent = res.data.name;
                body.appendChild(name);
            }).catch(err => {
                console.log(err)
            })
        });
    }).catch(err => console.log(err));
    residents.disabled = true;
}
residents.addEventListener("click",buttonClicked);

