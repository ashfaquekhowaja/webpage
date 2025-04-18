---
layout: page
title: Get in Touch
permalink: /contact/
---

<div class="contact-form">
  <form action="https://formspree.io/f/manegddw" method="POST">
    <div class="intro-text">
      <p>If you have any questions, suggestions, ideas, or want to collaborate, I'd love to hear from you! Feel free to write to me using the form below, and I'll get back to you as soon as possible.</p>
    </div>

    <!-- Row 1: First Name + Last Name -->
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

    <!-- Row 2: Country + Email -->
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

    <!-- Row 3: Message (full width) -->
    <div class="form-group">
      <label for="message">Message*</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>

    <button type="submit">Send Message</button>
  </form>
</div>

