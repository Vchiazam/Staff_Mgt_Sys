let userName = document.querySelector(".Username");
let passWord = document.querySelector(".password");
let submitBtn = document.querySelector(".LoginBtn");
let error = document.querySelector(".Error");
let errorP = document.getElementById("Error");
let showP = document.querySelector(".show_hide");
let hideP = document.querySelector(".show_hide1");
let Admin = document.querySelector("section");
let AdminBtn = document.querySelector(".Admin_btn");
let popAdmin = false;
window.addEventListener("resize", function () {
  var img = document.getElementById("myImage");
  var breakpoint = 768; // Define your desired breakpoint here

  if (window.innerWidth < breakpoint) {
    img.src =
      "https://res.cloudinary.com/dgj2rhqd0/image/upload/v1685875932/ph222222222222-1_qyz8kt.jpg"; // Change the URL for mobile
  } else {
    img.src =
      "https://res.cloudinary.com/dgj2rhqd0/image/upload/v1685871775/ph00000000000000-1_p4iucz.jpg"; // Change the URL for desktop
  }
});
AdminBtn.addEventListener("click", () => {
  if (popAdmin === false) {
    popAdmin = true;
    Admin.style.display = "flex";
    document.body.style.overflow = "hidden";
  } else {
    popAdmin = false;
    Admin.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

let show_hide = true;
showP.addEventListener("click", () => {
  passWord.type = "password";
  if (show_hide === false)
    (showP.style.display = ""), (hideP.style.display = "");
});
hideP.addEventListener("click", () => {
  passWord.type = "text";
  show_hide = false;
  if (show_hide === false)
    (hideP.style.display = "none"), (showP.style.display = "inline");
});
function checkNull() {
  if (submitBtn.value !== null)
    return (
      //   (useError.style.display = "none"),
      (error.style.display = "none"), (errorP.style.display = "none")
      //   (AError.style.display = "none")
    );
}

submitBtn.onclick = function (event) {
  event.preventDefault();
  if (userName.value === "")
    return (error.style.display = "flex"), (userName.onkeyup = checkNull);
  else if (passWord.value === "")
    return (errorP.style.display = "flex"), (passWord.onkeyup = checkNull);
  // console.log(button1.value)
  else if (submitBtn.value !== null) return login();
};
function login() {
  console.log("submited");
  //   const data = { name: button1.value, password: button2.value };
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "appliction/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         alert("nom");
  //       }
  //     })
  //     .then((jsonResponse) => {
  //       console.log(jsonResponse);
  //       const getToken = jsonResponse["token"];
  //       const user = jsonResponse["user"];
  //       const message = jsonResponse["mess"];
  //       const getLevel = jsonResponse["level"];
  //       // console.log(getToken);

  //       if (document.cookie === "") {
  //         let cookieHolder = {
  //           user: "",
  //           Admin: "",
  //         };

  //         let cookieString = JSON.stringify(cookieHolder);
  //         console.log(cookieString);
  //         document.cookie = cookieString;
  //       }
  //       let userToken = JSON.parse(document.cookie);

  //       if (message === "wrong password")
  //         return (PError.style.display = "inline"), (button2.onkeyup = checkNull);
  //       else if (message === `user doesn't exist`)
  //         return (AError.style.display = "inline"), (button1.onkeyup = checkNull);

  //       let cookieHolder = {
  //         user: getToken,
  //         Admin: userToken["Admin"],
  //       };

  //       let cookieString = JSON.stringify(cookieHolder);
  //       console.log(cookieString);
  //       document.cookie = cookieString;
  //       if (cookieHolder["user"] !== null)
  //         window.location = "http://127.0.0.1:5503/dashboard.html?token=";

  //       // // let obj = JSON.parse(document.cookie)
  //       // console.log(obj)
  //       // if (getToken !== null)
  //       //     document.cookie = getToken
  //       // if (getToken === document.cookie)
  //       //     window.location = 'http://127.0.0.1:5503/dashboard.html?token=' + getToken
  //       // else
  //       //     window.location = 'http://127.0.0.1:5503/login.html'
  //     })
  //     .catch((err) => console.error(err));
}
