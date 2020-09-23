
/*let contact;

var xhr = new XMLHttpRequest();
xhr.open('GET', 'adressbok-1.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
    if (xhr.status === 200){
        contact = JSON.parse(xhr.responseText);
        console.log(contact);
        contact.sort(function (a,b){
            return a.age - b.age;
    
        console.log(contactList)})*/

        
document.getElementById('sortAge').addEventListener('click', sortAge)
document.getElementById('sortEmail').addEventListener('click', sortEmail)
document.getElementById('sortName').addEventListener('click', sortName)


function sortAge(){    
fetch('adressbok-1.json')
.then(response => response.json())
.then (contactList => {
    contactList.sort(function (a,b){
        return a.age - b.age;
    })

let contacts = '<h2 class= "mx-auto" style="width: 300px;">Kontakter</h2>';
    contactList.forEach(function(contact){
    contacts += `
     <div class="card card-body mb-3 mx-auto" style="width: 300px;">
        <p>Firstname: ${contact.firstname}</p> 
        <p>Lastname: ${contact.lastname}</p> 
        <p>Age: ${contact.age}</p> 
        <p>Email: ${contact.email}</p> 
        <p>Phone: ${contact.phone}</p> 

     </div>
    `;
    
});
document.getElementById('output').innerHTML = contacts;
});
};
//end fetch + function
function sortEmail(){    
    fetch('adressbok-1.json')
    .then(response => response.json())
    .then (contactList => {
        contactList.sort(function (a,b){
            let nameA = a.email.toUpperCase();
            let nameB = b.email.toUpperCase();
            if (nameA < nameB){
                return -1;
            }
            if (nameA > nameB){
                return 1;
            }
            return 0;
        })
    
    let contacts = '<h2 class= "mx-auto" style="width: 300px;">Kontakter</h2>';
        contactList.forEach(function(contact){
        contacts += `
         <div class="card card-body mb-3 mx-auto" style="width: 300px;">
            <p>Firstname: ${contact.firstname}</p> 
            <p>Lastname: ${contact.lastname}</p> 
            <p>Age: ${contact.age}</p> 
            <p>Email: ${contact.email}</p> 
            <p>Phone: ${contact.phone}</p> 
    
         </div>
        `;
        
    });
    document.getElementById('output').innerHTML = contacts;
    });
    };
    function sortName(){    
        fetch('adressbok-1.json')
        .then(response => response.json())
        .then (contactList => {
            contactList.sort(function (a,b){
                let nameA = a.firstname.toUpperCase();
                let nameB = b.firstname.toUpperCase();
                if (nameA < nameB){
                    return -1;
                }
                if(nameA > nameB){
                    return 1;
                }
                return 0;
            })
        
        let contacts = '<h2 class= "mx-auto" style="width: 300px;">Kontakter</h2>';
            contactList.forEach(function(contact){
            contacts += `
             <div class="card card-body mb-3 mx-auto" style="width: 300px;">
                <p>Firstname: ${contact.firstname}</p> 
                <p>Lastname: ${contact.lastname}</p> 
                <p>Age: ${contact.age}</p> 
                <p>Email: ${contact.email}</p> 
                <p>Phone: ${contact.phone}</p> 
        
             </div>
            `;
            
        });
        document.getElementById('output').innerHTML = contacts;
        });
        };