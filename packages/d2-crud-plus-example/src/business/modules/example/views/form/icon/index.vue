<template>
  <d2-container>
    <template slot="header">图标选择器
      <example-helper title="文件上传组件crud配置"  >
        <h4>1、引入</h4>
        <d2-highlight :code="helper.init" lang="javascript"/>
        <h4>2、使用：crud配置</h4>
        <div>
          <ul>
            <li>给column配置type即可，可选值：[icon-selector]</li>
          </ul>
        </div>
        <d2-highlight :code="helper.crud" lang="javascript"/>
      </example-helper>

    </template>
    <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch"  >
    </crud-search>
    <d2-crud
        ref="d2Crud"
        :columns="crud.columns"
        :data="crud.list"
        :rowHandle="crud.rowHandle"
        edit-title="修改"
        :add-template="crud.addTemplate"
        :add-rules="crud.addRules"
        :edit-template="crud.editTemplate"
        :edit-rules="crud.editRules"
        :form-options="crud.formOptions"
        :options="crud.options"
        :loading="crud.loading"
        @dialog-open="handleDialogOpen"
        @row-edit="handleRowEdit"
        @row-add="handleRowAdd"
        @row-remove="handleRowRemove"
        @dialog-cancel="handleDialogCancel"
        @form-data-change="handleFormDataChange"
    >
      <el-button slot="header" style="margin-bottom: 5px" size="small" type="primary" @click="addRow">新增</el-button>
    </d2-crud>
    <crud-footer ref="footer" :current="crud.page.current"
                  :size="crud.page.size"
                  :total="crud.page.total"
                  @change="handlePaginationChange"
    >
    </crud-footer>
  </d2-container>
</template>

<script>
import { AddObj, GetList, UpdateObj, DelObj } from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import helper from './helper'
export default {
  name: 'formIcon',
  components: {},
  mixins: [d2CrudPlus.crud],
  data () {
    return {
      helper: helper
    }
  },
  computed: {
  },
  methods: {
    getCrudOptions () {
      return crudOptions
    },
    pageRequest (query) {
      return GetList(query)
    },
    addRequest (row) {
      return AddObj(row)
    },
    updateRequest (row) {
      return UpdateObj(row)
    },
    delRequest (row) {
      return DelObj(row.id)
    }
  }
}
</script>
