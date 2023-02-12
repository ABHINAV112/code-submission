const globals = {
    ethAddress: "",
    amount: 0,
    otp: 0
}

const submitEthForm = () => {
    console.log("Submitting form");
    globals.ethAddress = document.getElementById("input-address").value;
    globals.amount = document.getElementById("input-amount").value;

    if (globals.ethAddress == "" || globals.amount == "" || globals.amount == "0") {
        alert("Invalid input");
        return false;
    }

    return loadInto("otp-form");
}

const submitOtp = () => {

    document.getElementById("congrats-address").innerText = globals.ethAddress;
    document.getElementById("congrats-amount").innerText = globals.amount;
    return loadInto("congrats-screen");
}

const loadInto = (into) => {
    unhide("loading");
    setTimeout(() => unhide(into), 1000);
    return false;
}


const unhide = (id) => {
    const containers = document.getElementsByClassName("section");
    console.log(containers);
    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.add("hide");
        if (containers[i].id == id) {
            containers[i].classList.remove("hide");
        }
    }
}

