      async function fetchproduct() {
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            const pageproduct = document.getElementById("pro1id");
            for (let i = 0; i < products.length; i++) {
                const pro1 = products[i];
                const pro1div = document.createElement("div");
                pro1div.innerHTML = `
                <h1>${pro1.title}</h1>
                <img src="${pro1.image}" alt="${pro1.title}" >
                <h3>Prise: $${pro1.price}</h3>
                <p>${pro1.description}</p>
                `;
                 pageproduct.appendChild(pro1div);
            }
            

        }
        fetchproduct();
        