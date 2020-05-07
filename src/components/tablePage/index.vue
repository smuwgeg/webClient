<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
      border stripe style="width: 100%"
      :default-sort="defaultSort"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column type="index" width="50" label='序号'>
      </el-table-column>
      <el-table-column v-for="(item, index) of controlArray"
        :key="index" :label="item.label" sortable>
        <template slot-scope="scope">{{ scope.row[item.prop] || '-'}}</template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage" :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage">
      </el-pagination>
    </div>
  </div>
</template>

<style src="./index.less" lang="less" scoped>
</style>

<script src="./index.js"></script>
