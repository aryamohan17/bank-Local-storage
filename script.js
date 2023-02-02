function signup() {
    accno = an.value
    uname= un.value
    pwd = pass.value

    if(accno in localStorage){
        alert("user already exist")
    }
    else{
        banks={accno,uname,pwd}
        localStorage.setItem(accno,JSON.stringify(banks))
        alert("registersucessfully")
        window.location="home.html"
    }
}
function login() {

    accno = an.value
    passwords=pass.value


    if(accno in localStorage){
        getData =JSON.parse(localStorage.getItem(accno))
      
        if(passwords==getData.pwd){
            alert("Login sucessfully")
            window.location="home.html"
        }
        else
        {
            alert("User name and password incorrect")
        }
    }
    else
    {
        alert("User not exist.....Please register!!!!!!!!!")
    }
    
}