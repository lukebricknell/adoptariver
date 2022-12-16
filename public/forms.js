"use strict";

const creditForm = document.querySelector("#credit-form");
const thankYouMsg = document.querySelector("#thank-you-msg");
const donationAmt = document.querySelector("#donation-amount");
const firstName = document.querySelector("#name");
const email = document.querySelector("#email");
const submit = document.querySelector("#submit-btn");

const crypto = require("crypto");

const generateSignature = (data, passPhrase = null) => {
  // Create parameter string
  let pfOutput = "";
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key] !== "") {
        pfOutput += `${key}=${encodeURIComponent(data[key].trim()).replace(
          /%20/g,
          "+"
        )}&`;
      }
    }
  }

  // Remove last ampersand
  let getString = pfOutput.slice(0, -1);
  if (passPhrase !== null) {
    getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(
      /%20/g,
      "+"
    )}`;
  }

  return crypto.createHash("md5").update(getString).digest("hex");
};

const myData = {};
// Merchant details
myData["merchant_id"] = "17666473";
myData["merchant_key"] = "qhioe2p0spns9";
myData["return_url"] = "http://www.yourdomain.co.za/return_url";
myData["cancel_url"] = "http://www.yourdomain.co.za/cancel_url";
myData["notify_url"] = "http://www.yourdomain.co.za/notify_url";
// Transaction details

// myData["amount"] = donationAmt.value;
// myData["item_name"] = "Donation";
// myData["name_first"] = firstName.value;
// myData["email_address"] = email.value;

myData["amount"] = "100";
myData["item_name"] = "Donation";
// Buyer details
myData["name_first"] = "Test";
myData["email_address"] = "Test@adopt.com";

// Generate signature
const myPassphrase = "Ad0p/aQr1_3r./";
myData["signature"] = generateSignature(myData, myPassphrase);
document.getElementById("signature").value = myData["signature"];

let htmlForm = `<form action="https://payfast.co.za/eng/process" method="post">`;
for (let key in myData) {
  if (myData.hasOwnProperty(key)) {
    value = myData[key];
    if (value !== "") {
      htmlForm += `<input name="${key}" type="hidden" value="${value.trim()}" />`;
    }
  }
}

htmlForm += '<input type="submit" value="Pay Now" /></form>';

const result = fetch("https://payfast.co.za​/eng/process", {
  method: "POST",
  body: JSON.stringify(myData),
}).then((res) => console.log(res));
