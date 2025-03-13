let value=prompt("Đăng nhập tài khoản")
    if(value=="Thái Hưng"){
        let password=prompt("nhập mật khẩu")
        if(password=="1998"){
        alert("đăng nhập thành công")
        }
        else if (password==null) {
            alert("Hủy")
        } else
            alert('nhập lại mật khẩu')
    } else alert('sai tên Tài khoản')