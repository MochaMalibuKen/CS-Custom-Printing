import { useState } from 'react'
import { products, money, selectedItems, subtotal, buildOrderHref } from './data/orderData'

export default function Order() {
  const [quantities, setQuantities] = useState({})
  const [notes, setNotes] = useState({})
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '', address: '', notes: '' })
  const [prepared, setPrepared] = useState(false)
  const selected = selectedItems(quantities)
  const updateCustomer = (event) => setCustomer({ ...customer, [event.target.name]: event.target.value })

  function submitOrder(event) {
    event.preventDefault()
    if (!selected.length) return
    window.location.href = buildOrderHref(customer, quantities, notes)
    setPrepared(true)
  }

  return <section className="section order-section" id="order" aria-labelledby="order-heading">
    <div className="section-heading"><div><p className="eyebrow">Your design. Your everyday favorite.</p><h2 id="order-heading">Make it yours.</h2></div><p>Explore our prices, choose your quantities, and tell us what you have in mind. We’ll confirm the details with you by email.</p></div>
    <div className="order-showcase"><img src="/portfolio/customized tumblers.png" alt="Personalized tumblers featuring photos, school colors, and organization designs" loading="lazy" /><div><p className="eyebrow">Made personal</p><h3>A little inspiration.<br />Endless possibilities.</h3><p>Favorite teams. Family memories. Your business or organization. Bring your idea to a tumbler, tee, or custom design.</p><a className="text-link" href="#order-products">See prices & build your order ↓</a></div></div>
    <form className="order-layout" onSubmit={submitOrder} onChange={() => setPrepared(false)}>
      <div className="order-products" id="order-products"><h3>01 / Choose your products</h3><p className="order-hint">Prices are per item. Set a quantity to add a product.</p>
        <div className="product-grid">{products.map((product) => <article className={`product-card${Number(quantities[product.id]) > 0 ? ' selected' : ''}`} key={product.id}>
          <div className="product-heading"><h4>{product.name}</h4><p>{money(product.price)}<small>each</small></p></div>
          <label className="quantity-label" htmlFor={`qty-${product.id}`}>Quantity<input id={`qty-${product.id}`} type="number" min="0" max="999" step="1" inputMode="numeric" value={quantities[product.id] ?? 0} onChange={(event) => setQuantities({ ...quantities, [product.id]: event.target.value })} /></label>
          {Number(quantities[product.id]) > 0 && <label className="product-notes">{product.id === 'tee' ? 'Sizes, colors & design' : 'Design / notes'}<textarea rows="2" maxLength="300" value={notes[product.id] || ''} onChange={(event) => setNotes({ ...notes, [product.id]: event.target.value })} placeholder={product.id === 'tee' ? 'Example: 2 large, navy, family reunion design' : 'Names, colors, artwork, or inspiration'} /></label>}
        </article>)}</div>
      </div>
      <aside className="order-summary"><h3>02 / Your order</h3>
        <div className="order-totals" aria-live="polite" aria-atomic="true">{selected.length ? <ul>{selected.map((product) => <li key={product.id}><span>{quantities[product.id]} × {product.name}</span><strong>{money(quantities[product.id] * product.price)}</strong></li>)}</ul> : <p>Choose a quantity to start your order.</p>}<div className="subtotal"><span>Product subtotal</span><strong>{money(subtotal(quantities))}</strong></div></div>
        <p className="order-hint">Tax and any delivery charges will be confirmed with your order.</p>
        <div className="customer-fields"><h3>03 / Your details</h3>
          <label>Name<input name="name" autoComplete="name" value={customer.name} onChange={updateCustomer} maxLength="100" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" value={customer.email} onChange={updateCustomer} maxLength="150" required /></label>
          <label>Phone<input name="phone" type="tel" autoComplete="tel" value={customer.phone} onChange={updateCustomer} maxLength="40" required /></label>
          <label>Mailing address (optional)<textarea name="address" autoComplete="street-address" rows="2" value={customer.address} onChange={updateCustomer} maxLength="300" placeholder="Street, city, state, ZIP" /></label>
          <label>Order notes (optional)<textarea name="notes" rows="3" value={customer.notes} onChange={updateCustomer} maxLength="500" placeholder="Your deadline, pickup or delivery preference, and other details" /></label>
        </div>
        <button className="button" type="submit" disabled={!selected.length}>Email Order Request →</button>
        <p className="order-hint">Opens your email app with your itemized request. Attach any artwork, then send it to cscustomprinting@yahoo.com. Your order is confirmed after we reply.</p>
        {prepared && <p className="order-feedback" role="status">Your email draft is ready to open. Send it from your email app to complete your request. If it didn’t open, contact <a href="mailto:cscustomprinting@yahoo.com">cscustomprinting@yahoo.com</a> or call <a href="tel:+18033576530">803-357-6530</a>.</p>}
      </aside>
    </form>
  </section>
}
