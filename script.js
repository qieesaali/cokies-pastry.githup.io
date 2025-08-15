let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + " telah ditambahkan ke keranjang!");
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
    } else {
        alert("Checkout berhasil! Produk: " + cart.join(", "));
        cart = [];
    }
}

// Form Kritik & Saran
document.getElementById('kritikForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Terima kasih atas kritik & saran Anda!");
    this.reset();
});

// Form Testimoni
document.getElementById('testimoniForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = this.querySelector('input').value;
    const pesan = this.querySelector('textarea').value;
    const list = document.getElementById('testimoniList');
    const div = document.createElement('div');
    div.classList.add('testimoni-item');
    div.innerHTML = `<strong>${nama}</strong>: <p>${pesan}</p>`;
    list.appendChild(div);
    this.reset();
});
