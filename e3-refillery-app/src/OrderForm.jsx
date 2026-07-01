import React, { useState } from 'react';
import { useCart } from './CartContext';
import './CartDrawer.css';

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  fulfillment: 'pickup',
  address: '',
};

const OrderForm = ({ isOpen, onClose, onBack }) => {
  const { items, clearCart } = useCart();
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const buildMessage = () => {
    const itemLines = items.map(item => {
      const meta = [];
      if (item.scent) meta.push(`Scent: ${item.scent}`);
      meta.push(`Size: ${item.sizeLabel}`);
      meta.push(`$${item.unitPrice.toFixed(2)} ea → $${(item.unitPrice * item.qty).toFixed(2)}`);
      return `${item.qty}× ${item.name}\n   ${meta.join(' | ')}`;
    });

    const fulfillmentLabel =
      form.fulfillment === 'pickup' ? 'Tuesday Pickup (free)' : 'Wednesday Delivery';

    return [
      'ORDER SUMMARY',
      '=============',
      ...itemLines,
      '',
      `Indicative Subtotal: $${subtotal.toFixed(2)}`,
      '',
      'CUSTOMER DETAILS',
      '================',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Fulfillment: ${fulfillmentLabel}`,
      form.fulfillment === 'delivery' ? `Delivery Address: ${form.address}` : null,
    ]
      .filter(line => line !== null)
      .join('\n');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'cf52fe92-f3a2-49c7-a4d2-d93c46454d12',
          subject: 'New e3 Refillery order',
          name: form.name,
          email: form.email,
          message: buildMessage(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        clearCart();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    if (status === 'success') setForm(EMPTY_FORM);
    setStatus('idle');
    onClose();
  };

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        className={`cart-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Place your order"
      >
        {status === 'success' ? (
          <>
            <div className="cart-drawer-header">
              <h2>Order Sent!</h2>
              <button className="cart-close-btn" onClick={handleClose} aria-label="Close">✕</button>
            </div>
            <div className="cart-drawer-body order-success">
              <div className="success-checkmark">✓</div>
              <h3>Thank you, {form.name.split(' ')[0]}!</h3>
              <p>
                Your order has been sent to Anna. She'll review your items,
                confirm the total and any delivery fee, then email you a payment
                link to complete your purchase.
              </p>
              <p className="success-sub">Check your inbox at <strong>{form.email}</strong>.</p>
              <button className="cart-checkout-btn" onClick={handleClose}>
                Back to Shop
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cart-drawer-header">
              <button className="cart-back-btn" onClick={onBack} aria-label="Back to cart">
                ← Cart
              </button>
              <h2>Your Order</h2>
              <button className="cart-close-btn" onClick={handleClose} aria-label="Close">✕</button>
            </div>

            <div className="cart-drawer-body">
              {/* Compact order summary */}
              <div className="order-summary-compact">
                {items.map((item, idx) => (
                  <div key={idx} className="order-summary-line">
                    <span>
                      {item.qty}× {item.name}
                      {item.scent ? ` (${item.scent})` : ''}
                      {' — '}{item.sizeLabel}
                    </span>
                    <span>${(item.unitPrice * item.qty).toFixed(2)}</span>
                  </div>
                ))}
                <div className="order-summary-subtotal">
                  <span>Indicative Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <p className="cart-invoice-note">
                  Anna will confirm your final total and any delivery fee in your invoice.
                </p>
              </div>

              {/* Order form */}
              <form onSubmit={handleSubmit} className="order-form" noValidate>
                <div className="form-field">
                  <label htmlFor="of-name">Name *</label>
                  <input
                    id="of-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={set('name')}
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="of-email">Email *</label>
                  <input
                    id="of-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={set('email')}
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="of-phone">Phone</label>
                  <input
                    id="of-phone"
                    type="tel"
                    placeholder="313-555-0100"
                    value={form.phone}
                    onChange={set('phone')}
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-field">
                  <span className="field-label">Fulfillment *</span>
                  <div className="fulfillment-options">
                    <label className={`fulfillment-option ${form.fulfillment === 'pickup' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="fulfillment"
                        value="pickup"
                        checked={form.fulfillment === 'pickup'}
                        onChange={() => setForm(prev => ({ ...prev, fulfillment: 'pickup', address: '' }))}
                        disabled={status === 'submitting'}
                      />
                      Tuesday Pickup
                    </label>
                    <label className={`fulfillment-option ${form.fulfillment === 'delivery' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="fulfillment"
                        value="delivery"
                        checked={form.fulfillment === 'delivery'}
                        onChange={() => setForm(prev => ({ ...prev, fulfillment: 'delivery' }))}
                        disabled={status === 'submitting'}
                      />
                      Wednesday Delivery
                    </label>
                  </div>
                </div>

                {form.fulfillment === 'delivery' && (
                  <div className="form-field">
                    <label htmlFor="of-address">Delivery Address *</label>
                    <input
                      id="of-address"
                      type="text"
                      required
                      placeholder="123 Main St, Dearborn, MI 48126"
                      value={form.address}
                      onChange={set('address')}
                      disabled={status === 'submitting'}
                    />
                  </div>
                )}

                {status === 'error' && (
                  <p className="form-error">
                    Something went wrong — please try again, or contact Anna directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="cart-checkout-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending Order…' : 'Send Order to Anna →'}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderForm;
