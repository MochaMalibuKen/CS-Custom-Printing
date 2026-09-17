export const products = [
  { id: 'four-in-one', name: '4-in-1 Beverage Holder', price: 30 },
  { id: '20oz', name: '20 oz Tumbler', price: 30 },
  { id: '30oz', name: '30 oz Tumbler', price: 40 },
  { id: '40oz', name: '40 oz Tumbler', price: 60 },
  { id: 'bluetooth', name: '20 oz Bluetooth Speaker Tumbler', price: 60 },
  { id: 'hydro', name: '25 oz Hydro Handle Bottle', price: 40 },
  { id: 'tee', name: 'Tee Shirt', price: 25 },
  { id: 'dtf', name: 'DTF', price: 15 },
]

export const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
export const selectedItems = (quantities) => products.filter((product) => Number(quantities[product.id]) > 0)
export const subtotal = (quantities) => selectedItems(quantities).reduce((sum, product) => sum + product.price * Number(quantities[product.id]), 0)

export function buildOrderHref(customer, quantities, notes) {
  const body = [
    'Custom order request', '',
    `Name: ${customer.name}`, `Email: ${customer.email}`, `Phone: ${customer.phone}`,
    `Address: ${customer.address || 'Not provided'}`, '',
    ...selectedItems(quantities).flatMap((product) => [
      `${product.name} — ${quantities[product.id]} × ${money(product.price)} = ${money(quantities[product.id] * product.price)}`,
      `Design / notes: ${notes[product.id] || 'To be discussed'}`,
    ]), '',
    `Product subtotal: ${money(subtotal(quantities))}`,
    'Tax and any delivery charges to be confirmed.', '',
    `Order notes: ${customer.notes || 'None'}`,
  ].join('\n')
  return `mailto:cscustomprinting@yahoo.com?subject=${encodeURIComponent('Custom Printing Order Request')}&body=${encodeURIComponent(body)}`
}
