<template>
  <div class="header">
    <h1>List of Mini Projects</h1>
  </div>
  <table>
    <tr>
      <td>Project 1</td>
      <td class="project-link">
        <router-link to="/todo-list" class="link-src">TodoList <span>&#8594;</span></router-link>
      </td>
    </tr>
    <tr>
      <td>Project 2</td>
      <td class="project-link">
        <router-link to="/random-quote-generator" class="link-src"
          >Random Quote Generator <span>&#8594;</span></router-link
        >
      </td>
    </tr>
    <tr>
      <td>Project 3</td>
      <td class="project-link">
        <router-link to="/calculator" class="link-src">Calculator<span>&#8594;</span></router-link>
      </td>
    </tr>
    <tr>
      <td>Project 4</td>
      <td class="project-link">
        <router-link to="/accordion" class="link-src">Accordion<span>&#8594;</span></router-link>
      </td>
    </tr>
    <tr>
      <td>Project 5</td>
      <td class="project-link">
        <router-link to="/form-validation" class="link-src"
          >Form Validation<span>&#8594;</span></router-link
        >
      </td>
    </tr>
    <tr>
      <td>Project 6</td>
      <td class="project-link">
        <router-link to="/password-generator" class="link-src"
          >Password Generator<span>&#8594;</span></router-link
        >
      </td>
    </tr>
    <tr>
      <td>Project 7</td>
      <td class="project-link">
        <router-link to="/progress-steps" class="link-src"
          >Progress Steps<span>&#8594;</span></router-link
        >
      </td>
    </tr>
    <tr>
      <td>Project 8</td>
      <td class="project-link">
        <router-link to="/dad-jokes" class="link-src">Dad Jokes<span>&#8594;</span></router-link>
      </td>
    </tr>
    <tr>
      <td>Project 9</td>
      <td class="project-link">
        <router-link to="/github-user-search" class="link-src"
          >Github User Search<span>&#8594;</span></router-link
        >
      </td>
    </tr>
    <tr>
      <td>Project 10</td>
      <td class="project-link">
        <router-link to="/wiki-clone" class="link-src">Wiki Clone<span>&#8594;</span></router-link>
      </td>
    </tr>
  </table>
</template>

<style scoped>
.header {
  background: var(--primary-green);
  color: var(--text-light);
  width: 100%;
  padding: 24px;
  margin-bottom: 48px;
  text-align: center;
  font-size: 16px;
}

table {
  margin-inline: 48px;
  border-spacing: 8px;
}

td {
  font-size: 20px;
  font-weight: 600;
  min-width: 110px;
}

.project-link {
  width: 337px;
  border-left: 4px solid var(--primary-green);
  background: var(--light-green);
  padding: 12px 20px;

  &:hover {
    background: var(--primary-green);
    span {
      margin-left: 20px;
    }
  }
}

.link-src {
  text-decoration: none;
  color: var(--text-light);

  span {
    margin-left: 8px;
    transition: margin-left 0.2s ease-in-out;
  }
}
</style>
