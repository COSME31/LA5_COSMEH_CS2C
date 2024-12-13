function hash(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 5;
}

let customerHash = new Array(5).fill(null);

while (true) {
  let customerName = prompt("Enter your name to join the queue:");
  let hashIndex = hash(customerName);

  if (customerHash[hashIndex] === null) {
    customerHash[hashIndex] = customerName;
    alert(`Welcome ${customerName}! Your number is ${hashIndex + 1}.`);
  } else {
    alert("Collision detected. Please try again later.");
  }

  console.log("Updated Hash Table:", customerHash);

  let serviceNumber = parseInt(prompt("Enter the number of the customer to be serviced:"));

  if (serviceNumber > 0 && serviceNumber <= 5) {
    let hashIndex = serviceNumber - 1;
    if (customerHash[hashIndex] !== null) {
      let servicedCustomer = customerHash[hashIndex];
      alert(`Servicing customer ${serviceNumber}: ${servicedCustomer}`);
      customerHash[hashIndex] = null;
      console.log("Updated Hash Table:", customerHash);
    } else {
      alert(`No customer with number ${serviceNumber} in the queue.`);
    }
  } else {
    alert("Invalid service number. Please enter a valid number.");
  }

  if (customerHash.every(name => name === null)) {
    alert("Queue is empty. Exiting program.");
    break;
  }
}
