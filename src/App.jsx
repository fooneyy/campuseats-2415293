import { useState, useEffect } from 'react'
import { Loading, ErrorMessage } from './components/Status.jsx'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuList from './components/MenuList.jsx'
import Footer from './components/Footer.jsx'
import CartPage from './components/CartPage.jsx'
function App() {
const [vendors, setVendors] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [reloadKey, setReloadKey] = useState(0)
const [selectedVendorId, setSelectedVendorId] = useState('')
const [cart, setCart] = useState([])
const [view, setView] = useState('menu')
const selectedVendor = vendors.find((v) => v.id === selectedVendorId)
const cartCount = cart.reduce((total, line) => total + line.qty, 0)
const [lastOrder, setLastOrder] = useState(null)

 function handlePlaceOrder(details) {
 const total = 0 // TODO: same reduce as CartPage
 setLastOrder({ ...details, total })
 setCart([])
 setView('done')
}

 function handleAddToCart(item) {
  setCart((prevCart) => {
    const existing = prevCart.find(
      (line) => line.item.id === item.id
    )

    if (existing) {
      return prevCart.map((line) =>
        line.item.id === item.id
          ? { ...line, qty: line.qty + 1 }
          : line
      )
    }

    return [...prevCart, { item, qty: 1 }]
  })
}
function handleChangeQty(itemId, delta) {
  setCart((prevCart) =>
    prevCart
      .map((line) =>
        line.item.id === itemId
          ? { ...line, qty: line.qty + delta }
          : line
      )
      .filter((line) => line.qty > 0)
  )
}

function handleRemove(itemId) {
  setCart((prevCart) =>
    prevCart.filter((line) => line.item.id !== itemId)
  )
}

 return (
 <>
<Header
  cartCount={cartCount}
  onShowMenu={() => setView('menu')}
  onShowCart={() => setView('cart')}
/> <main className="container">
 <section>
 <h2 className="section-title">Choose a vendor</h2>
 <div className="vendor-grid">
 {vendors.map((vendor) => (
 <VendorCard
 key={vendor.id}
 vendor={vendor}
 isSelected={vendor.id === selectedVendorId}
 onSelect={setSelectedVendorId}
 />
 ))}
 </div>
 </section>
 <section>
 <h2 className="section-title">Menu: {selectedVendor.name}</h2>
 <MenuList items={selectedVendor.menu} onAdd={handleAddToCart} />
 </section>
 </main>
 <Footer />
 </>
 )
}
export default App
