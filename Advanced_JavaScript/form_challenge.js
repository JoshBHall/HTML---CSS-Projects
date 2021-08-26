function validateForm() {
    let x = document.forms["phone#"]["phone#"].value;
    if (x == "") {
        alert("Phone number must be inserted");
        return false;
    }
}