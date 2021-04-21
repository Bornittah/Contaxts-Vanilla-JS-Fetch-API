
const API="https://truly-contacts.herokuapp.com/api"

function display_contacts(){

    fetch(`${API}/contacts/`,
    {
            method: "GET",
            headers: {
             'Content-Type': "application/json",
             'Authorization': `Bearer ${localStorage.token}`
          }
    }
    ).then((response)=>{
     response.json().then((data)=>{
        var favouriteList = document.querySelector('#myfavourites');
         if(data.length>0){
			//  console.log(data[i].first_name)
            var append = '<table id="contactslists">';
            for (var i = 0; i < data.length; i++) {
                if(data[i].is_favorite===true){
                append += `<tr class="contactlist-items"><td><button class="removeFavourite"><img src="images/remove-icon.png"  id='remove_fav' onclick='delete_fav(${i})'style="width: 20px"></button></td><td style="text-align:center; margin:0 auto;">
                <img class="profile-pic-list" src="${data[i].Profile}"></td><td> ${data[i].Name}
                </td></tr>`;
            }
            }
            favouriteList.innerHTML =append+"</table>";
     
             //show number of saved contacts
             if(data.length==1){
                 contacts_length.innerHTML=data.length + " Contact";
             }else{
                 contacts_length.innerHTML=data.length + " Contacts";
             }
              
         }else {
             // no contacts
             showDiv.innerHTML = "No saved contacts";
             contacts_length.innerHTML=data.length + " Contacts";
         }
         if(response.status===201){
			 
		 }
         if(response.status===403){
			 
		 }
 
         if(response.status===400){

		 }
     });
 
     }).catch((err)=>{
        console.log(err);
        });

}
// window.addEventListener('load',()=>{
//     var fav=JSON.parse(localStorage.getItem('Favourites'));
//     var cl = document.querySelector('#myfavourites');
//         if(fav.length>0){
//             var append = '<table id="contactslists">';
//             for (var i = 0; i < fav.length; i++) {
//                 append += `<tr class="contactlist-items"><td><button class="removeFavourite"><img src="images/remove-icon.png"  id='remove_fav' onclick='delete_fav(${i})'style="width: 20px"></button></td><td style="text-align:center; margin:0 auto;">
//                 <img class="profile-pic-list" src="${fav[i].Profile}"></td><td> ${fav[i].Name}
//                 </td></tr>`;
//             }
//             cl.innerHTML =append+"</table>";
//         }else {
//             // no contacts
//         //         document.querySelector("#noContacts").style.display="block";
//         cl.innerHTML ="No favourite contact added yet!";
//        }
      

//     });
      
    function delete_fav(index){
        // confirm
        if (confirm("Do you want to delete this contact from your favourites? ")) {
            //delete the contact
            var id;
            id=index;
            var fav_contact=JSON.parse(localStorage.getItem('Favourites'));
            fav_contact.splice(id, 1);
            localStorage.setItem('Favourites',JSON.stringify(fav_contact));
            window.location.reload();
        } else {
        //dont delete
        }
            
    }