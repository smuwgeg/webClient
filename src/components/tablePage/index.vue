<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
      border stripe style="width: 100%">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column v-for="(item, index) of controlArray"
        :key="index" :prop="item.prop" :label="item.label">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes" :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage">
      </el-pagination>
    </div>
  </div>
</template>

<style src="./index.less" lang="less" scoped>
</style>

<script src="./index.js"></script>
