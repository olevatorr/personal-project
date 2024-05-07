window.addEventListener('load', function(){
    updateNavbar();
    // login
    const loginForm = document.querySelector('.section_login');
    if (loginForm) {
        const loginbtn = document.getElementById('loginbtn');

        loginbtn?.addEventListener('click', login)

        document.getElementById("closePopup").addEventListener("click", function() {
            document.getElementById("errorPopup").style.display = "none";
        });
    }

    // signin
    const signinForm = document.querySelector('.section_signin');
    if (signinForm) {
        
        const signinForm = document.querySelector('.signin_area');
        signinForm.addEventListener('submit', signin);

        // 檢查帳號
        document.getElementById('memNum').addEventListener('change', checkNum)

        // 檢查確認密碼是否一致
        document.getElementById('memPswCheck').addEventListener('change', checkPsw)

        // 檢查手機是否註冊過
        document.getElementById('userTel').addEventListener('change', checkTel)
    }
})

let memberList = [
    {
    num: 'a123456',
    psw: 'a123456',
    userName: 'Otis',
    tel: '0912345678',
    bd: '1994-3-16',
    email: 'userEmail',
    addr: 'userAddr',
    },
];
const storedMemberList = JSON.parse(localStorage.getItem('memberList'));
if (storedMemberList) {
    memberList = storedMemberList;
}


function login(){
    const loginMemNum = document.getElementById('loginMemNum').value;
    const loginMemPsw = document.getElementById('loginMemPsw').value;

    if (loginMemNum.length < 6) {
        document.getElementById("errorPopup").style.display = "block"
        document.getElementById("errorText").innerText = "帳號不可少於6碼"
        return
    }
    const memberList = JSON.parse(localStorage.getItem('memberList'));
    const member = memberList.find(function(member) {
        return member.num === loginMemNum && member.psw === loginMemPsw;
    });
    
    if (member) {
        // 將用戶信息存儲到 localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(member));
        
        // 更新導航欄顯示
        updateNavbar();
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorPopup').style.display = 'block';
    }
}

// 驗證帳號和密碼格式
const accountRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;


function signin(e) {
    e.preventDefault();

    const memNum = document.getElementById('memNum').value;
    const memPsw = document.getElementById('memPsw').value;
    const userName = document.getElementById('userName').value;
    const userTel = document.getElementById('userTel').value;
    const userBD = document.getElementById('userBD').value;
    const userEmail = document.getElementById('userEmail').value;
    const userAddr = document.getElementById('userAddr').value;

    if (!accountRegex.test(memNum) || !accountRegex.test(memPsw)) {
        document.getElementById('errorPopup').style.display = 'block';
        document.getElementById('errorPopup').innerText = '帳號和密碼必須為6碼或以上的英文加數字';
        return;
    }

    // 創建新的成員對象
    const newMember = {
        num: memNum,
        psw: memPsw,
        userName: userName,
        tel: userTel,
        bd: userBD,
        email: userEmail,
        addr: userAddr
    };

    // 將新成員添加到 memberList 陣列中
    memberList.push(newMember);

    // 將更新後的 memberList 存儲到 localStorage 中
    localStorage.setItem('memberList', JSON.stringify(memberList));

    // 註冊成功後的處理,例如跳轉到其他頁面或顯示成功信息
    alert('註冊成功!');
    window.location.href = 'login.html';
}

function checkNum(e){
    let num = e.target.value;
    let memberNum = memberList.find(function(memberNum){
        return memberNum.num === num;
    })
    if (memberNum || num.length <6 || !accountRegex.test(num)) {
        document.getElementById('numNAVL').style.display = 'block';
        document.getElementById('numAVL').style.display = 'none';
    } else {
        document.getElementById('numAVL').style.display = 'block';
        document.getElementById('numNAVL').style.display = 'none';
    }
}

function checkPsw(e){
    let pswCheck = e.target.value;
    if (pswCheck === memPsw.value) {
        document.getElementById('pswAVL').style.display = 'block';
        document.getElementById('pswNAVL').style.display = 'none';
    } else {
        document.getElementById('pswAVL').style.display = 'none';
        document.getElementById('pswNAVL').style.display = 'block';
    }
}


function checkTel(e){
    let telCheck = e.target.value;
    let memberTel = memberList.find(function(memberTel){
        return memberTel.tel === telCheck;
    })
    if (memberTel) {
        document.getElementById('telNAVL').style.display = 'block';
    } else {
        document.getElementById('telNAVL').style.display = 'none';
    }
}


function updateNavbar() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (loggedInUser) {
      // 隱藏 "登入" 和 "會員註冊" 按鈕
        document.querySelector('a[href="login.html"]').parentElement.style.display = 'none';
        document.querySelector('a[href="signin.html"]').parentElement.style.display = 'none';
        
        // 顯示 member icon、userName 和登出按鈕
        document.getElementById('memberInfo').style.display = 'block';
        document.getElementById('userNameDisplay').textContent = loggedInUser.userName;
        document.getElementById('logoutBtn').style.display = 'block';
    } else {
        // 顯示 "登入" 和 "會員註冊" 按鈕
        document.querySelector('a[href="login.html"]').parentElement.style.display = 'block';
        document.querySelector('a[href="signin.html"]').parentElement.style.display = 'block';
        
        // 隱藏 member icon、userName 和登出按鈕
        document.getElementById('memberInfo').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
    }
}

function logout() {
    // 從 localStorage 中移除用戶信息
    localStorage.removeItem('loggedInUser');
    
    // 更新導航欄顯示
    updateNavbar();
    
    // 其他登出的操作,例如重定向到首頁等...
    window.location.href = 'index.html';
}