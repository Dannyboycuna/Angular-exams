import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss'
})
export class NoticesComponent {
  selectedYear: number | null = null;
  selectedInstituition: string = '';

  year: any;
  instituition: any;

noticesList = [
  { instituition: 'ACIPOL',year: 2021 , link: 'https://dannyboycuna.github.io/examesmoz/ACIPOL/Edital_de_ACIPOL_2021.pdf' },
  { instituition: 'UP', year: 2021 , link: 'https://dannyboycuna.github.io/examesmoz/ACIPOL/Edital%20Oficial%202021.pdf' },
  { instituition: 'UP', year: 2022 , link: 'https://drive.google.com/u/1/uc?id=13pOrbWIldAH6MSA2l6k_1_sXuEQOK12E&export=download' },
  { instituition: 'UEM', year: 2022 , link: 'https://drive.google.com/uc?export=download&id=1RDx48IsWBoYASgbKyr7_TM5HOo4ZXBqU' },
 
  { instituition: 'ACIPOL', year: 2023, link: 'https://drive.google.com/u/0/uc?id=1eNdjN1izFcptBEIopO_eYlnlLnJDoK7w&export=download' },
  { instituition: 'IFP', year: 2023, link: 'https://drive.google.com/file/d/1IZF6aZo_lCSsSO528_cCfY_IXiaeIqTa/view?usp=drivesdk' },
   { instituition: 'ACIPOL', year: 2024, link: 'https://drive.google.com/uc?export=download&id=157r_C_H5V5Fng62emmDAw4GHnwnK_gIo'},



  { instituition: 'UP', year: 2023 , link: 'https://drive.google.com/file/d/1iFRDGkkpPttBe9Kw6T9KWqW8miXniQy5/view?usp=drivesdk' },
  { instituition: 'UEM', year: 2025, link: 'https://drive.google.com/u/0/uc?id=1WrlBOBub1UDYNjbJV-vJQnlsNOZRRCCm&export=download' },

]

  get filteredNotices() {
  
    if (!this.selectedInstituition && !this.selectedYear) {
      return this.noticesList
    }

    return this.noticesList.filter(item => {
  
      const matchYear = this.selectedYear ? item.year === this.selectedYear:true ;
      const matchInstituition = this.selectedInstituition ?item.instituition === this.selectedInstituition: true;
   return matchInstituition && matchYear   
})
  }
  
}
