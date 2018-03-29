html {
	height:100%;
}

body {
	margin:0px;
	background-color:lightgrey;
	font-family:arial;
}

header {
	background-color:#303031;
	color:white;
	width:100%;
	padding:.05%;
}

header a {
	color:white;
}


header h1{
	padding-left:20px;
}


nav {
	display:none;
	position:absolute;
	right:50px;
	background-color:white;
	border:black solid 2px;
	margin-top:-25px;
	font-size:150%;
}

a {
	text-decoration:none;
	color:#f22613;
}

nav a {
	text-decoration:none;
}

nav ul {
	margin:0px;
	padding:0px;
	margin-right:10px;
}

nav li {
	list-style-type: none;
	padding:5px;
	padding-top:10px;
	padding-bottom:10px;
	width:100%;
	border-bottom: 1px grey solid;
	color:#303031;
}


header button {
	float:right;
	margin-top:-54px;
	margin-right:20px;
	font-size:120%;
}

h1,h2 {
	margin-top:0px;
}

@media screen and (min-width: 760px) {
	

	section {
		display: none;
	}
	
	body {
		height:100%;
		width:100%;
		background-color:#624f48;
	}
	
	.main {
		width:80%;
	    display: block;
		margin-left: auto;
		margin-right: auto;
		background-color: white;
		overflow:hidden;
		height:100%;
	}
	
	#background{
		background-image:url(../images/background.png);
		width:100%;
		height:100%;
		margin-top:-20px;
	}
	
	
	#churchForeground{
		float:left;
		background-image:url(../images/church0.png);
		background-repeat:no-repeat;
		width:300px;
		height:100%;
	}
	
	#container{
		margin-left: 400px;
		margin-top: 20px;
	}
	
	#footNav {
		background-image:url(../images/travel.png);
		background-repeat:no-repeat;
		position:absolute;
		width:80%;
		bottom:0px;
		text-align:center;
	}
	
	#footNav button {
		border-radius:50px;
		width:40px;
		height:40px;
		background-color:white;
	}
	
	
	#footNav div {
		display:inline-block;
		padding-left:20%;
		font-size: 30px;
	}
	
	section{
		float:left;
		margin-top:50px;
		background-color:white;
		width:70%;
	}
	
	#next{
		float:right;
		margin-top:200px;
		margin-right:110px;
		width:50px;
		height:50px;
		border-radius:10px;
		background-color:lightgrey;
	}
	
	

	.toggle-menu{
		display:none;
	}
	
	nav {
		display:block;
		background:none;
		border:none;
		padding:0px;
		width:100%;
		margin-left:0px;
		font-size:110%;
	}
	
	nav ul {
		padding:0px;
		margin-left:30%;
		margin-top:-20px;
	}
	
	nav a:first-child{
		border:none;
	}
	
	nav li:hover, nav li:focus{
		color: #f22613;
		background-color:#303031;
	}
	
	
	nav li {
		display:inline;
		padding-left:5%;
		padding-right:5%;
		border:none;
		color:white;
	}
	
	nav a {
		color:white;
		border-left: white 2px solid;
	}
	

	
}





@media screen and (min-width: 860px) {
	
		nav {
		font-size:130%;
		}
		
		nav ul {
		margin-left:25%;
		}
	
}

