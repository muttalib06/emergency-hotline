// heart btn functionalities here
const btns = document.getElementsByClassName("heart-btn");
for (const btn of btns) {
  btn.addEventListener("click", function () {
    const heartNumber = document.getElementById("heart-count-number");
    const heartCountNumber = Number(heartNumber.innerText);
    const clickingNumberOfHeart = heartCountNumber + 1;
    heartNumber.innerText = clickingNumberOfHeart;
  });
}

//call button functionalities here

document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("card-call-btn")) {
      const callBtn = e.target;
      const serviceName = callBtn.parentNode.parentNode.children[1].innerText;
      const serviceNumber = callBtn.parentNode.parentNode.children[3].innerText;
      const coin = document.getElementById("coin-number");
      const coinNumber = Number(coin.innerText);
      if (coinNumber < 20) {
        alert("Your coin is less than 20");
        return;
      }

      alert(
        "service name: " +
          serviceName +
          " || " +
          "service number:" +
          serviceNumber
      );

      const reduceCoin = coinNumber - 20;
      coin.innerText = reduceCoin;
      const now = new Date();
      const timeStr = now.toLocaleTimeString();

      const callHistoryContainer = document.getElementById(
        "call-history-container"
      );
      const div = document.createElement("div");
      div.innerHTML = `
         <div
            class="bg-gray-100 rounded-lg p-3 flex justify-between items-center mt-2"
          >
            <div>
              <h3 class="font-bold text-xs">${serviceName}</h3>
              <h2 class="font-bold text-xs text-gray-400">${serviceNumber}</h2>
            </div>
            <p class="text-xs">${timeStr}</p>
          </div>
        
        
        `;
      callHistoryContainer.appendChild(div);
    }
  });

//   clear button functionalities here

document.getElementById("clear-btn").addEventListener("click", function () {
  const callHistoryContainer = document.getElementById(
    "call-history-container"
  );
  callHistoryContainer.innerHTML = "";
});

// copy button functionalities

document
  .getElementById("card-container")
  .addEventListener("click", async function (e) {
    if (e.target.className.includes("card-copy-btn")) {
      const copyBtn = e.target;
      const hotlineNumber = copyBtn.parentNode.parentNode.children[3].innerText;
      const copyNumber = document.getElementById("copy-number");
      const copyNumberCount = Number(copyNumber.innerText);
      const increaseCopyNumber = copyNumberCount + 1;
      copyNumber.innerText = increaseCopyNumber;
      try {
        await navigator.clipboard.writeText(hotlineNumber);
        alert(hotlineNumber + " is copied");
      } catch (err) {
        alert("copy failed");
      }
    }
  });
