window.onload = (event) => {
    var age = 30;
    
    var birthday = new Date("1997-09-18");
    var today = new Date();
    
    // Calcule l'âge en soustrayant l'année de naissance de l'année actuelle.
    var age = today.getFullYear() - birthday.getFullYear();
    
    // Calcule la différence entre le mois actuel et le mois de naissance.
    var m = today.getMonth() - birthday.getMonth();
    
    // Calcule la différence entre le mois actuel et le mois de naissance.
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    
    document.getElementById("agespan").innerHTML = age;
};
