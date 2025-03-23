<script></script>

<template>
  <main>
    <div class="card">
      <article>
        <div class="profile-card">
          <header>
            <img
              src="/src/assets/avatar-jessica.jpeg"
              alt="Jessica Randall's Profile Picture"
              class="profile-pic"
            />
            <h1>Jessica Randall</h1>
            <p class="location">London, United Kingdom</p>
          </header>
          <section>
            <p>"Front-end developer and avid reader."</p>
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
        </div>
        <footer>
          <div class="attribution">
            <p>
              Challenge by
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                class="author"
                >Frontend Mentor</a
              >. Coded by
              <a
                href="https://github.com/Timex29"
                class="author"
                target="_blank"
                >Cornelio</a
              >.
            </p>
          </div>
        </footer>
      </article>
    </div>
  </main>
</template>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: fit-content;
  margin: 1rem;
}
.profile-card {
  background-color: var(--grey-700);
  border-radius: 0.625rem;
  padding: 1.25rem;
  color: var(--white);
}
.location {
  color: var(--green);
  margin-top: -1.6rem;
  font-size: clamp(0.875rem, 0.775rem + 0.38vw, 1.25rem);
  font-weight: var(--semi-bold-font-weight);
}
.social-links {
  color: var(--white);
  text-decoration: none;
  font-size: clamp(0.89rem, 0.73rem + 0.75vw, 1rem);
  font-weight: var(--bold-font-weight);
}
.attribution {
  font-size: clamp(0.78rem, 0.7rem + 0.38vw, 0.89rem);
  text-align: center;
  transition: 0.4ms;
  margin-bottom: 1rem;
  color: var(--white);
}
.author {
  color: hsl(228, 45%, 44%);
  text-decoration: none;
}
@media (hover: hover) {
  .author:hover {
    text-decoration: underline;
    font-weight: var(--bold-font-weight);
  }
}
</style>
