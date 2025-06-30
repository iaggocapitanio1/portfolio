<script setup lang="ts">
import profilePhoto from '@/assets/profile.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBrain,
  faBriefcase,
  faCode,
  faStar,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { h } from 'vue'
import { useI18n } from 'vue-i18n'
import AboutDetails from './AboutDetails.vue'

// Add icons to the library
library.add(faUserGraduate, faCode, faBrain, faBriefcase, faStar)

const { t } = useI18n()
</script>

<template>
  <section id="about" class="about">
    <div class="section-header">
      <h2 class="section-title">{{ t('about.title') }}</h2>
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
          {{ t('about.description.part1') }}
        </p>
        <p class="about-bio">
          {{ t('about.description.part2') }}
        </p>
        <p class="about-bio">
          {{ t('about.description.part3') }}
        </p>

        <div class="about-details">
          <AboutDetails
            :title="t('about.skills')"
            :icon="() => h(FontAwesomeIcon, { icon: ['fas', 'brain'] })"
            :items="[
              { value: 'JavaScript', description: 'Vue.js, React, Node.js, Next.js, Node-Express' },
              { value: 'Python', description: 'Django, Flask, FastAPI, TensorFlow, OpenCV' },
              { value: 'DevOps', description: 'Docker, Azure, AWS, Firebase, Nginx' },
              { value: 'C++', description: 'Qt,  OpenCV' },
              { value: 'Database', description: 'PostgreSQL, MySQL, MongoDB, SQLite' },
              { value: 'Mobile', description: 'Flutter, Dart, Firebase, BloC, Provider' },
            ]"
          />
          <AboutDetails
            :title="t('about.interests.title')"
            :icon="() => h(FontAwesomeIcon, { icon: ['fas', 'star'] })"
            :description="t('about.interests.description')"
            :items="[]"
          />
          <AboutDetails
            :title="t('about.education.title')"
            :icon="() => h(FontAwesomeIcon, { icon: ['fas', 'user-graduate'] })"
            :items="[
              {
                value: t('about.education.degree_1'),
                description: t('about.education.instituition_1'),
              },
              {
                value: t('about.education.degree_2'),
                description: t('about.education.instituition_2'),
              },
            ]"
          />

          <AboutDetails
            :title="t('about.experience.title')"
            :icon="() => h(FontAwesomeIcon, { icon: ['fas', 'briefcase'] })"
            :description="t('about.experience.duration')"
            :items="[]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
