import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  //styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  id: any;
  projectinfo:string = '';
  category:string = '';
  type :string = '';
  date :string = '';
  URL : string = '';
  description : string = '';

  constructor(private titleService:Title, private router: Router, private route: ActivatedRoute) {
    this.titleService.setTitle("Portfolio Details");
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id=='P1'){
        this.projectinfo = 'Ventricular Arrhythmia Classification with Deep Learning Techniques';
        this.category = 'ML based classifier';
        this.type  = 'Group Project';
        this.date = 'June, 2022';
        this.URL = '';
        this.description = "•	Conducted a comprehensive study on Ventricular Arrhythmia, collected multiple MIT-BIH ECG datasets for training/testing deep learning models. •	Implemented advanced models, including CNN (Convolutional Neural Networks), DNN (Dense Neural Networks), and LSTM (Long Short Term Memory), to achieve accurate classification of Ventricular Arrhythmia. •	Compared performance metrics across all models and achieved a remarkable accuracy of 0.978 using CNN on MIT-BIH datasets. ";
      }
      else if(this.id=='P2'){
        this.projectinfo = 'Flutter based Android Application for Electric Vehicle Slot Reservation';
        this.category = 'Mobile Application';
        this.type  = 'Group Project';
        this.date = 'Jan, 2022';
        this.URL = 'https://github.com/Alpha2505/final-UI/tree/features/firestore_integration';
        this.description = "•	As a Project Team Leader during my final year group project, I organized daily team meetings to facilitate seamless collaboration, conducted strategic planning sessions, and delegated tasks to drive project advancement. •	Designed and developed a user-friendly mobile application that empowers electric vehicle (EV) users to effortlessly check the availability of charging ports and make reservations. Built using Android Studio with the Flutter framework and Firebase for real-time cloud-hosted database management. Seamlessly integrated a scanner and RazorPay payment gateway to streamline slot bookings. •	Presented the project to the university's project evaluation committee, earning recognition as the best presented project within the Computer Science and Engineering Department. •	Authored and meticulously edited a conference paper, securing its acceptance for publication at an international IEEE conference.";
      }
      else if(this.id=='P3'){
        this.projectinfo = 'Personal Contact List';
        this.category = 'Web Application';
        this.type  = 'Personal Project';
        this.date = 'Jan, 2023';
        this.URL = '';
        this.description = "•	Personal Contact List is a multipage Vue.js application designed to help individuals organize and manage their personal contacts or address book. •	The contact list includes details such as names, phone numbers, email addresses, physical addresses, and other relevant information. •	A robust back-end is implemented using .NET Core Web API, employing HTTP request methods for seamless communication. •	MSSQL Server is utilized for efficient data storage and retrieval, ensuring the application's reliability and scalability.";
      }
      else if(this.id=='P4'){
        this.projectinfo = 'Portfolio Website';
        this.category = 'Web Application';
        this.type  = 'Personal Project';
        this.date = 'August, 2023';
        this.URL = 'https://github.com/Alpha2505/my-portfolio';
        this.description = "•	Portfolio website is a personal or professional website that showcases an individual's work, skills, accomplishments, and experiences. •	It is a static website developed using Angular. A Bootstrap template is seamlessly integrated into the Angular project, ensuring a visually appealing and responsive design. •	Angular routing is implemented for a smooth and intuitive multipage website experience. •	The Portfolio is successfully hosted on GitHub Pages, showcasing a user-friendly interface for professional presentation. ";
       }
      else{
        alert("Couldn't find the requested portfolio information. Try again!");
        this.router.navigate(['portfolio']).then(()=>{
          window.location.reload();
        });
      }
      });
  }

  
}
