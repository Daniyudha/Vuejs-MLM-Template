<template>
  <!-- START NAVBAR -->
  <header class="" id="header">
    <nav class="container mt-4 navbar navbar-expand-lg navbar-light bg-navtk rounded px-4">
      <router-link to="/" class="navbar-brand">lebahmadu co<b style="color: rgb(248, 211, 0);">.</b></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mr-3">
          <li class="px-2 nav-item"> 
            <router-link to="/tentangkami" class="nav-link">Honeybee</router-link>
          </li>
          <li class="px-2 nav-item">
            <router-link to="/bisnisstrategi" class="nav-link">Bisnis & Strategi</router-link>
          </li>
          <li class="px-2 nav-item">
            <router-link to="/product" class="nav-link">Product</router-link>
          </li>
          <li class="px-2 nav-item">
            <router-link to="/kontak" class="nav-link">Kontak</router-link>
          </li>
        </ul>
        <router-link to="/login" class="btn-outline-info2 ron px-3 my-2 my-sm-0" type="submit">Join Now</router-link>
      </div>
    </nav>
  </header>
  <!-- END NAVBAR -->
</template>

<script>
export default {
  name: 'Navbar2',
}
</script>