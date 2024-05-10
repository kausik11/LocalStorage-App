let form = document.querySelector('form');
let container = document.querySelector('.data');
const show = ()=>{
    let data = localStorage.getItem('userData');
    let finalData = JSON.parse(data);
    let datatoshow = '';
    data !== 'null' ? finalData.forEach(({uname,email,phone,data}) => {
         datatoshow += ` <div class="container">
         <p id="cross">X</p>
         <h3>${uname}</h3>
         <h4>${email}</h4>
         <h4>${phone}</h4>
         <p>${data}</p>
        </div>`;
        console.log(datatoshow);
}) : console.log('no data found');
container.innerHTML = datatoshow;
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let name = e.target.name;
    let email = e.target.email;
    let phone = e.target.phone;
    let data = e.target.task;

    let userData = JSON.parse(localStorage.getItem('userData')) ?? [];
    userData.push({uname: name.value, email: email.value, phone: phone.value, data:data.value});
    localStorage.setItem('userData',JSON.stringify(userData));
    
})
 show();




