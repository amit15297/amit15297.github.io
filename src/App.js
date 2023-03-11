import './App.css';
import Navbar from './component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from 'react-bootstrap-icons';
function App() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-12">

        {/*NavBar*/}
                <Navbar navbarTitle="MT"   navbarItem1="Home"   navbarItem2="Why Choose Us" 
                        navbarItem3="Services"    navbarItem4="Contact"    navbarItem5="Follow Us"/>

        {/*HomePage*/}
                <div className="text-center" id="home-page">
                    <div className="bg-container-1">
                        <h1 className="main-head-1 mb-3 mt-55">Study Anything Anywhere Anytime </h1>
                        <h1 className="main-head-2 mb-4">For brighter future!</h1>
                        <a href="https://wa.me/918740800162"  target="_blank">
                        <button className="button-1">Book your free DEMO </button> </a>
                    </div>
                </div>
            </div>

        </div>

    </div>


       {/*Why Choose Us Section*/}
    <div className="wcu-section pt-5 pb-5" id="wcu-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="wcu-section-heading">Why Choose Us?</h1>
                    <p className="wcu-section-description">
                        We have the best experienced faculties who will guide your childrens to a brighter future.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <div className="wcu-card p-3 mb-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/5110/5110577.png" alt='free demo' className="wcu-card-image" />
                        <h1 className="wcu-card-title mt-3">Free Demo classNamees</h1>
                        <p className="wcu-card-description">
                            We provide a free two day demo classNamees. Choose us only if your children is satisfied with our service.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="wcu-card p-3 mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKf2CTDrXCjoOgnrk7GdsF5VAHzvwI0COBQ&usqp=CAU" alt='free mock' className="wcu-card-image" />
                        <h1 className="wcu-card-title mt-3">Free Mock Tests</h1>
                        <p className="wcu-card-description">
                            We take weekly and monthly tests to anaylise the performance of your kid and will provide you the scorecard.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="wcu-card p-3 mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WAj173b62Xs3BLbiOtYkEgJ_CLUCZ5mJrw&usqp=CAU" alt='Special Offer'  className="wcu-card-image" />
                        <h1 className="wcu-card-title mt-3">Best Offers</h1>
                        <p className="wcu-card-description">
                            Coupons & Offers upto
                            <span className="offers">50% OFF</span>
                            and Exclusive Promo Codes on monthly or yearly subscriptions.You also have the option to pay fee in installments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>



   {/*Subjects Section*/}
    <div className="explore-menu-section pt-5 pb-5" id="services-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="menu-section-heading">Subjects</h1>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaOgegtnBAezMsqhIzNUSuOIehVsh_24XQA&usqp=CAU" alt='Maths' className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Mathematics</h1>
                        <a href="https://wa.me/918740800162" className="menu-item-link">
                            Book a Demo Class
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCW-klAlNOZE0I9xdmT29VnxhpoLwABBOjg&usqp=CAU" alt='Physics' className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Physics</h1>
                        <a href="https://wa.me/918740800162" className="menu-item-link">
                            Book a Demo Class
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKadJicFNOy_wfY3OWpwZfANUq5uOiWx4k7w&usqp=CAU" alt='Chemistry' className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Chemistry</h1>
                        <a href="https://wa.me/918740800162" className="menu-item-link">
                            Book a Demo Class
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>



            </div>
        </div>
    </div>



    {/*Follow Us Section*/}
    <div className="follow-us-section pt-5 pb-5" id="follow-us-section">
        <div className="container">
            <>
                
            </>
        </div>
    </div>



    {/*Contact Us Section*/}
    <div class="follow-us-section pt-5 pb-5" id="follow-us-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="follow-us-section-heading">Follow Us</h1>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-row justify-content-center">
                        <div class="follow-us-icon-container icon">
                            <a href="" target="_blank"><Icon.Twitter/></a>
                        </div>
                        <div class="follow-us-icon-container icon">
                             <a href="https://www.facebook.com/amit15297" target="_blank"><Icon.Facebook/></a>
                        </div>
                        <div class="follow-us-icon-container icon">
                             <a href="https://www.instagram.com/_amyth__/"  target="_blank"><Icon.Instagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            


    </>

  );
}

export default App;
