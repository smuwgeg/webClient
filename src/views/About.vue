<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TablePage></TablePage>
  </div>
</template>
<script>
// @ is an alias to /src
import TablePage from "@/components/tablePage/index.vue";
export default {
  name: "about",
  components: {
    TablePage
  }
};
</script>
