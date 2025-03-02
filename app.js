const menu = [
    { id: 1, title: "Soup of the day", category: "starters", price: "Rs500", description: "Freshly made soup with seasonal ingredients",img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, title: "Bruschetta", category: "starters", price: "Rs700", description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and mozzarella",img: "https://www.allrecipes.com/thmb/kt9t899s87rKleitZiaUwWOoNJI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3605381-b506207e5f494e44a7cf5c1bbe488748.jpg" },
    { id: 3, title: "Chicken Parmesan", category: "mains", price: "Rs1004", description: "Crispy chicken topped with tomato sauce and mozzarella, served with spaghetti",img: "https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=" },
    { id: 4, title: "Steak Frites", category: "mains", price: "Rs1500", description: "Grilled steak served with french fries and salad" , img: "https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk="},
    { id: 5, title: "Chocolate Lava Cake", category: "desserts", price: "Rs700", description: "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream" , img: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?b=1&s=170667a&w=0&k=20&c=6NPIcP8XUG4WwbJU-qfLOEP07aU79doAIsqZ8wic478="},
    { id: 6, title: "Apple Pie", category: "desserts", price: "Rs500", description: "Classic apple pie with a flaky crust, served with whipped cream", img: "https://plus.unsplash.com/premium_photo-1666353535417-c86616951727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    { id: 7, title: "Vegan Burger", category: "mains", price: "Rs850", description: "Plant-based burger served with fries", img: "https://plus.unsplash.com/premium_photo-1664648063589-76b97669bc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 8, title: "Caesar Salad", category: "starters", price: "Rs550", description: "Fresh romaine lettuce with Caesar dressing, parmesan, and croutons", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 9, title: "Spaghetti Carbonara", category: "mains", price: "Rs600", description: "Classic carbonara with pancetta, egg, hard cheese, and pepper", img: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWdoZXR0aSUyMGNhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 10, title: "Tiramisu", category: "desserts", price: "Rs550", description: "Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 11, title: "Iced Coffee", category: "beverages", price: "Rs850", description: "Chilled coffee served with ice and cream", img: "https://media.istockphoto.com/id/170428990/photo/iced-mocha.webp?b=1&s=170667a&w=0&k=20&c=ItUVpbetBvrKaKcJySbepwehwa2JIJjSOqzHulpvJY0=" },
    { id: 12, title: "Mango Lassi", category: "beverages", price: "Rs300", description: "Refreshing Indian drink made with mango and yogurt", img: "https://media.istockphoto.com/id/1217751214/photo/fresh-mango-lassi-and-mango-fruit.webp?b=1&s=170667a&w=0&k=20&c=Jt0J70BwVkGdirVAu78hKb-MiMzN3_GUbCz8SmGUdS8=" },
    { id: 13, title: "Green Tea", category: "beverages", price: "Rs250", description: "Traditional green tea with antioxidants", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  ];
  
 
  
    //   return `<div class="menu-item col-12 col-md-6 col-lg-4">
    //   <div class="card">
    //     <img src="${item.img}" class="card-img-top" alt="${item.title}">
    //     <div class="card-body">
    //       <h5 class="card-title">${item.title}</h5>
    //       <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
    //       <p class="card-text">${item.description}</p>
    //       <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
    //     </div>
    //   </div>
    // </div>
    // `
    var sidebar= document.querySelector('.sidebar');
    var navbar= document.querySelector('#openNav');
    
    
    
    function openNav(){
      navbar.addEventListener('click',function(){
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
          sidebar.style.display = 'flex';
      } else {
          sidebar.style.display = 'none';
      }
      });
    
      document.addEventListener("click", function(event) {
        var isClickInsideNavbar = sidebar.contains(event.target);
        var isClickInsideHamburger = navbar.contains(event.target);
    
        if (!isClickInsideNavbar && !isClickInsideHamburger) {
            sidebar.style.display = 'none';
        }
    });
    
    }
openNav();



function showCards(){
  var clutter="";
  menu.forEach(function(item){
    clutter+=`<div class="menu-item col-xs-12 col-sm-8 col-md-4 col-lg-3">
    <div class="card">
      <img src="${item.img}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
        <p class="card-text">${item.description}</p>
        <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
      </div>
    </div>
  </div>
  `
 document.querySelector('.cards-container').innerHTML= clutter;
})
}

showCards() 
  

// Search input for sidebar 
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase(); // Convert search value to lowercase for case-insensitive search
  menu.forEach((item) => {
    const isVisible = item.title.toLowerCase().includes(value) || item.category.toLowerCase().includes(value); // Perform case-insensitive search
    const card = document.querySelector(`[alt="${item.title}"]`).closest('.menu-item'); // Select the parent card element
    card.classList.toggle("hide", !isVisible); // Toggle the hide class on the card element
  });
});

// Search input for main Navbar
const search = document.querySelector('#search-input');

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase(); // Convert search value to lowercase for case-insensitive search
  menu.forEach((item) => {
    const isVisible = item.title.toLowerCase().includes(value) || item.category.toLowerCase().includes(value); // Perform case-insensitive search
    const card = document.querySelector(`[alt="${item.title}"]`).closest('.menu-item'); // Select the parent card element
    card.classList.toggle("hide", !isVisible); // Toggle the hide class on the card element
  });
});

// Function to show all menu items
function showAll() {
  const cards = document.querySelectorAll('.menu-item');
  cards.forEach((card) => {
    card.classList.remove('hide');
  });
}

// Function to show menu items of a specific category
function showCategory(category) {
  const cards = document.querySelectorAll('.menu-item');
  cards.forEach((card) => {
    const cardCategory = card.querySelector('.card-text small').innerText.split(': ')[1].toLowerCase();
    if (cardCategory === category.toLowerCase()) {
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    }
  });
}

// Event listener for 'All' anchor tag in sidebar
document.querySelector('.all').addEventListener('click', () => {
  showAll();
});

// Event listeners for category anchor tags
document.querySelector('.starters').addEventListener('click', () => {
  showCategory('Starters');
});

document.querySelector('.mains').addEventListener('click', () => {
  showCategory('Mains');
});

document.querySelector('.beverages').addEventListener('click', () => {
  showCategory('Beverages');
});

document.querySelector('.desserts').addEventListener('click', () => {
  showCategory('Desserts');
});



   



// Event listener for 'All' anchor tag in main navbar
document.getElementById('all').addEventListener('click', () => {
  showAll();
});

// Event listeners for category anchor tags
document.getElementById('starters').addEventListener('click', () => {
  showCategory('Starters');
});

document.getElementById('mains').addEventListener('click', () => {
  showCategory('Mains');
});

document.getElementById('beverages').addEventListener('click', () => {
  showCategory('Beverages');
});

document.getElementById('desserts').addEventListener('click', () => {
  showCategory('Desserts');
});
  
  
  
  