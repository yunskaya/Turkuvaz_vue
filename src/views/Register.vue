<template>
  <AppHeader />
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-2"></div>
      <div class="col-lg-6 col-md-8 login-box">
        <div class="col-lg-12 login-key">
          <i class="fa fa-key" aria-hidden="true"></i>
        </div>
        <div class="col-lg-12 login-title">Register</div>

        <div class="col-lg-12 login-form">
          <div class="col-lg-12 login-form">
            <form>
              <div class="form-group">
                <label  class="form-control-label">USERNAME</label>
                <input v-model="userData.username" type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label class="form-control-label">PASSWORD</label>
                <input v-model="userData.password" type="password" class="form-control" i />
              </div>
              <div class="form-group">
                <label  class="form-control-label">REPEAT PASSWORD</label>
                <input v-model="userData.password2" type="password" class="form-control" i />
              </div>
              <div class="col-lg-12 loginbttm">
                <div class="col-lg-6 login-btm login-text">
                  <!-- Error Message -->
                </div>
                <div class="col-lg-6 login-btm login-button">
                  <button @click="onSave" class="btn btn-outline-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-3 col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/Shared/AppHeader.vue";
import "@/assets/style.css";

export default {
  components: {
    AppHeader,
  },
  data(){
    return {
      userData : {
        username : null,
        password : null,
        password2 : null
      }
    }
  },
  methods : {
    onSave(){
      
        console.log(this.userData)
        
    }
  }
};
</script>