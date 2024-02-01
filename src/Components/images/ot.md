
   #### frocks.html

   ---------------
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <style>
    .embed-responsive .card-img-top {
    object-fit: cover;
}
.card-img-top {
width: 100%;
height: 30vh;
object-fit: contain;
padding-top: 10px;
}
    </style>
    <div class="container">
        <div class="row gy-3">
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                <div class="embed-responsive embed-responsive-16by9">
                <img src="../ot/f1.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class=" col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                <div class="embed-responsive embed-responsive-16by9">
                <img src="../ot/f2.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class=" col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                <div class="embed-responsive embed-responsive-16by9">
                <img src="../ot/f3.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                <div class="embed-responsive embed-responsive-16by9">
                <img src="../ot/f4.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <br>
            <div class=" col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                <div class="embed-responsive embed-responsive-16by9">
                <img src="../ot/f1.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
        </div>
    </div>
    <body>
       
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>

    -------------

  #### tailor.html
  --------

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" href="./favicon (1).ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&family=Edu+TAS+Beginner:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>TAILOR</title>
</head>
<style>
     *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
       
        body{
          
          background-image:url(../ot/webbg.jpg)

        }
       #toggler{
        display: none;
       }
       .fa-bars{
        padding: 8px 12px;
        font-size: x-large;
        border: 2px solid rgb(192, 173, 173);
        border-radius: 5px;
        display: none;
       }
        header{
           position: fixed;
           top:0;
           right: 0;
           left: 0;
           display: flex;
           align-items: center;
           justify-content: space-between;
           background-color:whitesmoke;
           margin: 10px;
          padding-left: 20px;
           z-index: 1;
        }
        header .navbar a{
            text-decoration: none;
            font-size: xx-large;
         
        }
        
  
        .navbar a {
        
          font-family: 'EB Garamond', serif;
          font-style: italic;
         padding-top: 5px;
        margin-left: 10px;
        }
        .dropdown
        {
          padding-top: 5px;
          cursor: pointer;
          position: relative;
          display: inline-block;
          margin-left: 10px;
        }
        .dropdown-content{
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          padding: 12px 16px;
          z-index: 1;
        }
        .dropdown:hover .dropdown-content{
display: block;
        }
        .container{
            margin-top: 150px;
            
        }
       
        
 form .form-control{
    flex: 1;
    border: none;
    outline: none;
    height: 45px;
    width: 400px;
   border: 2px solid rgb(68, 66, 66);
   border-radius: 25px;
    background: transparent;
    
 }
 
  form .btn{
    padding-right: 30px;
  }   
  .navbar-nav{
    padding-left: 60px;
  } 
  .has-search .form-control {
    padding-left: 2.375rem;
    text-align:center;
    font-size:x-large;
   font-style: italic;
   
    
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 3.375rem;
    height:2.800rem;
    line-height: 2.800rem;
    text-align:center;
    pointer-events: none;
    border-radius: 50px;
    color: #1a1919;
    
    
}

.img-text{
  width: 100;
}

.card img{
  max-width:100%;
  max-height: 100%;
}


div.scroll-container {
  background-color: rgb(240, 220, 220);
  overflow: auto;
  padding-bottom: 40px;
  display: grid;
  gap: var(--size-3);
  grid-auto-flow: column;
  grid-auto-columns: 25%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  text-align: center;
padding-top: 25px;
 
}

div.scroll-container img
 {
  padding: 10px;
  width: 100%;
height: 40vh;
object-fit: contain;
padding-top: 40px;
}
.scroll{
  padding-top: 55px;
  padding-bottom: 20px;
}

.card{

box-sizing: border-box;
box-shadow: 10px 10px 10px 10px rgb(91, 55, 32);
  border-radius: 20px;
 
}
.snaps-inline{
  scroll-snap-type: inline mandatory;
}
.snaps-inline > *{
  scroll-snap-align: start;
  scroll-padding-inline: 1rem;

}
 

.zoom {
  transition: transform .2s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.3); 
 
}


</style>
<body>
   <div class="main">
    <header>

    <nav class="navbar">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><span style="color: rgb(18, 140, 61); font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;font-size:xx-large;">Online</span><span style="color: rgb(227, 28, 138); font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;font-size:x-large; padding-right: 20px;">Tailor</span></a>
          
            
            <form class="d-flex">
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search">
                </div>
                <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
            </form>
            <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">About Us</a>
                </li>

                <li class="nav-item">
                  <div class="dropdown">
                    <span style=" font-family: 'EB Garamond', serif;  font-style: italic;
                   padding-top: 5px; font-size: xx-large;">Designs</span>
                    <div class="dropdown-content">
                    <p>Women</p>
                    <p>Baby Girls</p>
                    <p>Women</p>
                    </div>
                  </div>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
                </li>
                <li class="usericon">
                  <div class="icontext" style="color: black;
                  font-size:x-large;padding-right: 20px;margin-right: 15px;
                  font-style: italic;padding-top: 10px;font-family: 'EB Garamond', serif;
                 box-shadow: 5px 5px 5px rgb(66, 55, 55);" ><i class="fa-solid fa-user" ></i>Hello,sign in</div>
                </li>
                <li class="usericon">
                  <div class="icontext" style="color: black;
                  font-size:x-large;
                  font-style: italic;padding-top: 10px;font-family: 'EB Garamond', serif;
                 box-shadow: 5px 5px 5px rgb(66, 55, 55);"><i class="fa-solid fa-cart-shopping"></i>cart</div>
                  </li>
              </ul>
              
            </div>
          </div>
        </nav>
      
    </header>

    
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner container">
              <div class="carousel-item active">
                <img src="./a1.jpg" class="d-block w-100" alt="..." >
                <div class="carousel-caption d-none d-md-block">
                 
                  <p style="font-size:xx-large; font-style: italic;font-weight: bolder;">A great tailor is like a great personal trainer - they tailor that suit to your natural physique.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./a2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  
                  <p style="font-size: larger; font-style: italic;color: aliceblue;">If youre wearing suits and you want to create your own sense of style, get to the tailor.</p>
                </div>
              </div>
              
              <div class="carousel-item">
                <img src="./a3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  
                  <p>Just because a suit fits, doesn't mean it looks good. You need a tailor. You want to get bespoke.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
       </div>
       <div class="scroll ">
        <div class="scroll-container snaps-inline">
          <div class="card " style="width: 18rem;">
            <div class="zoom">
          <img src="./baby1.jpg" class="card-img-top" alt="..." >
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      
        <div class="card" style="width: 18rem;">
          <div class="zoom">
          <img src="./baby2.jpg" class="card-img-top" alt="...">
        </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="zoom">
          <img src="./baby3.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="zoom">
          <img src="./baby4.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="zoom">
          <img src="./baby5.jpeg" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="zoom">
          <img src="./baby6.jpeg" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="zoom">
          <img src="./baby7.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="zoom">
          <img src="./baby8.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="zoom">
          <img src="./baby9.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="zoom">
          <img src="./baby11.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll ">
      <div class="scroll-container snaps-inline">
        <div class="zoom">
        <div class="card " style="width: 18rem;">
          
        <img src="./card1.jpg" class="card-img-top" alt="..." >
       
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card2.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card3.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card4.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card5.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card6.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card7.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card8.jpeg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card9.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card10.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card11.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="zoom">
        <img src="./card12.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
  <div class="scroll ">
    <div class="scroll-container snaps-inline">
     
      <div class="card " style="width: 18rem;">
        <div class="zoom">
      <img src="./mcard1.jpeg" class="card-img-top" alt="..." >
    </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  
    <div class="card" style="width: 18rem;">
      <div class="zoom">
      <img src="./mcard2.jpeg" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="zoom">
      <img src="./mcard3.jpeg" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="zoom">
      <img src="./mcard4.jpeg" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="zoom">
      <img src="./mcard5.jpeg" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="zoom">
      <img src="./mcard6.jpeg" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="zoom">
      <img src="./mcard7.jpeg" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="zoom">
      <img src="./pcard1.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="zoom">
      <img src="./pcard2.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="zoom">
    <div class="card" style="width: 18rem;">
      <img src="./pcard3.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5> 
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
    <div class="card" style="width: 18rem;">
      <div class="zoom">
      <img src="./pcard4.jpeg" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
   
     
    
  </div>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
</body>
</html>