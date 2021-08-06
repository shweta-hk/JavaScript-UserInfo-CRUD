class User{
    constructor(){
        this.index;
        this.age = 0;
        this.name = null;
        this.userid=0;
        this.deleteUsr;
        this.hobbies;
        
      }
    
      deleteUser(deleteUsr){
        var userIndex = 'users/'+deleteUsr;
        var delUsrRef = database.ref(userIndex);
        delUsrRef.remove();
       
      }
    

    
      updateCount(count){
        database.ref('/').update({
          usercount: count
        });
      }
    
      update(){

        var userIndex = 'users/' + this.index;
          database.ref(userIndex).set({
          name:this.name,
          age:this.age,
          hobbies:this.hobbies,
          userid:this.userid,
        });
      }
    
      static getUser(){
        var UserInfoRef = database.ref('users');
        UserInfoRef.on("value",(data)=>{
          UserDetails = data.val();
        })
      }

      

}