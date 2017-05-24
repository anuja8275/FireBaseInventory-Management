 // get all elements
 $(function (){
 	  var config = {
        apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      };
      firebase.initializeApp(config);
      console.log(config)
 	const txtemail=document.getElementById('email');
 	const txtpassword=document.getElementById('pwd');
 	const btnsignin=document.getElementById('signin');
 	const btnsignup=document.getElementById('signup');

 	

 	btnsignin.addEventListener('click',e=>{
 		console.log("1");
 		const email=txtemail.value;
 		const pass=txtpassword.value;
 		const auth=firebase.auth();
 		const promise =auth.signInWithEmailAndPassword(email, pass);
 		promise.catch(e =>console.log(e.message))
 		document.location.href = '../Dashboard.html'; 

 	})

 	btnsignup.addEventListener('click',e=>{
 		const email=txtemail.value;
 		const pass=txtpassword.value;
 		const auth=firebase.auth();
 		const promise =auth.createUserWithEmailAndPassword(email, pass);
 		promise.catch(e =>console.log(e.message))
 	})

 	// function signin(e){
 	// 	console.log("1");
 	// }

 	firebase.auth().onAuthStateChanged(user =>{
 		if (user){
 			console.log(user);
 		}
 		else{
 			
 		}
 	});
 });