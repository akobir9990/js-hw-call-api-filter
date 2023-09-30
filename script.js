let url = "https://course-api.com/javascript-store-products";

const content = document.getElementById("content");
const input = document.getElementById("search");
const all = document.getElementById("all");
const ikea = document.getElementById("ikea");
const marcos = document.getElementById("marcos");
const caressa = document.getElementById("caressa");
const liddy = document.getElementById("liddy");

let fetchAPI = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA Id => ", data);

      let allDate = data
        .map((item) => {
          console.log();
          return `
          <div
          id="product"
          style="
            background-image: url(${item.fields.image[0].url});
            background-size: cover;
            background-position: center;
          "
        >
          <div class="info">
            <p>Name: ${item.fields.name}</p>
            <p>Company: ${item.fields.company}</p>
            <p>Price: ${item.fields.price}</p>
          </div>
        </div>
        `;
        })
        .join("");
      content.innerHTML = allDate;
    });
};

window.addEventListener("DOMContentLoaded", fetchAPI());

// input.addEventListener("keyup", (event) => {
//   content.innerHTML = "";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       let filtered = [];
//       let val = event.target.value;
//       for (let i = 0; i < data.length; i++) {
//         if (val === data[i].fields.name) {
//           filtered.push(data[i]);
//           console.log("from success", data[i]);
//         } else {
//           console.log("from error", data[i]);
//           content.innerHTML = `
//             <h1 style="color:red">Sorry we do not have that thing</h1>
//           `;
//         }
//       }
//       content.innerHTML = filtered;
//     });
// });

ikea.addEventListener("click", () => {
  content.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let ideasData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].fields.company == "ikea") {
          ideasData.push(data[i]);
        }
      }
      let ikeaData = ideasData
        .map((item) => {
          return `
        <div
        id="product"
        style="
          background-image: url(${item.fields.image[0].url});
          background-size: cover;
          background-position: center;
        "
      >
        <div class="info">
          <p>Name: ${item.fields.name}</p>
          <p>Company: ${item.fields.company}</p>
          <p>Price: ${item.fields.price}</p>
        </div>
      </div>
        `;
        })
        .join("");
      content.innerHTML = ikeaData;
    });
});
marcos.addEventListener("click", () => {
  content.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let ideasData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].fields.company == "marcos") {
          ideasData.push(data[i]);
        }
      }
      let ikeaData = ideasData
        .map((item) => {
          return `
        <div
        id="product"
        style="
          background-image: url(${item.fields.image[0].url});
          background-size: cover;
          background-position: center;
        "
      >
        <div class="info">
          <p>Name: ${item.fields.name}</p>
          <p>Company: ${item.fields.company}</p>
          <p>Price: ${item.fields.price}</p>
        </div>
      </div>
        `;
        })
        .join("");
      content.innerHTML = ikeaData;
    });
});
caressa.addEventListener("click", () => {
  content.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let ideasData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].fields.company == "caressa") {
          ideasData.push(data[i]);
        }
      }
      let ikeaData = ideasData
        .map((item) => {
          return `
        <div
        id="product"
        style="
          background-image: url(${item.fields.image[0].url});
          background-size: cover;
          background-position: center;
        "
      >
        <div class="info">
          <p>Name: ${item.fields.name}</p>
          <p>Company: ${item.fields.company}</p>
          <p>Price: ${item.fields.price}</p>
        </div>
      </div>
        `;
        })
        .join("");
      content.innerHTML = ikeaData;
    });
});
liddy.addEventListener("click", () => {
  content.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let ideasData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].fields.company == "liddy") {
          ideasData.push(data[i]);
        }
      }
      let ikeaData = ideasData
        .map((item) => {
          return `
        <div
        id="product"
        style="
          background-image: url(${item.fields.image[0].url});
          background-size: cover;
          background-position: center;
        "
      >
        <div class="info">
          <p>Name: ${item.fields.name}</p>
          <p>Company: ${item.fields.company}</p>
          <p>Price: ${item.fields.price}</p>
        </div>
      </div>
        `;
        })
        .join("");
      content.innerHTML = ikeaData;
    });
});
all.addEventListener("click", () => {
  content.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let allDate = data
        .map((item) => {
          return `
        <div
        id="product"
        style="
          background-image: url(${item.fields.image[0].url});
          background-size: cover;
          background-position: center;
        "
      >
        <div class="info">
          <p>Name: ${item.fields.name}</p>
          <p>Company: ${item.fields.company}</p>
          <p>Price: ${item.fields.price}</p>
        </div>
      </div>
        `;
        })
        .join("");
      content.innerHTML = allDate;
    });
});

input.addEventListener("keyup", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let inpVal = input.value.toLowerCase();
      let filteredItems = data
        .map((item) => {
          if (inpVal == item.fields.company) {
            return `
            <div
            id="product"
            style="
              background-image: url(${item.fields.image[0].url});
              background-size: cover;
              background-position: center;
            "
          >
            <div class="info">
              <p>Name: ${item.fields.name}</p>
              <p>Company: ${item.fields.company}</p>
              <p>Price: ${item.fields.price}</p>
            </div>
          </div>
            `;
          }
        })
        .join("");
      content.innerHTML = filteredItems;
    });
});
