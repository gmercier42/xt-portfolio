<template>
  <div class="home" :class="{ 'home--style-1': style == 1 }">
    <div class="header">
      <div class="name" :class="{ 'name--style-1': style == 1 }">
        Xavier Trudeau
      </div>

      <a
        class="contact"
        :class="{ 'contact--style-1': style == 1 }"
        href="mailto:{{contact_email}}"
        >Contact</a
      >
    </div>

    <div class="content" :class="{ 'content--style-1': style == 1 }">
      <span>Graphic/Type Design</span>
      <span>(Montréal, QC, Can)</span>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
