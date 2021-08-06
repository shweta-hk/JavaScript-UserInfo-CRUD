class CreateUserForm{

    constructor() {


        this.newUserid;

       }
   
       // function to hide form elements 
       hide(){
         this.title.hide();
         this.name.hide();
         this.button.hide();
         this.age.hide();
         this.ageText.hide();
         this.nameText.hide();
         this.useridText.hide();
         this.hobbies.hide();
         this.hobbiesText.hide();

       }

       async start()
       {
        user = new User();
        // check user count from database
        var UserCountRef =await database.ref('usercount/').once("value");
        if(UserCountRef.exists()){
          userCount = UserCountRef.val();
          //console.log("userCount",userCount) ;
        }

        userCount+=1;
        this.newUserid =Math.floor(Math.random() * 10000);
              // form elements declaration
        this.title = createElement('h1');
        this.useridText = createElement('h5');
        this.nameText = createElement('h5');
        this.name = createInput("");
        this.ageText = createElement('h5');
        this.age = createInput("");
        this.button = createButton('Save');
        this.successMsg = createElement('h3');
        this.hobbies = createElement('TEXTAREA');
        this.hobbiesText =createElement('h5');

         this.useridText.html('User ID   :                       '+this.newUserid);
        this.useridText.position(150, 100);
        //console.log("userCount to be displayed",userCount) 
        this.title.html("Enter User Information");
        this.title.position(250, 30);
        this.useridText.html('User ID   :                       '+this.newUserid);
        this.useridText.position(150, 100);
        this.nameText.html('User Name:');
        this.nameText.position(150, 170);
        this.name.position(220, 190);
        this.ageText.html('User Age:');
        this.ageText.position(150, 240);
    
        this.age.position(220, 260);
        this.hobbiesText.html('User Hobbies:');
        this.hobbies.position(220, 300);
        this.hobbiesText.position(137, 300);

        this.button.position(220, 380);

    
        this.button.mousePressed(()=>{
         this.hide();
         this.successMsg.html("User Information successfully Submitted..");
         this.successMsg.position(250, 100);
         user.name = this.name.value();
         user.age = this.age.value();
         user.hobbies =this.hobbies.value();
         user.index = userCount;
         user.userid=this.newUserid;
         user.update();
         user.updateCount(userCount);
         // navigation back to main page
         this.button1 = createButton('Go back to Main page');
                  this.button1.position(290, 300);
                  this.button1.mousePressed(()=>{
                  location.reload();
                });


         
        });

      }
     
 


}