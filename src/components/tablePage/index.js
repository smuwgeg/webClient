export default {
  data() {
    return {
      tableData: [], // 表格数据
      // 分页相关数据
      currentPage: 1, // 当前页
      pageSize: 10, // 每页多少条数据
      pageSizes: [10, 20, 30, 200], // 规定一页显示多少条数据
      totalPage: 200, // 总共多少条数据
      defaultSort: { // 默认按xxx排序
        prop: 'date',
        order: 'descending'
      },
      multipleSelection: [], // 选中的值
      // 渲染列表表头
      controlArray: [{
          label: '姓名',
          enLabel: 'name',
          prop: 'name'
        },
        {
          label: '年龄',
          enLabel: 'age',
          prop: 'age'
        },
        {
          label: '性别',
          enLabel: 'gender',
          prop: 'gender'
        },
        {
          label: '生日',
          enLabel: 'birthday',
          prop: 'birthday'
        },
        {
          label: '住址',
          enLabel: 'addr',
          prop: 'addr'
        }
      ]
    }
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    // 获取表格数据
    getTableData() {
      for (let index = 0; index < 200; index++) {
        const newObj = {
          name: '王小虎' + index,
          age: index + 1,
          gender: '男',
          birthday: '2016-05-03',
          addr: '上海市普陀区金沙江路 1518 弄'
        }
        this.tableData.push(newObj);
      };
      this.tableData = [...this.tableData];
      this.totalPage = this.tableData.length; // 表格总条数
    },
    // 改变每页显示的数据
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 翻页数据
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    // 多选框
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    }
  }
}
