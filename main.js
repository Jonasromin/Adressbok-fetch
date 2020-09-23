fetch('adressbok-1.json')
.then(response => response.json())
.then (contactList => {

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
})
//end fetch + function