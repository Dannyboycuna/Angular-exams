import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-admission-exams',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admission-exams.component.html',
  styleUrl: './admission-exams.component.scss'
})
export class AdmissionExamsComponent {

  selectedYear: number | null = null;
  selectedInstituition: string = '';
  selectedSubject: string = '';

  year: any;
  instituition: any;
  subject: any;
  link: any;


  admissionExamsList = [
    { instituition: 'UP', subject: 'Portuguese', year: 2009, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Portugues/Exame-de-Portugues-UP-2009.pdf' },
    { instituition: 'UP', subject: 'Portuguese', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Portugues/Exame-de-Portugues-UP-2013.pdf' },
    { instituition: 'UP', subject: 'Portuguese', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Portugues/Exame-de-Portugues-UP-2016.pdf' },
    { instituition: 'UP', subject: 'Portuguese', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Portugues/Exame-de-Portugues-UP-2017.pdf' },
    { instituition: 'UP', subject: 'Portuguese', year: 2018, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Portugues/Exame-de-Portugues-UP-2018.pdf' },
    { instituition: 'UP', subject: 'Portuguese', year: 2019, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Portugues/Exame-de-Portugues-UP-2019.pdf' },
    { instituition: 'UP', subject: 'Mathematics', year: 2010, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Matematica/Exame-de-Matematica-UP-2010.pdf' },
    { instituition: 'UP', subject: 'Mathematics', year: 2011, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Matematica/Exame-de-Matematica-UP-2011.pdf' },
    { instituition: 'UP', subject: 'Mathematics', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Matematica/Exame-de-Matematica-UP-2014.pdf' },
    { instituition: 'UP', subject: 'Mathematics', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Matematica/Exame-de-Matematica-UP-2016.pdf' },
    { instituition: 'UP', subject: 'Mathematics', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Matematica/Exame-de-Matematica-UP-2017.pdf' },
    { instituition: 'UP', subject: 'Mathematics', year: 2018, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Matematica/Exame-de-Matematica-UP-2018.pdf' },
      
    { instituition: 'UP', subject: 'Mathematics', year: 2019, link: 'https://drive.google.com/uc?export=download&id=1smJnJ7mGuhnv8DIOE_9Xf6ZB3_WbAyw2' },
    { instituition: 'UP', subject: 'Mathematics', year: 2020, link: 'https://drive.google.com/file/d/1stulCs0leMHhe5hkiJZIvUWZeVVPMi-5/view?usp=drivesdk' },
    { instituition: 'UP', subject: 'Mathematics', year: 2022, link: 'https://drive.google.com/file/d/1ssxA8Y5fTO3VBCO--z0nrYA6BbSXCTDY/view?usp=drivesdk' },



    { instituition: 'UP', subject: 'Biology', year: 2010, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Biologia/Exame-de-Biologia-UP_-2010.pdf' },
    { instituition: 'UP', subject: 'Biology', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Biologia/Exame-de-Biologia-UP_-2014.pdf' },
    { instituition: 'UP', subject: 'Biology', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Biologia/Exame-de-Biologia-UP-2016.pdf' },
    { instituition: 'UP', subject: 'Biology', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Biologia/Exame-de-Biologia-UP-2017.pdf' },
    { instituition: 'UP', subject: 'Biology', year: 2018, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Biologia/Exame-de-Biologia-UP-2018.pdf' },
    { instituition: 'UP', subject: 'Biology', year: 2019, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Biologia/Exame-de-Biologia-UP-2019.pdf' },
    { instituition: 'UP', subject: 'Phylosophy', year: 2010, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Filosofia/Exame-de-Filosofia-UP_-2010.pdf' },
    { instituition: 'UP', subject: 'Phylosophy', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Filosofia/Exame-de-Filosofia-UP_-2013.pdf' },
    { instituition: 'UP', subject: 'Phylosophy', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Filosofia/Exame-de-Filosofia-UP_-2014.pdf' },
    { instituition: 'UP', subject: 'Phylosophy', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Filosofia/Exame-de-Filosofia-UP-2016.pdf' },
    { instituition: 'UP', subject: 'Phylosophy', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Filosofia/Exame-de-Filosofia-UP-2017.pdf' },
    { instituition: 'UP', subject: 'Phylosophy', year: 2018, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Filosofia/Exame-de-Filosofia-UP-2018.pdf' },
    { instituition: 'UP', subject: 'Phylosophy', year: 2019, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Filosofia/Exame-de-Filosofia-UP-2019.pdf' },
    { instituition: 'UP', subject: 'Physics', year: 2004, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Fisica/Exame-de-Fisica-UP-2004.pdf' },
    { instituition: 'UP', subject: 'Physics', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Fisica/Exame-de-Fisica-UP-2013.pdf' },
    { instituition: 'UP', subject: 'Physics', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Fisica/Exame-de-Fisica-UP-2014.pdf' },
    { instituition: 'UP', subject: 'Physics', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Fisica/Exame-de-Fisica-UP-2016.pdf' },
    { instituition: 'UP', subject: 'Physics', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Fisica/Exame-de-Fisica-UP-2017.pdf' },
    { instituition: 'UP', subject: 'Physics', year: 2018, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Fisica/Exame-de-Fisica-UP-2018.pdf' },
    { instituition: 'UP', subject: 'Physics', year: 2019, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Fisica/Exame-de-Fisica-UP-2019.pdf' },
    { instituition: 'UP', subject: 'Geography', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Geografia/Exame-de-Geografia-UP_2016.pdf' },
    { instituition: 'UP', subject: 'Geography', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Geografia/Exame-de-Geografia-UP_2017.pdf' },
    { instituition: 'UP', subject: 'Geography', year: 2018, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Geografia/Exame-de-Geografia-UP-2018.pdf' },
    { instituition: 'UP', subject: 'Geography', year: 2019, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Geografia/Exame-de-Geografia-UP-2019.pdf' },
    { instituition: 'UP', subject: 'History', year: 2019, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Historia/Exame-de-Historia-UP_-2010.pdf' },
    { instituition: 'UP', subject: 'History', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Historia/Exame-de-Historia-UP-2016.pdf' },
    { instituition: 'UP', subject: 'History', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Historia/Exame-de-Historia-UP-2017.pdf' },
    { instituition: 'UP', subject: 'English', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Ingles/Exame-de-Ingles-UP_-2013.pdf' },
    { instituition: 'UP', subject: 'English', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Ingles/Exame-de-Ingles-UP-2016.pdf' },
    { instituition: 'UP', subject: 'English', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Ingles/Exame-de-Ingles-UP-2017.pdf' },
    { instituition: 'UP', subject: 'English', year: 2019, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Ingles/Exame-de-Ingles-UP-2019.pdf' },
    { instituition: 'UP', subject: 'Drawing', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Desenho/Exame-de-Desenho-UP_-2016.pdf' },
    { instituition: 'UP', subject: 'Drawing', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Desenho/Exame-de-Desenho-UP-2017.pdf' },
    { instituition: 'UP', subject: 'Drawing', year: 2018, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Desenho/Exame-de-Desenho-UP-2018.pdf' },
    { instituition: 'UP', subject: 'Drawing', year: 2019, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Desenho/Exame-de-Desenho-UP-2019.pdf' },
    { instituition: 'UP', subject: 'Quemistry', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Quimica/Exame-de-Quimica-UP-2013.pdf' },
    { instituition: 'UP', subject: 'Quemistry', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Quimica/Exame-de-Quimica-UP-2016.pdf' },
    { instituition: 'UP', subject: 'Quemistry', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Quimica/Exame-de-Quimica-UP-2017.pdf' },
    { instituition: 'UP', subject: 'Quemistry', year: 2018, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Quimica/Exame-de-Quimica-UP-2018.pdf' },
    { instituition: 'UP', subject: 'Quemisty', year: 2019, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20Quimica/Exame-de-Quimica-UP-2019.pdf' },
    { instituition: 'UP', subject: 'French', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20frances/Exame-de--Frances-UP-2016.pdf' },
    { instituition: 'UP', subject: 'French', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UP/Exames%20de%20frances/Exame-de-Franc%C3%AAs-UP-2017.pdf' },







   
    
    //////ISRI/////
    { instituition: 'UJC', subject: 'History', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/ISRI/ISRI_Historia_2007.pdf' },
    { instituition: 'UJC', subject: 'History', year: 2011, link: 'https://dannyboycuna.github.io/examesmoz/ISRI/ISRI_Historia_2011.pdf' },
    { instituition: 'UJC', subject: 'Portuguese', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/ISRI/ISRI_Portugues_II_2013.pdf' },
    { instituition: 'UJC', subject: 'Geography', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/ISRI/ISRI-Geografia-2007.pdf' },
    { instituition: 'UJC', subject: 'Geography', year: 2010, link: 'https://dannyboycuna.github.io/examesmoz/ISRI/ISRI_Geografia_2010.pdf' },
    { instituition: 'UJC', subject: 'Geography', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/ISRI/ISRI_Geografia_2013.pdf' },
    { instituition: 'UJC', subject: 'Geography', year: 2015, link: 'https://dannyboycuna.github.io/examesmoz/ISRI/ISRI_Geografia_2015.pdf' },
    { instituition: 'UJC', subject: 'Portuguese', year: 2015, link: 'https://dannyboycuna.github.io/examesmoz/ISRI/ISRI-Portugues-II-2015.pdf' },
    { instituition: 'UJC', subject: 'Mathematics', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/ISRI/Exame_Matematica_2017.pdf' },

    /********************UEM*********************** */

    /********* Portuguese ********** */
    { instituition: 'UEM', subject: 'Portuguese', year: 2005, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues_2005.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues_2007.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2009, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues_2009.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2010, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues_I_2010.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2010, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues_II_2010.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2011, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues%20II_2011.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2011, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues%20I_2011.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues_2013.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues_II_2013.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues_I_2014.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues_II_2014.pdf' },
    { instituition: 'UEM', subject: 'Portuguese', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Portugues/Exame_Portugues-I_2016.pdf' },

    /**************  Mathematics ******************* */
    { instituition: 'UEM', subject: 'Mathematics', year: 2004, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2004.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2005, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2005.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2007.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2008, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2008.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2009, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2009.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2010, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2010.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2011, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2011.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2013.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2014.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2016.pdf' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2017, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Matematica/Exame_Matematica_2017.pdf' },


    { instituition: 'UEM', subject: 'Mathematics', year: 2017, link: 'https://drive.google.com/uc?export=download&id=1ZxhZvHvpMGQC3e67kbF--nsd4DQGCQD9' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2018, link: 'https://drive.google.com/file/d/1dVUL9GNfDraRaOcfBt-_4UQ-sMxvyju-/view?usp=drivesdk' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2019, link: 'https://drive.google.com/file/d/1dVUL9GNfDraRaOcfBt-_4UQ-sMxvyju-/view?usp=drivesdk' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2020, link: 'https://drive.google.com/file/d/1dQb7izCiN-oBqSlMsbucirC0_xpeKf1u/view?usp=drivesdk' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2020, link: 'https://drive.google.com/file/d/1qH8CozKNoASzhqgRzgxxxD8glX1Xklae/view?usp=drivesdk' },
    { instituition: 'UEM', subject: 'Mathematics', year: 2021, link: 'https://drive.google.com/file/d/1qSQUifc3vfmG16pAG0Ma3Ae95HuRsyMt/view?usp=drivesdk' },

    { instituition: 'UEM', subject: 'Mathematics', year: 2021, link: 'https://drive.google.com/file/d/1qW7ibn9j-fQ18Wp2H0n5iAG0gwL2wcqv/view?usp=drivesdk' },

    { instituition: 'UEM', subject: 'Mathematics', year: 2024, link: 'https://drive.usercontent.google.com/u/3/uc?id=1DY7deDWYJ4yE7o-ABgJfzSfu5yj-2kBY&export=download' },


    /***************** Biology ************************* */
    { instituition: 'UEM', subject: 'Biology', year: 2004, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2004.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2005, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2005.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2007.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2008, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2008.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2009, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2009.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2010, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2010.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2011, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2011.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2013.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2014.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Biologia/Exame_Biologia_2016.pdf' },
    { instituition: 'UEM', subject: 'Biology', year: 2017, link: 'https://drive.google.com/uc?export=download&id=1t9HCEb9HLIHdh-nVvbQxAnbZlcbepx70' },
    { instituition: 'UEM', subject: 'Biology', year: 2021, link: 'https://drive.google.com/file/d/1qG2UgK53ScljUKH3WH09duFlD08UuhrW/view?usp=drivesdk' },


    /***************** Quemistry ******************* */
    { instituition: 'UEM', subject: 'Quemistry', year: 2004, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Quimica/Exame_Quimica_2004.pdf' },
    { instituition: 'UEM', subject: 'Quemistry', year: 2005, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Quimica/Exame_Quimica_2005.pdf' },
    { instituition: 'UEM', subject: 'Quemistry', year: 2006, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Quimica/Exame_Quimica_2006.pdf' },
    { instituition: 'UEM', subject: 'Quemistry', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Quimica/Exame_Quimica_2007.pdf' },
    { instituition: 'UEM', subject: 'Quemistry', year: 2008, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Quimica/Exame_Quimica_2008.pdf' },
    { instituition: 'UEM', subject: 'Quemistry', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Quimica/Exame_Quimica_2013.pdf' },
    { instituition: 'UEM', subject: 'Quemistry', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Quimica/Exame_Quimica_2014.pdf' },
    { instituition: 'UEM', subject: 'Quemistry', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Quimica/Exame_Quimica_2016.pdf' },

    /********************Physics *******************************/
    { instituition: 'UEM', subject: 'Physics', year: 2004, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Fisica/Exame_Fisica_2004.pdf' },
    { instituition: 'UEM', subject: 'Physics', year: 2006, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Fisica/Exame_Fisica_2006.pdf' },
    { instituition: 'UEM', subject: 'Physics', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Fisica/Exame_Fisica_2007.pdf' },
    { instituition: 'UEM', subject: 'Physics', year: 2008, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Fisica/Exame_Fisica_2008.pdf' },
    { instituition: 'UEM', subject: 'Physics', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Fisica/Exame_Fisica_2013.pdf' },
    { instituition: 'UEM', subject: 'Physics', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Fisica/Exame_Fisica_2014.pdf' },
    { instituition: 'UEM', subject: 'Physics', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Fisica/Exame_Fisica_2016.pdf' },  
    { instituition: 'UEM', subject: 'Physics', year: 2017, link: 'https://drive.google.com/uc?export=download&id=1U-u45ZGUhRkaS275AjoBo83H_ghNWdw2'},

    /********************English *********************/
    { instituition: 'UEM', subject: 'English', year: 2004, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Ingles/Exame_de_Ingles_de_2004.pdf' },
    { instituition: 'UEM', subject: 'English', year: 2005, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Ingles/Exame_Ingles_2005.pdf' },
    { instituition: 'UEM', subject: 'English', year: 2006, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Ingles/Exame_Ingles_2006.pdf' },
    { instituition: 'UEM', subject: 'English', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Ingles/Exame_Ingles_2007.pdf' },
    { instituition: 'UEM', subject: 'English', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Ingles/Exame_Ingles_2013.pdf' },
    { instituition: 'UEM', subject: 'English', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Ingles/Exame_Ingles_2014.pdf' },
    { instituition: 'UEM', subject: 'English', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Ingles/Exame_Ingles_2016.pdf' },

    /***************** History ***************** */
    { instituition: 'UEM', subject: 'History', year: 2005, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Historia/Exame_de_Historia_de_2005.pdf' },
    { instituition: 'UEM', subject: 'History', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Historia/Exame_Historia_2007.pdf' },
    { instituition: 'UEM', subject: 'History', year: 2008, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Historia/Exame_Historia_2008.pdf' },
    { instituition: 'UEM', subject: 'History', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Historia/Exame_Historia_%202013.pdf' },
    { instituition: 'UEM', subject: 'History', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Historia/Exame_Historia_2014.pdf' },
    { instituition: 'UEM', subject: 'History', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Historia/Exame_Historia_2016.pdf' },

    /******************* Phylosophy ******************* */
    { instituition: 'UEM', subject: 'Phylosophy', year: 2011, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Filosofia/Exame_Filosofia_2011.pdf' },
    { instituition: 'UEM', subject: 'Phylosophy', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Filosofia/Exame_Filosofia_2013.pdf' },
    { instituition: 'UEM', subject: 'Phylosophy', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Filosofia/Exame_Filosofia_2014.pdf' },
    { instituition: 'UEM', subject: 'Phylosophy', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Filosofia/Exame_Filosofia_2016.pdf' },

    /********************** French *************************** */
    { instituition: 'UEM', subject: 'French', year: 2004, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Frances/Exame_Frances_2004.pdf' },
    { instituition: 'UEM', subject: 'French', year: 2005, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Frances/Exame_Frances_2005.pdf' },
    { instituition: 'UEM', subject: 'French', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Frances/Exame_Frances_2007.pdf' },
    { instituition: 'UEM', subject: 'French', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Frances/Exame_Frances_2013.pdf' },
    { instituition: 'UEM', subject: 'French', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Frances/Exame_Frances_2014.pdf' },
    { instituition: 'UEM', subject: 'French', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Frances/Exame_Frances_2016.pdf' },

    /*********************** Drawing ********************************** */
    { instituition: 'UEM', subject: 'Drawing', year: 2005, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2005-parte_1.PDF' },
    { instituition: 'UEM', subject: 'Drawing', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2007.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2009, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2009.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2009, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2009_Parte_I.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2009, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2009_ParteII.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2010, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2010_Parte_II.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2011, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2011.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2011, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2011_Parte_II.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2012, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2012_Parte%20I.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2012, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2012_Parte%20II.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_2013.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_Parte_1_2014.pdf' },
    { instituition: 'UEM', subject: 'Drawing', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Desenho/Exame_Desenho_Parte_2_2014.pdf' },

    /***********************Geography *********************************/
    { instituition: 'UEM', subject: 'Geography', year: 2004, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Geografia/Exame_Geografia_2004.pdf' },
    { instituition: 'UEM', subject: 'Geography', year: 2005, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Geografia/Exame_Geografia_2005.pdf' },
    { instituition: 'UEM', subject: 'Geography', year: 2006, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Geografia/Exame_Geografia_2006.pdf' },
    { instituition: 'UEM', subject: 'Geography', year: 2007, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Geografia/Exame_Geografia_2007.pdf' },
    { instituition: 'UEM', subject: 'Geography', year: 2008, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Geografia/Exame_Geografia_2008.pdf' },
    { instituition: 'UEM', subject: 'Geography', year: 2013, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Geografia/Exame_Geografia_2013.pdf' },
    { instituition: 'UEM', subject: 'Geography', year: 2014, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Geografia/Exame_Geografia_2014.pdf' },
    { instituition: 'UEM', subject: 'Geography', year: 2016, link: 'https://dannyboycuna.github.io/examesmoz/UEM/Exames%20de%20Geografia/Exame_Geografia_2016.pdf' },



  ]

  get filteredExams(){
  if (!this.selectedInstituition && !this.selectedSubject && !this.selectedYear) {
    return []
  }
    
    return this.admissionExamsList.filter(item => {
      const matchYear = this.selectedYear ? item.year === this.selectedYear : true;
      
      const matchInstituition = this.selectedInstituition ? item.instituition === this.selectedInstituition : true;

      const matchSubject = this.selectedSubject ? item.subject === this.selectedSubject : true;

      return matchInstituition && matchSubject && matchYear
    })
  }
}
