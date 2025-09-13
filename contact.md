---
layout: page
permalink: /contact/
---

<div class="contact-hero">
  <h1>Get in Touch</h1>
  <p>I'd love to hear from you! Whether you have questions, ideas, or want to collaborate, feel free to reach out using any of the methods below.</p>
</div>

<div class="contact-container">
  <!-- Contact Information Cards -->
  <div class="contact-info">
    <div class="contact-card">
      <div class="contact-icon">
        <i class="fas fa-envelope"></i>
      </div>
      <div class="contact-details">
        <h3>Email</h3>
        <p>khowaja.ashfaqali@hotmail.com</p>
        <a href="mailto:khowaja.ashfaqali@hotmail.com" class="contact-link">Send Email</a>
      </div>
    </div>
  </div>

  <!-- Contact Form -->
  <div class="contact-form-section">
    <div class="form-header">
      <h2>Send a Message</h2>
      <p>Fill out the form below and I'll get back to you as soon as possible.</p>
    </div>
    
    <form class="contact-form" action="https://formspree.io/f/manegddw" method="POST">
      <div class="form-row">
        <div class="form-group form-half">
          <label for="first-name">First Name*</label>
          <input type="text" id="first-name" name="first-name" required>
        </div>
        <div class="form-group form-half">
          <label for="last-name">Last Name*</label>
          <input type="text" id="last-name" name="last-name" required>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group form-half">
          <label for="country">Country*</label>
          <input type="text" id="country" name="country" required>
        </div>
        <div class="form-group form-half">
          <label for="email">Email*</label>
          <input type="email" id="email" name="email" required>
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message*</label>
        <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project, question, or collaboration idea..."></textarea>
      </div>

      <button type="submit" class="submit-btn">
        <i class="fas fa-paper-plane"></i>
        Send Message
      </button>
    </form>
  </div>
</div>

