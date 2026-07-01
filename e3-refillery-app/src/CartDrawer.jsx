import React from 'react';
import { useCart } from './CartContext';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, onCheckout }) => {
  const { items, removeFromCart, updateQty } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`cart-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Your cart"
      >
        <div className="cart-drawer-header">
          <h2>Your Cart</h2>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        <div className="cart-drawer-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
              <p>Add items from the shop to get started!</p>
            </div>
          ) : (
            <>
              <ul className="cart-items-list">
                {items.map((item, idx) => (
                  <li key={idx} className="cart-item">
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      {item.scent && (
                        <p className="cart-item-meta">Scent: {item.scent}</p>
                      )}
                      <p className="cart-item-meta">
                        {item.sizeLabel} · ${item.unitPrice.toFixed(2)} each
                      </p>
                    </div>

                    <div className="cart-item-right">
                      <p className="cart-item-line-total">
                        ${(item.unitPrice * item.qty).toFixed(2)}
                      </p>
                      <div className="cart-item-controls">
                        <div className="qty-control">
                          <button
                            className="qty-btn"
                            onClick={() => updateQty(idx, item.qty - 1)}
                          >−</button>
                          <span className="qty-display">{item.qty}</span>
                          <button
                            className="qty-btn"
                            onClick={() => updateQty(idx, item.qty + 1)}
                          >+</button>
                        </div>
                        <button
                          className="cart-remove-btn"
                          onClick={() => removeFromCart(idx)}
                          aria-label={`Remove ${item.name}`}
                        >✕</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-subtotal-row">
                <span className="cart-subtotal-label">Indicative Subtotal</span>
                <span className="cart-subtotal-value">${subtotal.toFixed(2)}</span>
              </div>

              <p className="cart-invoice-note">
                Anna will confirm your final total and any delivery fee in your invoice.
              </p>

              <button className="cart-checkout-btn" onClick={onCheckout}>
                Continue to Order →
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
