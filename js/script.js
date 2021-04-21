var users = [
    {
        name:'Adwoa',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png',
        age: 27        
    },
    {
        name: 'Emelia',
        gender: 'F',
        hobby: 'movies',
        avatar: 'avatar2.png',
        age: 20  
    },
    
    {
        name: 'tracy',
        gender: 'F',
        hobby: 'racing',
        avatar: 'avatar3.png',
        age: 21  
    },
    {
        name: 'Grace',
        gender: 'F',
        hobby: 'shopping',
        avatar:'avatar4.png',
        age: 31
    },
    {
        name: 'frank',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar5.png',
        age: 33  
    },

    {
        name: 'sharon',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar6.png',
        age: 37
    },
    {
        name: 'Charles',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png',
        age: 30
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        console.log(gender);

        var ageMinElement = document.getElementById('min-age');
        var minAge = ageMinElement.value;
        console.log(minAge);

        var ageMaxElement = document.getElementById('max-age');
        var maxAge = ageMaxElement.value;
        console.log(maxAge);
        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) { 
            
            if(gender == 'A' || gender == users[i].gender){

                if(hobby == "" || hobby == users[i].hobby){

                    if((minAge == "" || users[i].age >= minAge) && (maxAge == "" ||  users[i].age <= maxAge)){
                        resultsHtml += '<div class="person-row">\
                        <img class="img-class" src="images/' + users[i].avatar + '" />\
                        <div class="person-info">\
                        <div>' +"Name: "+ users[i].name + '</div>\
                        <div>' +"Hobby: "+ users[i].hobby + '</div>\
                        <div>' +"Age: "+ users[i].age + '</div></div>\
                        <button class="add-button">Add as friend</button></div>';  
                    }
                }
            }           

        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});


