<template>
  <nav>
    <el-container>
      <img src="../assets/images/colic.svg" alt="C" />
      <ul>
        <li>
          <a
            href="https://twitter.com/edemkumodzi/status/1587379149655928833"
            target="_blank"
            >Inspired by</a
          >
        </li>
      </ul>
    </el-container>
  </nav>
</template>

<script>
export default {
  name: "ClNavigation",
};
</script>

<style lang="scss" scoped>
nav {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;

  .el-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 32px;
    width: auto;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    li a {
      text-decoration: underline;
      padding: 10px 30px;
      color: #ffffff;

      &:last-child {
        padding-right: 0;
      }
    }
  }
}
</style>
