<template>
<div id='app'>
			<h1>Gaestebuch</h1>
			<h2>Single-Page Web Applikation</h2>
			<form>
        <p style="color:red;">{{ message }}</p>
				Namen des Gastes:<br>
				<input type='text' v-model='username' style="width: 200px;"><br>
				Kommentar:<br>
				<textarea type='text' v-model='comment'></textarea><br>
				<button @click='addRecord();'>Speichern</button>			
					
			</form>			
			<div>			
				<h3>Kommentarliste:</h3> 
				<div v-for='user in users' :key="user.id">
					<h4 class="user">{{ user.username }}</h4>
					<p class="comment">{{ user.comment }}</p>
				</div>
			</div>
		</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
          users: [],
					userid: 0,
					username: "",
          comment: "",
          message: ""
    }
  },
  methods: {
  addRecord: function() {
    if(this.username != '' && this.comment != ''){
  axios.post('http://localhost:8080/Guestbook/php/ajaxController.php', {
    request: 'add',
		username: this.username,
		comment: this.comment
  })
  .then(() => {
    this.allRecords();
		this.username = '';
    this.comment = '';
    this.message = '';
  })
  }
  else
  {
		this.message = 'Fill all fields';
	}

  },
  allRecords: function(){
    axios.post(`http://localhost:8080/Guestbook/php/ajaxController.php`, {
        request: 'fetch'
    })
    .then(response => {
		this.users = response.data
	})
    .catch(e => {
      this.errors.push(e)
    })
  }
  },
  created() {
    this.allRecords()
  }
}
</script>
