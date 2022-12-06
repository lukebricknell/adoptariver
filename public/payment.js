"use strict";

const paymentWidget = new zapper.payments.PaymentWidget("body", {
  merchantId: 17212,
  siteId: 15076,
  amount: 9.99,
  reference: "REF-001",
});

paymentWidget.on("payment", ({ status, paidAmount, zapperId, reference }) => {
  console.log(`Received payment of ${paidAmount} with reference ${reference}!`);
});
