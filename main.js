const category = document.querySelector(".category");

const API = "http://localhost:3001/category";

const getData = async () => {
  const bd = await fetch(API)
    .then((resp) => resp.json())
    .then((data) => data);
  console.log(bd);
  bd.map(
    (item) =>
      (category.innerHTML += ` 
      <li>${item.name} 
        <ul>${item.categories.map(
          (item) =>
            `<li>${item.name} 
                    <ul>${item.categories.map(
                      (item) => `<li>${item.name}</li>`
                    )}
                    </ul>
                </li>`
        )}</ul> 
      </li>`)
  );
};
getData();
