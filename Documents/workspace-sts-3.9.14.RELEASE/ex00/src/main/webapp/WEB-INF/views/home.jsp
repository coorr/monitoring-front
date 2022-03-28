<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<div class="login">
		<div class="wrapper">
			<form name="loginpage" id="loginpage" method='post' action='../spb3/plogin.jsp'>
				<input type='hidden' name='goto' value=''>
				<input type='hidden' name='mode' value='login'>
				<div class="loginbox">
					<div class="loginInput">
					<input type="text" name="userID" class="userid" placeholder="아이디">
					<input type="password" name="userPassword" class="passwd" placeholder="비밀번호">
					</div>
					
				<div class="loginSubmit">
					<input type="submit" value="로그인" class="submit">
				</div>
            </div>
         </form>
         
         <div class="join">
           
            <a href="../spb3/sjoin.jsp" class="memberJoin">회원가입 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
         </div>
      </div>
   </div>
   

</body>
</html>
