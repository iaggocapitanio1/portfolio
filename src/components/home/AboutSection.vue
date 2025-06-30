<script setup lang="ts">
import profilePhoto from '@/assets/profile.png'
</script>

<template>
  <section id="about" class="about">
    <div class="section-header">
      <h2 class="section-title">About Me</h2>
      <div class="section-divider"></div>
    </div>
    <div class="about-content">
      <div class="about-image">
        <div class="image-container">
          <img :src="profilePhoto" alt="Your Photo" class="about-photo" />
        </div>
      </div>
      <div class="about-text">
        <p class="about-bio">
          I'm a passionate developer with a creative mindset. I love building beautiful, functional
          applications that solve real-world problems. With a background in design and development,
          I bring a unique perspective to every project.
        </p>
        <div class="about-details">
          <div class="detail-item">
            <span class="detail-icon">🎓</span>
            <div class="detail-content">
              <h3>Education</h3>
              <p>Bachelor's in Computer Science</p>
            </div>
          </div>
          <div class="detail-item">
            <span class="detail-icon">💼</span>
            <div class="detail-content">
              <h3>Experience</h3>
              <p>5+ years in web development</p>
            </div>
          </div>
          <div class="detail-item">
            <span class="detail-icon">🌟</span>
            <div class="detail-content">
              <h3>Interests</h3>
              <p>UI/UX, Animation, Creative Coding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
