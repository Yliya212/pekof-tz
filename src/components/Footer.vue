<template>
  <div class="footer">
    <div class="footer-text">
      <p>Избранное</p>
      <p>8 800 888 00 88</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.footer {
  background: #0A1E32;
  height: 96px;
  position: absolute;
  width: 100%;

}
.footer-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 260px;
}
p {
  color: #FFFFFF;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}
</style>