

function loadLogin() {
    let str = `
       <div class ="row">
    <div class="col-md-6 mx-auto p-0">
        <div class="card">
            <div class="login-box">
                <div class="login-snip" >
                    <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Login</label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
                    <div class="login-space">
                        <div class="login">
                            <div class="group">
                                <label for="user" class="label">Username</label>
                                <input id="user" type="text" class="input"  placeholder="Enter your username">
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Password</label>
                                <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password">
                            </div>
                            <div class="group">
                                <input id="check" type="checkbox" class="check" checked>
                                <label for="check"><span class="icon"></span> Keep me Signed in</label>
                            </div>
                            <div class="group">
                                <input type="submit" class="button" value="Sign In" onclick="checkLogin()">
                            </div>
                            <div class="hr"></div>
                            <div class="foot">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <div class="sign-up-form">
                            <div class="group">
                                <label for="user" class="label">Nhap ten cua ban</label>
                                <input id="name" type="text" class="input" placeholder="Input your username">
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Ten dang nhap</label>
                                <input id="username" type="text" class="input" data-type="text" placeholder="Create your Username">
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Nhap mat khau</label>
                                <input id="password" type="text" class="input" data-type="password" placeholder="Create your Password" >
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Nhap dia chi email</label>
<input id="email" type="text" class="input" placeholder="Enter your email address">
                            </div>
                            <div class="group">
                                <input type="submit" class="button" value="Sign Up" onclick="save()">
                            </div>
                            <div class="hr"></div>
                            <div class="foot">
                                <label for="tab-1">Already Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        `
    document.getElementById('display').innerHTML = str
}

function checkLogin() {

    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    LoginCheck(username, password)
        .then((token) => {
            if (token === "User is not exist" || token === "Password is wrong") {
                alert('Đăng nhập không thành công');
            } else {
                // Lưu trữ token vào localStorage hoặc sessionStorage
                localStorage.setItem('id', token.idUser);
                localStorage.setItem('name', token.username);
                // Hoặc sessionStorage.setItem('token', token);
                if (username != "admin"){
                    loadHomeUser();}
                else {
                    loadHomeAdmin()
                }
            }
        })
    // .catch((error) => {
    //     console.error(error);
    //     alert('Đăng nhập thất bại');
    // });

}
async function LoginCheck(username, password) {
    try {
        const response = await axios.post('http://localhost:3000/login', {
            username: username,
            password: password
        });


        const token = response.data;
        let a = {username, password}

        if (a === "User is not exist" || a === "Password is wrong") {
            return alert("dang nhap ko thanh cong")

        } else {
            return token;
        }
    }
    catch (error) {
        console.error(error);
        throw new Error('Error logging in');
    }
}


function save() {
    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }
    console.log(username)
    if (data.username === "admin" ){
        alert("b k dc quyen dat ten nay")
    }else {
        axios.post('http://localhost:3000/register',data).then(res => {
            alert('dang ky thanh cong')
            loadLogin()    })
    }

}




