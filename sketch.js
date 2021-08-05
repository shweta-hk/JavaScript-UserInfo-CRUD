var canvas, backgroundImage;
var createUserForm,deleteUserForm ,userCount=0;
var userid;
var user;
var createUser,viewUser,deleteUser, mainTitle;
var UserDetails ;
var index, getUser=0 ,delUser=0,deleteUsr;
var temp=1;
var bckgrdImg;

function preload()
{
  bckgrdImg = loadImage('images/background.png');

}

function setup(){
 canvas = createCanvas(850,500);
 database = firebase.database();

 // HTML elements on the main page
 mainTitle = createElement('h1');
 createUser = createButton('Create New User');
 viewUser = createButton('View User');
 deleteUser = createButton('Delete User');

 mainTitle.html("User Information App");
 mainTitle.position(270, 30);
 createUser.position(330, 130);
 viewUser.position(350, 200);
 deleteUser.position(350, 270);


  createUser.mousePressed(()=>{
  hide();
  createUserForm = new CreateUserForm();
  createUserForm.start();
  createUserForm.display();
 });


 viewUser.mousePressed(()=>{
  hide();
  viewUserForm = new ViewUserForm();
  viewUserForm.start();
  
 });

 deleteUser.mousePressed(()=>{
  hide();
  deleteUserForm = new DeleteUserForm();
  deleteUserForm.start();
  
 });

}

function draw(){
  background(bckgrdImg);

 // display view user form
  if (getUser===1)
  {
    viewUserForm.display();
  }

  //display delete user form
  if (delUser===1)
  {
    deleteUserForm.display();
  }
  
}


// function for hiding html elements when buttons are pressed
function hide()
{
  createUser.hide();
  viewUser.hide();
  deleteUser.hide();
  mainTitle.hide();

}