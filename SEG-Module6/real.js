// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

var frname = "";
var laname = "";
var sendemail = ""

function selectService(){
    frname = document.getElementById("fname").value
    lname = document.getElementById("lname").value
    ineedemail = document.getElementById("inputEmail4").value
    
    popup = document.getElementById("popup");
    previous = document.getElementById("modalfooter");
    buttons = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;
    previous.innerHTML = buttons;
    
    text = `
    <form>
  <div class="row">
    <div class="col">
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select a Service
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Surgical</a>
      <a class="dropdown-item" href="#">Radiology</a>
      <a class="dropdown-item" href="#">Laser therapy</a>
      <a class="dropdown-item" href="#">Vaccinations</a>
      <a class="dropdown-item" href="#">Grooming</a>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select an Expert
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Shelly O'hare</a>
      <a class="dropdown-item" href="#">Adesh Btenly</a>
      <a class="dropdown-item" href="#">Tim Quikly</a>
    </div>
  </div>
    </div>
  </div>
    <div class="row">
        <div class="col">
            <form id="date" action="/action_page.php">
                <label for="Adate">Appointment Date</label>
                <br>
                <input type="date" id="Adate" name="Adate">
                
            </form>
        </div>
        <div class="col">
            <label for="appt">Choose a time for your meeting:</label>
            <br>

            <input type="time" id="appt" name="appt"
                min="09:00" max="18:00" required>
            <br>
            <small>Office hours are 9am to 6pm</small>

        </div>
    </div>
        

    </form>
    <br>
    <button  class="btn btn-primary" onclick="showPrevious()">Previous</button>
  <button  class="btn btn-primary" onclick="showCreditCard()">Next</button>`
  popup.innerHTML = text;

}

function showPrevious(){
    popup = document.getElementById("popup");
    
    text = `
    <form>
        <div class="form-row">
            <div class="col">
            <label>First Name</label>
            <input type="text"  class="form-control" id="fname" placeholder="First name">
            </div>
            <div class="col">
            <label>Last Name</label>
            <input type="text" class="form-control" id="lname"placeholder="Last name">
            </div>
        </div>
        </form>
        <form>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control one" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Phone Number</label>
            <input type="text" class="form-control phonenum" id="inputPassword4" placeholder="123-456-7890">
            </div>
        </div> 
                                        
        
    </form>
    <span id="validate"> </span>
    <br>
    <button  class="btn btn-primary" onclick="phonenumber()">Next</button>`
  popup.innerHTML = text;
}

function showCreditCard(){

    popup = document.getElementById("popup");
    previous = document.getElementById("modalfooter");
    buttons = `<button type="button" class="btn btn-secondary" onclick="selectService()">Previous</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;

    text = `<div class="row">
    <div class="col">
        
            <div class="card-header">
                <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                    <!-- Credit card form tabs -->
                    <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                        <li class="nav-item"> <a data-toggle="pill" href="#credit-card" class="nav-link active "> <i class="fas fa-credit-card mr-2"></i> Credit Card </a> </li>
                        <li class="nav-item"> <a data-toggle="pill" href="#paypal" class="nav-link "> <i class="fab fa-paypal mr-2"></i> Paypal </a> </li>
                        <li class="nav-item"> <a data-toggle="pill" href="#net-banking" class="nav-link "> <i class="fas fa-mobile-alt mr-2"></i> Net Banking </a> </li>
                    </ul>
                </div> <!-- End -->
                <!-- Credit card form content -->
                <div class="tab-content">
                    <!-- credit card info-->
                    <div id="credit-card" class="tab-pane fade show active pt-3">
                        <form role="form" onsubmit="event.preventDefault()">
                            <div class="form-group"> <label for="username">
                                    <h6>Card Owner</h6>
                                </label> <input type="text" id="username" name="username" placeholder="Card Owner Name" required class="form-control "> </div>
                            <div class="form-group"> <label for="cardNumber">
                                    <h6>Card number</h6>
                                </label>
                                <div class="input-group"> <input type="number" id="creditcard" inputmode="numeric" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" class="form-control " required>
                                    <div class="input-group-append"> <span class="input-group-text text-muted"> <i class="fab fa-cc-visa mx-1"></i> <i class="fab fa-cc-mastercard mx-1"></i> <i class="fab fa-cc-amex mx-1"></i> </span> </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="form-group"> <label><span class="hidden-xs">
                                                <h6>Expiration Date</h6>
                                            </span></label>
                                        <div class="input-group"> <input id="month" type="number" min="1" max="12" placeholder="MM" name="" class="form-control" required> <input type="number" id="year" min="21" max="26"placeholder="YY" name="" class="form-control" required> </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                            <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                        </label> <input id="ccv"type="text" pattern="\d*" required class="form-control"> </div>
                                </div>
                            </div>
                            <div class="card-footer"> <button type="button" class="subscribe btn btn-primary btn-block shadow-sm" onclick="cardnumber()"> Confirm Payment </button>
                            <span id="validate">
                        </form>
                    </div>
                </div> <!-- End -->
                <!-- Paypal info -->
                <div id="paypal" class="tab-pane fade pt-3">
                    <h6 class="pb-2">Select your paypal account type</h6>
                    <div class="form-group "> <label class="radio-inline"> <input type="radio" name="optradio" checked> Domestic </label> <label class="radio-inline"> <input type="radio" name="optradio" class="ml-5">International </label></div>
                    <p> <button type="button" class="btn btn-primary "><i class="fab fa-paypal mr-2"></i> Log into my Paypal</button> </p>
                    <p class="text-muted"> Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                </div> <!-- End -->
                <!-- bank transfer info -->
                <div id="net-banking" class="tab-pane fade pt-3">
                    <div class="form-group "> <label for="Select Your Bank">
                            <h6>Select your Bank</h6>
                        </label> <select class="form-control" id="ccmonth">
                            <option value="" selected disabled>--Please select your Bank--</option>
                            <option>TD</option>
                            <option>RBC</option>
                            <option>BMO</option>
                            
                        </select> </div>
                    <div class="form-group">
                        <p> <button type="button" class="btn btn-primary "><i class="fas fa-mobile-alt mr-2"></i> Proceed Payment</button> </p>
                    </div>
                    <p class="text-muted">Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                </div> <!-- End -->
                <!-- End -->
            </div>
        
    </div>
    </div>`
    
    
    popup.innerHTML = text;
    previous.innerHTML = buttons;
}

function confirmation(){
    document.getElementById("exampleModalLabel").innerHTML = "Booking Confirmation";

    previous = document.getElementById("modalfooter");
    buttons = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;
    popup = document.getElementById("popup");
    previous.innerHTML = buttons;

    var text = `<h1>Hello we have sent you an confimarion email to your address with information about time and date of the appointment. </h1>` 
    popup.innerHTML = text;   


}

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


function phonenumber() {
    var flag = true;
    var phonenum = document.getElementById("inputPassword4").value
    var fname = document.getElementById("fname")
    var lname = document.getElementById("lname")
    var email = document.getElementById("inputEmail4")

    if(fname.value.length == 0){
        document.getElementById("fname").style.borderColor = "red";
        flag = false;
    } else{
        document.getElementById("fname").style.borderColor = "grey";
    }
    if(lname.value.length == 0){
        document.getElementById("lname").style.borderColor = "red";
        flag = false;
    }else{
        document.getElementById("lname").style.borderColor = "grey";
    } 
    if(email.value.length == 0){
        document.getElementById("inputEmail4").style.borderColor = "red";
        flag = false;
    } else{
        document.getElementById("inputEmail4").style.borderColor = "grey";
    }


    
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (re.test(phonenum) && flag){
        selectService();
        document.getElementById("inputPassword4").style.borderColor = "grey";
    }else {
        document.getElementById("inputPassword4").style.borderColor = "red";
        value = "Please fix items highlighted in red. Phone number needs to have 10 digits.";
        var result = value.fontcolor("red");
        
        document.getElementById("validate").innerHTML = result
    };
}

function cardnumber()
{
    var flag = true
    var credit = document.getElementById("creditcard")
    var myccv = document.getElementById("ccv")
    var cardname = document.getElementById("username")
    var month = document.getElementById("month")
    var year = document.getElementById("year")
    var ccv = /^[0-9]{3,4}$/;
    var cardno = /^(?:3[47][0-9]{13})$/;

    if(cardname.value.length == 0){
        document.getElementById("username").style.borderColor = "red";
        flag = false;
    } else{
        document.getElementById("username").style.borderColor = "grey";
    }
    if(month.value.length == 0){
        document.getElementById("month").style.borderColor = "red";
        flag = false;
    }else{
        document.getElementById("month").style.borderColor = "grey";
    } 
    if(year.value.length == 0){
        document.getElementById("year").style.borderColor = "red";
        flag = false;
    } else{
        document.getElementById("year").style.borderColor = "grey";
    }

    if (myccv.value.match(ccv)){
        document.getElementById("ccv").style.borderColor = "grey";
    } else{
        document.getElementById("ccv").style.borderColor = "red";
        flag = false;
    }

    if(credit.value.match(cardno) && flag){
        document.getElementById("creditcard").style.borderColor = "grey";
        confirmation();
    } else{
        document.getElementById("creditcard").style.borderColor = "red";
        value = "Please fix the mistakes highlighted in red. Credit Card number must start in 34 or 37 and must be of length 15";
        var result = value.fontcolor("red");
        
        document.getElementById("validate").innerHTML = result
        
    }
}