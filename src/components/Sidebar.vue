<template>
  <aside class="sidebar">
    <div class="side-section">
      <h1>Reserva tu clase particular/grupal online:</h1>
      <a href="https://bit.ly/2Wv9hHP" target="_blank">
        <div class="div-img-ad">
          <img style="width: 100%;" src="@/assets/sidebar_imgs/edukar.jpg" alt="edukar_ad">
        </div>
      </a>
    </div>
    <div class="side-section">
      <h1>Descarga de libros gratis:</h1>
      <a href="https://aedukar.blogspot.com/p/libros-pre-universitarios.html" style="text-decoration: none;"
        target="_blank">
        <div class="div-img-ad">
          <img style="width: 100%;" src="@/assets/sidebar_imgs/book.jpg" alt="book_ad">
        </div>
      </a>
    </div>
    <div class="side-section">
      <h1>Video Tutorial</h1>
      <div class="video-tutorial">
        <iframe src="https://www.youtube.com/embed/AuExsPHCIi0" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>
<style>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.side-section {
  box-shadow: var(--box-shadow);
  padding: 15px;
}
.side-section h1 {
  margin-bottom: 1em;
}
.div-img-ad img {
  border-radius: 5px;
  border: 2px solid black;
}
.video-tutorial {
  height: 0;
  padding-bottom: 56.25%;
  padding-top: 30px;
  position: relative;
}
.video-tutorial iframe, .video-tutorial object, .video-tutorial embed {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
