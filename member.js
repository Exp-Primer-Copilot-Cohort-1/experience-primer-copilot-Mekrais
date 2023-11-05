function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    if (skillsMemberValue == "0") {
        skills.style.display = "none";
    } else {
        skills.style.display = "block";
    }
}