<template style="height:100%">
<div id="app" style="height:100%">
  <el-container style="height:100%">
    <el-header>
      <div class="logoimg">
        <a href="http://www.9262981.com/doc">
          <img alt="爱回用" src="./assets/logo.png" style="">
        </a>

      </div>
      <span class="el-button-show">
        <i class="el-icon-menu" @click="handleMedia"></i>
      </span>
    </el-header>
    <el-container>
      <el-aside id="elaside" style="width:266px;z-index:99;margin-top:-1px;">
        <div id="mainLeft" class="noprint">
          <nav>
            <div>
              <h4 style="margin:21px 0">爱回用系统</h4>
              <ul style="padding:3px 0 0 -5px;">
                <el-tree 
                  :data="anttax" 
                  :props="defaultProps" 
                  node-key="id"
                  :default-expanded-keys="[3]"
                  @node-click="handleNodeClick" 
                  style="background:#F8F3E4">
                </el-tree>
              </ul>
            </div>
          </nav>
        </div>
      </el-aside>
      <el-container>
        <router-view style="width:90%"></router-view>
      </el-container>
    </el-container>
    <el-footer height="39px" width="100%" style="background:rgba(255,255,255,0.8)">Copyright © shop-system-document</el-footer>

  </el-container>

</div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      show: true,
      ////////蚂蚁税服////////////
      anttax: [
        {
          label: "项目简介",
          urlName: "Introduction"
        },
        {
          label: "人员联络名单",
          urlName: "Contact"
        },
        {
          id: 3,
          label: "一期项目概览",
          urlName: "all",
          children: [
            {
              label: "爱回用---R回收系统",
              urlName: "rsystem"
            },
            {
              label: "爱回用---A端管理系统",
              urlName: "asystem"
            },
            {
              label: "爱回用---T质检系统",
              urlName: "tsystem"
            },
            {
              label: "爱回用---C端用户订单平台",
              urlName: "csystem"
            }
          ]
        },
        // {
        //   id: 3,
        //   label: "项目实施&进度查询",
        //   urlName: "ImplementationProgress",
        //   children: [
        //     {
        //       label: "源码方案选定",
        //       urlName: "SourceChoose"
        //     },
        //     {
        //       label: "域名申请/备案/商城名称选定",
        //       urlName: "Domainname"
        //     },
        //     {
        //       label: "服务器购买/接口服务申请",
        //       urlName: "Apireg"
        //     },
        //     {
        //       label: "产品功能设定",
        //       urlName: "Productfunction"
        //     },
        //     {
        //       label: "代码部署",
        //       urlName: "Deploy"
        //     },
        //     {
        //       label: "网络拓扑/文案整理",
        //       urlName: "TreeDocument"
        //     },
        //     {
        //       label: "UI设计",
        //       urlName: "Ui"
        //     }
        //   ]
        // }
      ],
      //
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      this.$router.push({
        name: data.urlName
      });
      if (document.documentElement.clientWidth < 768) {
        document.getElementById("elaside").style.display = "none";
      }
    },
    handleMedia() {
      if (document.getElementById("elaside").style.display != "block") {
        document.getElementById("elaside").style.display = "block";
      } else {
        document.getElementById("elaside").style.display = "none";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;

}

html {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

.el-header {
  background-color: #f8f3e4;
  background: linear-gradient(to bottom, #ffffff -10%, #f8f3e4 100%);
  /* box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07); */
  opacity: 0.98;
  color: #999;
  font-size: 1rem;
  font-weight: 900;
  color: #333;
  text-align: left;
  border-bottom: 1px solid #bbb;
  box-shadow: 0 0 7px #aaa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logoimg {
  width: 120px;
  height: 21px;
  margin:6px 55px;
}
.logoimg img {
  width: 150px;
}
.el-button-show {
  float: right;
  display: block;
}
#mainLeft {
  background-color: #f8f3e4;
  color: #333;
  text-align: left;
  border-bottom-right-radius: 1.8rem;
  margin-top: -1px;
  padding-left: 16px;
  padding-right: 14px;
  padding-top: 6px;
  padding-bottom: 15px;
  background-color: #f8f3e4;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-bottom-right-radius: 20px;
  z-index: 99999;
  border-top: 1px solid #f8f3e4;
}

#mainLeft ul {
  font-size: 1px;

  padding: 0;
  margin: 0;
  list-style-type: none;
}

#mainLeft li {
  display: list-item;
  text-align: -webkit-match-parent;
}

#mainLeft a {
  text-decoration: none;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 0;
}

.el-footer {
  /* background-color:#eee ; */
  color: #333;
  text-align: center;
  line-height: 39px;
  font-size: 0.6rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ddd;
  height: 33px;
}
.routerview {
  margin:0 auto;
  padding:33px 12px 33px 12px;
  font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;
  font-size: .9rem;
  line-height: 1.5rem;
}
.routerview p{
  margin:0 1rem;
}
.routerview a{
  color:blue;
  text-decoration: none;
}
h3 {
  width: 100%;
  display: block;
  font-size: 1.17em;
  line-height: 2em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #eaeaea;
  text-align: left;
  text-indent:2em
}

@media (max-width: 575.98px) {

  .el-aside {
    display: none;
  }
  .el-button-show {
    display: block;
  }
  .el-container .routerview {
    width: 100%;
 
  }
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

  .el-aside {
    display: none;
  }
  .el-button-show {
    display: block;
  }
  .el-container .routerview {
    width: 100%;
    margin:  0;
    padding: 0;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .el-container .routerview {
    width: 100%;
  
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .el-container .routerview {
    width: 100%;
  
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}

.h4 {
  color: rgb(32, 32, 32);
  font-size: 1.2rem;
  border-bottom: 1px solid #999;
}
</style>
