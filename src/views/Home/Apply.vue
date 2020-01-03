<template>
<div class="mb-5">
    <div class="container">
                            <h1 class=" py-4">
                            Let's get to work.
                            </h1>
                        <form @submit.prevent="apply">
                             <div class="row ">
                        <div class="col">
                            <div class="form-group">
                                <label for="">First name<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.firstName"  name="firstname" type="text" required class="form-control" >
                            </div> 
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="">Last name<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.lastName" name="lastname" type="text" required class="form-control">
                            </div>
                        </div> 
                       
                    </div>
                            <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="">Email<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.email"  name="firstname" type="email" required class="form-control" >
                            </div> 
                        </div>
                         <div class="col">
                            <div class="form-group">
                                <label for="">Student ID<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.student_id_number" name="lastname" type="text" required class="form-control">
                            </div>
                        </div>
                        
                    </div>
                            <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="">College/Department<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.college"  name="firstname" type="text" required class="form-control" >
                            </div> 
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="">Course of Study<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.course_of_study"  name="firstname" type="text" required class="form-control" >
                            </div> 
                        </div>
                    </div>
                      <div class="row">
                          
                          <div class="col">
                            <div class="form-group">
                                <label for="">Level<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.level" name="lastname" type="number" required class="form-control">
                            </div>
                        </div>
                            <div class="col">
                            <div class="form-group">
                                <label for="">Phone number<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.phone_no"  name="firstname" type="text" required class="form-control" >
                            </div> 
                        </div>
                       
                    </div>
                          <div class="row">
                        
                        <div class="col">
                            <div class="form-group">
                                <label for="">Whatsapp Number<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.whatsapp_number" name="lastname" type="tel" required class="form-control">
                            </div>
                        </div>
                             <div class="col">
                            <div class="form-group">
                                <label for="">Other Number</label>
                                <input v-model="user.alternate_phone_number" name="lastname" type="tel" class="form-control">
                            </div>
                        </div>
                    </div>
                            <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="">City/Town<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.city"  name="firstname" type="text" required class="form-control" >
                            </div> 
                        </div>
                            
                        <div class="col">
                            <div class="form-group">
                                <label for="">No. of Team members<span class="required" style="color: red;">*</span></label>
                                <input v-model="user.no_of_team_members" name="lastname" type="number" required class="form-control">
                            </div>
                        </div>
                    </div>
                            <div class="form-group" >
                                <label for="">Brief Description of Product/Services<span class="required" style="color: red;">*</span></label>
                                
                                <textarea rows="4" v-model="user.description" style="width: 100%">
                            </textarea>
                        </div>
                            <div class="py-4">
                                <button type="submit" class="btn btn-primary" :disabled="loading">
                                <i v-if="loading" class="fa fa-spin fa-spinner"></i>
                                <template v-else>Submit</template>
                                </button>
                            </div>
                        </form>
    </div>
</div>
</template>

<script>

import http from '@/network/Base.js' 
import {mapState} from 'vuex'
export default {
    data(){
        return{
            loading: false,
            user: {
                firstName:"",
                lastName:"",
                student_id_number:"",
                email:"",
                college:"",
                level:"",
                course_of_study:"",
                phone_no:"",
                whatsapp_number:"",
                city:"",
                alternate_phone_number:"",
                description:"",
                no_of_team_members:""
            }
        }
    },
    methods:{
        apply(){
            this.loading = true
          http().post('/participant/add', this.user)
            .then((res) => {
               alert('Application successful')
                this.$router.push({path:"/"});
            })
            .catch(error => {
                this.loading = false
                alert('Application Failed') 
            })
            .finally(() => {
                this.loading = false
            })
        }
    }
}
</script>

<style scoped>
    
</style>