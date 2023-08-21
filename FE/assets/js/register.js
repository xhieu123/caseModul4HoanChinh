function LoadRegister(){
    let str=`
        <label>Name</label><input type="text" id="name"><br>
        <label>Age</label><input type="text" id="age"><br>
        <label>Username</label><input type="text" id="username"><br>
        <label>Password</label><input type="text" id="password"><br>
        <button onclick="loadLogin()"> Register</button>
     `
    document.getElementById('display').innerHTML= str
}