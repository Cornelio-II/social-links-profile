
<template>
  <main class="card">
    <article class="profile-card">
      <header>
        <img
          src="/src/assets/avatar-jessica.jpeg"
            alt="Jessica Randall's Profile Picture"
            class="profile-pic"/>
      </header>
      <section> 
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
      </section>
      <section>
        <h3>"Front-end developer and avid reader."</h3>
      </section>
      <nav>
        <ul>
          <li><a href="#" class="social-links">GitHub</a></li>
          <li><a href="#" class="social-links">Frontend Mentor</a></li>
          <li><a href="#" class="social-links">LinkedIn</a></li>
          <li><a href="#" class="social-links">Twitter</a></li>
          <li><a href="#" class="social-links">Instagram</a></li>
          </ul>
      </nav>
    </article>
  </main>
  <footer>
    <div class="attribution">
      <p>
         Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
            target="_blank" class="author">Frontend Mentor</a
              >. Coded by
        <a
          href="https://github.com/Cornelio-II/social-links-profile"
          class="author" target="_blank">Cornelio</a>.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.card {
  text-align: center;
  inline-size: fit-content; /* Use inline-size instead of width, for better responsiveness */
  margin: 1rem;
}

.profile-card {
  background-color: var(--grey-800);
  border-radius: 0.625rem;
  padding: 1.25rem;
  color: var(--white);
}

.social-links {
  color: var(--white);
  text-decoration: none;
  font-size: var(--list-item-font-size);
  font-weight: var(--bold-font-weight);
}

.attribution {
  font-size: var(--fluid-12-13);
  text-align: center;
  transition: 0.4ms;
  color: var(--white);
}
.author {
  color: var(--author-name-color);
  text-decoration: none;
}

@media (hover: hover) {
  .author:hover {
    text-decoration: underline;
    font-weight: var(--bold-font-weight);
  }
}
</style>
