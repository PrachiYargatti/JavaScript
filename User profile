let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let img_container = document.getElementById("imgContainer");
img_container.style.textAlign = "center";

let imgElement = document.createElement("img");
imgElement.src = profileDetails.imgSrc;
imgElement.style.width = "50%";
imgElement.style.marginLeft = "auto";
imgElement.style.marginRight = "auto";
imgElement.style.marginTop = "20%";
img_container.appendChild(imgElement);

let headingElement = document.createElement("h3");
headingElement.textContent = profileDetails.name;
headingElement.style.fontFamily = "Roboto";
img_container.appendChild(headingElement);

let paragraphElement = document.createElement("p");
paragraphElement.style.fontWeight = "Bold";
paragraphElement.style.fontSize = "20px";
paragraphElement.textContent = "Age : " + profileDetails.age;
img_container.appendChild(paragraphElement);
