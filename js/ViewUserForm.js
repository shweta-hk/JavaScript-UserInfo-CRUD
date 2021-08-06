class ViewUserForm{

    constructor() 
     {

            // form elements and variables declaration
            this.title = createElement('h1');
            this.useridText = createElement('h5');
            this.nameText = createElement('h5');
            this.ageText = createElement('h5');
            this.hobbies = createElement('h5')
            this.button = createButton('Next');
            this.button1 = createButton('Prev');
            this.endMsg = createElement('h3');

       this.viewUserCount=0;
       this.counter =0;
       this.usr=0;

       //this.button2 = createButton('Edit User');
       }
    // function to hide form elements 
       hide(){
        this.title.hide();
        this.button.hide();
        this.button1.hide();
        this.ageText.hide();
        this.nameText.hide();
        this.useridText.hide();
        this.hobbies.hide();
      }

       async start()
       {
              // check user count from database
        var UserCountRef =await database.ref('usercount/').once("value");
        if(UserCountRef.exists()){
          userCount = UserCountRef.val();
          console.log("userCount in view user",userCount) ;
          getUser =1;

        }

      }

        display()
        {
          if(userCount>=1)
          {
            user = new User();
            this.counter+=1;
            index = this.counter;
            //console.log("user.index",index) ;
            User.getUser();
            console.log("UserDetails",UserDetails) ;

            if(UserDetails!== undefined)
            {
              getUser =0;
              this.usr = Object.keys(UserDetails).length;
              console.log("usr",this.usr) ;
              
              this.showUser();
              
              this.button1.position(220, 400);
              this.button.position(290, 400);
  



              this.button.mousePressed(()=>{
              
                temp = temp+1;
                if(temp>userCount)
                {
                  this.hide();
                  this.endMsg.html("End of User details.. ");
                  this.endMsg.position(250, 100);

                  this.button1 = createButton('Go back to Main page');

                  this.button1.position(290, 300);
                  this.button1.mousePressed(()=>{


                  location.reload();
                });

                }
                this.showUser();
                

               });

               this.button1.mousePressed(()=>{
                
                
                temp = temp-1;
                if(temp<=1)
                {
                  temp =1; 
                }
                this.showUser();
                

               });

            }
          }


          }
// function to display user details in form
        showUser()
        {

              //console.log("UserDetails",UserDetails[temp]) 
              this.title.html("View User Information");
              this.title.position(250, 30);
              this.useridText.html('User ID   : '+UserDetails[temp].userid);
              this.useridText.position(150, 100);
              this.nameText.html('User Name:' +UserDetails[temp].name);
              this.nameText.position(150, 170);
              //this.name.position(220, 190);
              this.ageText.html('User Age:'+UserDetails[temp].age);
              this.ageText.position(150, 240);
              this.hobbies.html('User Hobbies:'+UserDetails[temp].hobbies);
              this.hobbies.position(150, 300);

        }




      }
    