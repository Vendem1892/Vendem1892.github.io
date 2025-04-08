<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - Sir Arthur Lewis Trading Circle</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js"></script>
</head>

<body class="bg-yellow-100">
    <header>
        <div class="bg-green-600 text-left">
        <h1 class="capitalize absolute h-1 m-5 text-white">Sir Arthur Lewis Trading Circle</h1>    
        <img src="#" alt="SALCC Trading Circle Logo" class="w-5 h-5">
            
                
            
        </div>
    </header>
    <br><br>

    <div class="bg-slate-300 md:border-4 border-amber-400 text-stone-900 md:py-4 md:px-2 text w-2/5">
        <form action="includes/signup_handler.php" onsubmit="return checkPassword()" method="post">

            <h2>Sign Up</h2>
            <hr>
            <br><br>


            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" maxlength="50" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" autofocus required>


            <br>

            <label for="pwd"><b>Password</b></label>
            <input type="password" placeholder="Enter Password (20 characters)" name="pwd" id="pwd" maxlength="20" required>


            <br>


            <label for="pwd-rep"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" id="pwd-rep" name="pwd-rep" maxlength="20" required>


            <br>

            <label for="fName">Enter First Name</label><br>
            <input type="text" placeholder="Ex. John" maxlength="30" id="fName" name="fName" required>


            <br>

            <label for="lName">Enter Last Name</label><br>
            <input type="text" placeholder="Ex. Doe" maxlength="40" id="lName" name="lName" required>


            <br>

            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required>


            <br><br>
            <div class="inline-flex">
                <button type="submit" class="bg-yellow-300 text-clip hover:bg-yellow-500 text-center" onclick="checkPassword()">Sign Up</button><br><br><br><br><br>
                <p>Already have an account?</p><a href="login.php" class="hover:text-yellow-300 focus:underline "></a>Log In</button>
            </div>
        </form>
    </div>






</body>
<script src="js/main.tsx"></script>

</html>