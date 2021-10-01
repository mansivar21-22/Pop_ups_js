function showConfirm(){
    let check= confirm("Do you want to show message?")
    if(check == true)
    {
        alert("welcome")
    }
    else{
        alert("You are not welcome!")
    }
}

function showPrompt(){
    let check= prompt("Enter your name")
    if(check != null)
    {
        alert("come")
    }
    else{
        alert("go")
    }
}