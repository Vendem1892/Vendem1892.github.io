var pass = document.getElementById('#pwd');
var passRepeat = document.getElementById('#pwd-rep');
var pageIndex;
var itemID  = document.getElementById('#itemID')

// var sort = document.getElementById('#sort');

// function sortItems (sort){
//     if (sort === 'dateDesc'){
//         document.getElementById('#prodHeader').innerHTML = 'Most Recent Items';
//         var listing = document.getElementById('#itemList');
//         listing.sort(function(a, b){return b-a});
//     }
//     if (sort === 'dateAsc'){
//         document.getElementById('#prodHeader').innerHTML = 'Least Recent Items';
//         var listing = document.getElementById('#itemList');
//         listing.sort(function(a, b){return a-b});
//     }
// }
addToCartButton = document.querySelectorAll(".add-to-cart-button");

document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        addToCartButton.classList.add('added');
        setTimeout(function(){
            addToCartButton.classList.remove('added');
        }, 2000);
    });
});


function changePage(){
    //pageIndex = document
    return Array;
}

function checkPassword(){
    if(pass == passRepeat){
        alert('Passwords Match.');
        
    }else{
        alert('Passwords Mismatched!');
        stop;
    }
}


// Create a PayPal Checkout component.
braintree.paypalCheckout.create({
    client: clientInstance
  }, function (paypalCheckoutErr, paypalCheckoutInstance) {
    // Base PayPal SDK script options
    var loadPayPalSDKOptions = {
      currency: 'USD',  // Must match the currency passed in with createPayment
      intent: 'capture' // Must match the intent passed in with createPayment
    }

    paypalCheckoutInstance.loadPayPalSDK(loadPayPalSDKOptions, function () {
      paypal.Buttons({
        fundingSource: paypal.FUNDING.PAYPAL,

        createOrder: function () {
          // Base payment request options for one-time payments
          var createPaymentRequestOptions = {
            flow: 'checkout', // Required
            amount: 10.00, // Required
            currency: 'USD', // Required, must match the currency passed in with loadPayPalSDK

            intent: 'capture', // Must match the intent passed in with loadPayPalSDK
          };

          return paypalCheckoutInstance.createPayment(createPaymentRequestOptions);
        },

        onApprove: function (data, actions) {
          return paypalCheckoutInstance.tokenizePayment(data, function (err, payload) {
            // Submit 'payload.nonce' to your server
          });
        },

        onCancel: function (data) {
          console.log('PayPal payment cancelled', JSON.stringify(data, 0, 2));
        },

        onError: function (err) {
          console.error('PayPal error', err);
        }
      }).render('#paypal-button').then(function () {
        // The PayPal button will be rendered in an html element with the ID
        // 'paypal-button'. This function will be called when the PayPal button
        // is set up and ready to be used
      });
    });
  });

  
// Create a client.
braintree.client.create({
    authorization: CLIENT_AUTHORIZATION
  }).then(function (clientInstance) {
    // Create a PayPal Checkout component.
    return braintree.paypalCheckout.create({
      client: clientInstance
    });
  }).then(function (paypalCheckoutInstance) {
    // Base PayPal SDK script options
    var loadPayPalSDKOptions = {
      currency: 'USD', // Must match the currency passed in with createPayment
      intent: 'capture' // Must match the intent passed in with createPayment
    }
  
    return paypalCheckoutInstance.loadPayPalSDK(loadPayPalSDKOptions);
  }).then(function (paypalCheckoutInstance) {
  
    return paypal.Buttons({
      fundingSource: paypal.FUNDING.PAYPAL,
  
      createOrder: function () {
        // Base payment request options for one-time payments
        var createPaymentRequestOptions = {
          flow: 'checkout', // Required
          amount: 10.00, // Required
          currency: 'USD', // Required, must match the currency passed in with loadPayPalSDK
  
          intent: 'capture', // Must match the intent passed in with loadPayPalSDK
        };
  
        return paypalCheckoutInstance.createPayment(createPaymentRequestOptions);
      },
  
      onApprove: function (data, actions) {
        return paypalCheckoutInstance.tokenizePayment(data).then(function (payload) {
          // Submit 'payload.nonce' to your server
        });
      },
  
      onCancel: function (data) {
        console.log('PayPal payment cancelled', JSON.stringify(data, 0, 2));
      },
  
      onError: function (err) {
        console.error('PayPal error', err);
      }
    }).render('#paypal-button');
  }).then(function () {
    // The PayPal button will be rendered in an html element with the ID
    // 'paypal-button'. This function will be called when the PayPal button
    // is set up and ready to be used
  });
  



