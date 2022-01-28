<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between" id="navbar">
  <a class="navbar-brand" href="#">Anasayfa</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'LoginPage'}">Giriş Yap</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'RegisterPage'}">Kayıt Ol</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>


<style>
#navbar{
    margin-bottom: 20px;
}
</style>