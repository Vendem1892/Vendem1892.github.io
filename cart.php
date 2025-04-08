<?php 
include_once 'includes/dbh.inc.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Shopping Cart - Sir Arthur Lewis Trading Circle</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js"></script>
</head>
<body>
    <div class="bg-center md:w-fit md:h-fit">
        <?php 
        $sql = "SELECT FROM shoppingcart WHERE accID = $accID;";
        $result = mysqli_query($conn,$accID);
        while ($row = mysqli_fetch_assoc($result)){
        ?>
        <div class="bg-slate-400 md:font-medium" id='cart'>
                <h2 class="text-3xl text-black"> All Items in Cart</h2>                
                <div class=" max-w-sm overflow-hidden shadow-lg">
                    <img href='<?php echo $row['img1_fName'] ?>' alt='<?php echo $row['img1_fName'] ?>'>
                <hr>
                <div class="float-left md:text-clip">
                   <h4><?php echo $row['itemName'] ?></h4>
                    <br><br>                
                    <h6><?php echo '$'.$row['itemPrice'] ?></h6>
                </div>                
                </div>
                <hr>
                <?php $orderPrice = $orderPrice + $row['itemPrice']; }; ?>
            </div>            
            
    </div>
        <div class="float-end bg-slate-300">
            <button class="hover:bg-yellow-400" id="paypal-button">Paypal Checkout</button>
            <label id="priceXCD"><?php echo '$'.$orderPrice;?></label>
            <label id="priceUSD"><?php $priceUS = $orderPrice / 2.8; echo '$'. $priceUS;?></label>
        </div>
    </div>
</body>
</html>